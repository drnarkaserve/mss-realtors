import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'

const ICONS = {
  land: '🏞️',
  building: '🏢',
  construction: '🏗️',
  rent: '🔑',
  value: '📊',
  legal: '📜',
  default: '⭐',
}

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    api.services().then(setServices).catch(() => {})
  }, [])

  const process = [
    ['1', 'Meet & Discuss', 'Share your budget and requirement — by phone or in office.'],
    ['2', 'Property / Plan Selection', 'We shortlist the best options with all documents ready.'],
    ['3', 'Verification', 'Full title, approvals and legal verification done by our team.'],
    ['4', 'Sale & Registration', 'We handle agreement, loan and sub-registrar registration.'],
  ]

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#0f2b3c,#1b5a63)', padding: '44px 0' }}>
        <div className="container center">
          <span className="eyebrow">Full Service</span>
          <h1 style={{ color: '#fff', fontSize: 34, marginTop: 10 }}>Realtor Services</h1>
          <p style={{ color: '#c7dbe6' }}>Everything a property owner or buyer needs — under one roof.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map((s) => (
              <div key={s.id} className="card" style={{ padding: 28 }}>
                <div style={{ fontSize: 32 }}>{ICONS[s.icon] || ICONS.default}</div>
                <h3 style={{ fontSize: 19, margin: '14px 0 8px' }}>{s.name}</h3>
                <p className="small muted" style={{ marginBottom: 14 }}>{s.short}</p>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: 'var(--muted)' }}>
                  {s.points.map((pt) => (
                    <li key={pt} style={{ marginBottom: 4 }}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="center">
            <span className="eyebrow">How It Works</span>
            <h2 className="section-title">Our Simple 4-Step Process</h2>
          </div>
          <div className="grid-4 mt-16">
            {process.map(([n, title, desc]) => (
              <div key={n} className="card" style={{ padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--gold)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 20 }}>{n}</div>
                <h4 style={{ color: '#fff', margin: '14px 0 8px', fontSize: 17 }}>{title}</h4>
                <p className="small" style={{ color: '#b8ccd8' }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="center mt-16">
            <Link to="/contact" className="btn btn-gold btn-lg">Start With Step 1 — Free Call</Link>
          </div>
        </div>
      </section>
    </>
  )
}