'use client';
import { CheckCircle2, TrendingDown, Users, Eye, Zap, HeadphonesIcon } from 'lucide-react';

const reasons = [
  { icon: Users,           title: 'Personalized Service',   desc: "Dedicated account managers — not a call center. We treat every shipment like our own." },
  { icon: TrendingDown,    title: 'Best-in-Class Rates',    desc: "Our carrier network and LTL expertise means the most competitive rates for SMBs." },
  { icon: Eye,             title: 'Full Transparency',      desc: "Real-time tracking, proactive updates, and complete documentation. No surprises." },
  { icon: Zap,             title: 'Speed & Efficiency',     desc: "Digital-first operations mean faster quotes, faster booking, faster delivery." },
  { icon: CheckCircle2,    title: 'End-to-End Management',  desc: "Pickup to customs to final delivery — we handle every step." },
  { icon: HeadphonesIcon,  title: '24/7 Support',           desc: "Your cargo doesn't sleep, and neither does our support team." },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: 'linear-gradient(135deg,#1E0A4F 0%,#2D0F6B 100%)', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div style={{ position: 'absolute', right: -80, top: -80, width: 400, height: 400, borderRadius: '50%', background: '#F5C518', opacity: 0.06, filter: 'blur(80px)' }} />
      <div style={{ position: 'absolute', left: -40, bottom: -40, width: 280, height: 280, borderRadius: '50%', background: '#1A8A3C', opacity: 0.08, filter: 'blur(60px)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="stack-mobile">
        {/* Left image */}
        <div className="hide-mobile" style={{ position: 'relative' }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', height: 500, boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }}>
            <img className="img-cover" src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=700&q=80" alt="Freight ops" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(30,10,79,0.7) 100%)' }} />
          </div>
          {/* Floating gold stat */}
          <div style={{ position: 'absolute', bottom: -24, right: -24, background: '#F5C518', borderRadius: 16, padding: '20px 24px', boxShadow: '0 16px 40px rgba(245,197,24,0.3)', minWidth: 180 }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '3rem', color: '#1E0A4F', lineHeight: 1 }}>10+</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.85rem', color: '#1E0A4F', marginTop: 4 }}>Years of Combined<br/>Logistics Expertise</div>
          </div>
          {/* Licensed badge */}
          <div style={{ position: 'absolute', top: 20, left: 20, background: 'rgba(26,138,60,0.92)', border: '1px solid #22A84A', borderRadius: 10, padding: '7px 14px', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            ✓ Licensed & Insured
          </div>
        </div>

        {/* Right content */}
        <div>
          <span className="section-tag" style={{ background: 'rgba(245,197,24,0.1)', color: '#F5C518', border: '1px solid rgba(245,197,24,0.25)' }}>Why Choose D&O</span>
          <h2 className="section-heading" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', color: 'white', marginBottom: 16 }}>
            THE TRUSTED PARTNER<br /><span style={{ color: '#F5C518' }}>SMBS RELY ON</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 36 }}>
            We bridge the gap between shippers and carriers with a level of personalization that industry giants simply can't match.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {reasons.map(r => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="card" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '16px 18px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(245,197,24,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} color="#F5C518" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '0.95rem', color: 'white', letterSpacing: '0.02em', marginBottom: 4 }}>{r.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.48)', lineHeight: 1.55 }}>{r.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
