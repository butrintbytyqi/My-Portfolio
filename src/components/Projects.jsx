import SectionHeader from './SectionHeader';
import { projects, earlierProjects } from '../data/projects';
import './Projects.css';

const statusClass = {
  'Production': 'proj__status--production',
  'In Development': 'proj__status--dev',
  'Completed': 'proj__status--done',
  'Demo': 'proj__status--demo',
  'Prototype': 'proj__status--demo',
};

// Optional detail lines. A line renders only when its field has text, so a
// project without verified detail simply shows nothing here.
const FACTS = [
  ['role', 'Role'],
  ['challenge', 'Problem'],
  ['contribution', 'Contribution'],
  ['outcome', 'Outcome'],
];

function ProjectMeta({ project }) {
  return (
    <p className="mono-label proj__meta">
      <span className={`proj__status ${statusClass[project.status] || ''}`}>
        {project.status}
      </span>
      {project.year && <span className="proj__year"> · {project.year}</span>}
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
      {project.caseStudy && (
        <>
          {' · '}
          <a className="proj__code" href={project.caseStudy}>
            Case study <span aria-hidden="true">→</span>
          </a>
        </>
      )}
    </p>
  );
}

function ProjectName({ project }) {
  const href = project.live || project.github;
  if (!href) return project.title;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {project.title} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="projects">
      <div className="container">
        <SectionHeader number="03" label="Work" title="Selected projects" />
        <ol className="proj__list">
          {projects.map((project, i) => {
            const index = String(i + 1).padStart(2, '0');
            const facts = FACTS.filter(([key]) => project[key]);
            return (
              <li key={project.title}>
                <article className={`proj__row ${i % 2 ? 'proj__row--flip' : ''}`}>
                  <span className="proj__index" aria-hidden="true">{index}</span>
                  <div className="proj__body">
                    <h3 className="proj__title">
                      <ProjectName project={project} />
                    </h3>
                    <p className="proj__desc">{project.description}</p>
                    {facts.length > 0 && (
                      <dl className="proj__facts">
                        {facts.map(([key, label]) => (
                          <div className="proj__fact" key={key}>
                            <dt className="mono-label">{label}</dt>
                            <dd>{project[key]}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    <p className="mono-label proj__stack">{project.stack.join(' · ')}</p>
                    <ProjectMeta project={project} />
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        {earlierProjects.length > 0 && (
          <details className="proj__earlier">
            <summary className="mono-label proj__earlier-toggle">
              <span>Earlier projects · {earlierProjects.length}</span>
            </summary>
            <ul className="proj__earlier-list">
              {earlierProjects.map((project) => (
                <li className="proj__earlier-item" key={project.title}>
                  <h3 className="proj__earlier-title">
                    <ProjectName project={project} />
                  </h3>
                  <div>
                    <p className="proj__earlier-desc">{project.description}</p>
                    <p className="mono-label proj__stack">{project.stack.join(' · ')}</p>
                    <ProjectMeta project={project} />
                  </div>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </section>
  );
}
