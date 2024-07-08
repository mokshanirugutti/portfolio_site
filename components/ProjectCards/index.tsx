'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import CustomButton from '../Buttons/CustomButton'; 
interface CardProps {
    title: string;
    description: string;
    image : string;
    repoLink:string;
    liveLink:string;
    color:string;
    i:number
}

const Card = ({title, description, image, repoLink,liveLink, color, i}:CardProps) => {

  return (
    
    <div className={styles.cardContainer}>
      <div 
        className={styles.card}
        style={{backgroundColor: color, top:`calc(-1vh + ${i * 15}px)`}}
      >
        <div>
        <a href="#" className="flex flex-col items-center  border-gray-200 md:flex-row md:max-w-xl dark:border-gray-700">
          <Image src={`/${image}`} alt={title} width={200} height={100} className='h-full w-full md:mt-10 rounded shadow-sm' />
        <div className="flex flex-col justify-between p-2 md:p-4 leading-normal md:mt-10">
        <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title} </h5>
        <p className="md:mb-3 w-[100%] font-normal">{description}</p>
        <div className='flex gap-1 md:gap-5 md:w-72'>
          <CustomButton link={repoLink} title='Repo Link' />
          <CustomButton link={liveLink} title='Live Link' />
          {/* <DrawOutlineButton>Repo Link </DrawOutlineButton> */}
        </div>
        </div>
        </a>
        
        </div>
      </div>
    </div>
    
  )
}

export default Card