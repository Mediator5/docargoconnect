'use client';
import { colors, fonts, fontWeights, spacing } from '@/theme';

const stats = [
  { value: '500+', label: 'Shipments Delivered', sub: 'Across 40+ countries' },
  { value: '98%',  label: 'On-Time Delivery',    sub: 'Consistent track record' },
  { value: '200+', label: 'SMB Clients Served',  sub: 'Across North America' },
  { value: '24/7', label: 'Customer Support',    sub: 'Always reachable' },
];

export default function Stats() {
  return (
    <section style={{ background: colors.white, borderBottom: `1px solid rgba(30,10,79,0.07)`, padding: `56px ${spacing.containerX}` }}>
      <div style={{ maxWidth: spacing.maxWidth, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} className="stack-mobile">
        {stats.map((s, i) => (
          <div key={s.label} style={{ textAlign: 'center', padding: '0 16px', borderLeft: i > 0 ? `1px solid rgba(30,10,79,0.08)` : 'none' }}>
            <div style={{ fontFamily: fonts.heading, fontWeight: fontWeights.black, fontSize: 'clamp(2.4rem,3.5vw,3.2rem)', color: colors.purple.mid, lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
            <div style={{ fontFamily: fonts.heading, fontWeight: fontWeights.bold, fontSize: '0.9rem', color: colors.green.DEFAULT, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 3 }}>{s.label}</div>
            <div style={{ fontSize: '0.75rem', color: colors.gray[400] }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
