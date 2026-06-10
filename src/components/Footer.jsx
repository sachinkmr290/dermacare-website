import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer section-bg-alt" style={{ backgroundColor: '#0f172a', color: '#ffffff', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Brand Column */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#ffffff' }}>
              Dr Chauhan <span style={{ color: 'var(--color-primary-light)' }}>Clinic</span>
            </h3>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Advanced Hair Loss, PRP, Cupping Therapy, Acne & Skin Treatments by Dr. Danish Chauhan.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', display: 'flex', fontSize: '0.875rem' }}>Facebook</a>
              <a href="#" style={{ color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', display: 'flex', fontSize: '0.875rem' }}>Instagram</a>
              <a href="#" style={{ color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', display: 'flex', fontSize: '0.875rem' }}>Twitter</a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#ffffff' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="services" smooth={true} duration={500} style={{ color: '#94a3b8', cursor: 'pointer', transition: 'color 0.3s' }}>Services</Link></li>
              <li><Link to="about" smooth={true} duration={500} style={{ color: '#94a3b8', cursor: 'pointer', transition: 'color 0.3s' }}>Doctor Profile</Link></li>
              <li><Link to="booking" smooth={true} duration={500} style={{ color: '#94a3b8', cursor: 'pointer', transition: 'color 0.3s' }}>Appointments</Link></li>
              <li><Link to="gallery" smooth={true} duration={500} style={{ color: '#94a3b8', cursor: 'pointer', transition: 'color 0.3s' }}>Before & After</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#ffffff' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', color: '#94a3b8', alignItems: 'flex-start' }}>
                <MapPin size={20} style={{ color: 'var(--color-primary-light)', flexShrink: 0, marginTop: '0.25rem' }} />
                <span>Chauhan Hair & Skin Clinic, Opposite Bank Of Baroda, Near Bhoor Chauraha, Bulandshahr – 203001, Uttar Pradesh</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', color: '#94a3b8', alignItems: 'center' }}>
                <Phone size={20} style={{ color: 'var(--color-primary-light)', flexShrink: 0 }} />
                <span>+91 7579781961</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', color: '#94a3b8', alignItems: 'center' }}>
                <Clock size={20} style={{ color: 'var(--color-primary-light)', flexShrink: 0 }} />
                <span>Mon - Sat: 10:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords & Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.6' }}>
            <strong>Specialized Treatments:</strong> Hair Loss Treatment in Bulandshahr | PRP Therapy in Bulandshahr | Best Hair Clinic in Bulandshahr | Skin Specialist in Bulandshahr | Acne Treatment in Bulandshahr | Fungal Infection Treatment in Bulandshahr | Cupping Therapy in Bulandshahr
          </p>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} Dr Chauhan Clinic & Therapy Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
