
import React, { useEffect, useState } from 'react';

interface ScrollTextProps {
  text: string;
  delay?: number;
}

const ScrollText: React.FC<ScrollTextProps> = ({ text, delay = 0 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="overflow-hidden">
      <div 
        className={`font-royal text-royal-dark ${visible ? 'animate-write' : 'w-0'}`}
      >
        {text}
      </div>
    </div>
  );
};

export default ScrollText;
