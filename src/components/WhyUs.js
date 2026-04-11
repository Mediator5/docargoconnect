'use client';
import { CheckCircle2, TrendingDown, Users, Eye, Zap, HeadphonesIcon } from 'lucide-react';

const reasons = [
  { icon: Users,          title: 'Personalized Service',  desc: "Dedicated account managers — not a call center. We treat every shipment like our own." },
  { icon: TrendingDown,   title: 'Best-in-Class Rates',   desc: "Our carrier network and LTL expertise means the most competitive rates for SMBs." },
  { icon: Eye,            title: 'Full Transparency',     desc: "Real-time tracking, proactive updates, and complete documentation. No surprises." },
  { icon: Zap,            title: 'Speed & Efficiency',    desc: "Digital-first operations mean faster quotes, faster booking, faster delivery." },
  { icon: CheckCircle2,   title: 'End-to-End Management', desc: "Pickup to customs to final delivery — we handle every step." },
  { icon: HeadphonesIcon, title: '24/7 Support',          desc: "Your cargo doesn't sleep, and neither does our support team." },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: 'linear-gradient(135deg,#1E0A4F 0%,#2D0F6B 100%)' }}
      className="py-24 px-6 relative overflow-hidden">
      <div className="dot-bg absolute inset-0 opacity-40" />
      <div style={{ background: '#F5C518', filter: 'blur(80px)' }} className="absolute -right-20 -top-20 w-96 h-96 rounded-full opacity-[0.06]" />
      <div style={{ background: '#1A8A3C', filter: 'blur(60px)' }} className="absolute -left-10 -bottom-10 w-72 h-72 rounded-full opacity-[0.08]" />

      <div className="relative max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left image — desktop only */}
        <div className="hidden lg:block relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: 500 }}>
            <img className="img-cover" src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=700&q=80" alt="Freight ops" />
            <div style={{ background: 'linear-gradient(180deg,transparent 40%,rgba(30,10,79,0.7) 100%)' }} className="absolute inset-0" />
          </div>
          <div style={{ background: '#F5C518', boxShadow: '0 16px 40px rgba(245,197,24,0.3)' }}
            className="absolute -bottom-6 -right-6 rounded-2xl p-6 min-w-[180px]">
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '3rem', color: '#1E0A4F', lineHeight: 1 }}>10+</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.85rem', color: '#1E0A4F' }} className="mt-1">Years of Combined<br/>Logistics Expertise</div>
          </div>
          <div style={{ background: 'rgba(26,138,60,0.92)', border: '1px solid #22A84A', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', color: 'white', letterSpacing: '0.1em' }}
            className="absolute top-5 left-5 rounded-xl px-4 py-2 uppercase">✓ Licensed & Insured</div>
        </div>

        {/* Right content */}
        <div>
          <span style={{ background: 'rgba(245,197,24,0.1)', color: '#F5C518', border: '1px solid rgba(245,197,24,0.25)', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.16em' }}
            className="inline-block uppercase px-4 py-1.5 rounded-full mb-4">Why Choose D&O</span>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,3.5vw,3rem)', color: 'white', lineHeight: 1 }} className="mb-4">
            THE TRUSTED PARTNER<br /><span style={{ color: '#F5C518' }}>SMBS RELY ON</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)' }} className="text-lg leading-relaxed mb-10">
            We bridge the gap between shippers and carriers with a level of personalization that industry giants simply can't match.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {reasons.map(r => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="card rounded-xl p-4 flex gap-3 items-start"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ background: 'rgba(245,197,24,0.12)' }} className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} color="#F5C518" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '0.95rem', color: 'white' }} className="mb-1">{r.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.78rem', lineHeight: 1.55 }}>{r.desc}</div>
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
