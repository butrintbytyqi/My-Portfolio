import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { skillClusters } from '../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeader number="05" label="Skills" title="What I work with" />
        {skillClusters.map((cluster, i) => (
          <Reveal key={cluster.label} delay={i * 0.06}>
            <div className="skills__cluster">
              <h3 className="mono-label skills__label">{cluster.label}</h3>
              <p className="skills__items">{cluster.items.join(', ')}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
