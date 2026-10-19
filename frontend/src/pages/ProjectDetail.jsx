import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../api'
import AmenityGrid from '../components/AmenityGrid'
import { useEnquiry } from '../components/EnquiryModal'

const STATUS_META = {
  ongoing: { badge: 'badge-ongoing', label: 'Ongoing' },
  completed: { badge: 'badge-completed', label: 'Completed' },
  upcoming: { badge: 'badge-upcoming', label: 'Upcoming' },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const { openEnquiry } = useEnquiry()
  const [project, setProject] = useState(null)
  const [others, setOthers] = useState([])
  const [icons, setIcons] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    api
      .projects()
      .then((d) => {
        const found = d.projects.find((p) => String(p.id) === String(id))
        if (!found) { setError('Project not found'); return }
        setProject(found)
        setOthers(d.projects.filter((p) => p.id !== found.id).slice(0, 3))
        return api.amenities().then(setIcons).catch(() => {})
      })
      .catch((e) => setError(e.message))
  }, [id])

  if (error) {
    return (
      <div className="notfound">
        <h2>404</h2>
        <p className="muted">{error}</p>
        <Link to="/projects" className="btn btn-gold" style={{ marginTop: 16 }}>← All Projects</Link>
      </div>
    )
  }

  if (!project) return <div className="spinner" />

  const meta = STATUS_META[project.status] || STATUS_META.upcoming

  return (
    <>
      <section style={{ position: 'relative', height: 340, overflow: 'hidden' }}>
        <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(9,25,35,0.9), rgba(9,25,35,0.35))' }} />
        <div className="container" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Link to="/projects" className="small" style={{ color: '#f6c76b' }}>← All Projects</Link>
          <span className={`badge ${meta.badge}`} style={{ alignSelf: 'flex-start', margin: '10px 0' }}>{meta.label}</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(26px,4vw,40px)' }}>{project.name}</h1>
          <div className="small" style={{ color: '#c7dbe6', marginTop: 6 }}>
            {project.category} · 📍 {project.location}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 28 }} className="detail-grid">
            <div>
              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20 }}>Project Overview</h3>
                <p className="muted" style={{ margin: '10px 0 20px' }}>{project.description}</p>
                <table className="overview-table">
                  <tbody>
                    {Object.entries(project.overview || {}).map(([k, v]) => (
                      <tr key={k}><td>{k}</td><td><strong>{v}</strong></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="card" style={{ padding: 24, marginTop: 22 }}>
                <h3 style={{ fontSize: 20, marginBottom: 16 }}>Project Amenities</h3>
                <AmenityGrid amenities={project.amenities} icons={icons} />
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: 24, position: 'sticky', top: 90 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span className="small muted">Construction Progress</span>
                  <strong className="gold">{project.progress}%</strong>
                </div>
                <div style={{ height: 10, background: 'var(--line)', borderRadius: 99, overflow: 'hidden', marginBottom: 18 }}>
                  <div style={{ width: `${project.progress}%`, height: '100%', background: 'linear-gradient(90deg,var(--gold),var(--gold-soft))' }} />
                </div>
                <div className="small" style={{ display: 'grid', gap: 8, marginBottom: 18 }}>
                  <div>🏠 <strong>{project.units}</strong> units</div>
                  <div>⚙ <strong>{project.configuration}</strong></div>
                  <div>📅 Completion: <strong>{project.estimated_completion}</strong></div>
                </div>
                <button className="btn btn-gold" style={{ width: '100%' }} onClick={() => openEnquiry({ title: project.name, service: 'Book a Site Visit' })}>
                  Book a Site Visit
                </button>
                <a href="tel:+16109680033" className="btn btn-outline" style={{ width: '100%', marginTop: 10 }}>
                  📞 Call +1 (610) 968-0033
                </a>
              </div>
            </div>
          </div>

          {others.length > 0 && (
            <div className="mt-16">
              <h3 style={{ fontSize: 22 }}>Other Projects</h3>
              <div className="grid-3 mt-8">
                {others.map((p) => (
                  <Link key={p.id} to={`/projects/${p.id}`} className="card" style={{ padding: 18 }}>
                    <strong>{p.name}</strong>
                    <div className="small muted">{p.location}</div>
                    <div className="small gold" style={{ fontWeight: 800, marginTop: 8 }}>{p.progress}% complete →</div>
                  </Link>
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