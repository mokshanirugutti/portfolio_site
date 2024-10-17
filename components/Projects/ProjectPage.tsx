import React from 'react';
import { motion } from 'framer-motion';
import CustomButton from '../Buttons/CustomButton';

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
    description: 'A rental website for searching cars. Cars are fetched from API. User can search cars by branch, variant, type(fuel)',
    repoLink: 'https://github.com/mokshanirugutti/car_rental',
    liveLink: 'https://carcom-rentals.vercel.app/',
    image: 'carcom.png',
    color: "#C2491D"
  },
];

export default function ProjectPage() {
  return (
    <div className=" p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className=" rounded-lg shadow-lg p-4"
            style={{backgroundColor: project.color}}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 text-white">{project.title}</h2>
              <p className="text-black mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                
                <CustomButton link={project.repoLink} title='Repo Link' />
                <CustomButton link={project.liveLink} title='Live Link' />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
