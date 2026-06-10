import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    { q: 'What is PRP therapy?', a: 'Platelet-Rich Plasma (PRP) therapy is a medical treatment where we use your own blood plasma, rich in growth factors, to stimulate hair follicles and promote new hair growth or rejuvenate skin.' },
    { q: 'Is PRP effective for hair loss?', a: 'Yes, PRP is highly effective, especially for androgenetic alopecia (pattern baldness) and hair thinning. It strengthens existing hair and stimulates dormant follicles.' },
    { q: 'How many sessions are needed?', a: 'Treatment plans vary by condition. Generally, for PRP, 3-6 sessions spaced 3-4 weeks apart are recommended, followed by maintenance sessions.' },
    { q: 'Can acne scars be treated?', a: 'Yes, we use a combination of medical treatments including specialized peels, dermabrasion, and PRP to significantly reduce and often eliminate acne scars.' },
    { q: 'What is cupping therapy?', a: 'Cupping therapy is an ancient form of alternative medicine in which a local suction is created on the skin. It helps with pain, inflammation, blood flow, relaxation and well-being.' },
    { q: 'Is consultation available for both men and women?', a: 'Absolutely. We provide specialized care and customized treatment protocols for both men and women across all our services.' }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="section section-bg-alt">
      <div className="container" style={{maxWidth: '800px'}}>
        <div className="text-center" style={{marginBottom: '3rem'}}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions about our treatments.</p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card" style={{padding: '1.5rem', cursor: 'pointer'}} onClick={() => toggleFaq(idx)}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h4 style={{margin: 0, fontSize: '1.125rem', color: 'var(--color-secondary)', fontWeight: 600}}>{faq.q}</h4>
                {openIdx === idx ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-light" />}
              </div>
              
              {openIdx === idx && (
                <div style={{marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', color: 'var(--color-text-light)', animation: 'fadeIn 0.3s ease'}}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
