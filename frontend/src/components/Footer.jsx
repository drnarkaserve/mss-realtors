import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#0b2330', color: '#b8ccd8', padding: '56px 0 0' }}>
      <div className="container">
        <div className="grid-3" style={{ gap: 40 }}>
          <div>
            <h3 style={{ color: '#fff', marginBottom: 12 }}>MSS Realtors</h3>
            <p className="small" style={{ maxWidth: 300 }}>
              Your trusted real estate partner for plots, flats and construction in
              Bapatla, Andhra Pradesh — serving families for over 15 years.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: 12 }}>Quick Links</h4>
            <div style={{ display: 'grid', gap: 8 }}>
              {[
                ['/properties', 'Buy a Property'],
                ['/projects', 'Our Projects'],
                ['/services', 'Services'],
                ['/gallery', 'Gallery'],
                ['/blog', 'Blog & News'],
                ['/about', 'About Us'],
                ['/contact', 'Contact & Enquiry'],
                ['/legal', 'Terms & Conditions'],
                ['/privacy', 'Privacy Policy'],
              ].map(([to, label]) => (
                <Link key={to} to={to} className="small" style={{ color: '#b8ccd8' }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: 12 }}>Contact</h4>
            <div style={{ display: 'grid', gap: 8 }} className="small">
              <span>📞 <a href="tel:9490434262" style={{ color: '#f6c76b' }}>+91 94904 34262</a></span>
              <span>📍 Bapatla, Andhra Pradesh, India</span>
              <span>🕘 Mon - Sun: 9:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: 40,
            padding: '18px 0',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          <span className="small">© {new Date().getFullYear()} MSS Realtors. All rights reserved.</span>
          <span className="small">
            <Link to="/legal" style={{ color: '#b8ccd8' }}>Terms & Conditions</Link> ·{' '}
            <Link to="/privacy" style={{ color: '#b8ccd8' }}>Privacy Policy</Link> ·{' '}
            Owner: MSS · Bapatla · Andhra Pradesh, India
          </span>
        </div>
      </div>
    </footer>
  )
}