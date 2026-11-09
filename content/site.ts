/**
 * All visible marketing copy. Components must import from here — never hardcode.
 * Unknowns are marked TODO; do not invent claims, stats, prices, or privacy terms.
 */

export type Cta = {
  label: string;
  href: string;
};

export type ChapterCopy = {
  id: string;
  eyebrow?: string;
  headline: string;
  body: string;
  /** Voice of the headline: future-you (serif) or present-you (sans) */
  headlineVoice: "future" | "present";
};

export type FaqItem = {
  question: string;
  /** Approved answer, or a TODO string until Kemi / the team provides one */
  answer: string;
  todo?: boolean;
};

export const siteMeta = {
  title: "u.u | text your future self",
  description:
    "Text your future self. Ask the person who has already been there. Join the u.u waitlist.",
  author: "General Intent Team",
  url: "https://textuu.ai/",
  socialImage: "/uu-social.jpg",
  brandName: "u.u",
} as const;

export const nav = {
  brand: "u.u",
  waitlist: { label: "Join the waitlist", href: "#start" } satisfies Cta,
  seeHow: { label: "See how it works", href: "#understand" } satisfies Cta,
} as const;

export const chapters = {
  hero: {
    id: "hero",
    headline: "Text your future self.",
    body: "Ask the person who has already been there.",
    headlineVoice: "future",
    primary: { label: "Join the waitlist", href: "#start" } satisfies Cta,
    secondary: { label: "See how it works", href: "#understand" } satisfies Cta,
  },
  understand: {
    id: "understand",
    headline: "It starts with a text.",
    body: "Tell u.u what you want and what keeps getting in the way. Text it like you'd text a friend. No forms, no quizzes.",
    headlineVoice: "present",
  } satisfies ChapterCopy,
  futures: {
    id: "futures",
    headline: "See where you could be.",
    body: "u.u reads what you've told it and shows you a few futures that could really happen. You choose the one you want.",
    headlineVoice: "present",
  } satisfies ChapterCopy,
  plan: {
    id: "plan",
    headline: "A future, broken into Tuesdays.",
    body: "Your future becomes milestones, and each milestone becomes one small step for today.",
    headlineVoice: "present",
  } satisfies ChapterCopy,
  dailyText: {
    id: "daily-text",
    headline: "One text a day, from you.",
    body: "Each day, future-you checks in with one specific thing to do. It sounds like you, because it learned from you.",
    headlineVoice: "present",
  } satisfies ChapterCopy,
  predictions: {
    id: "predictions",
    headline: "Predictions with a date on them.",
    body: "u.u doesn't say 'you'll feel better.' It says what will happen and by when, then checks whether it was right.",
    headlineVoice: "present",
  } satisfies ChapterCopy,
  reassess: {
    id: "reassess",
    headline: "When life gets in the way, the plan moves.",
    body: "Every night u.u looks at how things are going. If a milestone is slipping, it doesn't scold you. It finds a new route.",
    headlineVoice: "present",
  } satisfies ChapterCopy,
  data: {
    id: "data",
    headline: "What happens to what you tell it.",
    // Visible one-liner from textuu.ai; full statement still needed from Kemi.
    body: "Your data isn't sold. No ads. u.u asks before texting anyone else.",
    headlineVoice: "present",
    todoBody:
      "TODO (Kemi / open item 4): replace with the approved plain-language privacy statement — what is stored, who sees it, and how to delete it.",
  },
  start: {
    id: "start",
    headline: "Your future self is waiting for your text.",
    body: "Join the waitlist. We'll text you when it's your turn.",
    headlineVoice: "future",
  } satisfies ChapterCopy,
} as const;

export const waitlist = {
  nameLabel: "First name",
  namePlaceholder: "Your first name",
  contactLabel: "Email or phone",
  contactPlaceholder: "Email or phone number",
  submitLabel: "Join the waitlist",
  successMessage:
    "You're on the list. We'll text you when it's your turn.",
  /** Public SMS from textuu.ai — destination wiring still open item 2 */
  smsHint: "Or text (628) 231-0257",
  smsHref: "sms:+16282310257",
  errors: {
    nameRequired: "Please enter your first name.",
    contactRequired: "Please enter an email or phone number.",
    contactInvalid: "Enter a valid email or phone number.",
  },
  stubNote:
    "TODO (Kemi / open item 2): connect this form to the real textuu.ai waitlist destination. Phase 1 stubs submit only.",
} as const;

export const faqIntro = {
  id: "faq",
  headline: "Questions, answered.",
  body: "Plain answers about what u.u is and isn't.",
} as const;

/**
 * FAQ from PLAN §4. Answers that need team approval stay as TODOs.
 * Live-site FAQ questions are documented in docs/textuu-current.md for Kemi.
 */
export const faq: FaqItem[] = [
  {
    question: "Is it a therapist?",
    answer:
      "No. u.u is a texting companion that helps you see possible futures and take small daily steps toward the one you choose. It is not therapy, and it does not replace professional care.",
  },
  {
    question: "Does it cost anything?",
    answer:
      "TODO (Kemi): confirm pricing / free waitlist messaging. Do not invent a price.",
    todo: true,
  },
  {
    question: "How do I stop texts?",
    answer:
      "TODO (Kemi): document the exact stop / opt-out flow once approved.",
    todo: true,
  },
  {
    question: "Is my data sold?",
    answer:
      "Your data isn't sold. No ads. u.u asks before texting anyone else.",
  },
];

export const footer = {
  company: "General Intent",
  tagline: "A text from you, a few years from now.",
  privacy: {
    label: "Privacy",
    href: "#data",
    todo: "TODO (Kemi): link to the approved privacy policy URL.",
  },
  terms: {
    label: "Terms",
    href: "#",
    todo: "TODO (Kemi): link to the approved terms URL.",
  },
  contact: {
    label: "Contact",
    href: "mailto:privacy@generalintent.ai",
  },
  copyright: "© 2026 u.u",
} as const;
