import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../api'
import { useEnquiry } from '../components/EnquiryModal'

export default function BlogDetail() {
  const { id } = useParams()
  const { openEnquiry } = useEnquiry()
  const [post, setPost] = useState(null)
  const [others, setOthers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    api
      .blog(Number(id))
      .then((p) => {
        setPost(p)
        return api.blogs().then((all) => setOthers(all.filter((b) => b.id !== p.id).slice(0, 3)))
      })
      .catch((e) => setError(e.message))
  }, [id])

  if (error) {
    return (
      <div className="notfound">
        <h2>404</h2>
        <p className="muted">Blog post not found.</p>
        <Link to="/blog" className="btn btn-gold" style={{ marginTop: 16 }}>← Back to Blog</Link>
      </div>
    )
  }

  if (!post) return <div className="spinner" />

  return (
    <>
      <section style={{ position: 'relative', height: 320, overflow: 'hidden' }}>
        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(9,25,35,0.92), rgba(9,25,35,0.4))' }} />
        <div className="container" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Link to="/blog" className="small" style={{ color: '#f6c76b' }}>← Back to Blog</Link>
          <div className="small" style={{ color: 'var(--gold-soft)', fontWeight: 700, marginTop: 10 }}>{post.category} · {post.date}</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(24px,3.6vw,38px)', maxWidth: 780, marginTop: 8 }}>{post.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <article className="card" style={{ padding: '34px 38px' }}>
            {post.content.map((para, i) => (
              <p key={i} style={{ marginBottom: 18, fontSize: 16.5, color: '#334155' }}>{para}</p>
            ))}
            <div style={{ borderTop: '1px solid var(--line)', marginTop: 26, paddingTop: 22, display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>Written by MSS Realtors</strong>
                <div className="small muted">Bapatla, Andhra Pradesh</div>
              </div>
              <button className="btn btn-gold" onClick={() => openEnquiry({ title: post.title })}>Discuss This With Us</button>
            </div>
          </article>

          {others.length > 0 && (
            <div className="mt-16">
              <h3 style={{ fontSize: 22 }}>More Articles</h3>
              <div className="grid-3 mt-8">
                {others.map((b) => (
                  <Link to={`/blog/${b.id}`} key={b.id} className="card" style={{ overflow: 'hidden' }}>
                    <img src={b.image} alt={b.title} style={{ height: 130, width: '100%', objectFit: 'cover' }} loading="lazy" />
                    <div style={{ padding: 16 }}>
                      <div className="small" style={{ color: 'var(--gold)', fontWeight: 700 }}>{b.category}</div>
                      <strong style={{ display: 'block', marginTop: 6, fontSize: 15 }}>{b.title}</strong>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}