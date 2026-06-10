import React from 'react';
import { Shield, Syringe, Heart, Zap, Award, Smile } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: <Heart size={28} />, title: 'Personalized Treatment Plans', desc: 'Every patient is unique, and so are our treatment approaches tailored just for you.' },
    { icon: <Syringe size={28} />, title: 'Advanced PRP Therapy', desc: 'Using state-of-the-art equipment for maximum platelet yield and best results.' },
    { icon: <Zap size={28} />, title: 'Specialized Cupping Therapy', desc: 'Expert application of traditional cupping backed by medical science.' },
    { icon: <Shield size={28} />, title: 'Hygienic Environment', desc: 'Strict sterilization protocols to ensure 100% safe and infection-free treatments.' },
    { icon: <Smile size={28} />, title: 'Patient-Centered Care', desc: 'We prioritize your comfort, answering all your questions before starting.' },
    { icon: <Award size={28} />, title: 'Proven Treatment Results', desc: 'Hundreds of satisfied patients with successful hair and skin restorations.' }
  ];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  };

  const cardStyle = {
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    transition: 'var(--transition)',
    border: '1px solid #f1f5f9',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1
  };

  const iconWrapperStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    backgroundColor: 'rgba(4, 120, 87, 0.1)',
    color: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem'
  };

  return (
    <section className="section section-bg-alt">
      <div className="container">
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <div className="badge" style={{marginBottom: '1rem'}}>Why Choose Us</div>
          <h2 className="section-title">Setting The Standard in Care</h2>
          <p className="section-subtitle">We combine medical expertise with compassionate care to deliver the best possible outcomes for our patients.</p>
        </div>

        <div style={gridStyle}>
          {features.map((feature, idx) => (
            <div key={idx} style={cardStyle} className="hover-lift">
              <div style={iconWrapperStyle}>
                {feature.icon}
              </div>
              <h3 style={{fontSize: '1.25rem', color: 'var(--color-secondary)', marginBottom: '1rem'}}>{feature.title}</h3>
              <p className="text-light">{feature.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
