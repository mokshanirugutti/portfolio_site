import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Tic-Tac-Toe',
    description: 'A multiplayer Tic-Tac-Toe game where two players can connect and play with each other',
    repoLink: 'https://github.com/mokshanirugutti/tic-tac-toe-multiplayer',
    liveLink: 'https://main--play-tic-tac-toe-multiplayer.netlify.app/',
  },
  {
    title: 'Dictionary App',
    description: 'User can search for a word. Each word will be stored in history for each user',
    repoLink: 'https://github.com/mokshanirugutti/dictionary_book',
    liveLink: 'https://live-demo.com/project-two',
  },
  {
    title: 'Car Showcase',
    description: 'A rental website for searching cars.',
    repoLink: 'https://github.com/user/project-three',
    liveLink: 'https://live-demo.com/project-three',
  },
];

const ProjectSection: React.FC = () => {
  return (
    <div className="pt-10 mx-auto pr-20 h-screen items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center ">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
