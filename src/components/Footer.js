'use client';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

const services = ['Air Freight','Ocean Freight','Road Freight & LTL','Customs Clearance','Warehousing','Specialized Cargo'];
const company  = ['About Us','Careers','Blog','Partners','Privacy Policy','Terms of Service'];

export default function Footer() {
  return (
    <footer style={{ background: '#1E0A4F' }}>
      <div style={{ background: 'linear-gradient(90deg,#F5C518,#1A8A3C,#F5C518)' }} className="h-[3px]" />

      {/* CTA banner */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }} className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.7rem', color: 'white', lineHeight: 1 }} className="mb-1.5">READY TO MOVE YOUR CARGO?</div>
            <div style={{ color: 'rgba(255,255,255,0.45)' }} className="text-sm">Get a personalized quote in under 2 hours.</div>
          </div>
          <a href="#contact" className="btn-gold flex-shrink-0">Get a Free Quote →</a>
        </div>
      </div>

      {/* Main grid */}
      <div className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div style={{ background: 'linear-gradient(135deg,#F5C518,#FFD94D)', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '0.85rem', color: '#1E0A4F' }}
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">D&O</div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, color: '#F5C518', fontSize: '1.1rem' }}>D&O</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: '#1A8A3C', fontSize: '0.6rem', letterSpacing: '0.14em' }} className="uppercase">Cargo Connect</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)' }} className="text-sm leading-relaxed mb-5">
              Expertly managing your supply chain from start to finish — delivering goods safely, on time, and at the best rates.
            </p>
            <div className="flex gap-2">
              {[Globe, Mail, Phone].map((Icon, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.06)' }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer">
                  <Icon size={14} color="rgba(255,255,255,0.45)" />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', color: '#F5C518', letterSpacing: '0.14em' }} className="uppercase mb-4">Services</div>
            <div className="flex flex-col gap-2">
              {services.map(s => <a key={s} href="#services" style={{ color: 'rgba(255,255,255,0.45)' }} className="text-sm no-underline hover:text-white transition-colors">{s}</a>)}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', color: '#F5C518', letterSpacing: '0.14em' }} className="uppercase mb-4">Company</div>
            <div className="flex flex-col gap-2">
              {company.map(c => <a key={c} href="#" style={{ color: 'rgba(255,255,255,0.45)' }} className="text-sm no-underline hover:text-white transition-colors">{c}</a>)}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.72rem', color: '#F5C518', letterSpacing: '0.14em' }} className="uppercase mb-4">Contact</div>
            <div className="flex flex-col gap-3.5">
              {[
                { Icon: Mail,   val: 'info@docargoconnect.com', href: 'mailto:info@docargoconnect.com', accent: '#F5C518' },
                { Icon: Phone,  val: '(346) 404-6682',          href: 'tel:+13464046682',              accent: '#1A8A3C' },
                { Icon: MapPin, val: '6804 Hwy 6 S Ste E #1009\nHouston, TX 77083',                    accent: '#F5C518' },
              ].map(item => (
                <div key={item.val} className="flex items-start gap-2.5">
                  <item.Icon size={14} color={item.accent} className="mt-0.5 flex-shrink-0" />
                  {item.href
                    ? <a href={item.href} style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.5 }} className="no-underline">{item.val}</a>
                    : <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{item.val}</span>}
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(245,197,24,0.07)', border: '1px solid rgba(245,197,24,0.12)' }} className="mt-4 rounded-xl p-3.5">
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', color: '#F5C518', letterSpacing: '0.08em' }} className="uppercase mb-1.5">Business Hours</div>
              <div style={{ color: 'rgba(255,255,255,0.4)' }} className="text-xs">Mon–Fri: 8am–6pm CST</div>
              <div style={{ color: 'rgba(255,255,255,0.4)' }} className="text-xs">Emergency: 24/7</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="py-5 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span style={{ color: 'rgba(255,255,255,0.25)' }} className="text-xs">© {new Date().getFullYear()} D&O Cargo Connect. All rights reserved.</span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }} className="text-xs">Licensed Freight Broker · Houston, TX · FMCSA Registered</span>
        </div>
      </div>
    </footer>
  );
}
