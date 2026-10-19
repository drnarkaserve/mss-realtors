import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.projects({ status: filter || undefined })
      .then((d) => setProjects(d.projects))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [filter])

  const filters = [
    ['', 'All Projects'],
    ['ongoing', 'Ongoing'],
    ['completed', 'Completed'],
  ]

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#0f2b3c,#704a1d)', padding: '44px 0' }}>
        <div className="container center">
          <span className="eyebrow">We Build Too</span>
          <h1 style={{ color: '#fff', fontSize: 34, marginTop: 10 }}>Construction & Development Projects</h1>
          <p style={{ color: '#e8d9bd' }}>Apartments · Villas · Plot Layouts · Commercial Complexes</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 32 }}>
            {filters.map(([v, label]) => (
              <button
                key={v}
                onClick={() => setFilter(v)}
                className="btn"
                style={filter === v
                  ? { background: 'var(--navy)', color: '#fff' }
                  : { background: 'var(--line)', color: 'var(--navy)' }}
              >
                {label}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="spinner" />
          ) : (
            <div className="grid-3">
              {projects.map((pr) => <ProjectCard key={pr.id} project={pr} />)}
            </div>
          )}

          <div className="card mt-16" style={{ padding: 30 }}>
            <div className="row" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ maxWidth: 560 }}>
                <h3 style={{ fontSize: 22 }}>Want to build your own house?</h3>
                <p className="small muted" style={{ marginTop: 8 }}>
                  From plans & approvals to complete construction and finishing, MSS Realtors
                  takes care of your dream home — end to end.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-gold">Get Construction Quote</Link>
                <a href="tel:9490434262" className="btn btn-outline">📞 Call MSS</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}