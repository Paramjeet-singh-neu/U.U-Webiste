import { faq, faqIntro } from "@/content/site";

/**
 * Native details/summary accordion — works with JavaScript off,
 * keyboard accessible, no client hydration required.
 */
export function Faq() {
  return (
    <section
      id={faqIntro.id}
      aria-labelledby="faq-heading"
      className="uu-chapter"
    >
      <div className="uu-chapter-inner">
        <div className="uu-copy-column">
          <h2
            id="faq-heading"
            className="font-[family-name:var(--font-future)] text-[clamp(1.75rem,2.5vw,2.441rem)] font-medium leading-[1.25] tracking-[-0.01em] text-[var(--color-ink)]"
          >
            {faqIntro.headline}
          </h2>
          <p className="mt-3 max-w-[70ch] text-[1.0625rem] leading-[1.5] text-[var(--color-fog)]">
            {faqIntro.body}
          </p>

          <div className="mt-8">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group border-b border-[var(--color-border)] py-3"
              >
                <summary className="cursor-pointer list-none font-medium text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="text-[var(--color-fog)] group-open:hidden"
                    >
                      +
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden text-[var(--color-fog)] group-open:inline"
                    >
                      −
                    </span>
                  </span>
                </summary>
                <p className="pt-2 text-[0.9375rem] leading-[1.6] text-[var(--color-fog)]">
                  {item.answer}
                  {item.todo ? (
                    <span className="mt-2 block text-xs text-[var(--color-risk)]">
                      Needs team confirmation before launch.
                    </span>
                  ) : null}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
