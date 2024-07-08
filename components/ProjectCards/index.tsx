'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import CustomButton from './CustomButton';
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
        <div className='text-center'>
              <h2>{title}</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div >
                <p className='mb-3 mt-3 mr-5 first-letter-lg'>{description}</p>
                <div className='flex md:flex-col gap-3'>
                    <CustomButton link={repoLink} title='Repo Link' />
                    <CustomButton link={liveLink} title='Live Link' />
                </div>
            </div>
            <div className='hidden md:block'>
              <Image src={`/${image}`} alt={title} width={300} height={700} />
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Card