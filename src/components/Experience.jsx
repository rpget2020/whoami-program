import { career } from '../data/resume'
import SectionTitle from './SectionTitle'

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionTitle label="Experience" title="경력 사항" />

        <article className="timeline-item">
          <div className="timeline-marker" />
          <div className="card timeline-card">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-company">{career.company}</h3>
                <p className="timeline-meta">
                  {career.department} · {career.position}
                </p>
              </div>
              <span className="timeline-period">{career.period}</span>
            </div>
            <p className="timeline-desc">{career.description}</p>
            <p className="timeline-note">
              전자서명 SaaS 플랫폼 구축, CSAP 인증 대응, API 연동, 화면 공유 서비스 등
              다양한 프로젝트를 수행하며 서비스 개발·운영·배포 전 과정을 담당했습니다.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
