import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="notfound">
      <h2>404</h2>
      <h3 style={{ fontSize: 24, marginTop: 8 }}>Page Not Found</h3>
      <p className="muted" style={{ marginTop: 10, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
        The page you are looking for doesn't exist or has been moved. Head back to the homepage to continue.
      </p>
      <div className="row" style={{ justifyContent: 'center', marginTop: 28 }}>
        <Link to="/" className="btn btn-gold">Go to Homepage</Link>
        <a href="tel:+16109680033" className="btn btn-outline">📞 Call +1 (610) 968-0033</a>
      </div>
    </div>
  )
}