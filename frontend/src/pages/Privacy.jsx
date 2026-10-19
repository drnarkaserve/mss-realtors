export default function Privacy() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#0f2b3c,#1b5a63)', padding: '44px 0' }}>
        <div className="container center">
          <span className="eyebrow">Privacy</span>
          <h1 style={{ color: '#fff', fontSize: 34, marginTop: 10 }}>Privacy Policy</h1>
          <p style={{ color: '#c7dbe6' }}>Your privacy is important to MSS Realtors. Here is how we handle your data.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <article style={{ display: 'grid', gap: 28 }}>
            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>1. Information We Collect</h2>
              <p className="muted">
                When you submit an enquiry through our website, we collect your name, phone
                number, email address, preferred service, and any message you provide. We may
                also collect anonymous usage data (pages visited, time spent) through cookies
                to improve your experience.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>2. How We Use Your Information</h2>
              <p className="muted">
                We use your information solely to respond to your enquiry, provide property
                recommendations, assist with site visits, and facilitate transactions. We
                never sell, rent, or share your personal details with third parties for
                marketing purposes. Your data is stored securely and accessed only by our
                authorised team.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>3. Cookies</h2>
              <p className="muted">
                This website uses cookies to enhance functionality and analyse traffic. By
                continuing to use this site, you consent to our use of cookies. You can
                control or disable cookies through your browser settings, though some features
                may not work correctly if cookies are disabled.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>4. Data Retention & Security</h2>
              <p className="muted">
                Your enquiry data is retained only as long as necessary to serve your request
                and comply with legal obligations. We implement reasonable security measures
                to protect your information against unauthorised access, loss, or misuse.
                However, please note that no method of transmission over the internet is
                100% secure.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>5. Your Rights</h2>
              <p className="muted">
                You may request access to, correction of, or deletion of your personal data
                at any time. You may also withdraw consent or object to processing. To exercise
                these rights, please contact us using the details below.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>6. Third-Party Links</h2>
              <p className="muted">
                Our website may contain links to external sites (bank loan portals, map
                services). We are not responsible for the privacy practices of
                these third-party sites. We encourage you to review their privacy policies
                before providing any information.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>7. Contact Us</h2>
              <div className="card" style={{ padding: 24 }}>
                <p className="small muted">For privacy-related questions:</p>
                <div className="small">
                  <span>ðŸ“ž <a href="tel:+16109680033" className="gold" style={{ fontWeight: 800 }}>+1 (610) 968-0033</a></span>
                  <span style={{ marginLeft: 16 }}>ðŸ“§ <a href="mailto:mssrealtrs@gmail.com" className="gold">mssrealtrs@gmail.com</a></span>
                </div>
                <p className="small muted" style={{ marginTop: 12 }}>
                  MSS Realtors, Akber Colony, Bapatla,
                  Andhra Pradesh, India
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
