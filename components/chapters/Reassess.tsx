import { chapters } from "@/content/site";
import { ChapterShell } from "./ChapterShell";

export function Reassess() {
  const copy = chapters.reassess;
  return (
    <ChapterShell
      id={copy.id}
      headingId="reassess-heading"
      headline={copy.headline}
      headlineVoice={copy.headlineVoice}
      body={copy.body}
    />
  );
}
