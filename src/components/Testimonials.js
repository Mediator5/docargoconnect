'use client';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Marcus Johnson',  role: 'Operations Manager', co: 'Texan E-Commerce Co.',       init: 'MJ', bg: '#F5C518', text: 'D&O Cargo Connect transformed our supply chain. Delivery times improved by 35% and we\'re saving significantly on freight costs. The personal attention they give our account is unmatched.' },
  { name: 'Sarah Chen',      role: 'CEO',                co: 'PharmaLink Distributors',     init: 'SC', bg: '#1A8A3C', text: 'For temperature-controlled pharma shipments, we need a partner we can trust completely. D&O\'s documentation and real-time updates give us total peace of mind on every shipment.' },
  { name: 'Roberto Vasquez', role: 'Supply Chain Dir.',  co: 'Houston Manufacturing LLC',   init: 'RV', bg: '#F5C518', text: 'Their LTL solutions helped us right-size our freight spend as a small manufacturer. We no longer pay for full containers — their network gets us the best rates every time.' },
];

export default function Testimonials() {
  return (
    <section style={{ background: 'linear-gradient(135deg,#1E0A4F 0%,#2D0F6B 100%)', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-tag" style={{ background: 'rgba(245,197,24,0.1)', color: '#F5C518', border: '1px solid rgba(245,197,24,0.25)' }}>Client Stories</span>
          <h2 className="section-heading" style={{ fontSize: 'clamp(2.2rem,4vw,3.4rem)', color: 'white' }}>
            WHAT OUR CLIENTS<br /><span style={{ color: '#F5C518' }}>ARE SAYING</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="stack-mobile">
          {testimonials.map(t => (
            <div key={t.name} className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 18, padding: 28 }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {[...Array(5)].map((_,i) => <Star key={i} size={14} fill="#F5C518" color="#F5C518" />)}
              </div>
              {/* Quote mark */}
              <div style={{ fontSize: '3rem', color: '#F5C518', opacity: 0.25, lineHeight: 0.8, marginBottom: 12, fontFamily: 'Georgia, serif' }}>"</div>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.88rem', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 24 }}>{t.text}</p>
              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '0.9rem', color: '#1E0A4F', flexShrink: 0 }}>{t.init}</div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{t.role} · {t.co}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
