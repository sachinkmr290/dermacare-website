from fastapi import FastAPI, APIRouter, HTTPException, Header
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'chauhan_clinic')]

app = FastAPI(title="Dr Chauhan Clinic API")
api_router = APIRouter(prefix="/api")

ADMIN_TOKEN = os.environ.get("ADMIN_TOKEN", "chauhan-clinic-admin-2025")


# ===== Models =====
class AppointmentCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=120)
    phone: str = Field(..., min_length=7, max_length=20)
    email: Optional[EmailStr] = None
    treatment: str = Field(..., min_length=2, max_length=120)
    preferred_date: Optional[str] = None
    message: Optional[str] = Field(default="", max_length=2000)


class Appointment(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    phone: str
    email: Optional[str] = None
    treatment: str
    preferred_date: Optional[str] = None
    message: Optional[str] = ""
    status: str = "new"  # new | contacted | confirmed | done | cancelled
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class AppointmentStatusUpdate(BaseModel):
    status: str


# ===== Routes =====
@api_router.get("/")
async def root():
    return {"message": "Dr Chauhan Clinic API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy"}


@api_router.post("/appointments", response_model=Appointment)
async def create_appointment(payload: AppointmentCreate):
    appt = Appointment(**payload.model_dump())
    await db.appointments.insert_one(appt.model_dump())
    return appt


def _verify_admin(token: Optional[str]):
    if not token or token != ADMIN_TOKEN:
        raise HTTPException(status_code=401, detail="Unauthorized")


@api_router.get("/admin/appointments", response_model=List[Appointment])
async def list_appointments(x_admin_token: Optional[str] = Header(default=None)):
    _verify_admin(x_admin_token)
    docs = await db.appointments.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return docs


@api_router.patch("/admin/appointments/{appt_id}", response_model=Appointment)
async def update_appointment_status(
    appt_id: str,
    body: AppointmentStatusUpdate,
    x_admin_token: Optional[str] = Header(default=None),
):
    _verify_admin(x_admin_token)
    if body.status not in {"new", "contacted", "confirmed", "done", "cancelled"}:
        raise HTTPException(status_code=400, detail="Invalid status")
    result = await db.appointments.find_one_and_update(
        {"id": appt_id},
        {"$set": {"status": body.status}},
        return_document=True,
        projection={"_id": 0},
    )
    if not result:
        raise HTTPException(status_code=404, detail="Appointment not found")
    return result


@api_router.delete("/admin/appointments/{appt_id}")
async def delete_appointment(appt_id: str, x_admin_token: Optional[str] = Header(default=None)):
    _verify_admin(x_admin_token)
    result = await db.appointments.delete_one({"id": appt_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Appointment not found")
    return {"ok": True}


@api_router.post("/admin/verify")
async def verify_admin_token(x_admin_token: Optional[str] = Header(default=None)):
    _verify_admin(x_admin_token)
    return {"ok": True}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
