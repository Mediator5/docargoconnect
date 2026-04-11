'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Image from "next/image";

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    background: scrolled ? 'rgba(30,10,79,0.97)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.3)' : 'none',
    transition: 'all 0.4s ease',
    borderBottom: scrolled ? '1px solid rgba(245,197,24,0.15)' : '1px solid transparent',
  };

  return (
    <header style={navStyle}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 64 : 76, transition: 'height 0.4s' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          {/* <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#F5C518,#FFD94D)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '0.85rem', color: '#1E0A4F', flexShrink: 0 }}>D&O</div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.15rem', color: '#F5C518', letterSpacing: '0.04em' }}>D&O</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.6rem', color: '#1A8A3C', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Cargo Connect</div>
          </div> */}
          <Image
            src="/logo.png"
            alt="Freight logistics"
            width={60}
            height={60}
            className="rounded-xl object-cover"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="nav-link" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.02em' }}>{l.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="mailto:info@docargoconnect.com" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>
            <Phone size={13} /> info@docargoconnect.com
          </a>
          <a href="#contact" className="btn-gold" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>Get a Quote</a>
        </div>

        {/* Mobile toggle */}
        <button className="hide-desktop" onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 4 }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{ background: '#1E0A4F', maxHeight: open ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease', borderTop: open ? '1px solid rgba(245,197,24,0.15)' : 'none' }}>
        <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: '1rem', fontWeight: 600 }}>{l.label}</a>
          ))}
          <a href="#contact" className="btn-gold" style={{ marginTop: 12, textAlign: 'center', justifyContent: 'center' }}>Get a Free Quote</a>
        </div>
      </div>
    </header>
  );
}
