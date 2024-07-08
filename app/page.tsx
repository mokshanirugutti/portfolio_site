'use client'
import { AboutSection, DotFollower, EmailSection, HeroSection,ProjectSection } from "@/components";
import Lenis from "lenis"
import { useEffect } from "react"
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [])
  return (
    <>
    <HeroSection />
    <AboutSection/>
    <div className="relative h-[300vh]">
     <ProjectSection/>
    </div>
    <EmailSection/>
  </>
  );
}
