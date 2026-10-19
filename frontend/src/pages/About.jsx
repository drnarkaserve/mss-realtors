import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'

export default function About() {
  const [stats, setStats] = useState(null)
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    api.stats().then(setStats).catch(() => {})
    api.timeline().then(setTimeline).catch(() => {})
  }, [])

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#0f2b3c,#1b5a63)', padding: '44px 0' }}>
        <div className="container center">
          <span className="eyebrow">Our Story</span>
          <h1 style={{ color: '#fff', fontSize: 34, marginTop: 10 }}>About MSS Realtors</h1>
          <p style={{ color: '#c7dbe6' }}>Building trust, one property at a time — since 2010</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <span className="eyebrow">Who We Are</span>
              <h2 className="section-title">Your Local Real Estate Partner in Guntur District</h2>
              <p className="muted" style={{ marginTop: 12 }}>
                MSS Realtors is a trusted family-run real estate firm based in Ponnur, Guntur
                district, Andhra Pradesh. Founded by <strong>MSS</strong>, we have spent over 15
                years helping families buy plots, flats and build their own homes.
              </p>
              <p className="muted" style={{ marginTop: 12 }}>
                We are more than brokers — we are developers too. From planning a gated layout to
                constructing apartments and villas, we manage the complete lifecycle of real estate.
              </p>
              <div className="grid-2 mt-16" style={{ gap: 16 }}>
                {[
                  ['🎯', 'Mission', 'Helping every family own a verified, legal and valuable property.'],
                  ['🛡️', 'Vision', 'To be the most trustworthy realty brand in coastal Andhra.'],
                ].map(([icon, k, v]) => (
                  <div key={k} className="card" style={{ padding: 20 }}>
                    <div style={{ fontSize: 26 }}>{icon}</div>
                    <h4 style={{ margin: '8px 0 6px' }}>{k}</h4>
                    <p className="small muted">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div className="card" style={{ padding: 30, background: 'var(--navy)', color: '#fff' }}>
                <h3 style={{ color: '#fff', fontSize: 22 }}>Meet MSS</h3>
                <p className="small" style={{ color: '#b8ccd8', marginTop: 10 }}>
                  Founder & Principal Realtor. A local from Ponnur, MSS personally verifies
                  every property, visits every site and negotiates the best price for his clients.
                </p>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.15)', margin: '20px 0' }} />
                <div style={{ display: 'grid', gap: 10 }} className="small">
                  <span>📞 <a href="tel:+16109680033" style={{ color: '#f6c76b' }}>+1 (610) 968-0033</a></span>
                  <span>📍 Bapatla, Andhra Pradesh, India</span>
                  <span>🕘 Mon - Sun: 9:00 AM - 8:00 PM</span>
                </div>
                <Link to="/contact" className="btn btn-gold" style={{ width: '100%', marginTop: 20 }}>Talk to MSS →</Link>
              </div>
            </div>
          </div>

          {stats && (
            <div className="grid-4 mt-16">
              {[
                [stats.years_experience, 'Years Experience'],
                [stats.properties_sold, 'Properties Sold'],
                [stats.projects_completed, 'Projects Completed'],
                [stats.happy_clients + '+', 'Happy Clients'],
              ].map(([val, label]) => (
                <div key={label} className="card center" style={{ padding: 24 }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--gold)' }}>{val}</div>
                  <div className="small muted" style={{ textTransform: 'uppercase', letterSpacing: 1.5 }}>{label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="card mt-16" style={{ padding: 30 }}>
            <h3 style={{ fontSize: 20 }}>What we deal in</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 14 }}>
              {[
                'Residential Plots', 'Commercial Plots', 'Agricultural Land', 'Apartments & Flats',
                'Villas', 'Independent Houses', 'Shops & Offices', 'Gated Communities',
                'Construction Contracts', 'Rentals', 'Property Valuation', 'Document Registration',
              ].map((t) => (
                <span key={t} className="badge" style={{ background: '#eef2f7', color: 'var(--navy)', fontSize: 13 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {timeline.length > 0 && (
        <section className="section section-muted">
          <div className="container">
            <div className="center">
              <span className="eyebrow">Our Journey</span>
              <h2 className="section-title">A Legacy of 15+ Years</h2>
            </div>
            <div className="card mt-16" style={{ padding: '34px 34px 6px', maxWidth: 780, margin: '32px auto 0' }}>
              <div className="timeline">
                {timeline.map((t) => (
                  <div key={t.year} className="tl-item">
                    <span className="tl-year">{t.year}</span>
                    <h4 style={{ margin: '10px 0 4px', fontSize: 17 }}>{t.title}</h4>
                    <p className="small muted">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}