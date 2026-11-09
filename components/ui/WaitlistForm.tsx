"use client";

import { FormEvent, useId, useState } from "react";
import { waitlist } from "@/content/site";
import { Button } from "./Button";

type Status = "idle" | "error" | "success";

function isValidContact(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phone = /^\+?[\d\s().-]{7,}$/;
  return email.test(trimmed) || phone.test(trimmed);
}

/**
 * Client-side validation + stub submit.
 * Never writes to a production database from the browser.
 */
export function WaitlistForm() {
  const nameId = useId();
  const contactId = useId();
  const errorId = useId();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  function validate(): string | null {
    if (!name.trim()) return waitlist.errors.nameRequired;
    if (!contact.trim()) return waitlist.errors.contactRequired;
    if (!isValidContact(contact)) return waitlist.errors.contactInvalid;
    return null;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setError(validationError);
      return;
    }

    setPending(true);
    setError(null);

    // Stub: pretend to post. Real destination is open item 2.
    await new Promise((resolve) => setTimeout(resolve, 400));

    setPending(false);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-3 text-[1.0625rem] leading-[1.5] text-[var(--color-ink)]"
      >
        {waitlist.successMessage}
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex w-full max-w-md flex-col gap-4"
      aria-describedby={error ? errorId : undefined}
    >
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={nameId}
          className="text-sm font-medium text-[var(--color-ink)]"
        >
          {waitlist.nameLabel}
        </label>
        <input
          id={nameId}
          name="firstName"
          type="text"
          autoComplete="given-name"
          placeholder={waitlist.namePlaceholder}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (status === "error") {
              setStatus("idle");
              setError(null);
            }
          }}
          className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-[0.9375rem] text-[var(--color-ink)] placeholder:text-[var(--color-fog)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={contactId}
          className="text-sm font-medium text-[var(--color-ink)]"
        >
          {waitlist.contactLabel}
        </label>
        <input
          id={contactId}
          name="contact"
          type="text"
          autoComplete="email"
          inputMode="email"
          placeholder={waitlist.contactPlaceholder}
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
            if (status === "error") {
              setStatus("idle");
              setError(null);
            }
          }}
          className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-[0.9375rem] text-[var(--color-ink)] placeholder:text-[var(--color-fog)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          aria-invalid={status === "error"}
        />
      </div>

      {error ? (
        <p id={errorId} role="alert" className="text-sm text-[var(--color-risk)]">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Joining…" : waitlist.submitLabel}
        </Button>
        <a
          href={waitlist.smsHref}
          className="text-sm text-[var(--color-fog)] underline-offset-4 hover:text-[var(--color-ink)] hover:underline"
        >
          {waitlist.smsHint}
        </a>
      </div>

      <p className="text-xs text-[var(--color-fog)]">{waitlist.stubNote}</p>
    </form>
  );
}
