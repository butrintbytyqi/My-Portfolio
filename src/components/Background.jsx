import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { education, recognition, additional } from '../data/background';
import './Background.css';

export default function Background() {
  return (
    <section id="background" className="background">
      <div className="container">
        <SectionHeader number="04" label="Background" title="Education & recognition" />
        <div className="grid bg__grid">
          <Reveal className="bg__block">
            <h3 className="mono-label bg__label">Education</h3>
            {education.map((entry) => (
              <article key={entry.degree} className="bg__entry">
                <p className="bg__title">{entry.degree}</p>
                <p className="bg__issuer">{entry.school}</p>
                <p className="mono-label bg__year">
                  {entry.period} · {entry.location}
                </p>
                {entry.note && <p className="bg__note">{entry.note}</p>}
              </article>
            ))}
          </Reveal>

          <Reveal className="bg__block" delay={0.08}>
            <h3 className="mono-label bg__label">Recognition</h3>
            {recognition.map((entry) => (
              <article key={entry.title} className="bg__entry">
                <p className="bg__title">{entry.title}</p>
                <p className="bg__issuer">{entry.issuer}</p>
                <p className="mono-label bg__year">{entry.year}</p>
                {entry.note && <p className="bg__note">{entry.note}</p>}
              </article>
            ))}
          </Reveal>

          <Reveal className="bg__block" delay={0.16}>
            <h3 className="mono-label bg__label">Additional</h3>
            {additional.map((entry) => (
              <article key={entry.title} className="bg__entry">
                <p className="bg__title">{entry.title}</p>
                <p className="bg__issuer">{entry.issuer}</p>
                <p className="mono-label bg__year">{entry.year}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
