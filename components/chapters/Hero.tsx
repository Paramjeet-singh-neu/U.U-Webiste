import { chapters } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { hero } = chapters;

  return (
    <section
      id={hero.id}
      aria-labelledby="hero-heading"
      className="uu-chapter uu-chapter-hero"
    >
      <div className="uu-chapter-inner">
        <div className="uu-copy-column">
          <p className="mb-3 font-[family-name:var(--font-present)] text-sm font-medium text-[var(--color-fog)]">
            u.u
          </p>
          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-future)] text-[clamp(2.25rem,5vw,3.815rem)] font-medium leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)]"
          >
            {hero.headline}
          </h1>
          <p className="mt-4 max-w-[70ch] text-[1.125rem] leading-[1.5] text-[var(--color-fog)]">
            {hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={hero.primary.href}>{hero.primary.label}</Button>
            <Button href={hero.secondary.href} variant="secondary">
              {hero.secondary.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
