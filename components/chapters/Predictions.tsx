import { chapters } from "@/content/site";
import { futures } from "@/content/futures";
import { ChapterShell } from "./ChapterShell";

export function Predictions() {
  const copy = chapters.predictions;
  const sample = futures[0];

  return (
    <ChapterShell
      id={copy.id}
      headingId="predictions-heading"
      headline={copy.headline}
      headlineVoice={copy.headlineVoice}
      body={copy.body}
    >
      <ul className="space-y-3">
        {sample.predictions.map((prediction) => (
          <li
            key={`${prediction.claim}-${prediction.by}`}
            className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--color-border)] pb-3"
          >
            <span className="text-[var(--color-ink)]">
              {prediction.claim} by {prediction.by}
            </span>
            <span className="text-sm text-[var(--color-fog)]">
              {prediction.probabilityPercent}% likely
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-[var(--color-fog)]">
        Sample markers only. No product-wide accuracy number is quoted.
      </p>
    </ChapterShell>
  );
}
