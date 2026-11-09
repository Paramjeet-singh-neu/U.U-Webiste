import { chapters } from "@/content/site";
import { futures } from "@/content/futures";
import { ChapterShell } from "./ChapterShell";

export function Plan() {
  const copy = chapters.plan;
  const sample = futures[0];

  return (
    <ChapterShell
      id={copy.id}
      headingId="plan-heading"
      headline={copy.headline}
      headlineVoice={copy.headlineVoice}
      body={copy.body}
    >
      <ol className="space-y-4">
        {sample.milestones.map((milestone, index) => (
          <li key={milestone.title}>
            <p className="font-medium text-[var(--color-ink)]">
              {index + 1}. {milestone.title}
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-[var(--color-fog)]">
              {milestone.steps.map((step) => (
                <li key={step.label}>{step.label}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-[var(--color-fog)]">
        Sample path: {sample.title}. Other branches live in content/futures.ts.
      </p>
    </ChapterShell>
  );
}
