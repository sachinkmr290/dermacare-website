from pymongo import MongoClient
db = MongoClient('mongodb://localhost:27017')['dpms']
db.appointments.update_many({'therapist': 'Website Booking'}, {'$set': {'patient_id': 'WEB-4c3cea61'}})
print("Restored old appointments")
