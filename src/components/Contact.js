'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, MapPin, Phone, Send, Loader } from 'lucide-react';
export default function Contact() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', service:'', message:'' });
  const set = (k,v) => setForm(f=>({...f,[k]:v}));
  const inp = { width:'100%', padding:'12px 16px', borderRadius:10, border:'1px solid rgba(45,15,107,0.15)', fontSize:'0.88rem', fontFamily:"'Barlow',sans-serif", background:'#fff', outline:'none', color:'#1F2937' };
  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true); setError('');
    try {
      const res = await fetch('/api/quote',{ method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error||'Something went wrong');
      router.push('/thank-you');
    } catch(err) { setError(err.message||'Failed to send. Please try again.'); setLoading(false); }
  };
  return (
    <section id="contact" className="section" style={{ background:'#fff', position:'relative' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,#F5C518,#1A8A3C,#2D0F6B)' }} />
      <div className="container">
        <div className="grid-2-asym">
          <div>
            <span className="tag" style={{ background:'rgba(45,15,107,0.07)', color:'#2D0F6B' }}>Get In Touch</span>
            <h2 className="heading" style={{ fontSize:'clamp(2.2rem,3.5vw,3.2rem)', color:'#1E0A4F', marginBottom:16 }}>REQUEST YOUR<br/><span style={{ color:'#F5C518', WebkitTextStroke:'1px #D4A800' }}>FREE QUOTE</span></h2>
            <p style={{ color:'#6B7280', fontSize:'1rem', lineHeight:1.7, marginBottom:36 }}>Tell us about your shipment and we'll respond with a personalized solution within 2 hours.</p>
            <div style={{ display:'flex', flexDirection:'column', gap:20, marginBottom:32 }}>
              {[
                { Icon:Mail,   label:'Email Us',   val:'info@docargoconnect.com', href:'mailto:info@docargoconnect.com', accent:'#F5C518' },
                { Icon:Phone,  label:'Call Us',    val:'(346) 404-6682',          href:'tel:+13464046682',              accent:'#1A8A3C' },
                { Icon:MapPin, label:'Our Office', val:'6804 Hwy 6 S Ste E #1009\nHouston, TX 77083',                    accent:'#2D0F6B' },
              ].map(item=>(
                <div key={item.label} style={{ display:'flex', alignItems:'flex-start', gap:14 }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:`${item.accent}18`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}><item.Icon size={18} color={item.accent}/></div>
                  <div>
                    <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:'0.68rem', color:item.accent, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:3 }}>{item.label}</div>
                    {item.href?<a href={item.href} style={{ color:'#374151', fontSize:'0.88rem', fontWeight:500 }}>{item.val}</a>:<span style={{ color:'#374151', fontSize:'0.88rem', fontWeight:500, whiteSpace:'pre-line' }}>{item.val}</span>}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderRadius:16, overflow:'hidden', height:200 }}>
              <img src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=700&q=80" alt="Global routes" />
            </div>
          </div>
          <div style={{ background:'#F9FAFB', border:'1px solid rgba(45,15,107,0.09)', borderRadius:20, padding:36 }}>
            <div className="subheading" style={{ fontSize:'1.3rem', color:'#1E0A4F', letterSpacing:'0.02em', marginBottom:24 }}>Shipment Details</div>
            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:14 }}>
              <div className="grid-inputs">
                {[['name','Your Name','text'],['company','Company','text']].map(([k,ph,t])=>(
                  <div key={k}><label style={{ display:'block', fontSize:'0.68rem', fontWeight:700, color:'#6B7280', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:5 }}>{ph}</label><input type={t} placeholder={ph} value={form[k]} onChange={e=>set(k,e.target.value)} required={k==='name'} style={inp}/></div>
                ))}
              </div>
              <div className="grid-inputs">
                {[['email','Email','email'],['phone','Phone','tel']].map(([k,ph,t])=>(
                  <div key={k}><label style={{ display:'block', fontSize:'0.68rem', fontWeight:700, color:'#6B7280', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:5 }}>{ph}</label><input type={t} placeholder={ph} value={form[k]} onChange={e=>set(k,e.target.value)} required={k==='email'} style={inp}/></div>
                ))}
              </div>
              <div><label style={{ display:'block', fontSize:'0.68rem', fontWeight:700, color:'#6B7280', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:5 }}>Service Needed</label>
                <select value={form.service} onChange={e=>set('service',e.target.value)} required style={{...inp,color:form.service?'#1F2937':'#9CA3AF'}}>
                  <option value="">Select a service...</option>
                  {['Air Freight','Ocean Freight (FCL)','Ocean Freight (LCL)','Road Freight / LTL','Road Freight / FTL','Customs Clearance','Warehousing','End-to-End Supply Chain'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div><label style={{ display:'block', fontSize:'0.68rem', fontWeight:700, color:'#6B7280', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:5 }}>Shipment Details</label>
                <textarea placeholder="Tell us about your cargo — origin, destination, weight, timeline..." value={form.message} onChange={e=>set('message',e.target.value)} rows={4} style={{...inp,resize:'none'}}/>
              </div>
              {error&&<div style={{ background:'rgba(220,38,38,0.08)', border:'1px solid rgba(220,38,38,0.2)', borderRadius:8, padding:'10px 14px', fontSize:'0.83rem', color:'#DC2626' }}>⚠️ {error}</div>}
              <button type="submit" disabled={loading} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, background:loading?'#D4A800':'linear-gradient(135deg,#F5C518,#FFD94D)', color:'#1E0A4F', fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:'0.9rem', letterSpacing:'0.07em', textTransform:'uppercase', padding:'14px', borderRadius:10, border:'none', cursor:loading?'not-allowed':'pointer', width:'100%', marginTop:4 }}>
                {loading?<><Loader size={15} className="spin"/>Sending...</>:<><Send size={15}/>Send Quote Request</>}
              </button>
              <p style={{ textAlign:'center', fontSize:'0.75rem', color:'#9CA3AF' }}>We respond within 2 business hours. No spam, ever.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
