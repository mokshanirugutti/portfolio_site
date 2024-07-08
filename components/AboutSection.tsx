'use client'
import React, { useEffect } from 'react'
import {  motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import MotionWrapper from './MotionWrapper'
import SkillBox from './SkillBox'
import SkillHeading from './About/SkillHeading'
const AboutSection = () => {
  const controls = useAnimation();
  const [skills, setSkills] = React.useState(false)
  const showSkills=()=>{
    setSkills(true);
  }
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
      variants={{
        visible: { opacity: 1, scale:1 },
        hidden: { opacity: 0 , scale:0.5},
      }}
      initial='hidden'
      animate={controls}
      transition={{ duration: 0.5, delay:0.25 }}
      className='border rounded-md w-fit shadow-lg hidden md:block'
      >
        <Image src="/logo.png" alt="logo_image" width={500} height={500}/>
      </motion.div>
      <div className='flex flex-col gap-5 md:gap-10'>
      <div>
      <MotionWrapper
        
          className='w-fit'
        >
          <h1 className='text-2xl md:text-4xl font-bold text-white relative'>About Me</h1>
        </MotionWrapper>
      <motion.div
        animate={controls}
        variants={{
          visible: { opacity: 1, x:0 },
          hidden: { opacity: 0, x:50 },
        }}
        initial='hidden'
        transition={{ duration: 0.5, delay:1 }}
        className='w-full'
      >
         
        <p className='text-sm md:text-lg text-white mb-3'>
        I am a full stack web developer with a passion for creating
            interactive and responsive web applications.
            
        </p>
        
          <SkillHeading/>
      </motion.div>
      </div>
        {/* <motion.div
        animate={controls}
        variants={{
          visible: { opacity: 1},
          hidden: { opacity: 0 },
        }}
        initial='hidden'
        transition={{ duration: 1, delay:1.5 }}
        > */}
          {/* <SkillsGrid/> */}
          { <SkillBox/>}
        
      
      </div>
    </div>
  )
}

export default AboutSection