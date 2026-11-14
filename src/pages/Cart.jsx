import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart(){
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if(cart.length === 0){
    return(
      <div style={{maxWidth:'600px', margin:'80px auto', textAlign:'center', padding:'20px'}}>
        <h2>Your Cart is Empty</h2>
        <p style={{color:'#64748B', margin:'12px 0'}}>Add products to see them here.</p>
        <Link to="/products" style={{background:'#2563EB', color:'#fff', padding:'10px 20px', borderRadius:'8px', display:'inline-block', marginTop:'10px'}}>Browse Products</Link>
      </div>
    )
  }

  return(
    <div style={{maxWidth:'900px', margin:'0 auto', padding:'30px 20px'}}>
      <h1 style={{fontSize:'28px', marginBottom:'20px'}}>Cart ({cart.length})</h1>
      {cart.map(item=>(
        <div key={item.id} style={{display:'flex', gap:'16px', border:'1px solid #E2E8F0', padding:'16px', borderRadius:'10px', marginBottom:'12px', alignItems:'center'}}>
          <img src={item.image} alt={item.name} style={{width:'80px', height:'80px', objectFit:'cover', borderRadius:'8px'}}/>
          <div style={{flex:1}}><h3 style={{fontSize:'16px'}}>{item.name}</h3><p style={{color:'#2563EB', fontWeight:700}}>₹{item.price.toLocaleString()}</p></div>
          <button onClick={()=>removeFromCart(item.id)} style={{background:'#FEE2E2', color:'#EF4444', border:'none', padding:'8px 12px', borderRadius:'6px', cursor:'pointer'}}>Remove</button>
        </div>
      ))}
      <div style={{marginTop:'24px', borderTop:'1px solid #E2E8F0', paddingTop:'20px', display:'flex', justifyContent:'space-between'}}>
        <button onClick={clearCart} style={{background:'#F1F5F9', border:'none', padding:'10px 16px', borderRadius:'8px', cursor:'pointer'}}>Clear Cart</button>
        <div><h3>Total: ₹{total.toLocaleString()}</h3><button onClick={()=>alert('Order Placed! (Demo)')} style={{background:'#0F1E3D', color:'#fff', padding:'10px 20px', borderRadius:'8px', border:'none', marginTop:'8px', cursor:'pointer'}}>Checkout</button></div>
      </div>
    </div>
  )
}