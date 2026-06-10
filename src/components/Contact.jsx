import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">We are here to answer your questions and help you schedule your visit.</p>
        </div>

        <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
          
          <div style={{flex: '1 1 350px'}}>
            <div className="glass-card" style={{height: '100%'}}>
              <h3 style={{fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: '2rem'}}>Clinic Details</h3>
              
              <div style={{display: 'flex', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{color: 'var(--color-primary)'}}><MapPin size={24} /></div>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontWeight: 600}}>Location</h4>
                  <p className="text-light" style={{margin: 0}}>Chauhan Hair & Skin Clinic<br/>Opposite Bank Of Baroda<br/>Near Bhoor Chauraha<br/>Bulandshahr – 203001, UP</p>
                </div>
              </div>

              <div style={{display: 'flex', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{color: 'var(--color-primary)'}}><Phone size={24} /></div>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontWeight: 600}}>Phone</h4>
                  <p className="text-light" style={{margin: 0}}><a href="tel:7579781961">7579781961</a></p>
                </div>
              </div>

              <div style={{display: 'flex', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{color: 'var(--color-primary)'}}><Clock size={24} /></div>
                <div>
                  <h4 style={{margin: '0 0 0.5rem 0', fontWeight: 600}}>Opening Hours</h4>
                  <p className="text-light" style={{margin: 0}}>Monday - Saturday<br/>10:00 AM – 5:00 PM</p>
                </div>
              </div>

              <div style={{marginTop: '2rem'}}>
                <a href="https://maps.google.com/?q=Chauhan+Hair+and+Skin+Clinic+Bulandshahr" target="_blank" rel="noreferrer" className="btn btn-outline" style={{width: '100%'}}>
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div style={{flex: '2 1 500px'}}>
            <div style={{width: '100%', height: '100%', minHeight: '400px', backgroundColor: '#e2e8f0', borderRadius: 'var(--radius-lg)', overflow: 'hidden'}}>
              {/* Google Maps iframe placeholder. Using a generic Bulandshahr map embed for demonstration */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237652!2d77.781604!3d28.402241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca15eb90d6575%3A0xb304c5cd95dc3102!2sBulandshahr%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
