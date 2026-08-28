import { profile } from '../data/profile';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container grid hero__grid">
        <div className="hero__headline">
          <p className="mono-label hero__kicker">
            {profile.title} · {profile.location}
          </p>
          <h1 className="hero__title">
            {profile.name}
            <span className="hero__dot" aria-hidden="true">.</span>
            <em className="hero__em">{profile.headline}</em>
          </h1>
        </div>

        <aside className="hero__meta">
          <dl className="hero__facts">
            {profile.meta.map((fact) => (
              <div key={fact.label} className="hero__fact">
                <dt className="mono-label">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="hero__links mono-label">
            <li>
              <a className="hero__cv" href={profile.cvUrl} download="ButrintBytyqiCV.pdf">
                CV <span aria-hidden="true">↓</span>
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>Email</a>
            </li>
          </ul>
        </aside>
      </div>
      <div className="container">
        <hr className="rule" />
      </div>
    </section>
  );
}
