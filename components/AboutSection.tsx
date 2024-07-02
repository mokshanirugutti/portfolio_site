'use client'
import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SkillsGrid from './SkillsGrid'
import Image from 'next/image'

const AboutSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);


  return (
    <div id="about-section" ref={ref} className='bg-gray-800 w-full h-auto lg:h-screen grid grid-cols-1 md:grid-cols-2 items-center p-10'>
      <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      transition={{ duration: 2 }}
      className='border rounded-md w-fit shadow-lg hidden md:block'
      >
        <Image src="/logo.png" alt="logo_image" width={500} height={500}/>
      </motion.div>
      <div className='flex flex-col gap-5 md:gap-10'>
      <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 2 }}
        className='w-full'
      >
        <h1 className='text-2xl md:text-4xl font-bold text-white '>About Me</h1>
        <p className='text-sm md:text-lg text-white mt-2'>
        I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React,  Node.js, Express, PostgreSQL,
             HTML, CSS, and Git
        </p>
      </motion.div>
      </div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 2 }}
        >
          <SkillsGrid/>
        </motion.div>
      
      </div>
    </div>
  )
}

export default AboutSection