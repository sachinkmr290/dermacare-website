import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="floating-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999 }}>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/917579781961" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      {/* Call Button */}
      <a 
        href="tel:+917579781961" 
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: 'var(--color-primary)',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Call Now"
      >
        <Phone size={30} />
      </a>
    </div>
  );
};

export default FloatingButtons;
