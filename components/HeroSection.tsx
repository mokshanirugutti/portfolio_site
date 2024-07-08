"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import { textVariant } from "@/utils";
import DotsAnimation from "@/hooks/DotsAnimation";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from 'react';


const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      document.addEventListener('mousemove', function(e) {
        const button = document.getElementById('magneticButton');
        const rect = button!.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;
        const distance = Math.sqrt(Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2));
        
        if (distance < 70) { 
          const angleDeg = Math.atan2(mouseY - buttonY, mouseX - buttonX) * 250 / Math.PI;
          const offsetX = Math.cos(angleDeg * Math.PI / 250) * 10; 
          const offsetY = Math.sin(angleDeg * Math.PI / 250) * 10; 
          
          button!.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        } else {
          button!.style.transform = 'translate(0px, 0px)';
        }
      });
      
    };
  
    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);
  
    // Remove event listener on cleanup
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []); // Empty dependency array ensures this runs once on mount
  
  DotsAnimation(canvasRef, bannerRef);

  return (
    <div className="relative grid grid-cols-2">
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ ease: "easeOut", duration: 1 , delay:1}}
      className="absolute z-10 right-10 top-10">
      <a href="/MokshaNirugutti_resume.pdf" download  id="magneticButton" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-purple-500 group-hover:translate-y-0 ease">
    {/* Updated SVG for down arrow */}
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7"></path></svg>
  </span>
  <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-y-full ease">Download CV</span>
  <span className="relative invisible">Download CV</span>
</a>
      </motion.div>
      <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="bg-mainbg w-screen h-screen flex justify-center items-center px-4 md:px-8 lg:px-16 relative"
        ref={bannerRef}
      >
        <canvas ref={canvasRef} className="absolute inset-0  w-full h-full"></canvas>
        <motion.h1
          variants={textVariant}
          initial="initial"
          animate="animate"
          className="font-bold text-center relative"
        >
          I'm <SplitText text="Moksha Nirugutti " />, I'm a<br/>
          <TypeAnimation
              sequence={[
                
                "FullStack Developer",
                1000,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          
        </motion.h1>
      </motion.div>
      </div>
        
      <div>
        
      </div>

    </div>
  );
};

export default HeroSection;
