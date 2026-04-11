'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'What types of businesses do you work with?', a: "We specialize in small-to-medium businesses (SMBs) across e-commerce, manufacturing, healthcare, agriculture, retail, and technology. If you ship freight — domestically or internationally — we can help." },
  { q: 'What is LTL and why is it better for my business?', a: "Less-than-Truckload (LTL) means you only pay for the portion of the truck your cargo uses. Ideal for SMBs that don't have full truckload volumes — significantly reducing freight costs." },
  { q: 'How do you handle customs clearance?', a: "We have licensed customs brokers who handle all documentation, import/export filings, duty calculations, and regulatory compliance for smooth border crossings." },
  { q: 'Do you offer real-time tracking?', a: "Yes. Every shipment includes real-time tracking and proactive updates. Our team is available 24/7 for status checks." },
  { q: 'How quickly can you provide a freight quote?', a: "We respond to all quote requests within 2 business hours. For urgent shipments, call us directly for an emergency quote." },
  { q: 'Which shipping modes do you offer?', a: "Air freight, ocean freight (FCL & LCL), road freight (LTL & FTL), and multimodal combinations." },
  { q: 'Are my shipments insured?', a: "Yes. We work with top cargo insurance providers to protect against loss, damage, and delay. Coverage options are included in your freight quote." },
  { q: 'What is your service area?', a: "We operate globally. Headquartered in Houston, TX, with strong North American coverage and established routes to Europe, Asia, Africa, and Latin America." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-gray-50 py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left — sticky on desktop */}
        <div className="lg:sticky lg:top-28">
          <span style={{ background: 'rgba(45,15,107,0.07)', color: '#2D0F6B', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.16em' }}
            className="inline-block uppercase px-4 py-1.5 rounded-full mb-4">FAQ</span>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(2.2rem,3.5vw,3.2rem)', color: '#1E0A4F', lineHeight: 0.95 }} className="mb-4">
            FREQUENTLY<br />ASKED<br /><span style={{ color: '#1A8A3C' }}>QUESTIONS</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-7">
            Can't find your answer?{' '}
            <a href="mailto:info@docargoconnect.com" style={{ color: '#2D0F6B' }} className="font-bold">Email us directly.</a>
          </p>
          <div className="rounded-2xl overflow-hidden" style={{ height: 240 }}>
            <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80" alt="Cargo" className="img-cover" />
          </div>
        </div>

        {/* Right — accordion */}
        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, i) => (
            <div key={i} style={{
                border: `1px solid ${open === i ? 'rgba(45,15,107,0.2)' : 'rgba(45,15,107,0.08)'}`,
                boxShadow: open === i ? '0 4px 20px rgba(45,15,107,0.07)' : 'none',
                transition: 'all 0.3s',
              }} className="bg-white rounded-xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-transparent border-none cursor-pointer">
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: open === i ? '#1E0A4F' : '#374151', lineHeight: 1.4 }}>{faq.q}</span>
                <div style={{ background: open === i ? '#F5C518' : 'rgba(45,15,107,0.08)', transition: 'background 0.2s' }}
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  {open === i ? <Minus size={13} color="#1E0A4F" /> : <Plus size={13} color="#2D0F6B" />}
                </div>
              </button>
              <div style={{ maxHeight: open === i ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
