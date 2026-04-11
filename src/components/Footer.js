'use client';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import Image from "next/image";

const services = ['Air Freight','Ocean Freight','Road Freight & LTL','Customs Clearance','Warehousing','Specialized Cargo'];
const company  = ['About Us','Careers','Blog','Partners','Privacy Policy','Terms of Service'];

export default function Footer() {
  return (
    <footer style={{ background: '#1E0A4F' }}>
      <div style={{ height: 3, background: 'linear-gradient(90deg,#F5C518,#1A8A3C,#F5C518)' }} />

      {/* CTA banner */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.7rem', color: 'white', lineHeight: 1, marginBottom: 6 }}>READY TO MOVE YOUR CARGO?</div>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>Get a personalized quote in under 2 hours.</div>
          </div>
          <a href="#contact" className="btn-gold">Get a Free Quote →</a>
        </div>
      </div>

      {/* Main */}
      <div style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.3fr', gap: 40 }} className="stack-mobile">
          {/* Brand */}
          <div>
            {/* <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg,#F5C518,#FFD94D)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '0.85rem', color: '#1E0A4F', flexShrink: 0 }}>D&O</div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, color: '#F5C518', fontSize: '1.1rem' }}>D&O</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: '#1A8A3C', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Cargo Connect</div>
              </div>
            </div> */}
            <Image
                        src="/logo.png"
                        alt="Freight logistics"
                        width={60}
                        height={60}
                        className="rounded-xl object-cover"
                      />
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 20 }}>
              Expertly managing your supply chain from start to finish — delivering goods safely, on time, and at the best rates.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[Globe, Mail, Phone].map((Icon,i) => (
                <div key={i} style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Icon size={14} color="rgba(255,255,255,0.45)" />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', color: '#F5C518', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>Services</div>
            {services.map(s => <div key={s} style={{ marginBottom: 8 }}><a href="#services" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>{s}</a></div>)}
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', color: '#F5C518', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>Company</div>
            {company.map(c => <div key={c} style={{ marginBottom: 8 }}><a href="#" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', textDecoration: 'none' }}>{c}</a></div>)}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', color: '#F5C518', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>Contact</div>
            {[
              { Icon: Mail,   val: 'info@docargoconnect.com', href: 'mailto:info@docargoconnect.com', accent: '#F5C518' },
              { Icon: MapPin, val: '6804 Hwy 6 S Ste E #1009\nHouston, TX 77083',                     accent: '#1A8A3C' },
              { Icon: Phone,  val: '(346) 404-6682',                                               accent: '#F5C518' },
            ].map(item => (
              <div key={item.val} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
                <item.Icon size={14} color={item.accent} style={{ marginTop: 2, flexShrink: 0 }} />
                {item.href
                  ? <a href={item.href} style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.5, textDecoration: 'none' }}>{item.val}</a>
                  : <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{item.val}</span>}
              </div>
            ))}
            <div style={{ marginTop: 12, background: 'rgba(245,197,24,0.07)', border: '1px solid rgba(245,197,24,0.12)', borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', color: '#F5C518', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Business Hours</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>Mon–Fri: 8am–6pm CST</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>Emergency: 24/7</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>© {new Date().getFullYear()} D&O Cargo Connect. All rights reserved.</span>
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>Licensed Freight Broker · Houston, TX · FMCSA Registered</span>
        </div>
      </div>
    </footer>
  );
}
