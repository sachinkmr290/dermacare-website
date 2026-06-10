import React from 'react';

const Gallery = () => {
  const images = [
    { title: 'Hair Loss Treatment', category: 'Hair Restoration', img: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=600' },
    { title: 'PRP Therapy', category: 'Hair & Skin', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600' },
    { title: 'Acne Treatment', category: 'Skin Care', img: 'https://images.unsplash.com/photo-1616683832036-360e200388d7?auto=format&fit=crop&q=80&w=600' },
    { title: 'Pigmentation Therapy', category: 'Skin Care', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600' }
  ];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  };

  const imageCardStyle = {
    position: 'relative',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-md)',
    aspectRatio: '4/3',
    group: 'group'
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '2rem 1.5rem 1.5rem',
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)',
    color: 'white'
  };

  return (
    <section id="results" className="section">
      <div className="container">
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <div className="badge" style={{marginBottom: '1rem'}}>Proven Results</div>
          <h2 className="section-title">Before & After Gallery</h2>
          <p className="section-subtitle">Real results from our customized treatment plans.</p>
        </div>

        <div style={gridStyle}>
          {images.map((item, idx) => (
            <div key={idx} style={imageCardStyle} className="hover-lift">
              <img 
                src={item.img} 
                alt={item.title} 
                style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease'}}
              />
              <div style={overlayStyle}>
                <div style={{fontSize: '0.875rem', color: 'var(--color-primary-light)', fontWeight: 600, marginBottom: '0.25rem'}}>{item.category}</div>
                <h3 style={{fontSize: '1.25rem', margin: 0, color: 'white'}}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop: '3rem', padding: '1rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)', textAlign: 'center'}}>
          <p style={{fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0}}>
            <strong>Disclaimer:</strong> Results may vary from patient to patient depending on individual condition and treatment response.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
