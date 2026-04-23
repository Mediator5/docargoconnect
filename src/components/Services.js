'use client';
import { Plane, Ship, Truck, Package, FileText, Warehouse, ArrowRight } from 'lucide-react';
const services = [
  { icon:Plane,     title:'Air Freight',       accent:'#F5C518', desc:'Time-critical shipments delivered globally. We partner with leading airlines to secure competitive rates for your urgent cargo.' },
  { icon:Ship,      title:'Ocean Freight',      accent:'#1A8A3C', desc:'FCL and LCL services for large-volume international shipments at cost-effective rates.' },
  { icon:Truck,     title:'Road Freight & LTL', accent:'#F5C518', desc:'Specialized LTL and FTL trucking across North America. Optimized loads to reduce costs for SMBs.' },
  { icon:FileText,  title:'Customs Clearance',  accent:'#1A8A3C', desc:'Expert handling of all customs documentation, duties, and compliance for smooth border crossings.' },
  // { icon:Warehouse, title:'Warehousing',        accent:'#F5C518', desc:'Flexible warehousing near major hubs. Short and long-term storage with inventory management.' },
  { icon:Package,   title:'Specialized Cargo',  accent:'#1A8A3C', desc:'Oversized, hazardous, temperature-controlled, and high-value cargo with specialized equipment.' },
];
export default function Services() {
  return (
    <section id="services" className="section" style={{ background:'#fff' }}>
      <div className="container">
        <div className="section-header">
          <span className="tag" style={{ background:'rgba(45,15,107,0.07)', color:'#2D0F6B' }}>What We Offer</span>
          <h2 className="heading" style={{ fontSize:'clamp(2.2rem,4vw,3.4rem)', color:'#1E0A4F', marginBottom:16 }}>COMPREHENSIVE<br/><span style={{ color:'#1A8A3C' }}>FREIGHT SOLUTIONS</span></h2>
          <p style={{ color:'#6B7280', fontSize:'1.05rem', lineHeight:1.7, maxWidth:520, margin:'0 auto' }}>From air to ocean to road — every mile of your supply chain managed with end-to-end visibility.</p>
        </div>
        <div className="grid-3">
          {services.map((s,i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card" style={{ background:'#fff', border:'1px solid rgba(30,10,79,0.09)', borderRadius:18, padding:32, position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:8, right:12, fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:'4.5rem', color:s.accent, opacity:0.05, lineHeight:1, pointerEvents:'none' }}>{String(i+1).padStart(2,'0')}</div>
                <div style={{ width:52, height:52, borderRadius:14, background:s.accent==='#F5C518'?'rgba(245,197,24,0.1)':'rgba(26,138,60,0.1)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:18 }}><Icon size={24} color={s.accent} /></div>
                <div style={{ width:32, height:3, background:s.accent, borderRadius:2, marginBottom:14 }} />
                <h3 className="subheading" style={{ fontSize:'1.2rem', color:'#1E0A4F', marginBottom:10, letterSpacing:'0.02em' }}>{s.title}</h3>
                <p style={{ color:'#6B7280', fontSize:'0.88rem', lineHeight:1.7 }}>{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign:'center', marginTop:48 }}>
          <a href="/quote" className="btn-gold">Get a Custom Quote <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
