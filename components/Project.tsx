import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  repoLink: string;
  liveLink: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, repoLink, liveLink }) => {
  return (
    <div className="relative group bg-white p-6 rounded-lg shadow-lg h-fit  max-w-72 max-h-96 flex flex-col justify-between items-center hover:drop-shadow-xl transition ease-in-out duration-300">
      <div className=''>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <Image src="/photo1.jpg" alt="photo1" width={220} height={160} className='shadow-lg rounded-sm'/>
      </div>
      <div className="justify-center space-x-4 bottom-4 -ml-3 hidden p-2 bg-slate-700 bg-opacity-60 backdrop-blur-sm rounded-xl group-hover:flex absolute w-60 transition ease-in-out duration-300">
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1 text-white bg-blue-500 px-2 py-1 rounded hover:bg-blue-700 transition ease-in-out duration-300">
        <div className='w-8 h-8'>
        <FontAwesomeIcon icon={faGithub} />
        </div>
          <span className="text-sm">Code</span>
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1 text-white bg-green-500 px-2 py-1 rounded hover:bg-green-700 transition ease-in-out duration-300 pt-2">
        <div className='w-8 h-8'>
          <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
          </div>
          <span className="text-sm">Live</span>
        </a>
      </div>
    </div>
  );
};

export default Project;
