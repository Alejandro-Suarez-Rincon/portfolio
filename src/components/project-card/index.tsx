import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/types/routes';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-surface rounded-lg overflow-hidden border border-border transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-surface-2">
        <Image
          src={project.thumbnail}
          alt={`${project.name} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-0.5 rounded text-xs font-mono text-muted bg-surface-2 border border-border"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="inline-block px-2 py-0.5 rounded text-xs font-mono text-muted">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <h3 className="text-base font-semibold text-foreground mb-1.5 transition-colors group-hover:text-accent leading-snug">
          {project.name}
        </h3>

        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex items-center gap-1 text-xs text-muted transition-all group-hover:text-foreground group-hover:gap-2">
          <span>View project</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}
