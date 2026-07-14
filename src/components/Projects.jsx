import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { projects } from '../data/projects';
import './Projects.css';

const statusClass = {
  'Production': 'proj__status--production',
  'In Development': 'proj__status--dev',
  'Completed': 'proj__status--done',
};

export default function Projects() {
  return (
    <section id="work" className="projects">
      <div className="container">
        <SectionHeader number="03" label="Work" title="Selected projects" />
        <ol className="proj__list">
          {projects.map((project, i) => {
            const index = String(i + 1).padStart(2, '0');
            const href = project.live || project.github;
            return (
              <li key={project.title}>
                <Reveal>
                  <article className={`proj__row ${i % 2 ? 'proj__row--flip' : ''}`}>
                    <span className="proj__index" aria-hidden="true">{index}</span>
                    <div className="proj__body">
                      <h3 className="proj__title">
                        {href ? (
                          <a href={href} target="_blank" rel="noopener noreferrer">
                            {project.title} <span aria-hidden="true">↗</span>
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <p className="proj__desc">{project.description}</p>
                      <p className="mono-label proj__stack">{project.stack.join(' · ')}</p>
                      <p className="mono-label proj__meta">
                        <span className={`proj__status ${statusClass[project.status] || ''}`}>
                          {project.status}
                        </span>
                        <span className="proj__year"> · {project.year}</span>
                        {project.github && project.live && (
                          <>
                            {' · '}
                            <a
                              className="proj__code"
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Code <span aria-hidden="true">↗</span>
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
