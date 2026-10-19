import { useEffect } from 'react'

export default function Lightbox({ items, index, onClose, onNavigate }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate(index + 1)
      if (e.key === 'ArrowLeft') onNavigate(index - 1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [index, onClose, onNavigate])

  if (index < 0 || index >= items.length) return null
  const item = items[index]

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); onNavigate(index - 1) }} aria-label="Previous">‹</button>
      <div onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
        <img src={item.image} alt={item.title} />
        <div style={{ color: '#fff', marginTop: 14, fontWeight: 700 }}>
          {item.title} <span className="small" style={{ color: '#9fb8c6' }}>· {item.category}</span>
        </div>
      </div>
      <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); onNavigate(index + 1) }} aria-label="Next">›</button>
    </div>
  )
}