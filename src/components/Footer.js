'use client';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import Image from "next/image";

const services = ['Air Freight', 'Ocean Freight', 'Road Freight & LTL', 'Customs Clearance', 'Specialized Cargo'];
const company = ['About Us', 'Careers', 'Blog', 'Partners', 'Privacy Policy', 'Terms of Service'];

export default function Footer() {
  return (
    <footer style={{ background: '#1E0A4F' }}>
      <div style={{ height: 3, background: 'linear-gradient(90deg,#F5C518,#1A8A3C,#F5C518)' }} />

      {/* CTA Banner */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '40px 24px' }}>
        <div className="container">
          <div className="cta-strip">
            <div>
              <div className="subheading" style={{ fontSize: 'clamp(1.3rem,3vw,1.7rem)', color: 'white', lineHeight: 1.1, marginBottom: 6 }}>
                READY TO MOVE YOUR CARGO?
              </div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>
                Get a personalized quote in under 2 hours.
              </div>
            </div>
            <a href="#contact" className="btn-gold">Get a Free Quote →</a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div style={{ padding: '56px 24px' }}>
        <div className="container">
          <div className="grid-footer">

            {/* Brand — full width on mobile */}
            <div className="footer-brand">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>

                <div style={{
                  position: "relative",
                  width: "5rem",
                  height: "5rem"
                }}>
                  <Image
                    src="/logo.png"
                    alt="D&O Cargo Connect Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 18, maxWidth: 320 }}>
                Expertly managing your supply chain from start to finish — delivering goods safely, on time, and at the best rates.
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                {[Globe, Mail, Phone].map((Icon, i) => (
                  <div key={i} style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <Icon size={14} color="rgba(255,255,255,0.45)" />
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <div className="subheading" style={{ fontSize: '0.72rem', color: '#F5C518', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Services</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {services.map(s => (
                  <a key={s} href="#services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>{s}</a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="subheading" style={{ fontSize: '0.72rem', color: '#F5C518', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Company</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {company.map(c => (
                  <a key={c} href="#" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>{c}</a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="subheading" style={{ fontSize: '0.72rem', color: '#F5C518', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { Icon: Mail, val: 'info@docargoconnect.com', href: 'mailto:info@docargoconnect.com', accent: '#F5C518' },
                  { Icon: Phone, val: '(346) 404-6682', href: 'tel:+13464046682', accent: '#1A8A3C' },
                  { Icon: MapPin, val: 'U.S Head Office:\nD&O CARGO CONNECT| 13606 Magnolia\n Pkwy| Rosharon, Texas 77583 | United States.', accent: '#F5C518' },
                ].map(item => (
                  <div key={item.val} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <item.Icon size={14} color={item.accent} style={{ marginTop: 2, flexShrink: 0 }} />
                    {item.href
                      ? <a href={item.href} style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.5 }}>{item.val}</a>
                      : <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{item.val}</span>
                    }
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, background: 'rgba(245,197,24,0.07)', border: '1px solid rgba(245,197,24,0.12)', borderRadius: 10, padding: '12px 14px' }}>
                <div className="subheading" style={{ fontSize: '0.68rem', color: '#F5C518', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Business Hours</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>Mon–Fri: 8am–6pm CST</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>Emergency: 24/7</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '18px 24px' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>© {new Date().getFullYear()} D&O Cargo Connect. All rights reserved.</span>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>Licensed Freight Broker · Houston, TX · FMCSA Registered</span>
        </div>
      </div>
    </footer>
  );
}
