import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import TextReveal from './TextReveal';
import '../styles/Navbar.css';
import LogoLight from "../assets/images/logo-white.png";
import Logo from "../assets/images/logo-dark.png";

export default function Navbar({ logovariant = 'default' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
    { name: '¿Quiénes somos?', href: '#quienes-somos' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container" aria-label="Navegación principal">
        
        <a href="#home" className="navbar-logo">
          <img 
            className="logo-qq"
            src={logovariant === 'light' ? LogoLight : Logo}
            alt="logo-qq" />
        </a>

        <ul className="navbar-menu-desktop">
          {navLinks.map((link) => (
            <li key={link.name}>
              <TextReveal href={link.href} className="navbar-link">
                {link.name}
              </TextReveal>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="navbar-toggle"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <ul className="navbar-menu-mobile">
            {navLinks.map((link) => (
              <li key={link.name}>
                <TextReveal
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="navbar-link-mobile"
                >
                  {link.name}
                </TextReveal>
              </li>
            ))}
          </ul>
        )}

      </nav>
    </header>
  );
}