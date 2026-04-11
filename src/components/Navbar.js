'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#why-us'   },
  { label: 'Process',  href: '#process'  },
  { label: 'Industries', href: '#industries' },
  { label: 'FAQ',      href: '#faq'      },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header style={{
        background: scrolled ? 'rgba(30,10,79,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.3)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(245,197,24,0.15)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
      className="fixed top-0 left-0 right-0 z-50">

      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between"
        style={{ height: scrolled ? 64 : 76, transition: 'height 0.4s' }}>

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div style={{ background: 'linear-gradient(135deg,#F5C518,#FFD94D)', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '0.85rem', color: '#1E0A4F' }}
            className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0">D&O</div>
          <div className="leading-tight">
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.15rem', color: '#F5C518', letterSpacing: '0.04em' }}>D&O</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.6rem', color: '#1A8A3C', letterSpacing: '0.14em' }} className="uppercase">Cargo Connect</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="nav-link no-underline text-sm font-semibold"
              style={{ color: 'rgba(255,255,255,0.85)' }}>{l.label}</a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+13464046682" className="flex items-center gap-1.5 no-underline text-sm"
            style={{ color: 'rgba(255,255,255,0.55)' }}>
            <Phone size={13} /> (346) 404-6682
          </a>
          <a href="#contact" className="btn-gold" style={{ padding: '10px 22px', fontSize: '0.8rem' }}>Get a Quote</a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          className="lg:hidden p-1">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
          background: '#1E0A4F',
          maxHeight: open ? 420 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
          borderTop: open ? '1px solid rgba(245,197,24,0.15)' : 'none',
        }}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: 'rgba(255,255,255,0.8)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              className="no-underline py-2.5 text-base font-semibold block">{l.label}</a>
          ))}
          <a href="tel:+13464046682" style={{ color: 'rgba(255,255,255,0.55)' }}
            className="flex items-center gap-2 py-2.5 text-sm no-underline">
            <Phone size={13} /> (346) 404-6682
          </a>
          <a href="#contact" className="btn-gold mt-2 justify-center">Get a Free Quote</a>
        </div>
      </div>
    </header>
  );
}
