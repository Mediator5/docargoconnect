'use client';
import { ArrowRight, ChevronDown, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #1E0A4F 0%, #2D0F6B 60%, #1a1a50 100%)' }}
      className="relative min-h-screen flex items-center overflow-hidden">

      <div className="dot-bg absolute inset-0 opacity-70" />
      <div style={{ background: 'linear-gradient(90deg, #F5C518, #1A8A3C, #F5C518)' }} className="absolute top-0 left-0 right-0 h-[3px]" />
      <div style={{ background: '#F5C518', filter: 'blur(80px)' }} className="absolute top-[10%] right-[20%] w-[400px] h-[400px] rounded-full opacity-[0.06] pointer-events-none" />
      <div style={{ background: '#1A8A3C', filter: 'blur(60px)' }} className="absolute bottom-[10%] left-[10%] w-[280px] h-[280px] rounded-full opacity-[0.08] pointer-events-none" />

      <div className="relative w-full max-w-[1200px] mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="fade1">
          {/* Badge */}
          <div style={{ background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.25)', borderRadius: 999 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6">
            <div className="pulse w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#F5C518' }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.16em', color: '#F5C518' }}
              className="uppercase tracking-widest">Global Logistics Solutions</span>
          </div>

          {/* Headline */}
          <h1 className="fade2 section-heading mb-5 text-white"
            style={{ fontSize: 'clamp(3rem,5.5vw,5.2rem)' }}>
            EXPERTLY<br />
            <span className="shimmer-text">MANAGING</span><br />
            YOUR SUPPLY<br />
            <span style={{ color: '#1A8A3C' }}>CHAIN.</span>
          </h1>

          <p className="fade3 text-lg leading-relaxed mb-8 max-w-[480px]"
            style={{ color: 'rgba(255,255,255,0.65)' }}>
            D&O Cargo Connect delivers personalized freight forwarding for small-to-medium businesses — bridging shippers and carriers with speed, transparency, and door-to-door reliability.
          </p>

          {/* Buttons */}
          <div className="fade4 flex flex-wrap gap-3 mb-12">
            <a href="#contact" className="btn-gold">Get a Free Quote <ArrowRight size={15} /></a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[['500+','Shipments Delivered'],['40+','Countries Reached'],['98%','On-Time Rate']].map(([val,lbl]) => (
              <div key={lbl}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2.2rem', color: '#F5C518', lineHeight: 1 }}>{val}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', fontWeight: 600 }} className="uppercase tracking-widest mt-0.5">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — image, hidden on mobile */}
        <div className="relative hidden lg:block">
          <div className="float rounded-2xl overflow-hidden shadow-2xl" style={{ height: 420 }}>
            <img className="img-cover" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80" alt="Logistics" />
            <div style={{ background: 'linear-gradient(180deg,transparent 45%,rgba(30,10,79,0.85) 100%)' }} className="absolute inset-0" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-3">
              <div style={{ background: 'rgba(245,197,24,0.15)' }} className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield size={17} color="#F5C518" />
              </div>
              <span style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>End-to-End Supply Chain Management</span>
            </div>
          </div>

          {/* Floating card 1 */}
          <div style={{ background: '#F5C518', boxShadow: '0 12px 30px rgba(245,197,24,0.3)' }}
            className="absolute top-10 -left-10 rounded-2xl p-4 min-w-[150px]">
            <div className="flex items-center gap-1.5 mb-1">
              <Shield size={13} color="#1E0A4F" />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '0.7rem', color: '#1E0A4F' }} className="uppercase tracking-wider">Secure</span>
            </div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2rem', color: '#1E0A4F', lineHeight: 1 }}>100%</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(30,10,79,0.65)' }} className="mt-0.5">Insured Shipments</div>
          </div>

          {/* Floating card 2 */}
          <div style={{ background: '#1E0A4F', border: '1px solid rgba(26,138,60,0.4)', boxShadow: '0 12px 30px rgba(0,0,0,0.3)' }}
            className="absolute bottom-10 -right-8 rounded-2xl p-4 min-w-[155px]">
            <div className="flex items-center gap-1.5 mb-1">
              <Clock size={13} color="#1A8A3C" />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '0.7rem', color: '#1A8A3C' }} className="uppercase tracking-wider">On-Time</span>
            </div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2rem', color: 'white', lineHeight: 1 }}>98.5%</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)' }} className="mt-0.5">Delivery Success Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ color: 'rgba(255,255,255,0.3)' }} className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '0.65rem' }} className="uppercase tracking-widest">Scroll</span>
        <ChevronDown size={15} />
      </div>
    </section>
  );
}
