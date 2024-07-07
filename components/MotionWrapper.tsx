import React, { ReactNode, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
}

const MotionWrapper = ({
  children,
  className,
}: MotionWrapperProps) => {
  const controls = useAnimation();
  const slideControls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      slideControls.start('visible');
    }
  }, [controls, slideControls, inView]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        animate={controls}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" , delay:0.25}}
        className="absolute top-0 bottom-0 left-0 right-0 bg-green-500 z-20"
      />
    </div>
  );
};

export default MotionWrapper;
