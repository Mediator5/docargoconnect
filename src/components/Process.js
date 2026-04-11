'use client';

const steps = [
  { num: '01', title: 'Request a Quote',    emoji: '📋', accent: '#F5C518', desc: 'Share your shipment details. We respond within 2 hours with a tailored proposal.' },
  { num: '02', title: 'Freight Planning',   emoji: '🗺️', accent: '#1A8A3C', desc: 'Our team designs the optimal route — balancing speed, cost, and safety.' },
  { num: '03', title: 'Booking & Docs',     emoji: '📄', accent: '#F5C518', desc: 'We handle all bookings, bills of lading, customs paperwork, and compliance.' },
  { num: '04', title: 'Pickup & Transit',   emoji: '🚛', accent: '#1A8A3C', desc: 'Your cargo is collected and dispatched with real-time tracking.' },
  { num: '05', title: 'Customs & Clearance',emoji: '✅', accent: '#F5C518', desc: 'Licensed customs brokers handle all border formalities and duties.' },
  { num: '06', title: 'Final Delivery',     emoji: '📦', accent: '#1A8A3C', desc: 'Door-to-door delivery with proof of delivery and final invoicing.' },
];

export default function Process() {
  return (
    <section id="process" className="bg-gray-50 py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span style={{ background: 'rgba(26,138,60,0.08)', color: '#1A8A3C', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.16em' }}
            className="inline-block uppercase px-4 py-1.5 rounded-full mb-4">How It Works</span>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(2.2rem,4vw,3.4rem)', color: '#1E0A4F', lineHeight: 0.95 }} className="mb-4">
            OUR PROVEN<br /><span style={{ color: '#F5C518', WebkitTextStroke: '1px #D4A800' }}>6-STEP PROCESS</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-[480px] mx-auto">
            A streamlined, transparent workflow — from first contact to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.num} className="card bg-white rounded-2xl p-7 relative overflow-hidden"
              style={{ border: '1px solid rgba(30,10,79,0.08)' }}>
              <div style={{ position: 'absolute', top: 4, right: 10, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '5rem', color: s.accent, opacity: 0.05, lineHeight: 1, pointerEvents: 'none' }}>{s.num}</div>
              <div style={{ background: s.accent === '#F5C518' ? 'rgba(245,197,24,0.12)' : 'rgba(26,138,60,0.12)', color: s.accent, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1rem' }}
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4">{s.num}</div>
              <div className="text-3xl mb-3">{s.emoji}</div>
              <div style={{ background: s.accent }} className="w-7 h-0.5 rounded mb-3" />
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.15rem', color: '#1E0A4F', letterSpacing: '0.02em' }} className="mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'linear-gradient(135deg,#1E0A4F,#2D0F6B)' }}
          className="mt-12 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.5rem', color: 'white' }} className="mb-1">Ready to Ship?</div>
            <div style={{ color: 'rgba(255,255,255,0.5)' }} className="text-sm">Get your personalized freight quote in under 2 hours.</div>
          </div>
          <a href="#contact" className="btn-gold flex-shrink-0">Start Your Shipment →</a>
        </div>
      </div>
    </section>
  );
}
