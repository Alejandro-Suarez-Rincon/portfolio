'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/routes';
import { useLanguage, getLocalizedField } from '@/i18n';

interface Props {
  project: Project;
}

function ImageSlot({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-accent-light to-surface-2 border border-border">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-6xl font-bold text-accent/10 select-none">
          {alt[0]}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 1200px) 100vw, 1152px"
      />
    </div>
  );
}

export function StandardTemplate({ project }: Props) {
  const { t, locale } = useLanguage();
  const allImages = [project.thumbnail, ...project.images].filter(Boolean);

  const shortDescription = getLocalizedField(project, 'shortDescription', locale);
  const description = getLocalizedField(project, 'description', locale);

  return (
    <article className="page-container py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors mb-12 font-medium"
      >
        <span aria-hidden="true">←</span>
        {t.projectTemplate.backToWork}
      </Link>

      <header className="mb-10">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-mono text-accent bg-accent-light border border-accent/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-3">
          {project.name}
        </h1>
        <p className="text-lg text-muted">{shortDescription}</p>
      </header>

      {/* Main image */}
      {allImages[0] && (
        <div className="mb-4">
          <ImageSlot src={allImages[0]} alt={`${project.name} — main screenshot`} priority />
        </div>
      )}

      {/* Gallery grid */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-2 gap-4 mb-12">
          {allImages.slice(1).map((img, i) => (
            <div key={img} className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-accent-light to-surface-2 border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-4xl font-bold text-accent/10 select-none">
                  {project.name[0]}
                </span>
              </div>
              <Image
                src={img}
                alt={`${project.name} — screenshot ${i + 2}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 576px"
              />
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
        {/* Description */}
        <div className="lg:col-span-2">
          <h2 className="text-xs font-mono tracking-widest uppercase text-accent mb-4 font-semibold">
            {t.projectTemplate.aboutTheProject}
          </h2>
          <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Links sidebar */}
        <aside className="flex flex-col gap-3">
          <h2 className="text-xs font-mono tracking-widest uppercase text-accent mb-1 font-semibold">
            {t.projectTemplate.links}
          </h2>
          {project.productionUrl && (
            <a
              href={project.productionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-4 py-3 bg-accent text-white rounded-xl text-sm font-medium transition-opacity hover:opacity-90"
            >
              {t.projectTemplate.viewLiveSite}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-4 py-3 bg-surface border border-border rounded-xl text-sm text-muted transition-all hover:border-accent/30 hover:text-accent"
            >
              {t.projectTemplate.github}
            </a>
          )}
        </aside>
      </div>
    </article>
  );
}
