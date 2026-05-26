import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/routes';

interface Props {
  project: Project;
}

export function StandardTemplate({ project }: Props) {
  const allImages = [project.thumbnail, ...project.images].filter(Boolean);

  return (
    <article className="page-container py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-12"
      >
        <span aria-hidden="true">←</span>
        Back to work
      </Link>

      <header className="mb-10">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-mono text-muted bg-surface-2 border border-border rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-3">
          {project.name}
        </h1>
        <p className="text-lg text-muted">{project.shortDescription}</p>
      </header>

      {allImages[0] && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-2 border border-border mb-4">
          <Image
            src={allImages[0]}
            alt={`${project.name} — main screenshot`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1152px"
          />
        </div>
      )}

      {allImages.length > 1 && (
        <div className="grid grid-cols-2 gap-4 mb-12">
          {allImages.slice(1).map((img, i) => (
            <div
              key={img}
              className="relative aspect-video rounded-lg overflow-hidden bg-surface-2 border border-border"
            >
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-xs font-mono tracking-widest uppercase text-muted mb-4">
            About the project
          </h2>
          <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </div>

        <aside className="flex flex-col gap-3">
          <h2 className="text-xs font-mono tracking-widest uppercase text-muted mb-1">
            Links
          </h2>
          {project.productionUrl && (
            <a
              href={project.productionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-4 py-3 bg-surface border border-border rounded-lg text-sm text-foreground transition-all hover:border-white/20 hover:bg-surface-2"
            >
              Live site <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-4 py-3 bg-surface border border-border rounded-lg text-sm text-muted transition-all hover:border-white/20 hover:text-foreground"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
        </aside>
      </div>
    </article>
  );
}
