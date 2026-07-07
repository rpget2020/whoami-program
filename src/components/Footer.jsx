import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.nameKo} ({profile.nameEn}). All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
