import { useEffect, useState, useCallback, useContext, createContext } from 'react'
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

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  service: 'Book a Site Visit',
  message: '',
}

const EnquiryContext = createContext(null)

export function useEnquiry() {
  return useContext(EnquiryContext)
}

export function EnquiryProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [context, setContext] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const openEnquiry = useCallback((opts = {}) => {
    setContext(opts.title || '')
    setForm((f) => ({ ...f, service: opts.service || 'Book a Site Visit', property_id: opts.property_id }))
    setDone(false)
    setError('')
    setOpen(true)
  }, [])

  const closeEnquiry = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && closeEnquiry()
    if (open) document.addEventListener('keydown', onEsc)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => document.removeEventListener('keydown', onEsc)
  }, [open, closeEnquiry])

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const payload = { ...form, property_title: context || form.service }
      if (!payload.property_id) delete payload.property_id
      await api.createEnquiry(payload)
      setDone(true)
      setForm(emptyForm)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please call 9490434262.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <EnquiryContext.Provider value={{ openEnquiry }}>
      {children}
      {open && (
        <div className="modal-overlay" onClick={closeEnquiry}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeEnquiry} aria-label="Close">✕</button>
            {done ? (
              <div className="center" style={{ padding: '20px 0' }}>
                <div style={{ fontSize: 50 }}>✅</div>
                <h3 style={{ margin: '10px 0' }}>Thank you!</h3>
                <p className="muted">
                  Your enquiry has been received. MSS will call you back shortly.
                </p>
                <button className="btn btn-gold" style={{ marginTop: 16 }} onClick={closeEnquiry}>Close</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: 22, marginBottom: 4 }}>Enquire Now</h3>
                <p className="small muted" style={{ marginBottom: 16 }}>
                  {context ? `Regarding: ${context}` : 'Our sales team will reach out to you shortly.'}
                </p>
                <form onSubmit={submit} style={{ display: 'grid', gap: 12 }}>
                  <input name="name" required placeholder="Your name *" value={form.name} onChange={change} style={field} />
                  <input name="phone" required placeholder="Phone number *" value={form.phone} onChange={change} style={field} pattern="[0-9+ -]{10,15}" />
                  <input name="email" type="email" placeholder="Email (optional)" value={form.email} onChange={change} style={field} />
                  <select name="service" value={form.service} onChange={change} style={field}>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <textarea name="message" rows={3} placeholder="Message / requirement" value={form.message} onChange={change} style={{ ...field, resize: 'vertical' }} />
                  {error && <div style={{ background: '#fee2e2', color: 'var(--red)', padding: '10px 14px', borderRadius: 10, fontSize: 13.5 }}>{error}</div>}
                  <button className="btn btn-gold" disabled={submitting} style={{ opacity: submitting ? 0.7 : 1 }}>
                    {submitting ? 'Sending...' : 'Submit Enquiry'}
                  </button>
                  <p className="small muted center">
                    Or call <a href="tel:9490434262" className="gold" style={{ fontWeight: 800 }}>9490434262</a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </EnquiryContext.Provider>
  )
}

const field = {
  padding: '11px 14px',
  borderRadius: 10,
  border: '1px solid var(--line)',
  fontSize: 14,
  background: '#f8fafc',
  fontFamily: 'inherit',
  width: '100%',
}