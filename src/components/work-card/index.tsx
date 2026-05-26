import type { WorkExperience } from '@/types/routes';

interface WorkCardProps {
  work: WorkExperience;
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-5 shadow-sm
                    transition-all duration-200 hover:border-accent/25 hover:shadow-md">
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
          <p className="text-sm text-accent mt-0.5 font-medium">{work.role}</p>
        </div>
        <span className="text-xs font-mono text-muted whitespace-nowrap pt-0.5 bg-surface-2
                         px-2.5 py-1 rounded-full border border-border">
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
                className="bg-accent-light border border-accent/15 rounded-lg p-4"
              >
                <p className="text-sm font-semibold text-accent mb-1.5">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.name} ↗
                    </a>
                  ) : (
                    project.name
                  )}
                </p>
                <p className="text-xs text-foreground/60 leading-relaxed">
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
            className="px-2 py-0.5 text-xs font-mono text-accent bg-accent-light
                       border border-accent/15 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
