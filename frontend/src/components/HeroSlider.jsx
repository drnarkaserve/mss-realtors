import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useEnquiry } from './EnquiryModal'

const SLIDES = [
  {
    image: '/images/hero-1.jpg',
    eyebrow: 'Ponnur · Guntur · Andhra Pradesh',
    title: ['Own Your Dream', 'Home & Plot Today'],
    subtitle: 'Verified plots, ready-to-move flats and premium villas across Guntur district.',
  },
  {
    image: '/images/hero-2.jpg',
    eyebrow: 'Luxury Living',
    title: ['City Living,', 'Beautifully Redefined'],
    subtitle: 'Premium 2, 3 & 4 BHK apartments built with quality you can trust.',
  },
  {
    image: '/images/hero-3.jpg',
    eyebrow: 'We Build Too',
    title: ['From Foundation', 'To Possession'],
    subtitle: 'End-to-end construction of homes, apartments and commercial complexes.',
  },
  {
    image: '/images/hero-4.jpg',
    eyebrow: 'Gated Communities',
    title: ['A Promise Of A', 'New Beginning'],
    subtitle: 'Secure gated villas and layouts with modern amenities for your family.',
  },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)
  const { openEnquiry } = useEnquiry()

  const go = (i) => setIndex((i + SLIDES.length) % SLIDES.length)

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6500)
    return () => clearInterval(timer.current)
  }, [index])

  return (
    <section className="hero-slider">
      {SLIDES.map((s, i) => (
        <div key={i} className={`hero-slide ${i === index ? 'active' : ''}`}>
          <div className="hero-slide-bg" style={{ backgroundImage: `url(${s.image})` }} />
        </div>
      ))}

      <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="hero-content">
          <span className="eyebrow">{SLIDES[index].eyebrow}</span>
          <h1 className="hero-title">
            {SLIDES[index].title[0]}<br />
            <span>{SLIDES[index].title[1]}</span>
          </h1>
          <p style={{ fontSize: 17, color: '#d5e5ee', maxWidth: 540 }}>{SLIDES[index].subtitle}</p>
          <div className="row" style={{ marginTop: 26 }}>
            <Link to="/properties" className="btn btn-gold btn-lg">Browse Properties</Link>
            <button className="btn btn-outline-light btn-lg" onClick={() => openEnquiry({ service: 'Book a Site Visit' })}>
              Book a Site Visit
            </button>
          </div>
          <div className="row" style={{ marginTop: 24, gap: 10 }}>
            <span className="trust-badge">🏅 CREDAI Member</span>
            <span className="trust-badge">📜 RERA Registered</span>
            <span className="trust-badge">🤝 Since 2010</span>
          </div>
        </div>
      </div>

      <button className="hero-arrow prev" onClick={() => go(index - 1)} aria-label="Previous">‹</button>
      <button className="hero-arrow next" onClick={() => go(index + 1)} aria-label="Next">›</button>

      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={i === index ? 'active' : ''} onClick={() => go(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  )
}