import { profile } from '../data/resume'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-badge">{profile.roleKo}</div>
        <h1 className="hero-title">
          안녕하세요,
          <br />
          <span className="hero-name">{profile.nameKo}</span>입니다.
        </h1>
        <p className="hero-subtitle">{profile.nameEn}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-tags">
          {profile.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            프로젝트 보기
          </a>
          <a href="#contact" className="btn btn-outline">
            연락하기
          </a>
        </div>
      </div>
      <div className="hero-bg" aria-hidden="true" />
    </section>
  )
}
