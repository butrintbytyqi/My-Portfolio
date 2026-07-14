import './SectionHeader.css';

export default function SectionHeader({ number, label, title }) {
  return (
    <header className="section-header">
      <div className="section-header__meta">
        <span className="mono-label section-header__number" aria-hidden="true">{number}</span>
        <span className="mono-label section-header__label">{label}</span>
      </div>
      <h2 className="section-header__title">{title}</h2>
    </header>
  );
}
