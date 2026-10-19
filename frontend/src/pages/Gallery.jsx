import { useEffect, useState } from 'react'
import { api } from '../api'
import Lightbox from '../components/Lightbox'

export default function Gallery() {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [active, setActive] = useState('All')
  const [boxIndex, setBoxIndex] = useState(-1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.gallery()
      .then((d) => {
        setItems(d.items)
        setCategories(['All', ...d.categories])
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  const navigate = (i) => {
    const len = filtered.length
    setBoxIndex(((i % len) + len) % len)
  }

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#0f2b3c,#1b5a63)', padding: '44px 0' }}>
        <div className="container center">
          <span className="eyebrow">A Look Inside</span>
          <h1 style={{ color: '#fff', fontSize: 34, marginTop: 10 }}>Project Gallery</h1>
          <p style={{ color: '#c7dbe6' }}>Elevations, interiors, layouts and construction progress.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 30 }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => { setActive(c); setBoxIndex(-1) }}
                className="btn"
                style={active === c
                  ? { background: 'var(--navy)', color: '#fff' }
                  : { background: 'var(--line)', color: 'var(--navy)' }}
              >
                {c}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="spinner" />
          ) : (
            <div className="gallery-grid">
              {filtered.map((g, i) => (
                <div key={g.id} className="gallery-item" onClick={() => setBoxIndex(i)}>
                  <img src={g.image} alt={g.title} loading="lazy" />
                  <span className="cap">{g.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {boxIndex >= 0 && (
        <Lightbox items={filtered} index={boxIndex} onClose={() => setBoxIndex(-1)} onNavigate={navigate} />
      )}
    </>
  )
}