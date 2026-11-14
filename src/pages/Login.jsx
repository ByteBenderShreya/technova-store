import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login(){
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!email.includes('@')) return setMsg('Valid email daalo')
    if(pass.length < 6) return setMsg('Password 6 characters ka hona chahiye')
    setMsg('')
    alert(isLogin ? 'Login Successful (Demo)' : 'Account Created (Demo)');
  }

  return(
    <div style={{maxWidth:'420px', margin:'60px auto', padding:'24px', border:'1px solid #E2E8F0', borderRadius:'12px', background:'#fff', boxShadow:'0 4px 12px rgba(0,0,0,0.05)'}}>
      <h2 style={{textAlign:'center', marginBottom:'6px', color:'#0F1E3D'}}>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
      <p style={{textAlign:'center', color:'#64748B', fontSize:'13px', marginBottom:'20px'}}>TechNova Store - Demo Login</p>
      
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'12px'}}>
        <input style={{width:'100%', padding:'12px', border:'1px solid #E2E8F0', borderRadius:'8px'}} placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <input style={{width:'100%', padding:'12px', border:'1px solid #E2E8F0', borderRadius:'8px'}} type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)}/>
        {!isLogin && <input style={{width:'100%', padding:'12px', border:'1px solid #E2E8F0', borderRadius:'8px'}} placeholder="Full Name"/>}
        
        {msg && <p style={{color:'#EF4444', fontSize:'13px', textAlign:'center'}}>{msg}</p>}
        
        <button type="submit" style={{width:'100%', background:'#2563EB', color:'#fff', padding:'12px', borderRadius:'8px', border:'none', fontWeight:600, cursor:'pointer'}}>
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <p style={{textAlign:'center', marginTop:'14px', fontSize:'14px'}}>
        {isLogin ? "Don't have account? " : "Already have account? "}
        <span style={{color:'#2563EB', cursor:'pointer', fontWeight:600}} onClick={()=>setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Sign In'}
        </span>
      </p>
      
      <Link to="/" style={{display:'block', textAlign:'center', marginTop:'12px', fontSize:'13px', color:'#64748B'}}>← Back to Home</Link>
    </div>
  )
}