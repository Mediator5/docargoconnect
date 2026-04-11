'use client';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Marcus Johnson',  role: 'Operations Manager', co: 'Texan E-Commerce Co.',     init: 'MJ', bg: '#F5C518', text: "D&O Cargo Connect transformed our supply chain. Delivery times improved by 35% and we're saving significantly on freight costs. The personal attention they give our account is unmatched." },
  { name: 'Sarah Chen',      role: 'CEO',                co: 'PharmaLink Distributors',  init: 'SC', bg: '#1A8A3C', text: "For temperature-controlled pharma shipments, we need a partner we can trust completely. D&O's documentation and real-time updates give us total peace of mind on every shipment." },
  { name: 'Roberto Vasquez', role: 'Supply Chain Dir.',  co: 'Houston Manufacturing LLC',init: 'RV', bg: '#F5C518', text: "Their LTL solutions helped us right-size our freight spend. We no longer pay for full containers — their network gets us the best rates every time." },
];

export default function Testimonials() {
  return (
    <section style={{ background: 'linear-gradient(135deg,#1E0A4F 0%,#2D0F6B 100%)' }} className="py-24 px-6 relative overflow-hidden">
      <div className="dot-bg absolute inset-0 opacity-30" />
      <div className="relative max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span style={{ background: 'rgba(245,197,24,0.1)', color: '#F5C518', border: '1px solid rgba(245,197,24,0.25)', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.16em' }}
            className="inline-block uppercase px-4 py-1.5 rounded-full mb-4">Client Stories</span>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(2.2rem,4vw,3.4rem)', color: 'white', lineHeight: 0.95 }}>
            WHAT OUR CLIENTS<br /><span style={{ color: '#F5C518' }}>ARE SAYING</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <div key={t.name} className="card rounded-2xl p-7"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_,i) => <Star key={i} size={14} fill="#F5C518" color="#F5C518" />)}
              </div>
              <div style={{ fontSize: '3rem', color: '#F5C518', opacity: 0.25, lineHeight: 0.8, fontFamily: 'Georgia,serif' }} className="mb-3">"</div>
              <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }} className="text-sm italic mb-6">{t.text}</p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ background: t.bg, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, color: '#1E0A4F', fontSize: '0.9rem' }}
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0">{t.init}</div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{t.role} · {t.co}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
