'use client';
const industries = [
  // { title:'E-Commerce',          emoji:'🛒', img:'https://images.unsplash.com/photo-1553413077-190dd305871c?w=500&q=80', desc:'Fast, reliable fulfillment for online retailers.' },
  { title:'Manufacturing',       emoji:'🏭', img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80', desc:'Raw material inbound and finished goods outbound.' },
  // { title:'Healthcare & Pharma', emoji:'🏥', img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80', desc:'Temperature-controlled medical supply chain.' },
  // { title:'Agriculture',         emoji:'🌾', img:'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&q=80', desc:'Perishable goods from farms to global markets.' },
  { title:'Retail & FMCG',       emoji:'🛍️', img:'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=500&q=80', desc:'High-volume consumer goods moved efficiently.' },
  { title:'Technology',          emoji:'💻', img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80', desc:'Secure handling for electronics and high-value tech.' },
];
export default function Industries() {
  return (
    <section id="industries" className="section" style={{ background:'#fff' }}>
      <div className="container">
        <div className="section-header">
          <span className="tag" style={{ background:'rgba(45,15,107,0.07)', color:'#2D0F6B' }}>Industries We Serve</span>
          <h2 className="heading" style={{ fontSize:'clamp(2.2rem,4vw,3.4rem)', color:'#1E0A4F', marginBottom:16 }}>MOVING EVERY<br/><span style={{ color:'#1A8A3C' }}>INDUSTRY FORWARD</span></h2>
          <p style={{ color:'#6B7280', fontSize:'1.05rem', lineHeight:1.7, maxWidth:480, margin:'0 auto' }}>Specialized logistics expertise across the sectors that matter most.</p>
        </div>
        <div className="grid-3">
          {industries.map(ind => (
            <div key={ind.title} style={{ borderRadius:18, overflow:'hidden', height:260, position:'relative', cursor:'pointer' }}
              onMouseEnter={e => { e.currentTarget.querySelector('img').style.transform='scale(1.08)'; e.currentTarget.querySelector('.hover-overlay').style.opacity='1'; e.currentTarget.querySelector('.hover-desc').style.opacity='1'; e.currentTarget.querySelector('.hover-desc').style.transform='translateY(0)'; }}
              onMouseLeave={e => { e.currentTarget.querySelector('img').style.transform='scale(1)'; e.currentTarget.querySelector('.hover-overlay').style.opacity='0'; e.currentTarget.querySelector('.hover-desc').style.opacity='0'; e.currentTarget.querySelector('.hover-desc').style.transform='translateY(8px)'; }}>
              <img src={ind.img} alt={ind.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,rgba(30,10,79,0.2) 0%,rgba(30,10,79,0.82) 100%)' }} />
              <div className="hover-overlay" style={{ position:'absolute', inset:0, background:'rgba(45,15,107,0.45)', opacity:0, transition:'opacity 0.3s' }} />
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'#F5C518' }} />
              <div style={{ position:'absolute', inset:0, padding:24, display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
                <div style={{ fontSize:'2rem', marginBottom:6 }}>{ind.emoji}</div>
                <div className="subheading" style={{ fontSize:'1.2rem', color:'white', letterSpacing:'0.03em', marginBottom:4 }}>{ind.title}</div>
                <div className="hover-desc" style={{ fontSize:'0.82rem', color:'rgba(255,255,255,0.75)', lineHeight:1.5, opacity:0, transform:'translateY(8px)', transition:'opacity 0.3s, transform 0.3s' }}>{ind.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
