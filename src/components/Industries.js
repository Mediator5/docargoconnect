'use client';

const industries = [
  { title: 'E-Commerce',          emoji: '🛒', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=500&q=80', desc: 'Fast, reliable fulfillment for online retailers.' },
  { title: 'Manufacturing',       emoji: '🏭', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80', desc: 'Raw material inbound and finished goods outbound.' },
  { title: 'Healthcare & Pharma', emoji: '🏥', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80', desc: 'Temperature-controlled medical supply chain.' },
  { title: 'Agriculture',         emoji: '🌾', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&q=80', desc: 'Perishable goods from farms to global markets.' },
  { title: 'Retail & FMCG',       emoji: '🛍️', img: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=500&q=80', desc: 'High-volume consumer goods moved efficiently.' },
  { title: 'Technology',          emoji: '💻', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80', desc: 'Secure handling for electronics and high-value tech.' },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span style={{ background: 'rgba(45,15,107,0.07)', color: '#2D0F6B', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.16em' }}
            className="inline-block uppercase px-4 py-1.5 rounded-full mb-4">Industries We Serve</span>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(2.2rem,4vw,3.4rem)', color: '#1E0A4F', lineHeight: 0.95 }} className="mb-4">
            MOVING EVERY<br /><span style={{ color: '#1A8A3C' }}>INDUSTRY FORWARD</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-[480px] mx-auto">Specialized logistics expertise across the sectors that matter most.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map(ind => (
            <div key={ind.title} className="rounded-2xl overflow-hidden relative cursor-pointer group" style={{ height: 260 }}>
              <img src={ind.img} alt={ind.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div style={{ background: 'linear-gradient(180deg,rgba(30,10,79,0.2) 0%,rgba(30,10,79,0.82) 100%)' }} className="absolute inset-0" />
              <div style={{ background: 'rgba(45,15,107,0.45)' }} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div style={{ background: '#F5C518' }} className="absolute top-0 left-0 right-0 h-1" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-3xl mb-1.5">{ind.emoji}</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.2rem', color: 'white', letterSpacing: '0.03em' }} className="mb-1">{ind.title}</div>
                <div className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  style={{ color: 'rgba(255,255,255,0.75)' }}>{ind.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
