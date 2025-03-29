
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import ComicBubble from '../components/ui/ComicBubble';

const Chapter2 = () => {
  const [playSound, setPlaySound] = useState(false);
  
  const playGavelSound = () => {
    setPlaySound(true);
    // Reset after playing
    setTimeout(() => setPlaySound(false), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8 flex-grow">
        <div className="golden-border p-6 bg-white bg-opacity-90 rounded-xl mb-8">
          <h2 className="text-3xl font-bold text-royal-purple mb-6 text-center">
            Chapter 2: The First Conversation
          </h2>
          <h3 className="text-xl text-center mb-8 italic">A Moment in History</h3>
          
          <div className="prose max-w-none">
            <div className="golden-border p-6 bg-royal-cream rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-royal-purple text-center mb-4">
                The Scene:
              </h3>
              
              <p className="text-lg text-center mb-2 italic">Court is now in session!</p>
              
              <div className="flex justify-center mb-6">
                <div className="relative w-24 h-24 flex items-center justify-center bg-royal-purple rounded-full">
                  <svg className="w-12 h-12 text-royal-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div 
                    className="absolute inset-0 cursor-pointer"
                    onClick={playGavelSound}
                  ></div>
                </div>
              </div>
              
              <p className="text-center mb-2">Case: Aditi vs. My Social Anxiety</p>
              <p className="text-center mb-6">Accusation: Being an Awkward Turtle on Our First Chat.</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-royal-purple mb-4">
                Exhibit A: The Awkward First Words
              </h3>
              
              <div className="golden-border p-4 bg-white rounded-lg">
                <div className="space-y-4">
                  <ComicBubble 
                    text="Hey, nice to meet you!" 
                    position="left"
                  />
                  
                  <ComicBubble 
                    text="Say something cool, bro."
                    position="right"
                    isThought={true}
                    delay={0.5}
                  />
                  
                  <ComicBubble 
                    text="Heh. Same."
                    position="right"
                    delay={1}
                  />
                </div>
              </div>
            </div>
            
            <div className="golden-border p-6 bg-royal-cream rounded-lg">
              <h3 className="text-2xl font-bold text-royal-purple text-center mb-4">
                Verdict:
              </h3>
              
              <p className="text-xl text-center font-bold mb-2">
                THE COURT FINDS ME GUILTY OF FALLING IN LOVE LIKE A FOOL. 😂❤️
              </p>
            </div>
            
            {playSound && (
              <audio autoPlay>
                <source src="https://www.myinstants.com/media/sounds/dun_dun.mp3" type="audio/mpeg" />
              </audio>
            )}
          </div>
        </div>
      </main>
      
      <footer className="w-full py-6 text-center text-royal-purple">
        <p className="text-sm opacity-80">Made with 💜 for Aditi</p>
      </footer>
    </div>
  );
};

export default Chapter2;
