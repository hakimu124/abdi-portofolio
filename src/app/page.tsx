import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Experience } from "@/features/experience/Experience";
import { Skills } from "@/features/skills/Skills";
import { Gallery } from "@/features/gallery/Gallery";
import { Contact } from "@/features/contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Gallery />
      <Contact />
    </main>
  );
}
