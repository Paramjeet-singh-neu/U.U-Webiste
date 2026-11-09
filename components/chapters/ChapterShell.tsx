import type { ReactNode } from "react";

type ChapterShellProps = {
  id: string;
  headingId: string;
  headline: string;
  headlineVoice: "future" | "present";
  body: string;
  children?: ReactNode;
  /** Extra note under body (e.g. privacy TODO) */
  note?: string;
  /** Flat calm panel (Chapter 8 — no 3D later either) */
  calm?: boolean;
};

export function ChapterShell({
  id,
  headingId,
  headline,
  headlineVoice,
  body,
  children,
  note,
  calm = false,
}: ChapterShellProps) {
  const headlineClass =
    headlineVoice === "future"
      ? "font-[family-name:var(--font-future)] font-medium"
      : "font-[family-name:var(--font-present)] font-semibold";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`uu-chapter ${calm ? "uu-chapter-calm" : ""}`}
    >
      <div className="uu-chapter-inner">
        <div className="uu-copy-column">
          <h2
            id={headingId}
            className={`${headlineClass} text-[clamp(1.75rem,2.5vw,2.441rem)] leading-[1.25] tracking-[-0.01em] text-[var(--color-ink)]`}
          >
            {headline}
          </h2>
          <p className="mt-3 max-w-[70ch] text-[1.0625rem] leading-[1.5] text-[var(--color-fog)]">
            {body}
          </p>
          {note ? (
            <p className="mt-3 max-w-[70ch] text-sm leading-[1.5] text-[var(--color-risk)]">
              {note}
            </p>
          ) : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
