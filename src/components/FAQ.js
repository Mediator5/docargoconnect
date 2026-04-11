'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'What types of businesses do you work with?', a: 'We specialize in small-to-medium businesses (SMBs) across e-commerce, manufacturing, healthcare, agriculture, retail, and technology. If you ship freight — domestically or internationally — we can help.' },
  { q: 'What is LTL and why is it better for my business?', a: "Less-than-Truckload (LTL) means you only pay for the portion of the truck your cargo uses, rather than booking an entire trailer. Ideal for SMBs that don't have full truckload volumes — significantly reducing freight costs." },
  { q: 'How do you handle customs clearance?', a: 'We have licensed customs brokers who handle all documentation, import/export filings, duty calculations, and regulatory compliance — ensuring smooth border crossings without delays.' },
  { q: 'Do you offer real-time tracking?', a: "Yes. Every shipment includes real-time tracking and proactive status updates. You'll always know where your cargo is, and our team is available 24/7 for updates." },
  { q: 'How quickly can you provide a freight quote?', a: 'We respond to all quote requests within 2 business hours. For urgent shipments, call us directly for an emergency quote.' },
  { q: 'Which shipping modes do you offer?', a: 'Air freight, ocean freight (FCL & LCL), road freight (LTL & FTL), and multimodal combinations. We recommend the most cost-effective mode for your shipment.' },
  { q: 'Are my shipments insured?', a: 'Yes. We work with top cargo insurance providers to protect against loss, damage, and delay. Coverage options are included in your freight quote.' },
  { q: 'What is your service area?', a: 'We operate globally. Headquartered in Houston, TX — with strong North American coverage and established routes to Europe, Asia, Africa, and Latin America.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ background: '#F9FAFB', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }} className="stack-mobile">
        {/* Left */}
        <div style={{ position: 'sticky', top: 100 }}>
          <span className="section-tag" style={{ background: 'rgba(45,15,107,0.07)', color: '#2D0F6B' }}>FAQ</span>
          <h2 className="section-heading" style={{ fontSize: 'clamp(2.2rem,3.5vw,3.2rem)', color: '#1E0A4F', marginBottom: 16 }}>
            FREQUENTLY<br />ASKED<br /><span style={{ color: '#1A8A3C' }}>QUESTIONS</span>
          </h2>
          <p style={{ color: '#6B7280', fontSize: '1rem', lineHeight: 1.7, marginBottom: 28 }}>
            Can't find your answer?{' '}
            <a href="mailto:info@docargoconnect.com" style={{ color: '#2D0F6B', fontWeight: 700 }}>Email us directly.</a>
          </p>
          <div style={{ borderRadius: 16, overflow: 'hidden', height: 240 }}>
            <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80" alt="Cargo" className="img-cover" />
          </div>
        </div>

        {/* Right — accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: '#fff', border: `1px solid ${open === i ? 'rgba(45,15,107,0.2)' : 'rgba(45,15,107,0.08)'}`, borderRadius: 14, overflow: 'hidden', boxShadow: open === i ? '0 4px 20px rgba(45,15,107,0.07)' : 'none', transition: 'all 0.3s' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: open === i ? '#1E0A4F' : '#374151', lineHeight: 1.4 }}>{faq.q}</span>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: open === i ? '#F5C518' : 'rgba(45,15,107,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
                  {open === i ? <Minus size={13} color="#1E0A4F" /> : <Plus size={13} color="#2D0F6B" />}
                </div>
              </button>
              <div style={{ maxHeight: open === i ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                <p style={{ padding: '0 20px 18px', fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
