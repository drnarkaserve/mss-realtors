import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import PropertyCard from '../components/PropertyCard'
import ProjectCard from '../components/ProjectCard'
import HeroSlider from '../components/HeroSlider'
import Counter from '../components/Counter'
import AmenityGrid from '../components/AmenityGrid'
import LoanPartners from '../components/LoanPartners'
import { useEnquiry } from '../components/EnquiryModal'

const ICONS = {
  land: '🏞️',
  building: '🏢',
  construction: '🏗️',
  rent: '🔑',
  value: '📊',
  legal: '📜',
  default: '⭐',
}

const AVATAR_COLORS = [
  'linear-gradient(135deg,#0f2b3c,#2f8f7b)',
  'linear-gradient(135deg,#7c3aed,#c084fc)',
  'linear-gradient(135deg,#b45309,#e8a33d)',
  'linear-gradient(135deg,#0369a1,#38bdf8)',
  'linear-gradient(135deg,#be123c,#fb7185)',
  'linear-gradient(135deg,#15803d,#4ade80)',
]

const initials = (name) =>
  name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()

export default function Home() {
  const { openEnquiry } = useEnquiry()
  const [stats, setStats] = useState(null)
  const [services, setServices] = useState([])
  const [featured, setFeatured] = useState([])
  const [projects, setProjects] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [whyUs, setWhyUs] = useState([])
  const [amenities, setAmenities] = useState({})
  const [partners, setPartners] = useState([])
  const [gallery, setGallery] = useState([])
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      api.stats(),
      api.services(),
      api.properties(),
      api.projects(),
      api.testimonials(),
      api.whyUs(),
      api.amenities(),
      api.loanPartners(),
      api.gallery(),
      api.blogs(),
    ])
      .then(([s, sv, p, pr, t, w, am, lp, g, b]) => {
        setStats(s)
        setServices(sv)
        setFeatured(p.properties.filter((x) => x.featured).slice(0, 3))
        setProjects(pr.projects.filter((x) => x.status !== 'upcoming').slice(0, 3))
        setTestimonials(t)
        setWhyUs(w)
        setAmenities(am)
        setPartners(lp)
        setGallery(g.items.slice(0, 8))
        setBlogs(b.slice(0, 3))
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="spinner" />

  const showcaseAmenities = [
    'Lift', 'Power Backup', 'Swimming Pool', 'Clubhouse', 'Gym', 'Children Play Area',
    '24x7 Security', 'CCTV Surveillance', 'Car Parking', 'Landscaped Garden', 'Jogging Track', '24x7 Water',
  ]

  return (
    <>
      <HeroSlider />

      <section style={{ background: '#fff', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="grid-4" style={{ padding: '10px 0' }}>
            {stats && [
              [stats.years_experience, 'Years Experience', '+'],
              [stats.properties_sold, 'Properties Sold', '+'],
              [stats.projects_completed, 'Projects Completed', '+'],
              [stats.happy_clients, 'Happy Clients', '+'],
            ].map(([val, label, suffix]) => (
              <Counter key={label} value={val} label={label} suffix={suffix} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center">
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Complete Real Estate Services</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              From buying a plot to building your dream home — we handle everything under one roof.
            </p>
          </div>
          <div className="grid-3 mt-16">
            {services.map((s) => (
              <div key={s.id} className="card" style={{ padding: 28 }}>
                <div style={{ fontSize: 32 }}>{ICONS[s.icon] || ICONS.default}</div>
                <h3 style={{ fontSize: 18, margin: '12px 0 8px' }}>{s.name}</h3>
                <p className="small muted">{s.short}</p>
                <Link to="/services" className="small gold" style={{ display: 'inline-block', marginTop: 12, fontWeight: 700 }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <span className="eyebrow">Handpicked Listings</span>
              <h2 className="section-title">Featured Properties</h2>
            </div>
            <Link to="/properties" className="btn btn-outline">View All Properties</Link>
          </div>
          <div className="grid-3 mt-8">
            {featured.map((p) => <PropertyCard key={p.id} property={p} />)}
          </div>
          <div className="center mt-16">
            <Link to="/properties" className="btn btn-gold btn-lg">Explore All Plots & Flats →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <span className="eyebrow">Building Dreams</span>
              <h2 className="section-title">Our Construction Projects</h2>
            </div>
            <Link to="/projects" className="btn btn-outline">All Projects</Link>
          </div>
          <div className="grid-3 mt-8">
            {projects.map((pr) => <ProjectCard key={pr.id} project={pr} />)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <span className="eyebrow">We Build Too</span>
              <h2 className="section-title">In-House Construction Capability</h2>
              <p className="lead" style={{ marginTop: 10 }}>
                Unlike most brokers, we are developers and contractors. That means quality
                control, honest costing and on-time delivery — from foundation to possession.
              </p>
              <div className="grid-2 mt-16" style={{ gap: 14 }}>
                {[
                  ['🏗️', 'RCC Framed Structures'],
                  ['🧱', 'Premium Material Sourcing'],
                  ['📐', 'Vastu-Compliant Designs'],
                  ['👷', 'Experienced Site Team'],
                  ['📅', 'On-Time Delivery'],
                  ['💰', 'Transparent Costing'],
                ].map(([ico, t]) => (
                  <div key={t} className="amenity-pill amenity-pill-light">
                    <span className="ico">{ico}</span><span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="row" style={{ marginTop: 24 }}>
                <button className="btn btn-gold" onClick={() => openEnquiry({ service: 'Build / Construction' })}>
                  Get a Construction Quote
                </button>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 300 }}>
              <img src="/images/construction-1.jpg" alt="Construction site" style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 420, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center">
            <span className="eyebrow">Modern Living</span>
            <h2 className="section-title">Amenities We Provide</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Every project is designed with the comforts today's families expect.
            </p>
          </div>
          <div className="mt-16">
            <AmenityGrid amenities={showcaseAmenities} icons={amenities} />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="center">
            <span className="eyebrow">Why MSS Realtors</span>
            <h2 className="section-title">Genuine Deals. Clear Titles. Honest Advice.</h2>
          </div>
          <div className="grid-3 mt-16">
            {whyUs.map((w) => (
              <div key={w.title} className="card" style={{ padding: 26 }}>
                <div style={{ fontSize: 30 }}>{w.icon}</div>
                <h3 style={{ fontSize: 18, margin: '12px 0 8px' }}>{w.title}</h3>
                <p className="small muted">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <span className="eyebrow">A Look Inside</span>
              <h2 className="section-title">Project Gallery</h2>
            </div>
            <Link to="/gallery" className="btn btn-outline">Open Full Gallery</Link>
          </div>
          <div className="gallery-grid mt-8" style={{ marginTop: 32 }}>
            {gallery.map((g) => (
              <Link to="/gallery" key={g.id} className="gallery-item">
                <img src={g.image} alt={g.title} loading="lazy" />
                <span className="cap">{g.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container center">
          <span className="eyebrow">Easy Finance</span>
          <h2 className="section-title" style={{ marginBottom: 26 }}>Housing Loan Partners</h2>
        </div>
        <div className="container">
          <LoanPartners partners={partners} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="center">
            <span className="eyebrow">Client Words</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="grid-3 mt-16">
            {testimonials.map((t, i) => (
              <div key={t.id} className="card" style={{ padding: 26 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div className="avatar" style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}>
                    {initials(t.name)}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--navy)' }}>{t.name}</strong>
                    <div className="small muted">{t.location}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: 'var(--gold)', letterSpacing: 2 }}>
                    {'★'.repeat(t.rating)}
                  </div>
                </div>
                <p style={{ fontSize: 14.5 }}>“{t.message}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <span className="eyebrow">Insights</span>
              <h2 className="section-title">Latest From Our Blog</h2>
            </div>
            <Link to="/blog" className="btn btn-outline">View All Posts</Link>
          </div>
          <div className="grid-3 mt-8">
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
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg,var(--gold),var(--gold-soft))', padding: 46 }}>
        <div className="container center">
          <h2 style={{ color: '#fff', fontSize: 'clamp(22px,3.5vw,34px)', textShadow: '0 1px 3px rgba(0,0,0,0.25)' }}>
            Looking for a Plot, Flat or Builder in Guntur?
          </h2>
          <p style={{ color: '#fff', margin: '10px 0 22px' }}>Talk to MSS directly today.</p>
          <a href="tel:+16109680033" className="btn" style={{ background: '#fff', color: 'var(--navy)', marginRight: 12 }}>📞 +1 (610) 968-0033</a>
          <Link to="/properties" className="btn" style={{ background: 'var(--navy)', color: '#fff' }}>See Properties</Link>
        </div>
      </section>
    </>
  )
}