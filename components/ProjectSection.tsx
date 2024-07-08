'use client'
import React from 'react';
import Project from './Project';
import MotionWrapper from './MotionWrapper';
import Card from './ProjectCards';
import {motion} from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion';
const projects = [
  {
    title: 'Tic-Tac-Toe',
    description: 'A multiplayer Tic-Tac-Toe game where two players can connect and play with each other',
    repoLink: 'https://github.com/mokshanirugutti/tic-tac-toe-multiplayer',
    liveLink: 'https://main--play-tic-tac-toe-multiplayer.netlify.app/',
    image: 'tic-tac-toe.png',
    color: "#BBACAF"

  },
  {
    title: 'Dictionary App',
    description: 'User can search for a word. Each word will be stored in history for each user',
    repoLink: 'https://github.com/mokshanirugutti/dictionary_book',
    liveLink: 'https://dictionary-book-store.netlify.app/',
    image: 'dictionaryapp.png',
     color: "#977F6D"
  },
  {
    title: 'Car Showcase',
    description: 'A rental website for searching cars. Cars are fetched from API. User can search cars by branch,variant, type(fuel)',
    repoLink: 'https://github.com/mokshanirugutti/car_rental',
    liveLink: 'https://carcom-rentals.vercel.app/',
    image: 'carcom.png',
     color: "#C2491D"
  },
];

const ProjectSection: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Adjust these values as per your design and animation preferences
  const backgroundColorScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <>
      <div className="flex items-center md:ml-40 md:mr-40 pt-20 sticky">
        <div className="flex-grow h-1 bg-gray-500 ml-10"></div>
        <MotionWrapper className="text-3xl font-bold text-right pl-2">
          <h2>Projects.</h2>
        </MotionWrapper>
        </div>
    <div  className=" ">
      
     {projects.map((project, i) => (
          <Card
            key={`p_${i}`}
            {...project}
            i={i}
           
          />
        ))}

    </div>
    </>
  );
};


export default ProjectSection;
