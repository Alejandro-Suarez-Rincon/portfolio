import { projects } from '@/data/projects';
import { workExperience } from '@/data/work';
import { ProjectCard } from '@/components/project-card';
import { WorkCard } from '@/components/work-card';

const SKILLS = [
  { category: 'Languages',      items: ['TypeScript', 'Python', 'Go', 'Java'] },
  { category: 'Frontend',       items: ['React', 'Next.js', 'TailwindCSS'] },
  { category: 'Backend',        items: ['FastAPI', 'Go Fiber', 'REST APIs'] },
  { category: 'Data',           items: ['PostgreSQL', 'MySQL', 'SQLC', 'Big Data'] },
  { category: 'Infrastructure', items: ['Docker', 'CI/CD', 'Cloud Deployment', 'Linux'] },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="page-container pt-24 pb-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-muted tracking-widest uppercase mb-4">
            Full Stack Engineer · Colombia
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-foreground mb-6">
            Juan Alejandro <br className="hidden sm:block" />
            Suarez Rincon
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-xl">
            Systems engineer building end-to-end products — from architecture
            and database design to frontend interfaces and cloud infrastructure.
            Currently specializing in Big Data.
          </p>

          {/* Skills inline */}
          <div className="mt-10 space-y-3">
            {SKILLS.map(({ category, items }) => (
              <div key={category} className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-muted w-24 shrink-0">{category}</span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs font-mono text-foreground/60 bg-surface border border-border rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work Experience ─────────────────────────────────────────── */}
      <section id="experience" className="page-container pb-24">
        <div className="flex items-baseline justify-between mb-10 border-t border-border pt-10">
          <h2 className="text-sm font-mono text-muted tracking-widest uppercase">
            Work Experience
          </h2>
          <span className="text-xs font-mono text-muted">
            {workExperience.length} companies
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {workExperience.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </section>

      {/* ── Personal Projects ───────────────────────────────────────── */}
      <section id="projects" className="page-container pb-24">
        <div className="flex items-baseline justify-between mb-10 border-t border-border pt-10">
          <h2 className="text-sm font-mono text-muted tracking-widest uppercase">
            Personal Projects
          </h2>
          {projects.length > 0 && (
            <span className="text-xs font-mono text-muted">
              {projects.length} projects
            </span>
          )}
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-border rounded-lg py-16 text-center">
            <p className="text-sm text-muted font-mono">
              Coming soon — personal projects in progress.
            </p>
          </div>
        )}
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <section id="contact" className="page-container pb-24">
        <div className="border-t border-border pt-10 mb-12">
          <h2 className="text-sm font-mono text-muted tracking-widest uppercase mb-3">
            Contact
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-foreground max-w-md leading-snug">
            Let&apos;s build something together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Email */}
          <a
            href="mailto:alejandrosuarez2032002@gmail.com"
            className="group flex flex-col justify-between p-5 bg-surface border border-border rounded-lg
                       transition-all duration-200 hover:border-white/20 hover:bg-surface-2"
          >
            <span className="text-xs font-mono text-muted tracking-widest uppercase mb-6">
              Email
            </span>
            <div>
              <p className="text-sm text-foreground font-medium break-all mb-1">
                alejandrosuarez2032002@gmail.com
              </p>
              <p className="text-xs text-muted group-hover:text-foreground transition-colors">
                Send a message ↗
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/573005491299"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 bg-surface border border-border rounded-lg
                       transition-all duration-200 hover:border-white/20 hover:bg-surface-2"
          >
            <span className="text-xs font-mono text-muted tracking-widest uppercase mb-6">
              WhatsApp
            </span>
            <div>
              <p className="text-sm text-foreground font-medium mb-1">
                +57 300 549 1299
              </p>
              <p className="text-xs text-muted group-hover:text-foreground transition-colors">
                Open chat ↗
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+573005491299"
            className="group flex flex-col justify-between p-5 bg-surface border border-border rounded-lg
                       transition-all duration-200 hover:border-white/20 hover:bg-surface-2"
          >
            <span className="text-xs font-mono text-muted tracking-widest uppercase mb-6">
              Phone
            </span>
            <div>
              <p className="text-sm text-foreground font-medium mb-1">
                +57 300 549 1299
              </p>
              <p className="text-xs text-muted group-hover:text-foreground transition-colors">
                Call directly ↗
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
