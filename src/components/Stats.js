'use client';

const stats = [
  { value: '500+', label: 'Shipments Delivered', sub: 'Across 40+ countries' },
  { value: '98%',  label: 'On-Time Delivery',    sub: 'Consistent track record' },
  { value: '200+', label: 'SMB Clients Served',  sub: 'Across North America' },
  { value: '24/7', label: 'Customer Support',    sub: 'Always reachable' },
];

export default function Stats() {
  return (
    <section style={{ borderBottom: '1px solid rgba(30,10,79,0.07)' }} className="bg-white py-14 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={s.label} className="text-center px-4" style={{ borderLeft: i > 0 ? '1px solid rgba(30,10,79,0.08)' : 'none' }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(2.2rem,3.5vw,3.2rem)', color: '#2D0F6B', lineHeight: 1 }} className="mb-1">{s.value}</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#1A8A3C' }} className="uppercase tracking-wide mb-1">{s.label}</div>
            <div className="text-xs text-gray-400">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
