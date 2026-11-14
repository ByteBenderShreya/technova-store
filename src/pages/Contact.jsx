import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', msg:''})
  const [err, setErr] = useState('')

  const submit = (e)=>{
    e.preventDefault();
    if(!form.name || !form.email || !form.msg) return setErr('All fields required')
    if(!form.email.includes('@')) return setErr('Valid email required')
    setErr(''); alert('Message sent! (Demo)'); setForm({name:'',email:'',msg:''})
  }

  return(
    <div style={{maxWidth:'1100px', margin:'0 auto', padding:'50px 20px'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:'40px'}}>
        <div>
          <h1 style={{fontSize:'36px', color:'#0F1E3D'}}>Get in Touch</h1>
          <p style={{color:'#475569', marginTop:'10px'}}>Have questions? We are here to help.</p>
          <div style={{marginTop:'20px', lineHeight:'2'}}>
            <p>📧 support@technova.com</p>
            <p>📞 +91 86042 31567</p>
            <p>📍 Greater Noida, Uttar Pradesh, India</p>
          </div>
        </div>
        <form onSubmit={submit} style={{background:'#F8FAFC', border:'1px solid #E2E8F0', padding:'24px', borderRadius:'12px', display:'flex', flexDirection:'column', gap:'14px'}}>
          <h3>Send Message</h3>
          {err && <span style={{color:'#EF4444', fontSize:'13px'}}>{err}</span>}
          <input placeholder="Your Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} style={{padding:'12px', border:'1px solid #E2E8F0', borderRadius:'8px'}}/>
          <input placeholder="Email Address" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} style={{padding:'12px', border:'1px solid #E2E8F0', borderRadius:'8px'}}/>
          <textarea placeholder="Your Message" rows="5" value={form.msg} onChange={e=>setForm({...form, msg:e.target.value})} style={{padding:'12px', border:'1px solid #E2E8F0', borderRadius:'8px'}}></textarea>
          <button type="submit" style={{background:'#2563EB', color:'#fff', padding:'12px', borderRadius:'8px', border:'none', fontWeight:600}}>Send Message</button>
        </form>
      </div>
    </div>
  )
}