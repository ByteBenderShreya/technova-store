import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }){
  const { addToCart } = useCart();
  if(!product) return null;

  return(
    <div style={{border:'1px solid #E2E8F0', borderRadius:'12px', overflow:'hidden', background:'#fff'}}>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} style={{width:'100%', height:'200px', objectFit:'cover'}} onError={(e)=>{e.target.src='https://via.placeholder.com/300'}}/>
      </Link>
      <div style={{padding:'14px'}}>
        <p style={{fontSize:'11px', color:'#2563EB', fontWeight:700}}>{product.category}</p>
        <Link to={`/products/${product.id}`} style={{textDecoration:'none', color:'#0F1E3D'}}><h3 style={{fontSize:'16px', margin:'4px 0'}}>{product.name}</h3></Link>
        <p style={{fontSize:'13px', color:'#64748B', height:'32px', overflow:'hidden'}}>{product.description}</p>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'12px'}}>
          <span style={{fontWeight:800}}>₹{product.price.toLocaleString()}</span>
          <button onClick={()=>{addToCart(product); alert('Added to Cart!')}} style={{background:'#0F1E3D', color:'#fff', border:'none', padding:'6px 12px', borderRadius:'6px', cursor:'pointer', fontSize:'13px'}}>Add</button>
        </div>
      </div>
    </div>
  )
}