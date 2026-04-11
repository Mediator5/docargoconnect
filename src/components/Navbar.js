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

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(30,10,79,0.97)' : 'rgba(30,10,79,0.85)',
      backdropFilter: 'blur(12px)',
      boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.3)' : 'none',
      borderBottom: '1px solid rgba(245,197,24,0.12)',
      transition: 'all 0.4s ease',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: scrolled ? 100 : 100, transition: 'height 0.4s',
      }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>


          {/* <Image
            src="/logo.png"
            alt="D&O Cargo Connect Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        */}
          <div style={{
            position: "relative",
            width: "5rem",
            height: "5rem"
          }}>
            <Image
              src="/logo.png"
              alt="D&O Cargo Connect Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
           </a>
          {/* Desktop nav links */}
          <nav className="nav-desktop">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="nav-link"
                style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem', fontWeight: 600 }}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="nav-cta-desktop">
            <a href="tel:+13464046682" style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
              <Phone size={13} /> (346) 404-6682
            </a>
            <a href="#contact" className="btn-gold" style={{ padding: '9px 20px', fontSize: '0.8rem' }}>Get a Quote</a>
          </div>

          {/* Mobile hamburger — always visible on mobile */}
          <button
            className="nav-mobile-btn"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 6, alignItems: 'center', justifyContent: 'center' }}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
      </div>

      {/* Mobile dropdown menu */}
      <div style={{
        background: '#1E0A4F',
        maxHeight: open ? 480 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
        borderTop: open ? '1px solid rgba(245,197,24,0.15)' : 'none',
      }}>
        <div style={{ padding: '12px 24px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: 'rgba(255,255,255,0.85)', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: '1.05rem', fontWeight: 600, display: 'block' }}>
              {l.label}
            </a>
          ))}
          <a href="tel:+13464046682"
            style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', padding: '12px 0', fontSize: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <Phone size={14} /> (346) 404-6682
          </a>
          <a href="#contact" className="btn-gold" onClick={() => setOpen(false)}
            style={{ marginTop: 16, justifyContent: 'center', textAlign: 'center' }}>
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
