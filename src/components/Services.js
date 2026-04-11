'use client';
import { Plane, Ship, Truck, Package, FileText, Warehouse, ArrowRight } from 'lucide-react';

const services = [
  { icon: Plane,     title: 'Air Freight',         accent: '#F5C518', desc: 'Time-critical shipments delivered globally with speed and precision. We partner with leading airlines to secure competitive rates for your urgent cargo.' },
  { icon: Ship,      title: 'Ocean Freight',        accent: '#1A8A3C', desc: 'Full container load (FCL) and less-than-container load (LCL) services. Cost-effective solutions for large-volume international shipments.' },
  { icon: Truck,     title: 'Road Freight & LTL',   accent: '#F5C518', desc: 'Specialized LTL and FTL trucking across North America. We optimize loads to reduce costs for small-to-medium businesses.' },
  { icon: FileText,  title: 'Customs Clearance',    accent: '#1A8A3C', desc: 'Expert handling of all customs documentation, duties, and compliance requirements to ensure smooth border crossings every time.' },
  { icon: Warehouse, title: 'Warehousing',          accent: '#F5C518', desc: 'Flexible warehousing and distribution solutions near major hubs. Short and long-term storage with inventory management.' },
  { icon: Package,   title: 'Specialized Cargo',    accent: '#1A8A3C', desc: 'Handling of oversized, hazardous, temperature-controlled, and high-value cargo with specialized equipment and expertise.' },
];

export default function Services() {
  return (
    <section id="services" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-tag" style={{ background: 'rgba(45,15,107,0.07)', color: '#2D0F6B' }}>What We Offer</span>
          <h2 className="section-heading" style={{ fontSize: 'clamp(2.2rem,4vw,3.4rem)', color: '#1E0A4F', marginBottom: 16 }}>
            COMPREHENSIVE<br />
            <span style={{ color: '#1A8A3C' }}>FREIGHT SOLUTIONS</span>
          </h2>
          <p style={{ color: '#6B7280', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
            From air to ocean to road — we manage every mile of your supply chain with end-to-end visibility and dedicated support.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="stack-mobile">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isGold = s.accent === '#F5C518';
            return (
              <div key={s.title} className="card" style={{ background: '#fff', border: '1px solid rgba(30,10,79,0.09)', borderRadius: 18, padding: 32, position: 'relative', overflow: 'hidden' }}>
                {/* Subtle number watermark */}
                <div style={{ position: 'absolute', top: 8, right: 12, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '4.5rem', color: s.accent, opacity: 0.05, lineHeight: 1, pointerEvents: 'none' }}>
                  {String(i+1).padStart(2,'0')}
                </div>
                {/* Icon */}
                <div style={{ width: 52, height: 52, borderRadius: 14, background: isGold ? 'rgba(245,197,24,0.1)' : 'rgba(26,138,60,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon size={24} color={s.accent} />
                </div>
                {/* Accent line */}
                <div style={{ width: 32, height: 3, background: s.accent, borderRadius: 2, marginBottom: 14 }} />
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.2rem', color: '#1E0A4F', marginBottom: 10, letterSpacing: '0.02em' }}>{s.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.88rem', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="#contact" className="btn-gold">Get a Custom Quote <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
