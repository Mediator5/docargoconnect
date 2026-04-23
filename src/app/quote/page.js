'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, MapPin, Phone, Send, Loader, Upload, X, FileText, File, Image } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ACCEPTED = ['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','image/jpeg','image/png','image/webp','text/plain'];
const MAX_MB = 10;
const MAX_FILES = 5;

function fileIcon(type) {
  if (type.startsWith('image/')) return <Image size={16} color="#1A8A3C" />;
  if (type === 'application/pdf') return <FileText size={16} color="#F5C518" />;
  return <File size={16} color="#2D0F6B" />;
}
function fmtSize(b) {
  if (b < 1024) return b + ' B';
  if (b < 1048576) return (b/1024).toFixed(1) + ' KB';
  return (b/1048576).toFixed(1) + ' MB';
}

export default function QuotePage() {
  const router = useRouter();
  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const [fileErr, setFileErr] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles]     = useState([]);
  const [form, setForm]       = useState({ name:'', company:'', email:'', phone:'', service:'', message:'' });
  const set = (k,v) => setForm(f => ({...f,[k]:v}));

  const inp = { width:'100%', padding:'12px 16px', borderRadius:10, border:'1px solid rgba(45,15,107,0.15)', fontSize:'0.88rem', fontFamily:"'Barlow',sans-serif", background:'#fff', outline:'none', color:'#1F2937' };
  const lbl = { display:'block', fontSize:'0.68rem', fontWeight:700, color:'#6B7280', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:5 };

  const addFiles = (newFiles) => {
    setFileErr('');
    const all = [...files];
    for (const f of newFiles) {
      if (all.length >= MAX_FILES)  { setFileErr(`Max ${MAX_FILES} files allowed.`); break; }
      if (f.size > MAX_MB * 1048576){ setFileErr(`"${f.name}" exceeds ${MAX_MB}MB.`); continue; }
      if (!ACCEPTED.includes(f.type)){ setFileErr(`"${f.name}" is not a supported type.`); continue; }
      if (all.find(x => x.name === f.name && x.size === f.size)) continue;
      all.push(f);
    }
    setFiles(all);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true); setError('');
    try {
      const fd = new FormData();
      fd.append('formData', JSON.stringify(form));
      files.forEach(f => fd.append('attachments', f));
      const res  = await fetch('/api/quote-full', { method:'POST', body:fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      router.push('/thank-you');
    } catch(err) { setError(err.message || 'Failed to send. Please try again.'); setLoading(false); }
  };

  return (
    <>
      <Navbar />
      <main style={{ background:'#F9FAFB', minHeight:'100vh' }}>

        {/* Hero banner — same style as contact section */}
        <div style={{ background:'linear-gradient(135deg,#1E0A4F 0%,#2D0F6B 100%)', padding:'110px 24px 56px', position:'relative', overflow:'hidden' }}>
          <div className="dot-bg" style={{ position:'absolute', inset:0, opacity:0.5 }} />
          <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,#F5C518,#1A8A3C,#F5C518)' }} />
          <div style={{ position:'absolute', right:'-5%', top:'50%', transform:'translateY(-50%)', width:360, height:360, borderRadius:'50%', background:'#F5C518', opacity:0.05, filter:'blur(80px)' }} />
          <div className="container" style={{ position:'relative' }}>
            <span className="tag" style={{ background:'rgba(245,197,24,0.1)', color:'#F5C518', border:'1px solid rgba(245,197,24,0.25)' }}>Free Quote</span>
            <h1 className="heading" style={{ fontSize:'clamp(2.4rem,5vw,4rem)', color:'white', marginBottom:16 }}>
              GET YOUR<br /><span style={{ color:'#F5C518' }}>FREIGHT QUOTE</span>
            </h1>
            <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'1rem', lineHeight:1.7, maxWidth:520 }}>
              Fill in your shipment details and attach any documents. We'll respond with a personalized, competitive quote within <strong style={{ color:'white' }}>2 business hours</strong>.
            </p>
          </div>
        </div>

        {/* Form — same layout as contact section */}
        <section className="section" style={{ background:'#F9FAFB' }}>
          <div className="container">
            <div className="" style={{padding: '50px'}}>

            

              {/* Right — form */}
              <div style={{ background:'#fff', border:'1px solid rgba(45,15,107,0.09)', borderRadius:20 }}>
                <div className="subheading" style={{ fontSize:'1.3rem', color:'#1E0A4F', letterSpacing:'0.02em', marginBottom:24 }}>Request for a Quote</div>

                <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:14 }}>

                  {/* Name & Company */}
                  <div className="grid-inputs">
                    {[['name','Your Name','text'],['company','Company','text']].map(([k,ph,t]) => (
                      <div key={k}>
                        <label style={lbl}>{ph}{k==='name'&&<span style={{ color:'#F5C518' }}> *</span>}</label>
                        <input type={t} placeholder={ph} value={form[k]} onChange={e=>set(k,e.target.value)} required={k==='name'} style={inp} />
                      </div>
                    ))}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid-inputs">
                    {[['email','Email','email'],['phone','Phone','tel']].map(([k,ph,t]) => (
                      <div key={k}>
                        <label style={lbl}>{ph}{k==='email'&&<span style={{ color:'#F5C518' }}> *</span>}</label>
                        <input type={t} placeholder={ph} value={form[k]} onChange={e=>set(k,e.target.value)} required={k==='email'} style={inp} />
                      </div>
                    ))}
                  </div>

                  {/* Service */}
                  <div>
                    <label style={lbl}>Service Needed <span style={{ color:'#F5C518' }}>*</span></label>
                    <select value={form.service} onChange={e=>set('service',e.target.value)} required style={{...inp, color:form.service?'#1F2937':'#9CA3AF'}}>
                      <option value="">Select a service...</option>
                      {['Air Freight','Ocean Freight (FCL)','Ocean Freight (LCL)','Road Freight / LTL','Road Freight / FTL','Customs Clearance','Warehousing','End-to-End Supply Chain'].map(o=><option key={o}>{o}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={lbl}>Shipment Details</label>
                    <textarea placeholder="Tell us about your cargo — origin, destination, weight, dimensions, timeline..." value={form.message} onChange={e=>set('message',e.target.value)} rows={4} style={{...inp, resize:'none'}} />
                  </div>

                  {/* ── File upload ── */}
                  <div>
                    <label style={lbl}>Attach Documents <span style={{ color:'#9CA3AF', textTransform:'none', fontSize:'0.65rem', fontWeight:400, letterSpacing:0 }}>(optional — PDF, Word, Excel, Images)</span></label>

                    {/* Drop zone */}
                    <div
                      onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={e => { e.preventDefault(); setDragOver(false); addFiles(Array.from(e.dataTransfer.files)); }}
                      onClick={() => fileRef.current?.click()}
                      style={{ border:`2px dashed ${dragOver ? '#F5C518' : 'rgba(45,15,107,0.18)'}`, borderRadius:12, padding:'22px 16px', textAlign:'center', cursor:'pointer', background:dragOver ? 'rgba(245,197,24,0.04)' : '#FAFAFA', transition:'all 0.2s' }}
                    >
                      <Upload size={24} color={dragOver ? '#F5C518' : '#9CA3AF'} style={{ margin:'0 auto 8px' }} />
                      <div style={{ fontSize:'0.85rem', fontWeight:600, color:'#374151', marginBottom:3 }}>
                        Drag & drop or <span style={{ color:'#2D0F6B', textDecoration:'underline' }}>browse files</span>
                      </div>
                      <div style={{ fontSize:'0.72rem', color:'#9CA3AF' }}>
                        Max {MAX_MB}MB per file · Up to {MAX_FILES} files
                      </div>
                      <input ref={fileRef} type="file" multiple accept={ACCEPTED.join(',')} style={{ display:'none' }}
                        onChange={e => { addFiles(Array.from(e.target.files)); e.target.value=''; }} />
                    </div>

                    {/* File error */}
                    {fileErr && (
                      <div style={{ marginTop:8, fontSize:'0.8rem', color:'#DC2626', background:'rgba(220,38,38,0.07)', border:'1px solid rgba(220,38,38,0.2)', borderRadius:8, padding:'8px 12px' }}>
                        ⚠️ {fileErr}
                      </div>
                    )}

                    {/* File list */}
                    {files.length > 0 && (
                      <div style={{ display:'flex', flexDirection:'column', gap:6, marginTop:10 }}>
                        {files.map((f, i) => (
                          <div key={i} style={{ display:'flex', alignItems:'center', gap:10, background:'#F9FAFB', border:'1px solid rgba(45,15,107,0.08)', borderRadius:9, padding:'8px 12px' }}>
                            {fileIcon(f.type)}
                            <div style={{ flex:1, minWidth:0 }}>
                              <div style={{ fontSize:'0.82rem', fontWeight:600, color:'#1F2937', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{f.name}</div>
                              <div style={{ fontSize:'0.7rem', color:'#9CA3AF' }}>{fmtSize(f.size)}</div>
                            </div>
                            <button type="button" onClick={() => setFiles(files.filter((_,idx)=>idx!==i))}
                              style={{ background:'none', border:'none', cursor:'pointer', color:'#9CA3AF', padding:2, display:'flex' }}>
                              <X size={15} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Error */}
                  {error && (
                    <div style={{ background:'rgba(220,38,38,0.08)', border:'1px solid rgba(220,38,38,0.2)', borderRadius:8, padding:'10px 14px', fontSize:'0.83rem', color:'#DC2626' }}>
                      ⚠️ {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button type="submit" disabled={loading}
                    style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, background:loading?'#D4A800':'linear-gradient(135deg,#F5C518,#FFD94D)', color:'#1E0A4F', fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:'0.9rem', letterSpacing:'0.07em', textTransform:'uppercase', padding:'14px', borderRadius:10, border:'none', cursor:loading?'not-allowed':'pointer', width:'100%', marginTop:4 }}>
                    {loading ? <><Loader size={15} className="spin" /> Sending...</> : <><Send size={15} /> Send Quote Request</>}
                  </button>

                  <p style={{ textAlign:'center', fontSize:'0.75rem', color:'#9CA3AF' }}>
                    We respond within 2 business hours. No spam, ever.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}