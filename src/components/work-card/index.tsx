import type { WorkExperience } from '@/types/routes';

interface WorkCardProps {
  work: WorkExperience;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-foreground leading-snug">
            {work.companyUrl ? (
              <a
                href={work.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {work.company} ↗
              </a>
            ) : (
              work.company
            )}
          </h3>
          <p className="text-sm text-muted mt-0.5">{work.role}</p>
        </div>
        <span className="text-xs font-mono text-muted whitespace-nowrap pt-0.5">
          {work.period}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-foreground/70 leading-relaxed">
        {work.description}
      </p>

      {/* Sub-projects */}
      {work.projects && work.projects.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs font-mono text-muted tracking-widest uppercase">
            Projects
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {work.projects.map((project) => (
              <div
                key={project.name}
                className="bg-surface-2 border border-border rounded-md p-4"
              >
                <p className="text-sm font-medium text-foreground mb-1.5">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {project.name} ↗
                    </a>
                  ) : (
                    project.name
                  )}
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-mono text-muted bg-surface-2 border border-border rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
