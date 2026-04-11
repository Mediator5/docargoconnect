'use client';
import { ArrowRight, ChevronDown, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #1E0A4F 0%, #2D0F6B 60%, #1a1a50 100%)', overflow: 'hidden' }}>
      {/* Dot grid */}
      <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.7 }} />

      {/* Gold top bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #F5C518, #1A8A3C, #F5C518)' }} />

      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: '10%', right: '20%', width: 400, height: 400, borderRadius: '50%', background: '#F5C518', opacity: 0.06, filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: 280, height: 280, borderRadius: '50%', background: '#1A8A3C', opacity: 0.08, filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px 80px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="stack-mobile">
        {/* LEFT */}
        <div className="fade1">
          {/* Badge */}
          <div className="fade1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.25)', borderRadius: 999, padding: '6px 16px', marginBottom: 24 }}>
            <div className="pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: '#F5C518', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#F5C518' }}>Global Logistics Solutions</span>
          </div>

          {/* Headline */}
          <h1 className="fade2 section-heading" style={{ fontSize: 'clamp(3rem,5.5vw,5.2rem)', color: 'white', marginBottom: 20 }}>
            EXPERTLY<br />
            <span className="shimmer-text">MANAGING</span><br />
            YOUR SUPPLY<br />
            <span style={{ color: '#1A8A3C' }}>CHAIN.</span>
          </h1>

          <p className="fade3" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
            D&O Cargo Connect delivers personalized freight forwarding for small-to-medium businesses — bridging shippers and carriers with speed, transparency, and door-to-door reliability.
          </p>

          {/* Buttons */}
          <div className="fade4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
            <a href="#contact" className="btn-gold">Get a Free Quote <ArrowRight size={15} /></a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            {[['500+','Shipments Delivered'],['40+','Countries Reached'],['98%','On-Time Rate']].map(([val,lbl]) => (
              <div key={lbl}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2.2rem', color: '#F5C518', lineHeight: 1 }}>{val}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginTop: 2 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — image */}
        <div className="hide-mobile" style={{ position: 'relative' }}>
          <div className="float" style={{ borderRadius: 20, overflow: 'hidden', height: 420, boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }}>
            <img className="img-cover" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80" alt="Logistics" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 45%,rgba(30,10,79,0.85) 100%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(245,197,24,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={17} color="#F5C518" />
              </div>
              <span style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>End-to-End Supply Chain Management</span>
            </div>
          </div>

          {/* Floating card 1 */}
          <div style={{ position: 'absolute', top: 40, left: -40, background: '#F5C518', borderRadius: 14, padding: '14px 18px', boxShadow: '0 12px 30px rgba(245,197,24,0.3)', minWidth: 150 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <Shield size={13} color="#1E0A4F" />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '0.7rem', color: '#1E0A4F', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Secure</span>
            </div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2rem', color: '#1E0A4F', lineHeight: 1 }}>100%</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(30,10,79,0.65)', marginTop: 2 }}>Insured Shipments</div>
          </div>

          {/* Floating card 2 */}
          <div style={{ position: 'absolute', bottom: 40, right: -30, background: '#1E0A4F', border: '1px solid rgba(26,138,60,0.4)', borderRadius: 14, padding: '14px 18px', boxShadow: '0 12px 30px rgba(0,0,0,0.3)', minWidth: 155 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <Clock size={13} color="#1A8A3C" />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '0.7rem', color: '#1A8A3C', textTransform: 'uppercase', letterSpacing: '0.08em' }}>On-Time</span>
            </div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2rem', color: 'white', lineHeight: 1 }}>98.5%</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>Delivery Success Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, color: 'rgba(255,255,255,0.3)' }}>
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={15} />
      </div>
    </section>
  );
}
