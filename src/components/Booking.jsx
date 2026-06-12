import React, { useState } from 'react';
import { Calendar, Send } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', treatment: '', date: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send an email or API request
    alert('Appointment request submitted successfully! We will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', treatment: '', date: '', message: '' });
  };

  return (
    <section id="booking" className="section" style={{background: 'linear-gradient(135deg, var(--color-secondary) 0%, #0f172a 100%)', color: 'white'}}>
      <div className="container" style={{display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center'}}>
        
        <div style={{flex: '1 1 400px'}}>
          <div className="badge" style={{marginBottom: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white'}}>Book Consultation</div>
          <h2 className="section-title" style={{color: 'white'}}>Take the First Step Towards Better Health</h2>
          <p style={{fontSize: '1.125rem', color: '#cbd5e1', marginBottom: '2rem'}}>
            Schedule an appointment with Dr. Danish Chauhan for a personalized consultation and treatment plan.
          </p>
          
          <div style={{display: 'flex', gap: '1rem', marginBottom: '2rem'}}>
            <div style={{width: 50, height: 50, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Calendar size={24} color="var(--color-primary-light)" />
            </div>
            <div>
              <h4 style={{margin: 0, fontSize: '1.125rem'}}>Clinic Hours</h4>
              <p style={{color: '#cbd5e1'}}>Mon - Sat: 10:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>

        <div style={{flex: '1 1 500px'}}>
          <div className="glass-card" style={{background: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255,255,255,0.1)', color: 'white'}}>
            <form onSubmit={handleSubmit}>
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                <div className="form-group" style={{flex: '1 1 200px'}}>
                  <label className="form-label" style={{color: '#e2e8f0'}}>Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-input" style={{background: 'rgba(255,255,255,0.9)', color: '#0f172a'}} />
                </div>
                <div className="form-group" style={{flex: '1 1 200px'}}>
                  <label className="form-label" style={{color: '#e2e8f0'}}>Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="form-input" style={{background: 'rgba(255,255,255,0.9)', color: '#0f172a'}} />
                </div>
              </div>

              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                <div className="form-group" style={{flex: '1 1 200px'}}>
                  <label className="form-label" style={{color: '#e2e8f0'}}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" style={{background: 'rgba(255,255,255,0.9)', color: '#0f172a'}} />
                </div>
                <div className="form-group" style={{flex: '1 1 200px'}}>
                  <label className="form-label" style={{color: '#e2e8f0'}}>Preferred Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-input" style={{background: 'rgba(255,255,255,0.9)', color: '#0f172a'}} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" style={{color: '#e2e8f0'}}>Treatment Needed</label>
                <select name="treatment" value={formData.treatment} onChange={handleChange} className="form-select" style={{background: 'rgba(255,255,255,0.9)', color: '#0f172a'}}>
                  <option value="">Select Treatment...</option>
                  <option value="Hair Fall / Baldness">Hair Fall / Baldness</option>
                  <option value="PRP Therapy">PRP Therapy</option>
                  <option value="Acne / Skin Disease">Acne / Skin Disease</option>
                  <option value="Cupping Therapy">Cupping Therapy</option>
                  <option value="Other">Other Consultation</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" style={{color: '#e2e8f0'}}>Message (Optional)</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="form-textarea" style={{background: 'rgba(255,255,255,0.9)', color: '#0f172a'}}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{width: '100%', padding: '1rem', fontSize: '1.125rem'}}>
                <Send size={20} /> Request Appointment
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Booking;
