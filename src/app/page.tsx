'use client';

import Image from 'next/image';
import { projects } from '@/data/projects';
import { workExperience } from '@/data/work';
import { education } from '@/data/education';
import { ProjectCard } from '@/components/project-card';
import { WorkCard } from '@/components/work-card';
import { EducationCard } from '@/components/education-card';
import { useLanguage } from '@/i18n';

const SKILL_KEYS = ['languages', 'frontend', 'backend', 'data', 'infrastructure', 'ai'] as const;

const SKILL_ITEMS: Record<typeof SKILL_KEYS[number], string[]> = {
  languages:      ['TypeScript', 'Python', 'Go', 'Rust'],
  frontend:       ['React', 'Next.js', 'TailwindCSS'],
  backend:        ['FastAPI', 'Go Fiber', 'Express', 'Socket.io'],
  data:           ['PostgreSQL', 'SQLAlchemy', 'SQLC', 'Big Data'],
  infrastructure: ['Docker', 'Linux', 'Networking', 'CI/CD'],
  ai:             ['TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
};

export default function HomePage() {
  const { t, locale } = useLanguage();

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="page-container pt-20 pb-16">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-10">

          {/* Left: intro */}
          <div className="max-w-xl">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
              {t.hero.tagline}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-foreground mb-5">
              Juan Alejandro <br />
              Suarez Rincon
            </h1>
            <p className="text-base text-muted leading-relaxed mb-8">
              {t.hero.bio}
            </p>

            {/* Skills */}
            <div className="space-y-2.5">
              {SKILL_KEYS.map((key) => (
                <div key={key} className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-muted w-24 shrink-0">{t.skills[key]}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {SKILL_ITEMS[key].map((skill) => (
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
              <div className="relative w-52 h-64 sm:w-64 sm:h-80 rounded-3xl overflow-hidden
                              bg-surface border-2 border-accent/20 shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Juan Alejandro Suarez Rincon"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 208px, 256px"
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
            {t.sections.workExperience}
          </h2>
          <span className="text-xs font-mono text-muted">
            {t.counters.companies(workExperience.length)}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {workExperience.map((work) => (
            <WorkCard key={work.slug} work={work} locale={locale} />
          ))}
        </div>
      </section>

      {/* ── Personal Projects ───────────────────────────────────────── */}
      <section id="projects" className="page-container pb-24">
        <div className="flex items-baseline justify-between mb-10 border-t border-border pt-10">
          <h2 className="text-sm font-mono text-accent tracking-widest uppercase font-semibold">
            {t.sections.personalProjects}
          </h2>
          {projects.length > 0 && (
            <span className="text-xs font-mono text-muted">
              {t.counters.projects(projects.length)}
            </span>
          )}
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="border-2 border-dashed border-accent/20 rounded-xl py-16 text-center bg-accent-light/40">
            <p className="text-sm text-muted font-mono">
              {t.sections.comingSoon}
            </p>
          </div>
        )}
      </section>

      {/* ── Education ───────────────────────────────────────────────── */}
      <section id="education" className="page-container pb-24">
        <div className="flex items-baseline justify-between mb-10 border-t border-border pt-10">
          <h2 className="text-sm font-mono text-accent tracking-widest uppercase font-semibold">
            {t.sections.education}
          </h2>
          <span className="text-xs font-mono text-muted">
            {t.counters.entries(education.length)}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {education.map((entry) => (
            <EducationCard key={entry.institution} education={entry} locale={locale} />
          ))}
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <section id="contact" className="page-container pb-24">
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="text-sm font-mono text-accent tracking-widest uppercase font-semibold mb-3">
            {t.sections.contact}
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-foreground max-w-md leading-snug">
            {t.contact.headline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Email */}
          <a
            href="mailto:alejandrosuarez2032002@gmail.com"
            className="group flex flex-col justify-between p-5 bg-surface border border-border rounded-xl
                       shadow-sm transition-all duration-200 hover:border-accent/30 hover:shadow-md"
          >
            <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center mb-5">
              <svg className="text-accent w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-mono text-muted tracking-widest uppercase mb-1.5">Email</p>
              <p className="text-sm text-foreground font-medium break-all leading-snug mb-1">
                alejandrosuarez2032002@gmail.com
              </p>
              <p className="text-xs text-muted group-hover:text-accent transition-colors">
                {t.contact.sendMessage}
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
                {t.contact.openChat}
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/alejandro-suarez-072899277/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 bg-surface border border-border rounded-xl
                       shadow-sm transition-all duration-200 hover:border-accent/30 hover:shadow-md"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
              <svg className="text-blue-600 w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-mono text-muted tracking-widest uppercase mb-1.5">LinkedIn</p>
              <p className="text-sm text-foreground font-medium mb-1">Juan Alejandro Suarez</p>
              <p className="text-xs text-muted group-hover:text-accent transition-colors">
                {t.contact.viewProfile}
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
                {t.contact.callDirectly}
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
