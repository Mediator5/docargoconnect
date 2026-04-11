'use client';

const items = ['Air Freight','Ocean Cargo','Customs Clearance','LTL Solutions','Door-to-Door Delivery','Warehousing','Road Freight','Supply Chain Management','Real-Time Tracking','Specialized Cargo'];
const doubled = [...items, ...items];

export default function TrustBar() {
  return (
    <div style={{ background: '#F5C518' }} className="py-3 overflow-hidden relative">
      <div style={{ background: 'linear-gradient(90deg,#F5C518,transparent)' }} className="absolute left-0 top-0 bottom-0 w-14 z-10" />
      <div style={{ background: 'linear-gradient(270deg,#F5C518,transparent)' }} className="absolute right-0 top-0 bottom-0 w-14 z-10" />
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2.5 px-5 whitespace-nowrap">
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.85rem', color: '#1E0A4F', letterSpacing: '0.08em' }} className="uppercase">{item}</span>
            <span style={{ color: 'rgba(30,10,79,0.35)' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
