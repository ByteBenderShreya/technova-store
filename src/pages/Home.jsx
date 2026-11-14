import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import '../css/home.css'

export default function Home(){
  return(
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="hero-badge">Premium Electronics 2025</span>
            <h1>Next-Gen Tech, Built For You</h1>
            <p>Shop laptops, audio, wearables from TechNova. Modern design, best prices.</p>
            <Link to="/products" className="btn-primary">Shop Now</Link>
          </div>
          <div className="hero-img-wrap">
            {/* Working image link */}
            <img 
              src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=800&q=80" 
              alt="Electronics Store"
              onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80'}}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sec-title">Featured Products</h2>
        <div className="products-grid">
          {products.slice(0,4).map(p=><ProductCard key={p.id} product={p}/>)}
        </div>
      </section>

      <section className="section">
        <h2 className="sec-title">Popular Categories</h2>
        <div className="cat-grid">
          <div>Audio</div><div>Laptops</div><div>Wearables</div><div>Cameras</div>
        </div>
      </section>
    </>
  )
}