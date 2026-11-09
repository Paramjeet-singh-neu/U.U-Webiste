import { chapters, footer } from "@/content/site";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

export function Start() {
  const copy = chapters.start;

  return (
    <section
      id={copy.id}
      aria-labelledby="start-heading"
      className="uu-chapter"
    >
      <div className="uu-chapter-inner">
        <div className="uu-copy-column">
          <h2
            id="start-heading"
            className="font-[family-name:var(--font-future)] text-[clamp(1.75rem,2.5vw,2.441rem)] font-medium leading-[1.25] tracking-[-0.01em] text-[var(--color-ink)]"
          >
            {copy.headline}
          </h2>
          <p className="mt-3 max-w-[70ch] text-[1.0625rem] leading-[1.5] text-[var(--color-fog)]">
            {copy.body}
          </p>
          <div className="mt-8">
            <WaitlistForm />
            <noscript>
              <p className="mt-4 text-sm text-[var(--color-fog)]">
                JavaScript is off, so the web form cannot submit here. Text{" "}
                <a href="sms:+16282310257" className="underline">
                  (628) 231-0257
                </a>{" "}
                to join the waitlist.
              </p>
            </noscript>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-16 max-w-6xl border-t border-[var(--color-border)] px-6 py-10">
        <div className="uu-copy-column flex flex-col gap-4">
          <p className="font-[family-name:var(--font-present)] text-lg font-bold text-[var(--color-ink)]">
            u.u
          </p>
          <p className="text-sm text-[var(--color-fog)]">{footer.tagline}</p>
          <p className="text-sm text-[var(--color-fog)]">{footer.company}</p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <a
                  href={footer.privacy.href}
                  className="text-[var(--color-ink)] underline-offset-4 hover:underline"
                >
                  {footer.privacy.label}
                </a>
              </li>
              <li>
                <a
                  href={footer.terms.href}
                  className="text-[var(--color-ink)] underline-offset-4 hover:underline"
                  title={footer.terms.todo}
                >
                  {footer.terms.label}
                </a>
              </li>
              <li>
                <a
                  href={footer.contact.href}
                  className="text-[var(--color-ink)] underline-offset-4 hover:underline"
                >
                  {footer.contact.label}
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-xs text-[var(--color-fog)]">{footer.copyright}</p>
          <p className="text-xs text-[var(--color-fog)]">{footer.privacy.todo}</p>
          <p className="text-xs text-[var(--color-fog)]">{footer.terms.todo}</p>
        </div>
      </footer>
    </section>
  );
}
