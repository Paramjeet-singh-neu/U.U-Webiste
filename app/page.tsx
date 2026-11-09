import { SiteHeader } from "@/components/chapters/SiteHeader";
import { Hero } from "@/components/chapters/Hero";
import { Understand } from "@/components/chapters/Understand";
import { Futures } from "@/components/chapters/Futures";
import { Plan } from "@/components/chapters/Plan";
import { DailyText } from "@/components/chapters/DailyText";
import { Predictions } from "@/components/chapters/Predictions";
import { Reassess } from "@/components/chapters/Reassess";
import { Data } from "@/components/chapters/Data";
import { Start } from "@/components/chapters/Start";
import { Faq } from "@/components/ui/Faq";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Understand />
        <Futures />
        <Plan />
        <DailyText />
        <Predictions />
        <Reassess />
        <Data />
        <Start />
        <Faq />
      </main>
    </>
  );
}
