"use client"
import React from 'react'
import { motion } from "framer-motion"

interface SplitTextProps {
  text: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          whileHover={{ scale: 1.2, marginLeft: "0.50rem", marginRight: "0.50rem", y: -10, transition: { duration: 0.3, ease: "easeInOut" } }}
          className={`inline-block ${char === " " ? "w-2" : ""}`} // Adds width for spaces
        >
          {char === " " ? "\u00A0" : char}  {/* Non-breaking space for rendering */}
        </motion.span>
      ))}
    </>
  );
};

export default SplitText;
