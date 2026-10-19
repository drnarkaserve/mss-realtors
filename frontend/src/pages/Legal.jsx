export default function Legal() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#0f2b3c,#1b5a63)', padding: '44px 0' }}>
        <div className="container center">
          <span className="eyebrow">Legal</span>
          <h1 style={{ color: '#fff', fontSize: 34, marginTop: 10 }}>Terms & Conditions</h1>
          <p style={{ color: '#c7dbe6' }}>Please read these terms carefully before using MSS Realtors.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <article style={{ display: 'grid', gap: 28 }}>
            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>1. Terms of Use</h2>
              <p className="muted">
                You agree to use the MSS Realtors website and services in accordance with these
                terms. By accessing any property listings, project details, or contacting our
                team, you accept these terms in full. If you disagree, please discontinue use
                immediately.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>2. Property Information</h2>
              <p className="muted">
                All property details â€” including prices, areas, configurations, images, and
                descriptions â€” are provided in good faith for informational purposes only.
                While we strive to keep information accurate, specifications may change without
                notice. Always verify details directly with our team before making any decision.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>3. No Professional Advice</h2>
              <p className="muted">
                The content on this website does not constitute legal, financial, or investment
                advice. Property transactions involve significant financial commitments. We
                recommend consulting a qualified lawyer, chartered accountant, or financial
                advisor before finalising any purchase or construction contract.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>4. Intellectual Property</h2>
              <p className="muted">
                All content on this website â€” text, images, logos, and design â€” is the property
                of MSS Realtors and is protected by applicable intellectual property laws. You
                may not reproduce, redistribute, or commercially exploit any content without
                prior written consent.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>5. Limitation of Liability</h2>
              <p className="muted">
                MSS Realtors shall not be liable for any indirect, incidental, or consequential
                damages arising from the use of this website or reliance on its content. While
                we make reasonable efforts to ensure accuracy, we do not guarantee that the
                website is free from errors or interruptions.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>6. Applicable Law & Jurisdiction</h2>
              <p className="muted">
                These terms are governed by the laws of Andhra Pradesh, India. Any disputes
                arising out of or in connection with these terms shall be subject to the
                exclusive jurisdiction of courts in Visakhapatnam, Andhra Pradesh.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: 22, marginBottom: 10 }}>7. Changes to Terms</h2>
              <p className="muted">
                MSS Realtors reserves the right to modify these terms at any time without
                prior notice. Changes become effective upon posting on this page. We
                recommend reviewing these terms periodically.
              </p>
            </div>

            <div className="card" style={{ padding: 24, background: '#f8fafc', marginTop: 12 }}>
              <h3 style={{ fontSize: 20, marginBottom: 10 }}>Need help?</h3>
              <p className="small muted">For any questions about these terms, contact us:</p>
              <div className="small">
                <span>ðŸ“ž <a href="tel:9490434262" className="gold" style={{ fontWeight: 800 }}>9490434262</a></span>
                <span style={{ marginLeft: 16 }}>ðŸ“§ <a href="mailto:mssrealtrs@gmail.com" className="gold">mssrealtrs@gmail.com</a></span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
