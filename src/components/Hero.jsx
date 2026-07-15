import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/profile';
import './Hero.css';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (order) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.1 + order * 0.12, ease },
        };

  return (
    <section id="top" className="hero">
      <div className="container grid hero__grid">
        <div className="hero__headline">
          <motion.p className="mono-label hero__kicker" {...enter(0)}>
            {profile.title} · {profile.location}
          </motion.p>
          <motion.h1 className="hero__title" {...enter(1)}>
            {profile.name}
            <span className="hero__dot" aria-hidden="true">.</span>
            <em className="hero__em">{profile.headline}</em>
          </motion.h1>
        </div>

        <motion.aside className="hero__meta" {...enter(2)}>
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
        </motion.aside>
      </div>
      <div className="container">
        <hr className="rule" />
      </div>
    </section>
  );
}
