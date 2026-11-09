import { chapters } from "@/content/site";
import { futures } from "@/content/futures";
import { ChapterShell } from "./ChapterShell";

export function DailyText() {
  const copy = chapters.dailyText;
  const sample = futures[0];

  return (
    <ChapterShell
      id={copy.id}
      headingId="daily-text-heading"
      headline={copy.headline}
      headlineVoice={copy.headlineVoice}
      body={copy.body}
    >
      <ul className="space-y-3">
        {sample.dailyTexts.map((text) => (
          <li
            key={text.body}
            className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-3"
          >
            <p className="sr-only">From future-you</p>
            <p className="font-[family-name:var(--font-future)] text-[1.0625rem] leading-[1.6] text-[var(--color-ink)]">
              {text.body}
            </p>
          </li>
        ))}
      </ul>
    </ChapterShell>
  );
}
