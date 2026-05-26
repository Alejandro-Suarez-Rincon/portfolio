import Image from 'next/image';
import { projects } from '@/data/projects';
import { workExperience } from '@/data/work';
import { ProjectCard } from '@/components/project-card';
import { WorkCard } from '@/components/work-card';

const SKILLS = [
  { category: 'Languages',      items: ['TypeScript', 'Python', 'Go', 'Java'] },
  { category: 'Frontend',       items: ['React', 'Next.js', 'TailwindCSS'] },
  { category: 'Backend',        items: ['FastAPI', 'Go Fiber', 'REST APIs'] },
  { category: 'Data',           items: ['PostgreSQL', 'MySQL', 'SQLC', 'Big Data'] },
  { category: 'Infrastructure', items: ['Docker', 'CI/CD', 'Cloud Deployment'] },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="page-container pt-20 pb-16">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-10">

          {/* Left: intro */}
          <div className="max-w-xl">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              Full Stack Engineer · Colombia
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-foreground mb-5">
              Juan Alejandro <br />
              Suarez Rincon
            </h1>
            <p className="text-base text-muted leading-relaxed mb-8">
              Systems engineer building end-to-end products — from architecture
              and database design to frontend interfaces and cloud infrastructure.
              Currently specializing in Big Data.
            </p>

            {/* Skills */}
            <div className="space-y-2.5">
              {SKILLS.map(({ category, items }) => (
                <div key={category} className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-muted w-24 shrink-0">{category}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs font-mono text-accent
                                   bg-accent-light border border-accent/20 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: profile photo */}
          <div className="flex-shrink-0 flex justify-center sm:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 blur-lg" />
              <div className="relative w-44 h-52 sm:w-52 sm:h-64 rounded-3xl overflow-hidden
                              bg-surface border-2 border-accent/20 shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Juan Alejandro Suarez Rincon"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Work Experience ─────────────────────────────────────────── */}
      <section id="experience" className="page-container pb-24">
        <div className="flex items-baseline justify-between mb-10 border-t border-border pt-10">
          <h2 className="text-sm font-mono text-accent tracking-widest uppercase font-semibold">
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
          <h2 className="text-sm font-mono text-accent tracking-widest uppercase font-semibold">
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
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="border-2 border-dashed border-accent/20 rounded-xl py-16 text-center bg-accent-light/40">
            <p className="text-sm text-muted font-mono">
              Proyectos personales — próximamente.
            </p>
          </div>
        )}
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <section id="contact" className="page-container pb-24">
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="text-sm font-mono text-accent tracking-widest uppercase font-semibold mb-3">
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
            className="group flex flex-col justify-between p-5 bg-surface border border-border rounded-xl
                       shadow-sm transition-all duration-200 hover:border-accent/30 hover:shadow-md"
          >
            <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center mb-5">
              <span className="text-accent text-base">✉</span>
            </div>
            <div>
              <p className="text-xs font-mono text-muted tracking-widest uppercase mb-1.5">Email</p>
              <p className="text-sm text-foreground font-medium break-all leading-snug mb-1">
                alejandrosuarez2032002@gmail.com
              </p>
              <p className="text-xs text-muted group-hover:text-accent transition-colors">
                Send a message ↗
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/573005491299"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 bg-surface border border-border rounded-xl
                       shadow-sm transition-all duration-200 hover:border-accent/30 hover:shadow-md"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center mb-5">
              <span className="text-emerald-600 text-base">💬</span>
            </div>
            <div>
              <p className="text-xs font-mono text-muted tracking-widest uppercase mb-1.5">WhatsApp</p>
              <p className="text-sm text-foreground font-medium mb-1">+57 300 549 1299</p>
              <p className="text-xs text-muted group-hover:text-accent transition-colors">
                Open chat ↗
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+573005491299"
            className="group flex flex-col justify-between p-5 bg-surface border border-border rounded-xl
                       shadow-sm transition-all duration-200 hover:border-accent/30 hover:shadow-md"
          >
            <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center mb-5">
              <span className="text-violet-600 text-base">📞</span>
            </div>
            <div>
              <p className="text-xs font-mono text-muted tracking-widest uppercase mb-1.5">Phone</p>
              <p className="text-sm text-foreground font-medium mb-1">+57 300 549 1299</p>
              <p className="text-xs text-muted group-hover:text-accent transition-colors">
                Call directly ↗
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
