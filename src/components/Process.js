'use client';
const steps = [
  { num:'01', title:'Request a Quote',     emoji:'📋', accent:'#F5C518', desc:'Share your shipment details. We respond within 2 hours with a tailored proposal.' },
  { num:'02', title:'Freight Planning',    emoji:'🗺️', accent:'#1A8A3C', desc:'Our team designs the optimal route — balancing speed, cost, and safety.' },
  { num:'03', title:'Booking & Docs',      emoji:'📄', accent:'#F5C518', desc:'We handle all bookings, bills of lading, customs paperwork, and compliance.' },
  { num:'04', title:'Pickup & Transit',    emoji:'🚛', accent:'#1A8A3C', desc:'Your cargo is collected and dispatched with real-time tracking.' },
  { num:'05', title:'Customs & Clearance', emoji:'✅', accent:'#F5C518', desc:'Licensed customs brokers handle all border formalities and duties.' },
  { num:'06', title:'Final Delivery',      emoji:'📦', accent:'#1A8A3C', desc:'Door-to-door delivery with proof of delivery and final invoicing.' },
];
export default function Process() {
  return (
    <section id="process" className="section" style={{ background:'#F9FAFB' }}>
      <div className="container">
        <div className="section-header">
          <span className="tag" style={{ background:'rgba(26,138,60,0.08)', color:'#1A8A3C' }}>How It Works</span>
          <h2 className="heading" style={{ fontSize:'clamp(2.2rem,4vw,3.4rem)', color:'#1E0A4F', marginBottom:16 }}>OUR PROVEN<br/><span style={{ color:'#F5C518', WebkitTextStroke:'1px #D4A800' }}>6-STEP PROCESS</span></h2>
          <p style={{ color:'#6B7280', fontSize:'1.05rem', lineHeight:1.7, maxWidth:480, margin:'0 auto' }}>A streamlined, transparent workflow — from first contact to final delivery.</p>
        </div>
        <div className="grid-3">
          {steps.map(s => (
            <div key={s.num} className="card" style={{ background:'#fff', border:'1px solid rgba(30,10,79,0.08)', borderRadius:18, padding:28, position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:4, right:10, fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:'5rem', color:s.accent, opacity:0.05, lineHeight:1, pointerEvents:'none' }}>{s.num}</div>
              <div style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:44, height:44, borderRadius:12, background:s.accent==='#F5C518'?'rgba(245,197,24,0.12)':'rgba(26,138,60,0.12)', fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:'1rem', color:s.accent, marginBottom:14 }}>{s.num}</div>
              <div style={{ fontSize:'1.8rem', marginBottom:10 }}>{s.emoji}</div>
              <div style={{ width:28, height:3, background:s.accent, borderRadius:2, marginBottom:12 }} />
              <h3 className="subheading" style={{ fontSize:'1.15rem', color:'#1E0A4F', marginBottom:8, letterSpacing:'0.02em' }}>{s.title}</h3>
              <p style={{ fontSize:'0.85rem', color:'#6B7280', lineHeight:1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="cta-strip" style={{ marginTop:48, background:'linear-gradient(135deg,#1E0A4F,#2D0F6B)', borderRadius:18, padding:'32px 40px' }}>
          <div>
            <div className="subheading" style={{ fontSize:'1.5rem', color:'white', marginBottom:4 }}>Ready to Ship?</div>
            <div style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.9rem' }}>Get your personalized freight quote in under 2 hours.</div>
          </div>
          <a href="/quote" className="btn-gold">Start Your Shipment →</a>
        </div>
      </div>
    </section>
  );
}
