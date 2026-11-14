import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetails(){
  const { id } = useParams();
  const product = products.find(p=>p.id === parseInt(id));
  const { addToCart } = useCart();
  
  if(!product) return <p style={{padding:'40px', textAlign:'center'}}>Product not found</p>

  return(
    <div style={{maxWidth:'1000px', margin:'0 auto', padding:'40px 20px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'40px'}}>
      <img src={product.image} alt={product.name} style={{width:'100%', height:'400px', objectFit:'cover', borderRadius:'12px'}}/>
      <div>
        <span style={{color:'#2563EB', fontWeight:700, fontSize:'12px', textTransform:'uppercase'}}>{product.category}</span>
        <h1 style={{fontSize:'32px', margin:'10px 0', color:'#0F1E3D'}}>{product.name}</h1>
        <p style={{color:'#475569', lineHeight:'1.6', marginBottom:'20px'}}>{product.description} - Premium quality with 1 year warranty. Best for students and professionals.</p>
        <h2 style={{fontSize:'28px', color:'#0F1E3D', marginBottom:'20px'}}>₹{product.price.toLocaleString()}</h2>
        <button onClick={()=>{addToCart(product); alert('Added to Cart!')}} style={{background:'#2563EB', color:'#fff', padding:'12px 24px', borderRadius:'8px', border:'none', fontWeight:600, cursor:'pointer'}}>Add to Cart</button>
      </div>
    </div>
  )
}