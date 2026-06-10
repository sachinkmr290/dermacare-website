import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Results', to: 'results' },
    { name: 'Reviews', to: 'reviews' },
    { name: 'Contact', to: 'contact' },
  ];

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: 'all 0.3s ease',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
    padding: isScrolled ? '1rem 0' : '1.5rem 0'
  };

  const navContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 800,
    fontSize: '1.5rem',
    color: 'var(--color-primary)',
    fontFamily: 'var(--font-heading)'
  };

  const desktopNavStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  };

  const navLinkStyle = {
    cursor: 'pointer',
    fontWeight: 500,
    color: 'var(--color-text)',
    transition: 'color 0.2s',
  };

  const mobileMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: '2rem',
    display: mobileMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '1.5rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={navContainerStyle}>
        <div style={logoStyle}>
          <div style={{width: 40, height: 40, borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>DC</div>
          <span>Dr Chauhan Clinic</span>
        </div>

        {/* Desktop Nav */}
        <nav style={desktopNavStyle} className="desktop-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500}
              style={navLinkStyle}
              activeClass="text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Link to="booking" smooth={true} offset={-80} duration={500} className="btn btn-primary">
            <Calendar size={18} />
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{display: 'none', cursor: 'pointer'}} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Nav */}
        <div style={mobileMenuStyle}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500}
              style={navLinkStyle}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="booking" smooth={true} offset={-80} duration={500} className="btn btn-primary" style={{justifyContent: 'center'}} onClick={() => setMobileMenuOpen(false)}>
            <Calendar size={18} />
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
