import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/types/routes';

interface ProjectCardProps {
  project: Project;
}

const GRADIENT_MAP: Record<number, string> = {
  0: 'from-blue-100 to-indigo-50',
  1: 'from-violet-100 to-purple-50',
  2: 'from-emerald-100 to-teal-50',
  3: 'from-amber-100 to-orange-50',
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps & { index?: number }) {
  const gradient = GRADIENT_MAP[index % 4];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-surface rounded-xl overflow-hidden border border-border
                 shadow-sm transition-all duration-300
                 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Thumbnail area */}
      <div className={`relative aspect-video w-full overflow-hidden bg-gradient-to-br ${gradient}`}>
        {/* Placeholder shown beneath the image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-5xl font-bold text-black/8 select-none">
            {project.name[0]}
          </span>
        </div>

        <Image
          src={project.thumbnail}
          alt={`${project.name} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-0.5 rounded-full text-xs font-mono
                         text-accent bg-accent-light border border-accent/15"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="inline-block px-2 py-0.5 rounded-full text-xs font-mono text-muted">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <h3 className="text-base font-semibold text-foreground mb-1.5 leading-snug
                       transition-colors group-hover:text-accent">
          {project.name}
        </h3>

        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex items-center gap-1 text-xs text-muted
                        transition-all group-hover:text-accent group-hover:gap-2">
          <span>View project</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}
