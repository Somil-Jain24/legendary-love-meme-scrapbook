
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { Trophy, Crown } from 'lucide-react';

const Chapter3 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const achievements = [
    {
      title: "Most Patient Human",
      description: "For tolerating my nonsense daily.",
      icon: <Trophy className="h-8 w-8 text-royal-gold" />
    },
    {
      title: "Best Eye-Rolling Skills",
      description: "She does it at least twice per conversation.",
      icon: <Trophy className="h-8 w-8 text-royal-gold" />
    },
    {
      title: "Roast Queen",
      description: "Can destroy me in three words or less.",
      icon: <Trophy className="h-8 w-8 text-royal-gold" />
    },
    {
      title: "Too Cute to Handle",
      description: "How is this even fair?",
      icon: <Trophy className="h-8 w-8 text-royal-gold" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8 flex-grow">
        <div className="golden-border p-6 bg-white bg-opacity-90 rounded-xl mb-8">
          <h2 className="text-3xl font-bold text-royal-purple mb-6 text-center">
            Chapter 3: Why Aditi is the GOAT
          </h2>
          <h3 className="text-xl text-center mb-8 italic">The Hall of Fame</h3>
          
          <div className="prose max-w-none">
            <p className="text-lg text-center mb-8">
              A grand hall of fame dedicated to Aditi's excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="golden-border p-4 bg-royal-cream rounded-lg flex items-start gap-4 transition-all duration-300 hover:shadow-xl"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex-shrink-0 p-2 bg-white rounded-full">
                    {achievement.icon}
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-royal-purple mb-2 relative">
                      {achievement.title}
                      {hoveredIndex === index && (
                        <span className="absolute -top-5 -right-5 text-royal-gold animate-rotate-crown">
                          <Crown className="h-6 w-6" />
                        </span>
                      )}
                    </h4>
                    <p className="text-royal-dark">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-royal-purple text-white p-6 rounded-lg text-center mt-12">
              <h3 className="text-2xl font-bold mb-2">The Ultimate Achievement</h3>
              <p className="text-lg">
                Making me fall head over heels in love with her effortlessly. 💜
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="w-full py-6 text-center text-royal-purple">
        <p className="text-sm opacity-80">Made with 💜 for Aditi</p>
      </footer>
    </div>
  );
};

export default Chapter3;
