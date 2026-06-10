import React from 'react';
import { Award, BookOpen, Stethoscope, Clock } from 'lucide-react';

const About = () => {
  const containerStyle = {
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
    flexWrap: 'wrap-reverse'
  };

  const imageContainerStyle = {
    flex: '1 1 400px',
    position: 'relative'
  };

  const contentStyle = {
    flex: '1 1 500px'
  };

  const qualificationsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem'
  };

  const qualCardStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem'
  };

  const iconBoxStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: 'rgba(4, 120, 87, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-primary)',
    flexShrink: 0
  };

  return (
    <section id="about" className="section">
      <div className="container" style={containerStyle}>
        
        <div style={imageContainerStyle}>
          <div className="glass-card" style={{padding: '1rem', background: 'var(--color-bg-alt)'}}>
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
              alt="Dr. Danish Chauhan" 
              style={{borderRadius: 'var(--radius-md)', width: '100%', aspectRatio: '3/4', objectFit: 'cover'}}
            />
            <div style={{marginTop: '1.5rem', textAlign: 'center'}}>
              <h3 className="heading-3">Dr. Danish Chauhan</h3>
              <p className="text-primary" style={{fontWeight: 600}}>BAMS, MD (Cupping Therapy)</p>
              <p className="text-light" style={{marginTop: '0.5rem', fontSize: '0.875rem'}}>Specialist in Hair Restoration & Skin Diseases</p>
            </div>
          </div>
        </div>

        <div style={contentStyle}>
          <div className="badge" style={{marginBottom: '1rem'}}>About The Doctor</div>
          <h2 className="section-title">Meet Dr. Danish Chauhan</h2>
          <p className="text-light" style={{fontSize: '1.125rem', marginBottom: '1.5rem'}}>
            Dr. Danish Chauhan is dedicated to providing effective and personalized solutions for hair loss, scalp disorders, acne, skin diseases, and wellness therapies.
          </p>
          <p className="text-light" style={{marginBottom: '2rem'}}>
            Combining modern therapeutic approaches with patient-focused care, he aims to deliver safe, result-oriented treatment plans for every patient. His holistic approach ensures that not just the symptoms, but the root causes are addressed for long-lasting health.
          </p>

          <div style={qualificationsStyle}>
            <div style={qualCardStyle}>
              <div style={iconBoxStyle}><BookOpen size={24} /></div>
              <div>
                <h4 style={{marginBottom: '0.25rem', fontWeight: 600}}>Qualifications</h4>
                <p className="text-light" style={{fontSize: '0.875rem'}}>BAMS<br/>MD (Cupping Therapy)</p>
              </div>
            </div>
            
            <div style={qualCardStyle}>
              <div style={iconBoxStyle}><Stethoscope size={24} /></div>
              <div>
                <h4 style={{marginBottom: '0.25rem', fontWeight: 600}}>Expertise</h4>
                <p className="text-light" style={{fontSize: '0.875rem'}}>Hair Restoration<br/>PRP & Cupping</p>
              </div>
            </div>

            <div style={qualCardStyle}>
              <div style={iconBoxStyle}><Award size={24} /></div>
              <div>
                <h4 style={{marginBottom: '0.25rem', fontWeight: 600}}>Approach</h4>
                <p className="text-light" style={{fontSize: '0.875rem'}}>Modern Clinical<br/>Patient-Centered</p>
              </div>
            </div>

            <div style={qualCardStyle}>
              <div style={iconBoxStyle}><Clock size={24} /></div>
              <div>
                <h4 style={{marginBottom: '0.25rem', fontWeight: 600}}>Availability</h4>
                <p className="text-light" style={{fontSize: '0.875rem'}}>Mon - Sat<br/>10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
