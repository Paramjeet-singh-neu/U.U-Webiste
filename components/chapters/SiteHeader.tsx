import { nav } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_92%,transparent)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#hero"
          className="font-[family-name:var(--font-present)] text-xl font-bold tracking-tight text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          {nav.brand}
          <span className="sr-only"> — home</span>
        </a>
        <Button href={nav.waitlist.href} variant="primary">
          {nav.waitlist.label}
        </Button>
      </div>
    </header>
  );
}
