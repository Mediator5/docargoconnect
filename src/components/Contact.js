'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, MapPin, Phone, Send, Loader } from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const [form, setForm]       = useState({ name:'', company:'', email:'', phone:'', service:'', message:'' });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const inp = {
    width: '100%', padding: '12px 16px', borderRadius: 10,
    border: '1px solid rgba(45,15,107,0.15)', fontSize: '0.88rem',
    fontFamily: "'Barlow',sans-serif", background: '#fff', outline: 'none', color: '#1F2937',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res  = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      router.push('/thank-you');
    } catch (err) {
      setError(err.message || 'Failed to send. Please try again or email us directly.');
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-24 px-6 relative">
      <div style={{ background: 'linear-gradient(90deg,#F5C518,#1A8A3C,#2D0F6B)' }} className="absolute top-0 left-0 right-0 h-[3px]" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left info */}
        <div>
          <span style={{ background: 'rgba(45,15,107,0.07)', color: '#2D0F6B', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.16em' }}
            className="inline-block uppercase px-4 py-1.5 rounded-full mb-4">Get In Touch</span>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 'clamp(2.2rem,3.5vw,3.2rem)', color: '#1E0A4F', lineHeight: 0.95 }} className="mb-4">
            REQUEST YOUR<br /><span style={{ color: '#F5C518', WebkitTextStroke: '1px #D4A800' }}>FREE QUOTE</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-9">
            Tell us about your shipment and we'll respond with a personalized freight solution within 2 hours.
          </p>

          <div className="flex flex-col gap-5 mb-8">
            {[
              { Icon: Mail,   label: 'Email Us',   val: 'info@docargoconnect.com', href: 'mailto:info@docargoconnect.com', accent: '#F5C518' },
              { Icon: Phone,  label: 'Call Us',    val: '(346) 404-6682',          href: 'tel:+13464046682',              accent: '#1A8A3C' },
              { Icon: MapPin, label: 'Our Office', val: '6804 Hwy 6 S Ste E #1009\nHouston, TX 77083', accent: '#2D0F6B' },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4">
                <div style={{ background: `${item.accent}18` }} className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.Icon size={18} color={item.accent} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.68rem', color: item.accent, letterSpacing: '0.1em' }} className="uppercase mb-1">{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ color: '#374151', fontWeight: 500, fontSize: '0.88rem' }} className="no-underline">{item.val}</a>
                    : <span style={{ color: '#374151', fontWeight: 500, fontSize: '0.88rem', whiteSpace: 'pre-line' }}>{item.val}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ height: 200 }}>
            <img src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=700&q=80" alt="Global routes" className="img-cover" />
          </div>
        </div>

        {/* Right form */}
        <div style={{ background: '#F9FAFB', border: '1px solid rgba(45,15,107,0.09)' }} className="rounded-2xl p-8 lg:p-9">
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.3rem', color: '#1E0A4F', letterSpacing: '0.02em' }} className="mb-6">Shipment Details</div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[['name','Your Name','text'],['company','Company','text']].map(([k,ph,t]) => (
                <div key={k}>
                  <label style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em' }} className="block uppercase mb-1.5">{ph}</label>
                  <input type={t} placeholder={ph} value={form[k]} onChange={e => set(k, e.target.value)} required={k==='name'} style={inp} />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[['email','Email','email'],['phone','Phone','tel']].map(([k,ph,t]) => (
                <div key={k}>
                  <label style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em' }} className="block uppercase mb-1.5">{ph}</label>
                  <input type={t} placeholder={ph} value={form[k]} onChange={e => set(k, e.target.value)} required={k==='email'} style={inp} />
                </div>
              ))}
            </div>
            <div>
              <label style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em' }} className="block uppercase mb-1.5">Service Needed</label>
              <select value={form.service} onChange={e => set('service', e.target.value)} required style={{ ...inp, color: form.service ? '#1F2937' : '#9CA3AF' }}>
                <option value="">Select a service...</option>
                {['Air Freight','Ocean Freight (FCL)','Ocean Freight (LCL)','Road Freight / LTL','Road Freight / FTL','Customs Clearance','Warehousing','End-to-End Supply Chain'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6B7280', letterSpacing: '0.08em' }} className="block uppercase mb-1.5">Shipment Details</label>
              <textarea placeholder="Tell us about your cargo — origin, destination, weight, timeline..." value={form.message} onChange={e => set('message', e.target.value)} rows={4} style={{ ...inp, resize: 'none' }} />
            </div>

            {error && (
              <div style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.2)', color: '#DC2626' }} className="rounded-lg px-4 py-2.5 text-sm">
                ⚠️ {error}
              </div>
            )}

            <button type="submit" disabled={loading}
              style={{ background: loading ? '#D4A800' : 'linear-gradient(135deg,#F5C518,#FFD94D)', color: '#1E0A4F', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.07em', cursor: loading ? 'not-allowed' : 'pointer', border: 'none', transition: 'all 0.2s' }}
              className="w-full flex items-center justify-center gap-2 uppercase py-3.5 rounded-xl mt-1">
              {loading ? <><Loader size={15} className="animate-spin" /> Sending...</> : <><Send size={15} /> Send Quote Request</>}
            </button>
            <p className="text-center text-xs text-gray-400">We respond within 2 business hours. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
