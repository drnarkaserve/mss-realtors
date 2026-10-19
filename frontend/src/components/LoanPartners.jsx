export default function LoanPartners({ partners = [] }) {
  if (!partners.length) return null
  const doubled = [...partners, ...partners]
  return (
    <div className="partner-strip">
      <div className="partner-track">
        {doubled.map((p, i) => (
          <div className="partner-pill" key={`${p}-${i}`}>
            <span>🏦</span> {p}
          </div>
        ))}
      </div>
    </div>
  )
}