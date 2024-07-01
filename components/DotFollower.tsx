'use client'
import { useEffect, useState } from 'react';

const DotFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOnTop, setIsOnTop] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const heroSectionRect = document.querySelector('.main_heading')?.getBoundingClientRect();
      const isOnTopNow = heroSectionRect && event.clientY >= heroSectionRect.top && event.clientY <= heroSectionRect.bottom;
      console.log(isOnTopNow)
      setIsOnTop(!!isOnTopNow);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const dotStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: 'left 0.1s ease-out, top 0.1s ease-out, opacity 0.4s ease', 
    opacity: isOnTop ? 0 : 1
  };

  return <div className="dot" style={dotStyle} />;
};

export default DotFollower;
