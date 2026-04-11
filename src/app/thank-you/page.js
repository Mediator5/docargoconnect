import Link from 'next/link';

export const metadata = {
  title: 'Thank You | D&O Cargo Connect',
  description: 'Your quote request was received. Our team will be in touch within 2 business hours.',
};

export default function ThankYou() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#1E0A4F 0%,#2D0F6B 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(245,197,24,0.1) 1px,transparent 1px)', backgroundSize: '28px 28px', opacity: 0.6 }} />
      <div style={{ position: 'absolute', top: '20%', right: '15%', width: 360, height: 360, borderRadius: '50%', background: '#F5C518', opacity: 0.05, filter: 'blur(80px)' }} />
      <div style={{ position: 'absolute', bottom: '15%', left: '15%', width: 260, height: 260, borderRadius: '50%', background: '#1A8A3C', opacity: 0.07, filter: 'blur(60px)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#F5C518,#1A8A3C,#F5C518)' }} />

      <div style={{ position: 'relative', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: '56px 44px', maxWidth: 540, width: '100%', textAlign: 'center' }}>

        {/* Check icon */}
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, position: 'relative' }}>
          <div style={{ width: 88, height: 88, borderRadius: '50%', background: 'rgba(26,138,60,0.15)', border: '2px solid rgba(26,138,60,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#1A8A3C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'white' }}>✓</div>
          </div>
        </div>

        {/* Logo text */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 24 }}>
          <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#F5C518,#FFD94D)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '0.68rem', color: '#1E0A4F' }}>D&O</div>
          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '0.95rem', color: '#F5C518', letterSpacing: '0.06em' }}>D&O CARGO CONNECT</span>
        </div>

        <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,2.8rem)', color: 'white', lineHeight: 1, marginBottom: 12 }}>THANK YOU!</h1>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#F5C518', marginBottom: 18, letterSpacing: '0.04em' }}>Your Quote Request Was Received</div>
        <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: 32, fontFamily: "'Barlow',sans-serif" }}>
          Our logistics team is reviewing your shipment details. You'll receive a personalized freight solution and competitive quote within <strong style={{ color: 'white' }}>2 business hours</strong>.
        </p>

        {/* What's next */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '20px 22px', marginBottom: 24, textAlign: 'left' }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', color: '#F5C518', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>What Happens Next</div>
          {[['1','Review','Team reviews your cargo requirements'],['2','Optimize','Best route & carrier selected for you'],['3','Quote','Detailed quote sent to your email']].map(([n,t,d]) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#F5C518,#FFD94D)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '0.78rem', color: '#1E0A4F', flexShrink: 0 }}>{n}</div>
              <div style={{ fontFamily: "'Barlow',sans-serif", fontSize: '0.84rem', color: 'rgba(255,255,255,0.72)' }}><strong style={{ color: 'white' }}>{t}</strong> — {d}</div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div style={{ background: 'rgba(245,197,24,0.07)', border: '1px solid rgba(245,197,24,0.15)', borderRadius: 12, padding: '14px 18px', marginBottom: 28 }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', color: '#F5C518', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Need to reach us sooner?</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
            <a href="mailto:info@docargoconnect.com" style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.83rem', textDecoration: 'none' }}>📧 info@docargoconnect.com</a>
            <a href="tel:+13464046682" style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.83rem', textDecoration: 'none' }}>📞 (346) 404-6682</a>
          </div>
        </div>

        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#F5C518,#FFD94D)', color: '#1E0A4F', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '0.86rem', letterSpacing: '0.07em', textTransform: 'uppercase', padding: '12px 30px', borderRadius: 999, textDecoration: 'none' }}>
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
