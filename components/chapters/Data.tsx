import { chapters } from "@/content/site";
import { ChapterShell } from "./ChapterShell";

export function Data() {
  const copy = chapters.data;
  return (
    <ChapterShell
      id={copy.id}
      headingId="data-heading"
      headline={copy.headline}
      headlineVoice={copy.headlineVoice}
      body={copy.body}
      note={copy.todoBody}
      calm
    />
  );
}
