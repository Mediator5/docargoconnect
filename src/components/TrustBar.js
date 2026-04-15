'use client';
const items = ['Air Freight','Ocean Cargo','Customs Clearance','LTL Solutions','Door-to-Door Delivery','Road Freight','Supply Chain Management','Real-Time Tracking','Specialized Cargo'];
const doubled = [...items,...items];
export default function TrustBar() {
  return (
    <div style={{ background:'#F5C518', padding:'12px 0', overflow:'hidden', position:'relative' }}>
      <div style={{ position:'absolute', left:0, top:0, bottom:0, width:60, background:'linear-gradient(90deg,#F5C518,transparent)', zIndex:2 }} />
      <div style={{ position:'absolute', right:0, top:0, bottom:0, width:60, background:'linear-gradient(270deg,#F5C518,transparent)', zIndex:2 }} />
      <div className="marquee-inner">
        {doubled.map((item,i) => (
          <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'0 20px', whiteSpace:'nowrap' }}>
            <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:'0.85rem', color:'#1E0A4F', letterSpacing:'0.08em', textTransform:'uppercase' }}>{item}</span>
            <span style={{ color:'rgba(30,10,79,0.35)' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
