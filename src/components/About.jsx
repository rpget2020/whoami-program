import { about } from '../data/resume'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          label="About"
          title="자기소개"
          description="성장 과정, 강점, 그리고 개발자로서의 비전"
        />

        <div className="about-grid">
          <article className="card about-card">
            <h3 className="card-title">성장 과정</h3>
            <p className="card-text pre-line">{about.growth}</p>
          </article>

          <article className="card about-card">
            <h3 className="card-title">지원 직무 관련 경험</h3>
            <p className="card-text pre-line">{about.experience}</p>
          </article>

          <article className="card about-card full-width">
            <h3 className="card-title">강점</h3>
            <div className="strength-list">
              {about.strengths.map((s) => (
                <div key={s.title} className="strength-item">
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="card about-card">
            <h3 className="card-title">약점 &amp; 개선</h3>
            <p className="card-text">{about.weakness}</p>
          </article>

          <article className="card about-card">
            <h3 className="card-title">목표 &amp; 비전</h3>
            <div className="vision-list">
              <div className="vision-item">
                <span className="vision-label">단기</span>
                <p>{about.vision.short}</p>
              </div>
              <div className="vision-item">
                <span className="vision-label">중장기</span>
                <p>{about.vision.long}</p>
              </div>
              <div className="vision-item">
                <span className="vision-label">궁극적 목표</span>
                <p>{about.vision.goal}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
