
import React from 'react';
import { motion } from 'framer-motion';

interface ComicBubbleProps {
  text: string;
  position: 'left' | 'right';
  isThought?: boolean;
  delay?: number;
}

const ComicBubble: React.FC<ComicBubbleProps> = ({ 
  text, 
  position, 
  isThought = false,
  delay = 0 
}) => {
  return (
    <motion.div 
      className={`max-w-xs ${position === 'right' ? 'ml-auto' : 'mr-auto'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className={`comic-bubble ${isThought ? 'rounded-full' : ''} ${position === 'right' ? 'bg-royal-light' : 'bg-white'}`}>
        <p className={`text-sm md:text-base ${isThought ? 'italic' : ''}`}>
          {text}
        </p>
      </div>
    </motion.div>
  );
};

export default ComicBubble;
