
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { Trophy } from 'lucide-react';

const Chapter6 = () => {
  const [glowingTrophy, setGlowingTrophy] = useState<number | null>(null);
  
  const achievements = [
    {
      title: "First 'I Miss You' Text",
      description: "Successfully admitted feelings without spontaneously combusting.",
      date: "Achievement Unlocked: June 2023"
    },
    {
      title: "Aditi Let Me Choose the Food (Once)",
      description: "A rare cosmic event that scientists still can't explain.",
      date: "Achievement Unlocked: August 2023"
    },
    {
      title: "Survived a Roast Session Without Crying",
      description: "Level of difficulty: Expert",
      date: "Achievement Unlocked: September 2023"
    },
    {
      title: "Made Aditi Genuinely Laugh",
      description: "Not just the pity laugh, the real deal!",
      date: "Achievement Unlocked: October 2023"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8 flex-grow">
        <div className="golden-border p-6 bg-white bg-opacity-90 rounded-xl mb-8">
          <h2 className="text-3xl font-bold text-royal-purple mb-6 text-center">
            Chapter 6: Relationship Achievements Unlocked
          </h2>
          <h3 className="text-xl text-center mb-8 italic">Our Biggest Milestones</h3>
          
          <div className="prose max-w-none">
            <p className="text-lg text-center mb-8">
              Our biggest milestones—Gamified!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`golden-border p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    glowingTrophy === index ? 'bg-royal-gold bg-opacity-20' : 'bg-royal-cream'
                  }`}
                  onClick={() => setGlowingTrophy(index === glowingTrophy ? null : index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-2 rounded-full ${
                      glowingTrophy === index ? 'animate-pulse text-royal-gold' : 'text-royal-purple'
                    }`}>
                      <Trophy className="h-8 w-8" />
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-royal-purple mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-royal-dark mb-2">{achievement.description}</p>
                      <p className="text-sm font-bold text-royal-gold">{achievement.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="golden-border p-6 bg-royal-purple text-white rounded-lg text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Ultimate Achievement Unlocked</h3>
              <p className="text-lg">
                Finding someone who accepts all my weirdness and still chooses to be with me. 💜
              </p>
            </div>
            
            <div className="text-center mt-8 text-sm text-royal-dark">
              <p>Click on any trophy to make it glow!</p>
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

export default Chapter6;
