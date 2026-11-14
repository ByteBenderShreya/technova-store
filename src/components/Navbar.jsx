import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Navbar(){
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const { cart } = useCart();

  const handleSearch = (e)=>{
    e.preventDefault();
    navigate(`/products?search=${q}`);
  }

  return(
    <nav style={{position:'sticky', top:0, zIndex:99, background:'#fff', borderBottom:'1px solid #E2E8F0'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', height:'72px', maxWidth:'1200px', margin:'0 auto', padding:'0 20px'}}>
        <Link to="/" style={{fontSize:'22px', fontWeight:800, color:'#0F1E3D'}}>Tech<span style={{color:'#2563EB'}}>Nova</span></Link>
        <div style={{display:'flex', gap:'20px', fontWeight:500}}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <form onSubmit={handleSearch} style={{display:'flex', background:'#F8FAFC', border:'1px solid #E2E8F0', borderRadius:'8px', padding:'6px 10px'}}>
          <input placeholder="Search..." value={q} onChange={e=>setQ(e.target.value)} style={{border:'none', outline:'none', background:'transparent'}}/>
          <button type="submit" style={{border:'none', background:'transparent', cursor:'pointer'}}>🔍</button>
        </form>
        <div style={{display:'flex', gap:'16px', fontWeight:600}}>
          <Link to="/login">Login</Link>
          <Link to="/cart" style={{background:'#0F1E3D', color:'#fff', padding:'6px 14px', borderRadius:'20px', fontSize:'14px'}}>Cart ({cart.length})</Link>
        </div>
      </div>
    </nav>
  )
}