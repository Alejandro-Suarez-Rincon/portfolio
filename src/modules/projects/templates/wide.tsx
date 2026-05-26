import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/routes';

interface Props {
  project: Project;
}

export function WideTemplate({ project }: Props) {
  return (
    <article>
      {/* Full-bleed hero — fuera del page-container intencionalmente */}
      <div className="relative w-full h-[55vh] min-h-64 bg-surface-2 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={`${project.name} hero`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 page-container pb-10">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground drop-shadow-2xl">
            {project.name}
          </h1>
        </div>
      </div>

      <div className="page-container py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <span aria-hidden="true">←</span> Back
          </Link>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-mono text-muted bg-surface-2 border border-border rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-xl text-muted leading-relaxed">
              {project.shortDescription}
            </p>
            <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          <aside className="space-y-4">
            {project.images.slice(0, 2).map((img, i) => (
              <div
                key={img}
                className="relative aspect-video rounded-lg overflow-hidden bg-surface-2 border border-border"
              >
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
                  className="flex items-center justify-between px-4 py-3 bg-foreground text-background text-sm font-medium rounded-lg transition-opacity hover:opacity-90"
                >
                  View live site <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-surface border border-border text-sm text-muted rounded-lg transition-all hover:text-foreground hover:border-white/20"
                >
                  Source code <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
