export default function SectionTitle({ label, title, description }) {
  return (
    <div className="section-title">
      <span className="section-label">{label}</span>
      <h2 className="section-heading">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  )
}
