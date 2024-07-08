import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Languages', 'Frameworks', 'Databases', 'Technologies'];

const SkillHeading = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, 
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="text-white md:text-2xl flex gap-2">
      <h1>
      List of 
    </h1>
    <h1 >
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]} </TextTransition> 
    </h1>
      <h1>
      I have used
    </h1>
    
    </div>
  );
};

export default SkillHeading