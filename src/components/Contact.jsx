import { profile } from '../data/resume'
import SectionTitle from './SectionTitle'

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionTitle
          label="Contact"
          title="연락처"
          description="프로젝트 협업이나 채용 관련 문의를 환영합니다."
        />

        <div className="contact-grid">
          <a href={`mailto:${profile.email}`} className="card contact-card">
            <span className="contact-label">Email</span>
            <span className="contact-value">{profile.email}</span>
          </a>
          <a href={`tel:${profile.phone}`} className="card contact-card">
            <span className="contact-label">Phone</span>
            <span className="contact-value">{profile.phone}</span>
          </a>
          <div className="card contact-card">
            <span className="contact-label">Location</span>
            <span className="contact-value">{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
