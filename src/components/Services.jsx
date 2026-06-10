import React, { useState } from 'react';
import { Sparkles, Droplets, Activity } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('hair');

  const categories = [
    { id: 'hair', label: 'Hair Treatments', icon: <Sparkles size={20} /> },
    { id: 'skin', label: 'Skin Treatments', icon: <Droplets size={20} /> },
    { id: 'therapy', label: 'Therapy Services', icon: <Activity size={20} /> }
  ];

  const servicesData = {
    hair: [
      { title: 'Hair Fall Treatment', desc: 'Comprehensive approach to stop excessive hair shedding.', results: 'Reduced fall in 4-6 weeks' },
      { title: 'PRP Therapy', desc: 'Platelet-Rich Plasma therapy to stimulate natural hair regrowth.', results: 'Visible growth in 3 sessions' },
      { title: 'Alopecia Treatment', desc: 'Targeted medical therapies for spot baldness and thinning.', results: 'Patch recovery' },
      { title: 'Dandruff Management', desc: 'Deep cleansing and medical treatment for persistent dandruff.', results: 'Clear, healthy scalp' }
    ],
    skin: [
      { title: 'Acne Treatment', desc: 'Medical management of active acne and pimples.', results: 'Clearer skin in 4 weeks' },
      { title: 'Pigmentation Therapy', desc: 'Treatments for melasma, dark spots, and uneven skin tone.', results: 'Even, glowing complexion' },
      { title: 'Fungal Infections', desc: 'Effective medical eradication of persistent fungal infections.', results: 'Complete relief from itching' },
      { title: 'Eczema & Psoriasis', desc: 'Soothing care and medical management for chronic skin issues.', results: 'Reduced flare-ups' }
    ],
    therapy: [
      { title: 'Advanced Cupping Therapy', desc: 'Traditional healing combined with modern medical knowledge.', results: 'Detoxification & pain relief' },
      { title: 'PRP Skin Rejuvenation', desc: 'Vampire facial technique for anti-aging and glowing skin.', results: 'Youthful, tight skin' },
      { title: 'Scalp Therapy', desc: 'Deep nourishment treatments for damaged scalp and hair roots.', results: 'Stronger hair follicles' },
      { title: 'Wellness Programs', desc: 'Holistic approaches combining multiple therapies.', results: 'Overall health improvement' }
    ]
  };

  const tabsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem'
  };

  return (
    <section id="services" className="section section-bg-alt">
      <div className="container">
        <div className="text-center" style={{marginBottom: '3rem'}}>
          <div className="badge" style={{marginBottom: '1rem'}}>Our Expertise</div>
          <h2 className="section-title">Premium Treatments</h2>
          <p className="section-subtitle">We offer state-of-the-art medical and therapeutic solutions tailored to your unique needs.</p>
        </div>

        <div style={tabsStyle}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`btn ${activeTab === category.id ? 'btn-primary' : 'btn-outline'}`}
              style={{padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)'}}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        <div style={gridStyle}>
          {servicesData[activeTab].map((service, idx) => (
            <div key={idx} className="glass-card" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
              <h3 style={{fontSize: '1.25rem', color: 'var(--color-secondary)', marginBottom: '1rem'}}>{service.title}</h3>
              <p className="text-light" style={{flexGrow: 1, marginBottom: '1.5rem'}}>{service.desc}</p>
              
              <div style={{paddingTop: '1rem', borderTop: '1px solid #e2e8f0'}}>
                <span style={{fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)'}}>Expected Result:</span>
                <p style={{fontSize: '0.875rem', color: 'var(--color-text-light)'}}>{service.results}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{marginTop: '3rem'}}>
          <a href="#booking" className="btn btn-secondary">Explore All Treatments</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
