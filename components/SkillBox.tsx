

import React, { useEffect } from 'react'

import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from "framer-motion";

const skills = [
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Django", icon: "https://skillicons.dev/icons?i=django" },
    { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "Postgres", icon: "https://skillicons.dev/icons?i=postgres" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "TailwindCSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
    { name: "Nextjs", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Github", icon: "https://skillicons.dev/icons?i=github" },
    { name: "express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "nodejs", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "firebase", icon: "https://skillicons.dev/icons?i=firebase" },
];

const SkillBox: React.FC = () => {

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
    <div ref={ref} className="w-fit grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2">
    {skills.map((skill, index) => (
      <motion.div
        key={skill.name} 
        drag={true}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <motion.div
          variants={{
            initial: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="initial"
          animate={controls}
          transition={{ ease: "easeInOut", duration: 0.5, delay: index * 0.2 }}  
          className="bg-white rounded-lg shadow-sm p-2 px-4 bg-opacity-75 flex flex-col items-center"
        >
          <img
            src={skill.icon}
            alt={skill.name}
            width={30}
            height={30}
            className="m1-2"
          />
          <span className="text-sm">{skill.name}</span>
        </motion.div>
      </motion.div>
    ))}
  </div>
  );
};

export default SkillBox;
