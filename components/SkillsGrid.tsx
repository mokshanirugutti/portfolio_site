"use client"
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Nextjs', icon: 'https://skillicons.dev/icons?i=nextjs' },
  { name: 'Django', icon: 'https://skillicons.dev/icons?i=django' },
  { name: 'Java', icon: 'https://skillicons.dev/icons?i=java' },
  { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
  { name: 'HTML5', icon: 'https://skillicons.dev/icons?i=html' },
  { name: 'Linux', icon: 'https://skillicons.dev/icons?i=linux' },
  { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
  { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
  { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
  { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
  { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
  { name: 'Postgres', icon: 'https://skillicons.dev/icons?i=postgres' },
  { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
  { name: 'TailwindCSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
  { name: 'Postman', icon: 'https://skillicons.dev/icons?i=postman' },
];

const SkillsGrid: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-slate-200 rounded-lg overflow-hidden w-full md:w-auto">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-5">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col items-center bg-white rounded-lg p-3"
          style={{
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Spread effect
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.1,
          }}
        >
          <img src={skill.icon} alt={skill.name} width={30} height={30} className="mb-2" />
          <span className='text-sm'>{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
  
  );
};

export default SkillsGrid;
