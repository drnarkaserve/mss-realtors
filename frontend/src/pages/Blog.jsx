import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.blogs().then(setBlogs).catch(() => {}).finally(() => setLoading(false))
  }, [])

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#0f2b3c,#1b5a63)', padding: '44px 0' }}>
        <div className="container center">
          <span className="eyebrow">Insights & Guides</span>
          <h1 style={{ color: '#fff', fontSize: 34, marginTop: 10 }}>Blog & News</h1>
          <p style={{ color: '#c7dbe6' }}>Tips on buying, investing and building in Guntur district.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading ? (
            <div className="spinner" />
          ) : (
            <div className="grid-3">
              {blogs.map((b) => (
                <Link to={`/blog/${b.id}`} key={b.id} className="card blog-card">
                  <img src={b.image} alt={b.title} loading="lazy" />
                  <div className="blog-body">
                    <div className="small" style={{ color: 'var(--gold)', fontWeight: 700 }}>{b.category} · {b.date}</div>
                    <h3 style={{ marginTop: 8 }}>{b.title}</h3>
                    <p className="small muted">{b.excerpt}</p>
                    <span className="small gold" style={{ fontWeight: 700, marginTop: 12 }}>Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}