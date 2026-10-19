import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../api'

const GRADIENTS = {
  plot: 'linear-gradient(135deg,#144b5c,#2f8f7b)',
  flat: 'linear-gradient(135deg,#3b3f6e,#7c6bb0)',
}

export default function PropertyCard({ property }) {
  const [imgOk, setImgOk] = useState(true)

  const typeLabel = property.type === 'plot' ? 'Plot / Land' : 'Flat / Home'
  const priceLabel =
    property.price_per_sqyd
      ? `${formatPrice(property.price_per_sqyd)}/SqYd`
      : `${formatPrice(property.price / property.area)}/${property.area_unit === 'Sq Ft' ? 'SqFt' : 'Unit'}`

  return (
    <article className="card prop-card">
      <Link to={`/properties/${property.id}`} className="prop-img-wrap">
        {imgOk ? (
          <img
            src={property.image}
            alt={property.title}
            onError={() => setImgOk(false)}
            loading="lazy"
          />
        ) : (
          <div
            className="prop-img-fallback"
            style={{ background: GRADIENTS[property.type] || 'linear-gradient(135deg,#144b5c,#2f8f7b)' }}
          >
            <span>{typeLabel}</span>
          </div>
        )}
        <span className={`badge badge-${property.status}`} style={{ position: 'absolute', top: 12, left: 12 }}>
          {property.status[0].toUpperCase() + property.status.slice(1)}
        </span>
        {property.featured && (
          <span className="badge badge-ongoing" style={{ position: 'absolute', top: 12, right: 12 }}>
            ★ Featured
          </span>
        )}
      </Link>
      <div className="prop-body">
        <div className="small muted">{property.category} · {property.location}</div>
        <Link to={`/properties/${property.id}`}>
          <h3 className="prop-title">{property.title}</h3>
        </Link>
        <div className="prop-meta">
          <span>📐 {property.area} {property.area_unit}</span>
          {property.beds && <span>🛏 {property.beds} BHK</span>}
          {property.baths && <span>🛁 {property.baths} Bath</span>}
        </div>
        <div className="prop-footer">
          <div>
            <strong className="gold" style={{ fontSize: 20 }}>{formatPrice(property.price)}</strong>
            <span className="small muted"> · {priceLabel}</span>
          </div>
          <Link to={`/properties/${property.id}`} className="btn btn-gold" style={{ padding: '8px 18px', fontSize: 13 }}>
            View Details
          </Link>
        </div>
      </div>
      <style>{`
        .prop-card .img-wrap, .prop-img-wrap { position: relative; display: block; height: 200px; overflow: hidden; }
        .prop-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .3s; }
        .prop-card:hover .prop-img-wrap img { transform: scale(1.06); }
        .prop-img-fallback { width: 100%; height: 100%; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:20px; letter-spacing:1px; }
        .prop-body { padding: 16px 18px 18px; }
        .prop-title { font-size: 17px; margin: 6px 0 10px; }
        .prop-title:hover { color: var(--gold); }
        .prop-meta { display: flex; flex-wrap: wrap; gap: 14px; font-size: 13px; color: var(--muted); margin-bottom: 12px; }
        .prop-footer { display: flex; align-items: center; justify-content: space-between; gap: 10px; border-top: 1px solid var(--line); padding-top: 12px; }
      `}</style>
    </article>
  )
}