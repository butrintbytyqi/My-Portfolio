import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { experiences } from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionHeader number="02" label="Experience" title="Where I’ve worked" />
        <ol className="exp__list">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`}>
              <Reveal>
                <article className="exp__row">
                  <div className="exp__when">
                    <p className="mono-label exp__period">{exp.period}</p>
                    <p className="mono-label exp__location">{exp.location}</p>
                  </div>

                  <div className="exp__body">
                    <h3 className="exp__role">{exp.role}</h3>
                    <p className="exp__company">{exp.company}</p>
                    <p className="exp__summary">{exp.summary}</p>
                    <ul className="exp__points">
                      {exp.points.map((point) => (
                        <li key={point.slice(0, 24)}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="mono-label exp__stack">{exp.stack.join(' · ')}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
