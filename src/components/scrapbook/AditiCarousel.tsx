
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const moods = [
  { name: 'Cute', description: 'The adorable side that melts hearts' },
  { name: 'Sassy', description: 'When the eye-rolls begin and the roasts follow' },
  { name: 'Teasing', description: 'That playful smile before she makes fun of me' },
  { name: 'Loving', description: 'The rare but precious moments of pure affection' }
];

const AditiCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === moods.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? moods.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full max-w-md mx-auto golden-border rounded-xl overflow-hidden bg-white bg-opacity-90 p-4 relative">
      <h3 className="text-xl text-center font-bold text-royal-purple mb-6">
        Aditi Moods 🎭
      </h3>
      
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <h4 className="text-2xl font-bold text-royal-purple mb-2">
              {moods[currentIndex].name}
            </h4>
            <p className="text-royal-dark">
              {moods[currentIndex].description}
            </p>
            <div className="mt-4 h-32 w-32 mx-auto bg-gray-200 rounded-full border-2 border-royal-gold flex items-center justify-center">
              <span className="text-5xl">
                {currentIndex === 0 && '🥰'}
                {currentIndex === 1 && '😏'}
                {currentIndex === 2 && '😜'}
                {currentIndex === 3 && '❤️'}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button 
          onClick={prevSlide}
          className="bg-royal-purple text-white rounded-r-full p-2 hover:bg-opacity-90"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button 
          onClick={nextSlide}
          className="bg-royal-purple text-white rounded-l-full p-2 hover:bg-opacity-90"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default AditiCarousel;
