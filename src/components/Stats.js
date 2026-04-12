'use client';
const stats = [
  // { value:'500+', label:'Shipments Delivered', sub:'Across 40+ countries' },
  // { value:'98%',  label:'On-Time Delivery',    sub:'Consistent track record' },
  { value:'200+', label:'SMB Clients Served',  sub:'Across North America' },
  { value:'24/7', label:'Customer Support',    sub:'Always reachable' },
];
export default function Stats() {
  return (
    <section className="section-sm" style={{ background:'#fff', borderBottom:'1px solid rgba(30,10,79,0.07)' }}>
      <div className="container">
        <div className="grid-2">
          {stats.map((s,i) => (
            <div key={s.label} style={{ textAlign:'center', paddingLeft:16, paddingRight:16, borderLeft: i > 0 ? '1px solid rgba(30,10,79,0.08)' : 'none' }}>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:'clamp(2.2rem,3.5vw,3.2rem)', color:'#2D0F6B', lineHeight:1, marginBottom:6 }}>{s.value}</div>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:'0.9rem', color:'#1A8A3C', textTransform:'uppercase', letterSpacing:'0.04em', marginBottom:3 }}>{s.label}</div>
              <div style={{ fontSize:'0.75rem', color:'#9CA3AF' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
