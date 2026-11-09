/**
 * Three sample futures for the Futures-read chapter.
 * Scripted demo content only — no live LLM calls on the marketing site.
 */

export type FutureStep = {
  label: string;
};

export type FutureMilestone = {
  title: string;
  steps: FutureStep[];
};

export type FuturePrediction = {
  claim: string;
  by: string;
  probabilityPercent: number;
};

export type FutureDailyText = {
  from: "future-you";
  body: string;
};

export type FutureBranch = {
  id: string;
  title: string;
  summary: string;
  milestones: FutureMilestone[];
  dailyTexts: FutureDailyText[];
  predictions: FuturePrediction[];
};

export const futures: FutureBranch[] = [
  {
    id: "half-marathon",
    title: "Training for a first half marathon",
    summary: "Build a steady base, race a 10k checkpoint, then cross a half-marathon finish line.",
    milestones: [
      {
        title: "Run three easy days a week",
        steps: [
          { label: "Lace up for a 20-minute jog today" },
          { label: "Add one walk-run interval this week" },
        ],
      },
      {
        title: "Finish a 10k tune-up",
        steps: [
          { label: "Book a local 10k" },
          { label: "Practice your race-day breakfast once" },
        ],
      },
      {
        title: "Complete the half marathon",
        steps: [
          { label: "Long run: 90 minutes this weekend" },
          { label: "Lay out kit the night before" },
        ],
      },
    ],
    dailyTexts: [
      {
        from: "future-you",
        body: "Twenty easy minutes. No hero pace — just show up for the version of you that finishes in spring.",
      },
      {
        from: "future-you",
        body: "Stretch your calves after work. Tomorrow's long run will thank you.",
      },
      {
        from: "future-you",
        body: "Text a friend your race date. Accountability counts as training.",
      },
    ],
    predictions: [
      {
        claim: "Runs a 10k",
        by: "March 1",
        probabilityPercent: 70,
      },
      {
        claim: "Finishes a half marathon",
        by: "June 15",
        probabilityPercent: 55,
      },
    ],
  },
  {
    id: "freelance",
    title: "Leaving a job to freelance",
    summary: "Stack a small client base, set a runway, then make the jump with a first paid month booked.",
    milestones: [
      {
        title: "Define the offer in one sentence",
        steps: [
          { label: "Write your one-liner today" },
          { label: "Ask two peers if it is clear" },
        ],
      },
      {
        title: "Land two side clients",
        steps: [
          { label: "Send three warm intros this week" },
          { label: "Ship a sample portfolio page" },
        ],
      },
      {
        title: "Give notice with three months of runway",
        steps: [
          { label: "Update the savings tracker tonight" },
          { label: "Draft the resignation outline" },
        ],
      },
    ],
    dailyTexts: [
      {
        from: "future-you",
        body: "One warm email before lunch. You do not need a perfect website to start the conversation.",
      },
      {
        from: "future-you",
        body: "Block ninety minutes for portfolio work. Close the tabs that are not the offer.",
      },
      {
        from: "future-you",
        body: "Log last week's freelance hours. Runway is a number, not a mood.",
      },
    ],
    predictions: [
      {
        claim: "Books a second freelance client",
        by: "April 30",
        probabilityPercent: 65,
      },
      {
        claim: "Gives notice with runway intact",
        by: "August 1",
        probabilityPercent: 50,
      },
    ],
  },
  {
    id: "pay-off-card",
    title: "Paying off a card by summer",
    summary: "Name the balance, cut one recurring leak, and pay the same date every month until it hits zero.",
    milestones: [
      {
        title: "Know the exact balance and APR",
        steps: [
          { label: "Open the statement and write the number down" },
          { label: "Set a calendar reminder for the due date" },
        ],
      },
      {
        title: "Cut one recurring expense",
        steps: [
          { label: "Cancel or pause one unused sub" },
          { label: "Move that amount to the card payment" },
        ],
      },
      {
        title: "Reach a zero balance",
        steps: [
          { label: "Make this month's fixed extra payment" },
          { label: "Check progress against the summer date" },
        ],
      },
    ],
    dailyTexts: [
      {
        from: "future-you",
        body: "Transfer today's coffee budget to the card. Small and boring still counts.",
      },
      {
        from: "future-you",
        body: "Open the balance once. No spiral — just the number and the plan.",
      },
      {
        from: "future-you",
        body: "Pay the fixed amount before you scroll tonight. Future-you already did this.",
      },
    ],
    predictions: [
      {
        claim: "Card balance under $500",
        by: "May 1",
        probabilityPercent: 60,
      },
      {
        claim: "Card paid to zero",
        by: "August 31",
        probabilityPercent: 45,
      },
    ],
  },
];

export function getFutureById(id: string): FutureBranch | undefined {
  return futures.find((branch) => branch.id === id);
}
