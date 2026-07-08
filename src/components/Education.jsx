import { education, certifications } from '../data/resume'
import SectionTitle from './SectionTitle'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle label="Education" title="학력 &amp; 자격" />

        <div className="edu-grid">
          <div className="edu-block">
            <h3 className="edu-heading">학력</h3>
            <div className="edu-list">
              {education.map((edu) => (
                <article key={edu.school} className="card edu-card">
                  <div className="edu-header">
                    <h4>{edu.school}</h4>
                    <span className="edu-period">{edu.period}</span>
                  </div>
                  <p className="edu-major">{edu.major}</p>
                  <div className="edu-footer">
                    {edu.grade !== '-' && <span>학점 {edu.grade}</span>}
                    <span className="edu-status">{edu.status}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="edu-block">
            <h3 className="edu-heading">자격증</h3>
            <div className="cert-list">
              {certifications.map((cert) => (
                <article key={cert.name} className="card cert-card">
                  <h4>{cert.name}</h4>
                  <p>
                    {cert.issuer}
                    {cert.date && ` · ${cert.date}`}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
