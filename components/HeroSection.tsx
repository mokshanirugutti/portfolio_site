"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import { textVariant } from "@/utils";
import DotsAnimation from "@/hooks/DotsAnimation";
import { TypeAnimation } from "react-type-animation";
import DownArrow from "./DownArrow";

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  DotsAnimation(canvasRef, bannerRef);

  return (
    <div className="relative grid grid-cols-2">
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
