import { useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic'
 

const DownloadCV = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const button = document.getElementById("magneticButton");
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const buttonX = rect.left + rect.width / 2;
      const buttonY = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2)
      );

      if (distance < 70) {
        const angleDeg =
          (Math.atan2(mouseY - buttonY, mouseX - buttonX) * 180) / Math.PI;
        const offsetX = Math.cos((angleDeg * Math.PI) / 180) * 10;
        const offsetY = Math.sin((angleDeg * Math.PI) / 180) * 10;

        button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      } else {
        button.style.transform = "translate(0px, 0px)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1, delay: 1 }}
      className="absolute z-10 right-10 top-10"
    >
      <a
        href="/MokshaNirugutti_resume.pdf"
        download
        id="magneticButton"
        className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-purple-500 group-hover:translate-y-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7 7 7-7"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-y-full ease">
          Download CV
        </span>
        <span className="relative invisible">Download CV</span>
      </a>
    </motion.div>
  );
};

export default DownloadCV;
