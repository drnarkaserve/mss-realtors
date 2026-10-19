import { useEnquiry } from './EnquiryModal'

export default function FloatingActions() {
  const { openEnquiry } = useEnquiry()

  return (
    <div className="float-actions">
<a className="float-btn float-call" href="tel:9490434262" aria-label="Call">
        <span className="tip">Call 9490434262</span>
        📞
      </a>
      <button className="float-btn float-enquire" onClick={() => openEnquiry()} aria-label="Enquire">
        <span className="tip">Send Enquiry</span>
        ✉️
      </button>
    </div>
  )
}