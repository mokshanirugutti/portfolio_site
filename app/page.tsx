import { AboutSection, DotFollower, EmailSection, HeroSection,ProjectSection } from "@/components";

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
    </main>
  );
}
