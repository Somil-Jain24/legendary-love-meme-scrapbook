
import React, { useState } from 'react';
import { Fireworks } from 'lucide-react';

const FireworkButton = () => {
  const [fireworks, setFireworks] = useState<{id: number, top: string, left: string, color: string}[]>([]);
  const [count, setCount] = useState(0);

  const triggerFireworks = () => {
    const newFireworks = [];
    const colors = ['#FFD700', '#7E69AB', '#D6BCFA', '#FF6B6B', '#46D9FF'];
    
    for (let i = 0; i < 10; i++) {
      newFireworks.push({
        id: count + i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setFireworks([...fireworks, ...newFireworks]);
    setCount(count + 10);
    
    // Display message
    const messageEl = document.getElementById('firework-message');
    if (messageEl) {
      messageEl.classList.remove('opacity-0');
      messageEl.classList.add('opacity-100');
      
      setTimeout(() => {
        messageEl.classList.remove('opacity-100');
        messageEl.classList.add('opacity-0');
      }, 3000);
    }

    // Clean up fireworks after animation completes
    setTimeout(() => {
      setFireworks(prev => prev.filter(fw => fw.id >= count));
    }, 1000);
  };

  return (
    <div className="relative">
      <button 
        onClick={triggerFireworks}
        className="flex items-center gap-2 px-4 py-2 bg-royal-purple text-white rounded-md hover:bg-opacity-90 transition-all"
      >
        <Fireworks className="h-5 w-5" />
        <span>Surprise!</span>
      </button>
      
      {fireworks.map(fw => (
        <div 
          key={fw.id}
          className="firework"
          style={{
            top: fw.top,
            left: fw.left,
            backgroundColor: fw.color,
            width: '10px',
            height: '10px'
          }}
        />
      ))}
      
      <div 
        id="firework-message" 
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-6 rounded-xl golden-border text-2xl font-bold text-royal-purple z-50 opacity-0 transition-opacity duration-500"
      >
        Aditi, You're Amazing! 💖
      </div>
    </div>
  );
};

export default FireworkButton;
