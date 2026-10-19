import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { api } from '../api'

const SERVICES = [
  'General Enquiry',
  'Buy Plot / Land',
  'Buy Flat / House',
  'Book a Site Visit',
  'Sell My Property',
  'Rent / Lease',
  'Build / Construction',
  'Valuation / Legal Help',
]

export default function Contact() {
  const [params] = useSearchParams()
  const propertyId = params.get('property')
  const [propertyTitle, setPropertyTitle] = useState('')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICES[0],
    property_id: propertyId ? Number(propertyId) : null,
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (propertyId) {
      api.property(Number(propertyId)).then((p) => setPropertyTitle(p.title)).catch(() => {})
    }
  }, [propertyId])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const payload = { ...form, property_title: propertyTitle || form.service }
      if (!payload.property_id) delete payload.property_id
      await api.createEnquiry(payload)
      setDone(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please call +1 (610) 968-0033.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#0f2b3c,#1b5a63)', padding: '44px 0' }}>
        <div className="container center">
          <span className="eyebrow">Reach Us</span>
          <h1 style={{ color: '#fff', fontSize: 34, marginTop: 10 }}>Contact & Enquiry</h1>
          <p style={{ color: '#c7dbe6' }}>Call or send an enquiry — we respond quickly.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div style={{ flex: 1, minWidth: 280 }}>
              <div className="card" style={{ padding: 30, background: 'var(--navy)', color: '#fff' }}>
                <h3 style={{ color: '#fff', fontSize: 22, marginBottom: 20 }}>MSS Realtors</h3>
                <div style={{ display: 'grid', gap: 18 }}>
                  <div>
                    <div className="small" style={{ color: 'var(--gold-soft)', fontWeight: 700 }}>📞 PHONE</div>
                    <a href="tel:+16109680033" style={{ color: '#fff', fontSize: 22, fontWeight: 800 }}>+1 (610) 968-0033</a>
                  </div>
                  <div>
                    <div className="small" style={{ color: 'var(--gold-soft)', fontWeight: 700 }}>📧 EMAIL</div>
                    <a href="mailto:mssrealtrs@gmail.com" style={{ color: '#fff' }}>mssrealtrs@gmail.com</a>
                  </div>
                  <div>
                    <div className="small" style={{ color: 'var(--gold-soft)', fontWeight: 700 }}>📍 OFFICE</div>
                    <div style={{ marginTop: 4 }}>
                      Akber Colony<br />Bapatla, Andhra Pradesh, India
                    </div>
                  </div>
                  <div>
                    <div className="small" style={{ color: 'var(--gold-soft)', fontWeight: 700 }}>🕘 HOURS</div>
                    <div>Mon - Sun: 9:00 AM - 8:00 PM</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
                  <a className="btn btn-gold" href="tel:+16109680033">
                    Call Now
                  </a>
                </div>
              </div>

              <div className="card" style={{ padding: 24, marginTop: 20 }}>
                <h4 style={{ marginBottom: 10 }}>Getting there</h4>
                <p className="small muted">
                  Reachable within 30 minutes from Guntur city. We are located near the RTC bus
                  stand on the main road of Ponnur town. Site visits can be arranged any day
                  (10 AM - 6 PM preferred).
                </p>
              </div>
            </div>

            <div style={{ flex: 1.2, minWidth: 300 }}>
              <div className="card" style={{ padding: 30 }}>
                {done ? (
                  <div className="center" style={{ padding: '30px 0' }}>
                    <div style={{ fontSize: 52 }}>✅</div>
                    <h3 style={{ margin: '10px 0' }}>Enquiry Submitted!</h3>
                    <p className="muted">Thank you. MSS will call you back on {form.phone} shortly.</p>
                    <button className="btn btn-outline" style={{ marginTop: 16 }} onClick={() => { setDone(false); setForm({ name: '', phone: '', email: '', service: SERVICES[0], property_id: null, message: '' }); setPropertyTitle('') }}>
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 style={{ fontSize: 22, marginBottom: 6 }}>
                      {propertyTitle ? `Enquiry for: ${propertyTitle}` : 'Send an Enquiry'}
                    </h3>
                    <p className="small muted" style={{ marginBottom: 18 }}>
                      Fill the form and we'll get back to you within a few hours.
                    </p>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 14 }}>
                      <input name="name" required placeholder="Your full name *" value={form.name} onChange={handleChange} style={field} />
                      <input name="phone" required placeholder="Phone number *" value={form.phone} onChange={handleChange} style={field} pattern="[0-9+ -]{10,15}" title="Enter a valid phone number" />
                      <input name="email" type="email" placeholder="Email (optional)" value={form.email} onChange={handleChange} style={field} />
                      <select name="service" value={form.service} onChange={handleChange} style={field}>
                        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <textarea name="message" rows={4} placeholder="Your message / requirement (budget, location, plot size...)" value={form.message} onChange={handleChange} style={{ ...field, resize: 'vertical' }} />
                      {error && <div style={{ background: '#fee2e2', color: 'var(--red)', padding: '10px 14px', borderRadius: 10, fontSize: 14 }}>{error}</div>}
                      <button className="btn btn-gold btn-lg" disabled={submitting} style={{ opacity: submitting ? 0.7 : 1 }}>
                        {submitting ? 'Sending...' : 'Submit Enquiry'}
                      </button>
                      <p className="small muted center">
                        Prefer instant reply? Call{' '}
                        <a href="tel:+16109680033" className="gold" style={{ fontWeight: 800 }}>+1 (610) 968-0033</a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const field = {
  padding: '12px 14px',
  borderRadius: 10,
  border: '1px solid var(--line)',
  fontSize: 14,
  background: '#f8fafc',
  fontFamily: 'inherit',
  width: '100%',
}
