import type { Education } from '@/types/routes';

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-foreground leading-snug">
            {education.degree}
          </h3>
          <p className="text-sm text-accent mt-0.5 font-medium">
            {education.institution}
          </p>
        </div>
        <span className="text-xs font-mono text-muted whitespace-nowrap pt-0.5
                         bg-surface-2 px-2.5 py-1 rounded-full border border-border shrink-0">
          {education.period}
        </span>
      </div>

      {education.status && (
        <span className="self-start px-2.5 py-0.5 text-xs font-mono rounded-full
                         text-accent bg-accent-light border border-accent/20">
          {education.status}
        </span>
      )}

      {education.description && (
        <p className="text-sm text-foreground/70 leading-relaxed">
          {education.description}
        </p>
      )}
    </div>
  );
}
