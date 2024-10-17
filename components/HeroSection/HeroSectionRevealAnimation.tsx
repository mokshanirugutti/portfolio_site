import { motion } from "framer-motion";
import HeroSectionContent from "./HeroSectionContent";

export default function HeroSectionRevealAnimation(){
    return (
    <div className="flex justify-center items-center h-screen w-screen relative lg:overflow-hidden">
      <motion.div 
      initial={{ y:0  }}
      animate={{ 
        y: -1000,
        opacity: 0,
      }}
      transition={{ 
        y: {duration: 1, delay:1},
        opacity:{duration: 0.1, delay:1.5}
    }}
      className="w-[85%] h-[45%] bg-neutral-700 absolute top-16"/>
      
      <motion.div
        initial={{ width: 0, opacity: 1 }}  
        animate={{
            width: "85%",                      
            opacity: 0,                        
        }}
        transition={{
            width: { duration: 1 },            
            opacity: { delay: 1, duration: 1 },
        }}
        className="h-10 absolute top-1/2 z-20 bg-white -translate-y-1/2"
        />
        <HeroSectionContent/>
        <motion.div 
      initial={{ y:0,opacity:1  }}
      animate={{ 
        y: 1000,
        opacity: 1,
      }}
      transition={{ 
        y: {duration: 1, delay:1},
        opacity:{duration: 0.1, delay:1.5}
    }}
      className="w-[85%] h-[45%] bg-neutral-700 absolute bottom-16"/>
    </div>
    )
}