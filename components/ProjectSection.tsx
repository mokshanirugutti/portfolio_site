'use client'
import React from 'react';
import Project from './Project';
import MotionWrapper from './MotionWrapper';

const projects = [
  {
    title: 'Tic-Tac-Toe',
    description: 'A multiplayer Tic-Tac-Toe game where two players can connect and play with each other',
    repoLink: 'https://github.com/mokshanirugutti/tic-tac-toe-multiplayer',
    liveLink: 'https://main--play-tic-tac-toe-multiplayer.netlify.app/',
    image : 'tic-tac-toe.png'

  },
  {
    title: 'Dictionary App',
    description: 'User can search for a word. Each word will be stored in history for each user',
    repoLink: 'https://github.com/mokshanirugutti/dictionary_book',
    liveLink: 'https://dictionary-book-store.netlify.app/',
    image : 'dictionaryapp.png'
  },
  {
    title: 'Car Showcase',
    description: 'A rental website for searching cars.',
    repoLink: 'https://github.com/mokshanirugutti/car_rental',
    liveLink: 'https://carcom-rentals.vercel.app/',
    image : 'carcom.png',
  },
];

const ProjectSection: React.FC = () => {
  return (
    <div className="pt-10 mx-auto  pr-20 h-auto lg:h-screen items-center pt-10 bg-mainbg">
        <div className="flex items-center md:ml-40 md:mr-40  mb-6">
    <div className="flex-grow h-1 bg-gray-500 ml-10"></div>
    <MotionWrapper
    className="text-3xl font-bold text-right pl-2"
    >
    <h2 >Projects.</h2>
    </MotionWrapper>
  </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center ">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
