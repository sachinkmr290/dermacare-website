import React from 'react';
import { CheckCircle } from 'lucide-react';

const Conditions = () => {
  const conditions = {
    hair: [
      'Hair Fall', 'Male Pattern Baldness', 'Female Hair Thinning', 
      'Alopecia Areata', 'Dandruff', 'Scalp Disorders'
    ],
    skin: [
      'Acne & Pimples', 'Acne Scars', 'Pigmentation & Melasma', 
      'Fungal Infections', 'Eczema & Psoriasis', 'Skin Allergies & Rashes'
    ]
  };

  const containerStyle = {
    display: 'flex',
    gap: '4rem',
    flexWrap: 'wrap'
  };

  const columnStyle = {
    flex: '1 1 300px'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gap: '1rem'
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem',
    backgroundColor: '#ffffff',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid #f1f5f9',
    fontWeight: 500
  };

  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <h2 className="section-title">Conditions We Treat</h2>
          <p className="section-subtitle">Comprehensive medical care for a wide range of dermatological and trichological conditions.</p>
        </div>

        <div style={containerStyle}>
          {/* Hair Conditions */}
          <div style={columnStyle}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem'}}>
              <div style={{width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(30, 58, 138, 0.1)', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h3 style={{margin: 0, fontSize: '1.25rem'}}>01</h3>
              </div>
              <h3 style={{margin: 0, fontSize: '1.5rem', color: 'var(--color-secondary)'}}>Hair & Scalp</h3>
            </div>
            
            <ul style={listStyle}>
              {conditions.hair.map((item, idx) => (
                <li key={idx} style={listItemStyle}>
                  <CheckCircle size={20} className="text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Skin Conditions */}
          <div style={columnStyle}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem'}}>
              <div style={{width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(4, 120, 87, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <h3 style={{margin: 0, fontSize: '1.25rem'}}>02</h3>
              </div>
              <h3 style={{margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)'}}>Skin Diseases</h3>
            </div>
            
            <ul style={listStyle}>
              {conditions.skin.map((item, idx) => (
                <li key={idx} style={listItemStyle}>
                  <CheckCircle size={20} className="text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Conditions;
