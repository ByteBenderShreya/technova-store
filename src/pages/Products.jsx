import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products(){
  const [params] = useSearchParams()
  const searchQuery = (params.get('search') || '').toLowerCase()
  const [cat, setCat] = useState('All')
  const categories = ['All', ...new Set(products.map(p=>p.category))]

  const filtered = products.filter(p=>{
    const mCat = cat === 'All' || p.category === cat
    const mSearch = p.name.toLowerCase().includes(searchQuery)
    return mCat && mSearch
  })

  return(
    <div style={{maxWidth:'1200px', margin:'0 auto', padding:'30px 20px'}}>
      <h1 style={{fontSize:'28px', marginBottom:'20px'}}>All Products</h1>
      
      <div style={{display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'24px'}}>
        {categories.map(c=>(
          <button key={c} onClick={()=>setCat(c)}
            style={{
              padding:'8px 16px', borderRadius:'20px', border:'1px solid #E2E8F0',
              background: cat===c ? '#0F1E3D' : '#fff',
              color: cat===c ? '#fff' : '#0F172A', cursor:'pointer', fontWeight:500
            }}>{c}</button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}