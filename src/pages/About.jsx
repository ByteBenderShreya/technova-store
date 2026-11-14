export default function About(){
  return(
    <div style={{maxWidth:'900px', margin:'0 auto', padding:'50px 20px'}}>
      <h1 style={{fontSize:'36px', color:'#0F1E3D'}}>About TechNova Store</h1>
      <p style={{marginTop:'16px', lineHeight:'1.8', color:'#475569'}}>
        TechNova Store is a premium electronics e-commerce platform built with React.js. 
        Our mission is to provide high-quality laptops, mobiles, audio and gaming accessories at best prices.
        This project is developed for college internship presentation with modern UI, cart functionality, search and filters.
      </p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'20px', marginTop:'30px'}}>
        <div style={{background:'#EFF6FF', padding:'20px', borderRadius:'10px'}}><h3>16+ Products</h3><p>Curated electronics</p></div>
        <div style={{background:'#EFF6FF', padding:'20px', borderRadius:'10px'}}><h3>Fast Delivery</h3><p>Across India</p></div>
        <div style={{background:'#EFF6FF', padding:'20px', borderRadius:'10px'}}><h3>Secure Cart</h3><p>React Context API</p></div>
      </div>
    </div>
  )
}