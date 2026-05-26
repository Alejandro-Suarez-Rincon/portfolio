import Link from 'next/link';
import type { Project } from '@/types/routes';

interface Props {
  project: Project;
}

export function MinimalTemplate({ project }: Props) {
  return (
    <article className="page-container py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors mb-16 font-medium"
      >
        <span aria-hidden="true">←</span>
        Back to work
      </Link>

      <div className="max-w-2xl">
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-mono text-accent bg-accent-light border border-accent/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-4">
          {project.name}
        </h1>

        <p className="text-xl text-muted leading-relaxed mb-10 border-b border-border pb-10">
          {project.shortDescription}
        </p>

        <p className="text-base text-foreground/80 leading-[1.8] whitespace-pre-line mb-12">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.productionUrl && (
            <a
              href={project.productionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-xl transition-opacity hover:opacity-90"
            >
              Live site <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-border text-sm text-muted rounded-xl transition-all hover:border-accent/30 hover:text-accent"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
