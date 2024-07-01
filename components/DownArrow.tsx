"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const DownArrow: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <motion.button
        onClick={scrollToAbout}
        className="text-white p-2 rounded-full"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        whileHover={{ scale: 1.2 }}
      >
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-3xl md:text-4xl neon-effect"
        />
      </motion.button>
    </div>
  );
};

export default DownArrow;
