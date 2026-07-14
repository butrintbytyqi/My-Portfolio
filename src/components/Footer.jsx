import { navItems } from '../data/nav';
import { profile } from '../data/profile';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid footer__grid">
        <div className="footer__id">
          <p className="footer__name">Butrint Bytyqi<span aria-hidden="true">.</span></p>
          <p className="footer__tag">
            Software engineer — AI agents &amp; business process automation.
          </p>
          <p className="mono-label footer__copy">© {new Date().getFullYear()}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer sections">
          <h3 className="mono-label footer__heading">Index</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__nav">
          <h3 className="mono-label footer__heading">Elsewhere</h3>
          <ul>
            <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={`mailto:${profile.email}`}>Email</a></li>
            <li><a href={profile.cvUrl} download="ButrintBytyqiCV.pdf">CV <span aria-hidden="true">↓</span></a></li>
          </ul>
        </div>

        <div className="footer__meta">
          <p className="mono-label footer__colophon">
            Set in Instrument Serif &amp; Schibsted Grotesk · Built with React + Vite · No tracking
          </p>
          <a className="mono-label footer__top" href="#top">
            <span aria-hidden="true">↑</span> Top
          </a>
        </div>
      </div>
    </footer>
  );
}
