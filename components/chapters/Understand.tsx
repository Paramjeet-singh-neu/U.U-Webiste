import { chapters } from "@/content/site";
import { ChapterShell } from "./ChapterShell";

export function Understand() {
  const copy = chapters.understand;
  return (
    <ChapterShell
      id={copy.id}
      headingId="understand-heading"
      headline={copy.headline}
      headlineVoice={copy.headlineVoice}
      body={copy.body}
    />
  );
}
