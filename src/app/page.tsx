import fs from "fs";
import path from "path";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { Stats } from "@/components/sections/Stats";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";
import { hero } from "@/content/hero";
import { sections } from "@/config/sections";

export default function Home() {
  const hasProfileImage = fs.existsSync(
    path.join(process.cwd(), "public", hero.image.replace(/^\//, ""))
  );

  return (
    <main className="flex-1">
      <Hero hasProfileImage={hasProfileImage} />
      {sections.about && <About />}
      {sections.projects && <Projects />}
      {sections.skills && <Skills />}
      {sections.experience && <Experience />}
      {sections.currentFocus && <CurrentlyBuilding />}
      {sections.stats && <Stats />}
      {sections.philosophy && <Philosophy />}
      {sections.contact && <Contact />}
    </main>
  );
}
