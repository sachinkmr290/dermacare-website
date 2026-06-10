import React from 'react';

const Process = () => {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'Detailed discussion of your history and concerns.' },
    { num: '02', title: 'Diagnosis', desc: 'Thorough examination to identify the root cause.' },
    { num: '03', title: 'Treatment Plan', desc: 'Personalized protocol tailored to your unique condition.' },
    { num: '04', title: 'Therapy Sessions', desc: 'Execution of medical and therapeutic treatments.' },
    { num: '05', title: 'Follow-Up', desc: 'Monitoring progress and maintaining results.' }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <h2 className="section-title">Our Treatment Process</h2>
          <p className="section-subtitle">A systematic, medical approach to ensure you get the best possible results.</p>
        </div>

        <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
          {steps.map((step, idx) => (
            <div key={idx} style={{flex: '1 1 200px', maxWidth: '250px', textAlign: 'center', position: 'relative'}}>
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700,
                margin: '0 auto 1.5rem auto', boxShadow: '0 10px 25px -5px rgba(4, 120, 87, 0.4)'
              }}>
                {step.num}
              </div>
              <h3 style={{fontSize: '1.25rem', color: 'var(--color-secondary)', marginBottom: '0.75rem'}}>{step.title}</h3>
              <p className="text-light" style={{fontSize: '0.95rem'}}>{step.desc}</p>
              
              {/* Connector Line (hide on mobile via css usually, but inline is fine for now) */}
              {idx < steps.length - 1 && (
                <div style={{
                  position: 'absolute', top: '40px', right: '-50%', width: '100%', height: '2px',
                  backgroundColor: 'rgba(4, 120, 87, 0.2)', zIndex: -1, display: 'none' /* In real app, use media queries to show on desktop */
                }} className="desktop-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
