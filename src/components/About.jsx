import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { about } from '../data/about';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionHeader number="01" label="About" title="Profile" />
        <div className="grid">
          <Reveal className="about__body">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="about__para">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal className="about__aside" delay={0.1}>
            <dl className="about__facts">
              {about.quickFacts.map((fact) => (
                <div key={fact.label} className="about__fact">
                  <dt className="mono-label">{fact.label}</dt>
                  <dd>
                    {fact.href ? <a href={fact.href}>{fact.value}</a> : fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="about__block">
              <h3 className="mono-label about__block-label">Languages</h3>
              <ul className="about__languages">
                {about.languages.map((language) => (
                  <li key={language.name}>
                    <span>{language.name}</span>
                    <span className="about__level">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about__block">
              <h3 className="mono-label about__block-label">Interests</h3>
              <p className="about__interests">{about.interests.join(', ')}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
