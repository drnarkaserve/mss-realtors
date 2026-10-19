import { useEffect, useState } from 'react'
import { api } from '../api'
import PropertyCard from '../components/PropertyCard'

const FILTERS = {
  type: [
    ['', 'All Types'],
    ['plot', 'Plots & Land'],
    ['flat', 'Flats & Homes'],
  ],
  status: [
    ['', 'Any Status'],
    ['available', 'Available'],
    ['booked', 'Booked'],
    ['sold', 'Sold'],
  ],
  budget: [
    ['', 'Any Budget'],
    ['0-2500000', 'Under ₹25 Lakh'],
    ['2500000-5000000', '₹25 - 50 Lakh'],
    ['5000000-10000000', '₹50 Lakh - 1 Cr'],
    ['10000000-0', 'Above ₹1 Cr'],
  ],
}

const inputStyle = {
  padding: '10px 14px',
  borderRadius: 10,
  border: '1px solid var(--line)',
  fontSize: 14,
  background: '#fff',
  fontFamily: 'inherit',
}

export default function Properties() {
  const [type, setType] = useState('')
  const [status, setStatus] = useState('')
  const [budget, setBudget] = useState('')
  const [search, setSearch] = useState('')
  const [data, setData] = useState({ total: 0, properties: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const [min, max] = budget ? budget.split('-').map((v) => (v === '' ? undefined : Number(v))) : []
    api
      .properties({ type, status, min_price: min, max_price: max, search })
      .then(setData)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [type, status, budget, search])

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#0f2b3c,#1b5a63)', padding: '44px 0' }}>
        <div className="container center">
          <span className="eyebrow">Buy · Sell · Invest</span>
          <h1 style={{ color: '#fff', fontSize: 34, marginTop: 10 }}>Plots, Flats & Properties</h1>
          <p style={{ color: '#c7dbe6' }}>Verified listings in Ponnur, Guntur & nearby areas</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 36 }}>
        <div className="container">
          <div className="card" style={{ padding: 18, marginBottom: 28 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14 }}>
              <input
                placeholder="🔍 Search title / location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={inputStyle}
              />
              <select value={type} onChange={(e) => setType(e.target.value)} style={inputStyle}>
                {FILTERS.type.map(([v, label], i) => (
                  <option key={i} value={v}>{label}</option>
                ))}
              </select>
              <select value={status} onChange={(e) => setStatus(e.target.value)} style={inputStyle}>
                {FILTERS.status.map(([v, label], i) => (
                  <option key={i} value={v}>{label}</option>
                ))}
              </select>
              <select value={budget} onChange={(e) => setBudget(e.target.value)} style={inputStyle}>
                {FILTERS.budget.map(([v, label], i) => (
                  <option key={i} value={v}>{label}</option>
                ))}
              </select>
              <button className="btn btn-gold" style={{ padding: '10px' }} disabled={loading}>
                {loading ? 'Loading...' : `${data.total} Properties`}
              </button>
            </div>
          </div>

          {loading ? (
            <div className="spinner" />
          ) : data.properties.length === 0 ? (
            <div className="card center" style={{ padding: 60 }}>
              <h3>No properties found</h3>
              <p className="muted">Try changing the filters, or call MSS at{' '}
                <a href="tel:9490434262" className="gold">9490434262</a>.
              </p>
            </div>
          ) : (
            <div className="grid-3">
              {data.properties.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          )}

          <div className="card mt-16" style={{ padding: 24, display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: 19 }}>Can't find what you're looking for?</h3>
              <p className="small muted">Tell us your requirement and budget — we have off-market options too.</p>
            </div>
            <a className="btn btn-gold" href="tel:9490434262">📞 Call MSS 9490434262</a>
          </div>
        </div>
      </section>
    </>
  )
}