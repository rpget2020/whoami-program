import { profile } from '../data/resume'

const navItems = [
  { id: 'about', label: '소개' },
  { id: 'experience', label: '경력' },
  { id: 'projects', label: '프로젝트' },
  { id: 'skills', label: '기술' },
  { id: 'education', label: '학력' },
  { id: 'contact', label: '연락처' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          <span className="logo-mark">&lt;/&gt;</span>
          {profile.nameKo}
        </a>
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
