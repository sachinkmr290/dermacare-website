from flask import Blueprint, request, jsonify
from db import db
from flask_jwt_extended import jwt_required
import datetime
from bson.objectid import ObjectId
from utils_email import send_email

appointments_bp = Blueprint("appointments", __name__)


import re

@appointments_bp.route("/website", methods=["POST"])
def create_website_appointment():
    data = request.get_json() or {}
    
    phone = data.get("phone")
    full_name = data.get("full_name")
    
    # 1. Find patient in DPMS (Must match BOTH Mobile and Name case-insensitively)
    existing_patient = None
    if phone and full_name:
        escaped_name = re.escape(full_name)
        existing_patient = db.patients.find_one({
            "whatsapp": phone,
            "full_name": {"$regex": f"^{escaped_name}$", "$options": "i"}
        })

    if existing_patient:
        patient_id = existing_patient.get("patient_id")
        source = "Existing Patient Booking"
        
        # Update patient type so they show under the appropriate category
        new_patient_type = "online" if data.get("consultation_type") == "online" else "offline"
        if existing_patient.get("patient_type") != new_patient_type:
            db.patients.update_one(
                {"_id": existing_patient["_id"]},
                {"$set": {"patient_type": new_patient_type}}
            )
    else:
        # Do not create patient automatically. Leave patient_id empty so admin can route to registration.
        patient_id = ""
        source = "Website"
        
    # 2. Create appointment in DPMS
    dpms_appt = {
        "patient_id": patient_id,
        "patient_name": full_name,
        "phone": phone,
        "email": data.get("email"),
        "age": data.get("age"),
        "gender": data.get("gender"),
        "address": data.get("address"),
        "consultation_type": data.get("consultation_type", "online"),
        "date_time": data.get("preferred_date") or "Pending",
        "therapist": "Website Booking",
        "treatment": data.get("treatment"),
        "message": data.get("message", ""),
        "status": "New",
        "source": source,
        "created_at": datetime.datetime.utcnow().isoformat()
    }
    db.appointments.insert_one(dpms_appt)
    
    return jsonify({"msg": "appointment created successfully"}), 201

@appointments_bp.route("/", methods=["POST"])
@jwt_required()
def create_appointment():
    data = request.get_json() or {}
    patient_id = data.get("patient_id")
    date_time = data.get("date_time")
    therapist = data.get("therapist")
    if not patient_id or not date_time:
        return jsonify({"msg": "patient_id and date_time required"}), 400
    appt = {
        "patient_id": patient_id,
        "date_time": date_time,
        "therapist": therapist,
        "status": data.get("status", "scheduled"),
        "created_at": datetime.datetime.utcnow(),
    }
    res = db.appointments.insert_one(appt)
    appt_id = str(res.inserted_id)

    email_sent = False
    if data.get("send_email"):
        patient = db.patients.find_one({"patient_id": patient_id})
        email = patient.get("email") if patient else None
        if email:
            try:
                subject = data.get("email_subject") or "Appointment Reminder"
                body = data.get("email_body") or f"Your appointment is scheduled at {date_time}"
                if subject and body:  # only send if both subject and body are provided
                    send_email(email, subject, body)
                    email_sent = True
            except Exception as e:
                print("send_email error:", e)

    return jsonify({"msg": "appointment created", "id": appt_id, "email_sent": email_sent}), 201


@appointments_bp.route("/", methods=["GET"])
@jwt_required()
def list_appointments():
    q = {}
    patient_id = request.args.get("patient_id")
    date_from = request.args.get("date_from")
    date_to = request.args.get("date_to")
    if patient_id:
        q["patient_id"] = patient_id
    source = request.args.get("source")
    if source:
        q["source"] = source
    # TODO: filter by date range when date format known

    # FIX 6: Paginate to avoid loading all appointments into memory
    page = int(request.args.get("page", 1))
    per_page = int(request.args.get("per_page", 20))
    skip = (page - 1) * per_page

    cursor = db.appointments.find(q).sort("date_time", 1).skip(skip).limit(per_page)
    items = []
    for a in cursor:
        a["_id"] = str(a.get("_id"))
        items.append(a)

    total = db.appointments.count_documents(q)
    return jsonify({"items": items, "total": total, "page": page, "per_page": per_page})


@appointments_bp.route("/<id>", methods=["PUT"])
@jwt_required()
def update_appointment(id):
    data = request.get_json() or {}
    try:
        oid = ObjectId(id)
    except Exception:
        return jsonify({"msg": "invalid id"}), 400
    res = db.appointments.update_one({"_id": oid}, {"$set": data})
    if res.matched_count == 0:
        return jsonify({"msg": "not found"}), 404
    return jsonify({"msg": "updated"})


@appointments_bp.route("/<id>", methods=["DELETE"])
@jwt_required()
def delete_appointment(id):
    try:
        oid = ObjectId(id)
    except Exception:
        return jsonify({"msg": "invalid id"}), 400
    res = db.appointments.delete_one({"_id": oid})
    if res.deleted_count == 0:
        return jsonify({"msg": "not found"}), 404
    return jsonify({"msg": "deleted"})


@appointments_bp.route("/<id>/send_reminder", methods=["POST"])
@jwt_required()
def send_reminder(id):
    try:
        oid = ObjectId(id)
    except Exception:
        return jsonify({"msg": "invalid id"}), 400
    appt = db.appointments.find_one({"_id": oid})
    if not appt:
        return jsonify({"msg": "not found"}), 404
    patient_id = appt.get("patient_id")
    patient = db.patients.find_one({"patient_id": patient_id})
    email = patient.get("email") if patient else None
    if not email:
        return jsonify({"msg": "no email for patient"}), 400
    body = request.json.get("body") if request.json else None
    subject = request.json.get("subject") if request.json else "Appointment Reminder"
    try:
        send_email(email, subject, body or f"Your appointment is at {appt.get('date_time')}")
        return jsonify({"msg": "sent"})
    except Exception as e:
        return jsonify({"msg": "error sending", "error": str(e)}), 500
