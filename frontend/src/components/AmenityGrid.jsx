const DEFAULT_ICON = '✅'

export default function AmenityGrid({ amenities = [], icons = {}, light = false }) {
  return (
    <div className="amenity-grid">
      {amenities.map((a) => {
        const name = typeof a === 'string' ? a : a.name
        const icon = (typeof a === 'object' && a.icon) || icons[name] || DEFAULT_ICON
        return (
          <div key={name} className={`amenity-pill ${light ? 'amenity-pill-light' : ''}`}>
            <span className="ico">{icon}</span>
            <span>{name}</span>
          </div>
        )
      })}
    </div>
  )
}