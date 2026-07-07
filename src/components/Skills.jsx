import { skills } from '../data/resume'
import SectionTitle from './SectionTitle'

const categories = [
  { key: 'backend', label: 'Backend' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'infra', label: 'Infra / DevOps' },
  { key: 'security', label: 'Security' },
  { key: 'tools', label: 'Tools' },
]

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle label="Skills" title="기술 스택" />

        <div className="skills-grid">
          {categories.map(({ key, label }) => (
            <div key={key} className="card skill-card">
              <h3 className="skill-category">{label}</h3>
              <div className="skill-tags">
                {skills[key].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
