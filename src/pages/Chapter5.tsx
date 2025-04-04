
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import ComicBubble from '../components/ui/ComicBubble';
import { RefreshCcw } from 'lucide-react';

const Chapter5 = () => {
  const universes = [
    {
      name: "Bollywood Universe",
      aditi: "The leading lady with perfect dance moves",
      me: "The hero who can't dance but tries anyway",
      scenario: (
        <>
          <ComicBubble 
            text="Ek ladki ko dekha toh aisa laga... she's way too cool for me." 
            position="right"
          />
          <ComicBubble 
            text="*Facepalms dramatically*" 
            position="left"
            delay={0.5}
          />
        </>
      )
    },
    {
      name: "Superhero Universe",
      aditi: "Has actual superpowers of sass and wit",
      me: "The sidekick who carries snacks",
      scenario: (
        <>
          <ComicBubble 
            text="Never fear, Captain Aditi is here!" 
            position="left"
          />
          <ComicBubble 
            text="I brought snacks for after you save the world!" 
            position="right"
            delay={0.5}
          />
        </>
      )
    },
    {
      name: "Medieval Fantasy Universe",
      aditi: "The fearless knight",
      me: "The bard who writes poems about her bravery",
      scenario: (
        <>
          <ComicBubble 
            text="Stand back! I shall defeat this dragon!" 
            position="left"
          />
          <ComicBubble 
            text="*Composing an epic ballad about Aditi's bravery*" 
            position="right"
            delay={0.5}
            isThought={true}
          />
        </>
      )
    }
  ];
  
  const [currentUniverse, setCurrentUniverse] = useState(0);
  
  const changeUniverse = () => {
    setCurrentUniverse((prev) => (prev + 1) % universes.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8 flex-grow">
        <div className="golden-border p-6 bg-white bg-opacity-90 rounded-xl mb-8">
          <h2 className="text-3xl font-bold text-royal-purple mb-6 text-center">
            Chapter 5: Alternate Universes
          </h2>
          <h3 className="text-xl text-center mb-8 italic">Where We Still Fall in Love</h3>
          
          <div className="prose max-w-none">
            <p className="text-lg text-center mb-8">
              What if we met in different realities?
            </p>
            
            <div className="golden-border p-6 bg-royal-cream rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-royal-purple text-center mb-4">
                {universes[currentUniverse].name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 border border-royal-purple rounded-lg bg-white">
                  <h4 className="font-bold mb-2 text-royal-purple">Aditi:</h4>
                  <p>{universes[currentUniverse].aditi}</p>
                </div>
                
                <div className="p-4 border border-royal-purple rounded-lg bg-white">
                  <h4 className="font-bold mb-2 text-royal-purple">Me:</h4>
                  <p>{universes[currentUniverse].me}</p>
                </div>
              </div>
              
              <div className="mb-6 p-4 bg-white rounded-lg border border-royal-gold">
                {universes[currentUniverse].scenario}
              </div>
              
              <div className="flex justify-center">
                <button 
                  onClick={changeUniverse}
                  className="flex items-center gap-2 bg-royal-purple text-white px-6 py-3 rounded-lg hover:bg-royal-dark transition-colors"
                >
                  <RefreshCcw className="h-5 w-5" />
                  <span>Change Universe</span>
                </button>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg">
                No matter what universe we're in, one thing remains constant:
                We still find each other and fall in love.
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

export default Chapter5;
