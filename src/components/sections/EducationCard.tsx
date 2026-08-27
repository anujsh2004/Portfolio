import { GraduationCap } from "lucide-react";
import { education } from "@/content/education";

export function EducationCard() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-6">
      <p className="text-xs uppercase tracking-widest text-foreground-secondary">
        {education.label}
      </p>

      <div className="mt-4 flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <GraduationCap size={18} strokeWidth={1.75} />
        </div>
        <div>
          <p className="font-display text-base font-semibold text-foreground">
            {education.degree}
          </p>
          <p className="text-sm text-foreground-secondary">{education.specialization}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2.5 border-t border-border pt-5 text-sm">
        <div className="flex items-center justify-between gap-4">
          <span className="text-foreground-secondary">Institution</span>
          <span className="text-right font-medium text-foreground">{education.institution}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-foreground-secondary">Batch</span>
          <span className="font-medium text-foreground">{education.batch}</span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
        {education.focusAreas.map((area) => (
          <span
            key={area}
            className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
          >
            {area}
          </span>
        ))}
      </div>
    </div>
  );
}
