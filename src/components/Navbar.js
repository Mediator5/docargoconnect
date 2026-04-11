'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Services',   href: '#services'   },
  { label: 'Why Us',     href: '#why-us'     },
  { label: 'Process',    href: '#process'    },
  { label: 'Industries', href: '#industries' },
  { label: 'FAQ',        href: '#faq'        },
  { label: 'Contact',    href: '#contact'    },
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
      background: scrolled ? 'rgba(30,10,79,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.3)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(245,197,24,0.15)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 64 : 76, transition: 'height 0.4s' }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#F5C518,#FFD94D)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '0.85rem', color: '#1E0A4F', flexShrink: 0 }}>D&O</div>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.15rem', color: '#F5C518', letterSpacing: '0.04em', lineHeight: 1.1 }}>D&O</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.6rem', color: '#1A8A3C', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Cargo Connect</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="nav-link" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem', fontWeight: 600 }}>{l.label}</a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="tel:+13464046682" style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
            <Phone size={13} /> (346) 404-6682
          </a>
          <a href="#contact" className="btn-gold" style={{ padding: '9px 20px', fontSize: '0.8rem' }}>Get a Quote</a>
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-only" onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 4 }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div style={{ background: '#1E0A4F', maxHeight: open ? 440 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease', borderTop: open ? '1px solid rgba(245,197,24,0.15)' : 'none' }}>
        <div style={{ padding: '12px 24px 20px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: 'rgba(255,255,255,0.82)', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: '1rem', fontWeight: 600, display: 'block' }}>{l.label}</a>
          ))}
          <a href="tel:+13464046682" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.5)', padding: '10px 0', fontSize: '0.88rem' }}>
            <Phone size={13} /> (346) 404-6682
          </a>
          <a href="#contact" className="btn-gold" style={{ marginTop: 8, justifyContent: 'center' }}>Get a Free Quote</a>
        </div>
      </div>
    </header>
  );
}
