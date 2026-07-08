import { projects } from '../data/resume'
import SectionTitle from './SectionTitle'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          label="Projects"
          title="주요 프로젝트"
          description="유비디시전 재직 기간 동안 수행한 핵심 프로젝트"
        />

        <div className="project-list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`card project-card ${project.highlight ? 'highlight' : ''}`}
            >
              <div className="project-header">
                <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="project-title-wrap">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-period">{project.period}</span>
                    {project.link && (
                      <a
                        href={project.link.url}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.link.label} ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-body">
                <div className="project-section">
                  <h4>주요 업무</h4>
                  <ul>
                    {project.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-section">
                  <h4>성과</h4>
                  <ul className="achievement-list">
                    {project.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
