import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Experience } from "@/features/experience/Experience";
import { Skills } from "@/features/skills/Skills";
import { Gallery } from "@/features/gallery/Gallery";
import { Contact } from "@/features/contact/Contact";
import { CursorGlow } from "@/components/motion/CursorGlow";
import { LoadingScreen } from "@/components/motion/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian selection:bg-gold/30 selection로text-gold">
      <LoadingScreen />
      <CursorGlow />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Gallery />
      <Contact />
    </main>
  );
}
