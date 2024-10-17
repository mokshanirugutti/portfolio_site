import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WorkExperience from '../work/WorkExperience';
import WorkIntro from '../work/WorkIntro';
import  {SKillComponent}  from '../skills/SkillComponent';
import ProjectPage from '../Projects/ProjectPage';
import ProjectIntro from '../Projects/ProjectIntro';
import { IconDownload} from '@tabler/icons-react';
import { GetInTouchButton } from '../Buttons/GetInTouchButton';
import SkillsPage from '../skills/SkillsPage';


interface BentoDocProps {
  onExpand?: (isExpanded: boolean) => void;
}

type Section = 'work' | 'skills' | 'projects' | 'contact' | null;

export default function BentoDoc({ onExpand = () => {} }: BentoDocProps) {
  const [expandedSection, setExpandedSection] = useState<Section>(null);

  const handleExpand = (section: Section) => {
    const newExpandedSection = section === expandedSection ? null : section;
    console.log(`Expanded section: ${newExpandedSection}`);
    setExpandedSection(newExpandedSection);
    
    // Update the isExpanded state based on whether a section is opened or closed
    onExpand(newExpandedSection !== null);
  };

  const SectionComponent = ({ 
    section, 
    title, 
    className, 
    page,
    intro,
    nextButton 
  }: { 
    section: Section, 
    title: string, 
    className: string,
    nextButton:string,
    intro?: React.ReactNode,
    page?: React.ReactNode
  }) => (
    <motion.div
      layout
      initial={{ borderRadius: '1rem' }}
      animate={{
        borderRadius: expandedSection === section ? '0rem' : '1rem',
        width: expandedSection === section ? '100vw' : '100%',
        height: expandedSection === section ? '100vh' : '100%',
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`${className} px-10 py-5`}
    >
      <div className='flex  justify-between items-center'>
          <h1 className='text-xl md:text-3xl font-semibold text-neutral-100'>{title}</h1>
          <button 
            className="px-2 py-2 bg-white text-black rounded-lg"
            onClick={() => handleExpand(section)}
            aria-expanded={expandedSection === section}
          >
            {expandedSection === section ? 'Close' : nextButton}
          </button>

      </div>
      {expandedSection === section && page}

      {expandedSection === null && intro}

   
    </motion.div>
  );

  return (
    <motion.div
      initial={{ height: '30rem', width: '80%' }}
      animate={{ 
        height: expandedSection !== null ? '100vh' : '30rem',
        width: expandedSection !== null ? '100vw' : '80%',
        left: expandedSection !== null ? 0 : 'auto',
        top: expandedSection !== null ? 0 : 'auto',
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`relative grid grid-cols-6 gap-4 mx-auto  ${expandedSection !== null ? 'fixed top-0 left-0 z-50' : ''}`}
    >
      <AnimatePresence>
        {(expandedSection === 'work' || expandedSection === null) && (
          <SectionComponent 
            key="work"
            section="work" 
            title="Work experience" 
            nextButton='see more'
            className="bg-[#e76f4c] col-span-6 md:col-span-4  row-span-2 shadow-md mx-auto" 
            intro=<WorkIntro/>
            page= <WorkExperience/>

          />
        )}

        {(expandedSection === 'skills' || expandedSection === null) && (
          <SectionComponent 
            key="skills"
            section="skills" 
            title="Skills" 
            nextButton='Status'
            className="bg-rose-300 col-span-6 md:col-span-2 row-span-3" 
            intro= <SKillComponent/>
            page=<SkillsPage/>
          />
        )}

        {(expandedSection === 'projects' || expandedSection === null) && (
          <SectionComponent 
            key="projects"
            section="projects" 
            title="Projects" 
            nextButton='more'
            className="bg-[#c383d9] col-span-6 md:col-span-3 row-span-3 shadow-md" 
            intro=<ProjectIntro/>
            page= <ProjectPage/>
          />
        )}

        {expandedSection === null && (
          <motion.div
            key="cv"
            className="bg-blue-600 col-span-6 md:col-span-1 row-span-1 rounded-lg px-4 py-5 flex gap-3 items-center justify-center"
          >            
            <p className="text-xl font-bold mb-2 text-gray-900"> CV</p>
            <a
             href="/MokshaNirugutti_resume.pdf"
             download 
             className="text-xl font-bold mb-2 flex items-center gap-2"> <IconDownload/></a>
            
          </motion.div>
        )}

        { expandedSection === null && (
          <div
            className="bg-emerald-500 col-span-6 md:col-span-3 row-span-2 rounded-lg px-5 py-1 flex justify-between flex-wrap  items-center" 
          >
            <p className="text-xl font-bold mb-2 text-neutral-800">Get in touch</p>
            
              <GetInTouchButton/>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
