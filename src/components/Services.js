'use client';
import { Plane, Ship, Truck, Package, FileText, Warehouse, ArrowRight } from 'lucide-react';

const services = [
  { icon: Plane,     title: 'Air Freight',        accent: '#F5C518', desc: 'Time-critical shipments delivered globally. We partner with leading airlines to secure competitive rates for your urgent cargo.' },
  { icon: Ship,      title: 'Ocean Freight',       accent: '#1A8A3C', desc: 'FCL and LCL services for large-volume international shipments at cost-effective rates.' },
  { icon: Truck,     title: 'Road Freight & LTL',  accent: '#F5C518', desc: 'Specialized LTL and FTL trucking across North America. Optimized loads to reduce costs for SMBs.' },
  { icon: FileText,  title: 'Customs Clearance',   accent: '#1A8A3C', desc: 'Expert handling of all customs documentation, duties, and compliance for smooth border crossings.' },
  { icon: Warehouse, title: 'Warehousing',         accent: '#F5C518', desc: 'Flexible warehousing near major hubs. Short and long-term storage with inventory management.' },
  { icon: Package,   title: 'Specialized Cargo',   accent: '#1A8A3C', desc: 'Oversized, hazardous, temperature-controlled, and high-value cargo with specialized equipment.' },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span style={{ background: 'rgba(45,15,107,0.07)', color: '#2D0F6B', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.16em' }}
            className="inline-block uppercase px-4 py-1.5 rounded-full mb-4">What We Offer</span>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(2.2rem,4vw,3.4rem)', color: '#1E0A4F', lineHeight: 0.95 }} className="mb-4">
            COMPREHENSIVE<br /><span style={{ color: '#1A8A3C' }}>FREIGHT SOLUTIONS</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-[520px] mx-auto">
            From air to ocean to road — every mile of your supply chain managed with end-to-end visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isGold = s.accent === '#F5C518';
            return (
              <div key={s.title} className="card rounded-2xl p-8 relative overflow-hidden"
                style={{ background: '#fff', border: '1px solid rgba(30,10,79,0.09)' }}>
                <div style={{ position: 'absolute', top: 8, right: 12, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '4.5rem', color: s.accent, opacity: 0.05, lineHeight: 1, pointerEvents: 'none' }}>
                  {String(i+1).padStart(2,'0')}
                </div>
                <div style={{ background: isGold ? 'rgba(245,197,24,0.1)' : 'rgba(26,138,60,0.1)' }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={24} color={s.accent} />
                </div>
                <div style={{ background: s.accent }} className="w-8 h-0.5 rounded mb-3" />
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.2rem', color: '#1E0A4F', letterSpacing: '0.02em' }} className="mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-gold">Get a Custom Quote <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
