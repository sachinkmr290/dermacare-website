import React from 'react';
import { Calendar, PhoneCall, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const sectionStyle = {
    padding: '160px 0 100px 0',
    background: 'linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%)',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '4rem',
    flexWrap: 'wrap'
  };

  const contentStyle = {
    flex: '1 1 500px',
    zIndex: 2
  };

  const imageContainerStyle = {
    flex: '1 1 400px',
    position: 'relative',
    zIndex: 2
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: 'rgba(4, 120, 87, 0.1)',
    color: 'var(--color-primary)',
    borderRadius: '2rem',
    fontWeight: 600,
    marginBottom: '1.5rem'
  };

  const featuresStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    margin: '2rem 0'
  };

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 500,
    color: 'var(--color-text-light)'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '2rem'
  };

  const blobStyle = {
    position: 'absolute',
    top: '-10%',
    right: '-5%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(255,255,255,0) 70%)',
    borderRadius: '50%',
    zIndex: 1
  };

  return (
    <section id="home" style={sectionStyle}>
      <div style={blobStyle}></div>
      <div className="container" style={containerStyle}>
        <div style={contentStyle} className="animate-fade-in">
          <div style={badgeStyle}>Dr Chauhan Clinic & Therapy Center</div>
          <h1 className="heading-1" style={{color: 'var(--color-secondary)', marginBottom: '1.5rem'}}>
            Restore Your Hair.<br/>
            <span className="text-primary">Revive Your Skin.</span><br/>
            Regain Confidence.
          </h1>
          <p style={{fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '1rem'}}>
            Advanced Hair Loss, PRP, Cupping Therapy, Acne & Skin Treatments by Dr. Danish Chauhan.
          </p>
          
          <div style={featuresStyle}>
            {['Experienced Care', 'Personalized Treatment', 'Modern Therapies', 'Affordable Consultation'].map((feature, idx) => (
              <div key={idx} style={featureItemStyle}>
                <CheckCircle2 size={20} className="text-primary" />
                {feature}
              </div>
            ))}
          </div>

          <div style={buttonContainerStyle}>
            <Link to="booking" smooth={true} offset={-80} duration={500} className="btn btn-primary" style={{padding: '1rem 2rem', fontSize: '1.125rem'}}>
              <Calendar size={20} />
              Book Appointment
            </Link>
            <a href="tel:7579781961" className="btn btn-outline" style={{padding: '1rem 2rem', fontSize: '1.125rem'}}>
              <PhoneCall size={20} />
              Call Now
            </a>
          </div>
          
          <div style={{marginTop: '2rem', display: 'flex', gap: '2rem', color: 'var(--color-text-light)', fontSize: '0.875rem'}}>
            <div><strong>Call:</strong> 7579781961</div>
            <div><strong>Hours:</strong> Mon-Sat (10AM - 5PM)</div>
          </div>
        </div>

        <div style={imageContainerStyle}>
          <div className="glass-card" style={{padding: '1rem', position: 'relative'}}>
            {/* Placeholder for clinic/doctor hero image */}
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
              alt="Dr Chauhan Clinic modern facility" 
              style={{borderRadius: '0.5rem', width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '4/5'}}
            />
            
            {/* Floating badge */}
            <div className="glass" style={{
              position: 'absolute', 
              bottom: '-20px', 
              left: '-20px', 
              padding: '1rem', 
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{width: 48, height: 48, borderRadius: '50%', backgroundColor: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>
                10+
              </div>
              <div>
                <div style={{fontWeight: 700, color: 'var(--color-secondary)'}}>Years Experience</div>
                <div style={{fontSize: '0.875rem', color: 'var(--color-text-light)'}}>In Hair & Skin Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
