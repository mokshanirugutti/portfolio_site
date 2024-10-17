'use client'
import   HeroSection  from "@/components/HeroSection/HeroSection";
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
    
    
  </>
  );
}
