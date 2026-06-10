import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Rahul S.', treatment: 'Hair Fall Treatment', review: 'I was losing hope with my hair fall until I visited Dr. Chauhan. The PRP sessions showed remarkable results within just a few months.', rating: 5 },
    { name: 'Priya M.', treatment: 'Acne Treatment', review: 'My acne scars have faded significantly thanks to the personalized skin care routine and treatments provided here. Highly recommended!', rating: 5 },
    { name: 'Amit K.', treatment: 'Cupping Therapy', review: 'The cupping therapy sessions were incredibly relaxing and helped clear up my skin condition that I had been struggling with for years.', rating: 5 }
  ];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  };

  return (
    <section id="reviews" className="section section-bg-alt">
      <div className="container">
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <div className="badge" style={{marginBottom: '1rem'}}>Patient Stories</div>
          <h2 className="section-title">What Our Patients Say</h2>
          <div style={{display: 'flex', justifyContent: 'center', gap: '0.25rem', marginTop: '1rem', color: '#fbbf24'}}>
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" />)}
          </div>
          <p style={{marginTop: '0.5rem', fontWeight: 600}}>4.9/5 Average Rating on Google</p>
        </div>

        <div style={gridStyle}>
          {reviews.map((item, idx) => (
            <div key={idx} className="glass-card" style={{position: 'relative'}}>
              <Quote size={40} color="rgba(4, 120, 87, 0.1)" style={{position: 'absolute', top: '1.5rem', right: '1.5rem'}} />
              
              <div style={{display: 'flex', gap: '0.25rem', color: '#fbbf24', marginBottom: '1rem'}}>
                {[...Array(item.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p style={{fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--color-text)', lineHeight: 1.6}}>
                "{item.review}"
              </p>
              
              <div style={{borderTop: '1px solid #e2e8f0', paddingTop: '1rem'}}>
                <h4 style={{fontWeight: 600, color: 'var(--color-secondary)', margin: 0}}>{item.name}</h4>
                <span style={{fontSize: '0.875rem', color: 'var(--color-primary)'}}>{item.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
