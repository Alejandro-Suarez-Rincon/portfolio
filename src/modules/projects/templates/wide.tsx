'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/routes';
import { useLanguage, getLocalizedField } from '@/i18n';

interface Props {
  project: Project;
}

export function WideTemplate({ project }: Props) {
  const { t, locale } = useLanguage();

  const shortDescription = getLocalizedField(project, 'shortDescription', locale);
  const description = getLocalizedField(project, 'description', locale);

  return (
    <article>
      {/* Full-bleed hero */}
      <div className="relative w-full h-[55vh] min-h-72 overflow-hidden bg-gradient-to-br from-accent-light via-surface-2 to-surface">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="font-mono font-black text-[20rem] text-accent leading-none select-none">
            {project.name[0]}
          </span>
        </div>

        <Image
          src={project.thumbnail}
          alt={`${project.name} hero`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />

        {/* Overlaid title */}
        <div className="absolute bottom-0 left-0 right-0 page-container pb-10">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white drop-shadow-lg">
            {project.name}
          </h1>
        </div>
      </div>

      {/* Content below hero */}
      <div className="page-container py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors font-medium"
          >
            <span aria-hidden="true">←</span> {t.projectTemplate.back}
          </Link>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-mono text-accent bg-accent-light border border-accent/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-xl text-muted leading-relaxed">{shortDescription}</p>
            <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          {/* Sidebar: secondary images + links */}
          <aside className="space-y-4">
            {project.images.slice(0, 2).map((img, i) => (
              <div
                key={img}
                className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-accent-light to-surface-2 border border-border"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-3xl font-bold text-accent/15 select-none">
                    {project.name[0]}
                  </span>
                </div>
                <Image
                  src={img}
                  alt={`${project.name} — detail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
              </div>
            ))}

            <div className="space-y-2 pt-2">
              {project.productionUrl && (
                <a
                  href={project.productionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-accent text-white text-sm font-medium rounded-xl transition-opacity hover:opacity-90"
                >
                  {t.projectTemplate.viewLiveSite}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-surface border border-border text-sm text-muted rounded-xl transition-all hover:border-accent/30 hover:text-accent"
                >
                  {t.projectTemplate.sourceCode}
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
