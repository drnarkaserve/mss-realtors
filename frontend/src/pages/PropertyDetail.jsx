import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { api } from '../api'
import AmenityGrid from '../components/AmenityGrid'
import { useEnquiry } from '../components/EnquiryModal'

export default function PropertyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { openEnquiry } = useEnquiry()
  const [prop, setProp] = useState(null)
  const [similar, setSimilar] = useState([])
  const [icons, setIcons] = useState({})
  const [error, setError] = useState('')
  const [imgOk, setImgOk] = useState(true)

  useEffect(() => {
    api
      .property(Number(id))
      .then((p) => {
        setProp(p)
        setImgOk(true)
        api.amenities().then(setIcons).catch(() => {})
        return api.properties({ type: p.type }).then((r) =>
          setSimilar(r.properties.filter((x) => x.id !== p.id).slice(0, 3)),
        )
      })
      .catch((e) => setError(e.message))
  }, [id])

  if (error) {
    return (
      <div className="notfound">
        <h2>404</h2>
        <p className="muted">Property not found.</p>
        <Link to="/properties" className="btn btn-gold" style={{ marginTop: 16 }}>â† Back to Properties</Link>
      </div>
    )
  }

  if (!prop) return <div className="spinner" />

  const badges = {
    available: ['badge-available', 'Available'],
    sold: ['badge-sold', 'Sold'],
    booked: ['badge-booked', 'Booked'],
  }
  const [badgeClass, badgeText] = badges[prop.status] || ['', prop.status]

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#0f2b3c,#1b5a63)', padding: '36px 0' }}>
        <div className="container">
          <Link to="/properties" className="small" style={{ color: '#f6c76b' }}>â† All Properties</Link>
          <h1 style={{ color: '#fff', fontSize: 'clamp(24px,4vw,34px)', marginTop: 8 }}>{prop.title}</h1>
          <div className="small" style={{ color: '#c7dbe6', marginTop: 6 }}>
            ðŸ“ {prop.location} &nbsp;Â·&nbsp; <span className={`badge ${badgeClass}`}>{badgeText}</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 24 }} className="detail-grid">
            <div>
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', height: 320, boxShadow: 'var(--shadow)' }}>
                {imgOk ? (
                  <img src={prop.image} alt={prop.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={() => setImgOk(false)} />
                ) : (
                  <div style={{ background: 'linear-gradient(135deg,#144b5c,#2f8f7b)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 28, fontWeight: 800 }}>
                    {prop.category}
                  </div>
                )}
              </div>

              <div className="card" style={{ padding: 24, marginTop: 20 }}>
                <h3 style={{ fontSize: 20, marginBottom: 10 }}>About this Property</h3>
                <p className="muted">{prop.description}</p>

                <h4 style={{ fontSize: 17, margin: '24px 0 10px' }}>Key Features</h4>
                <AmenityGrid amenities={prop.features} icons={icons} />

                <h4 style={{ fontSize: 17, margin: '24px 0 10px' }}>Quick Facts</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12 }}>
                  {[
                    ['Type', prop.category],
                    ['Area', `${prop.area} ${prop.area_unit}`],
                    prop.beds ? ['Bedrooms', `${prop.beds} BHK`] : null,
                    prop.baths ? ['Bathrooms', String(prop.baths)] : null,
                    ['Location', prop.location],
                    ['Posted On', prop.posted_on],
                  ].filter(Boolean).map(([k, v]) => (
                    <div key={k} style={{ background: '#f8fafc', padding: '10px 14px', borderRadius: 10 }}>
                      <div className="small muted">{k}</div>
                      <strong style={{ fontSize: 14 }}>{v}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enquiry sidebar */}
            <div>
              <div className="card" style={{ padding: 26, position: 'sticky', top: 90 }}>
                <div className="small muted">Price</div>
                <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--navy)' }}>{formatPrice(prop.price)}</div>
                {prop.price_per_sqyd && (
                  <div className="small muted">â‚¹{prop.price_per_sqyd.toLocaleString('en-IN')} per Sq Yard</div>
                )}
                <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '18px 0' }} />
                <p className="small" style={{ marginBottom: 14 }}>
                  Interested in this property? Contact MSS directly for site visit and full documents check.
                </p>
                <a href="tel:9490434262" className="btn btn-gold" style={{ width: '100%' }}>ðŸ“ž Call 9490434262</a>
                <button
                  className="btn btn-outline"
                  style={{ width: '100%', marginTop: 10 }}
                  onClick={() => openEnquiry({ title: prop.title, property_id: prop.id })}
                >
                  Send Enquiry
                </button>
              </div>

              <div className="card" style={{ padding: 20, marginTop: 20, background: 'var(--navy)' }}>
                <h4 style={{ color: '#fff', fontSize: 16 }}>Why buy through MSS Realtors?</h4>
                <ul style={{ color: '#b8ccd8', margin: '10px 0 0', paddingLeft: 18, fontSize: 13.5 }}>
                  <li>Clear title & document verification</li>
                  <li>Free site visit & loan assistance</li>
                  <li>No hidden charges â€” transparent pricing</li>
                  <li>Registered in Guntur district</li>
                </ul>
              </div>
            </div>
          </div>

          {similar.length > 0 && (
            <div className="mt-16">
              <h3 style={{ fontSize: 22 }}>Similar Properties</h3>
              <div className="grid-3 mt-8">
                {similar.map((p) => (
                  <div key={p.id} className="card" style={{ padding: 18, cursor: 'pointer' }} onClick={() => navigate(`/properties/${p.id}`)}>
                    <strong>{p.title}</strong>
                    <div className="small muted">{p.location}</div>
                    <div className="gold" style={{ fontWeight: 800, marginTop: 8 }}>{formatPrice(p.price)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <style>{`
        @media (max-width: 820px) { .detail-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
