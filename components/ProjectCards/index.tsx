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
        style={{backgroundColor: color, top:`calc(-5vh + ${i * 25}px)`}}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
            
            <div className='flex flex-col mt-4'>
                <CustomButton link={repoLink} title='Repo Link'/>              
                <CustomButton link={liveLink} title='Live Link'/>
            </div>
            
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.inner}>
              <Image
                fill
                src={`/${image}`}
                alt="image" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card