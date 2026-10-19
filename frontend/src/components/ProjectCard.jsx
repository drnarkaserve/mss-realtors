import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEnquiry } from './EnquiryModal'

const STATUS_META = {
  ongoing: { badge: 'badge-ongoing', label: 'Ongoing' },
  completed: { badge: 'badge-completed', label: 'Completed' },
  upcoming: { badge: 'badge-upcoming', label: 'Upcoming' },
}

export default function ProjectCard({ project }) {
  const [imgOk, setImgOk] = useState(true)
  const { openEnquiry } = useEnquiry()
  const meta = STATUS_META[project.status] || STATUS_META.upcoming

  return (
    <article className="card">
      <Link to={`/projects/${project.id}`} style={{ position: 'relative', height: 190, overflow: 'hidden', display: 'block' }}>
        {imgOk ? (
          <img
            src={project.image}
            alt={project.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={() => setImgOk(false)}
            loading="lazy"
          />
        ) : (
          <div style={{ background: 'linear-gradient(135deg,#144b5c,#2f8f7b)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>
            {project.category}
          </div>
        )}
        <span className={`badge ${meta.badge}`} style={{ position: 'absolute', top: 12, left: 12 }}>
          {meta.label}
        </span>
      </Link>
      <div style={{ padding: '16px 18px 18px' }}>
        <div className="small muted">{project.category} · {project.location}</div>
        <Link to={`/projects/${project.id}`}>
          <h3 style={{ fontSize: 18, margin: '6px 0 8px' }}>{project.name}</h3>
        </Link>
        <p className="small" style={{ color: 'var(--muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {project.description}
        </p>
        <div className="mt-8 small" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span>🏠 {project.units} Units</span>
          <span>⚙ {project.configuration}</span>
        </div>
        <div style={{ marginTop: 12 }}>
          <div className="small" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span className="muted">Construction</span>
            <strong>{project.progress}%</strong>
          </div>
          <div style={{ height: 8, background: 'var(--line)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ width: `${project.progress}%`, height: '100%', background: 'linear-gradient(90deg,var(--gold),var(--gold-soft))' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <Link to={`/projects/${project.id}`} className="btn btn-outline" style={{ flex: 1, padding: '10px', fontSize: 13 }}>
            View Details
          </Link>
          <button
            className="btn btn-gold"
            style={{ flex: 1, padding: '10px', fontSize: 13 }}
            onClick={() => openEnquiry({ title: project.name, service: 'Book a Site Visit' })}
          >
            Enquire
          </button>
        </div>
      </div>
    </article>
  )
}