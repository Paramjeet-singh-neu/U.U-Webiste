"use client";

import { useState } from "react";
import { chapters } from "@/content/site";
import { futures, type FutureBranch } from "@/content/futures";
import { ChapterShell } from "./ChapterShell";

function BranchCard({
  branch,
  selected,
  onSelect,
}: {
  branch: FutureBranch;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`w-full rounded-md border px-4 py-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${
        selected
          ? "border-[var(--color-accent)] bg-[var(--color-surface-muted)]"
          : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-fog)]"
      }`}
    >
      <span className="block font-[family-name:var(--font-present)] text-[1.0625rem] font-semibold text-[var(--color-ink)]">
        {branch.title}
      </span>
      <span className="mt-1 block text-sm leading-[1.5] text-[var(--color-fog)]">
        {branch.summary}
      </span>
    </button>
  );
}

export function Futures() {
  const copy = chapters.futures;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = futures.find((b) => b.id === selectedId) ?? null;

  return (
    <ChapterShell
      id={copy.id}
      headingId="futures-heading"
      headline={copy.headline}
      headlineVoice={copy.headlineVoice}
      body={copy.body}
    >
      <div
        className="flex flex-col gap-3"
        role="group"
        aria-label="Sample futures"
      >
        {futures.map((branch) => (
          <BranchCard
            key={branch.id}
            branch={branch}
            selected={selectedId === branch.id}
            onSelect={() => setSelectedId(branch.id)}
          />
        ))}
      </div>

      {selected ? (
        <div
          className="mt-6 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-4"
          role="status"
        >
          <p className="font-[family-name:var(--font-future)] text-[1.125rem] text-[var(--color-ink)]">
            You chose: {selected.title}
          </p>
          <p className="mt-2 text-sm text-[var(--color-fog)]">
            The chapters below show sample milestones, daily texts, and
            predictions for this path. (Scripted demo — not a live forecast.)
          </p>
        </div>
      ) : (
        <p className="mt-4 text-sm text-[var(--color-fog)]">
          Pick a sample future to preview the path ahead.
        </p>
      )}

      {/* JS-off: list all three branches as plain content */}
      <noscript>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.9375rem] text-[var(--color-fog)]">
          {futures.map((branch) => (
            <li key={branch.id}>
              <strong className="text-[var(--color-ink)]">{branch.title}.</strong>{" "}
              {branch.summary}
            </li>
          ))}
        </ul>
      </noscript>
    </ChapterShell>
  );
}
