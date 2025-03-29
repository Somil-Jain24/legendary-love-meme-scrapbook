
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import ComicBubble from '../components/ui/ComicBubble';
import Tooltip from '../components/scrapbook/Tooltip';

const Chapter1 = () => {
  const [showError, setShowError] = useState(false);
  
  const toggleError = () => {
    setShowError(!showError);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8 flex-grow">
        <div className="golden-border p-6 bg-white bg-opacity-90 rounded-xl mb-8">
          <h2 className="text-3xl font-bold text-royal-purple mb-6 text-center">
            Chapter 1: The Grand Introduction
          </h2>
          
          <div className="prose max-w-none">
            <p className="text-lg italic text-center mb-8">
              Once upon a time in college, in a land where students pretended to study...
            </p>
            
            <p className="mb-4">
              Two fates were about to collide.
            </p>
            
            <p className="mb-4">
              The matchmaking wizard, Lady Raveena, brought us together.
            </p>
            
            <p className="mb-8">
              Little did we know—THIS was the beginning of something epic.
            </p>
            
            <h3 className="text-xl font-bold text-royal-purple mb-4">
              Comic Strip Style Panels:
            </h3>
            
            <div className="golden-border p-4 bg-white bg-opacity-70 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-300 rounded-lg bg-white">
                  <h4 className="font-bold mb-2">Panel 1:</h4>
                  <ComicBubble 
                    text="Hey guys, this is Aditi! Aditi, meet my friend..." 
                    position="left"
                  />
                  <p className="text-center text-sm mt-2 text-gray-600">Raveena introduces us</p>
                </div>
                
                <div className="p-4 border border-gray-300 rounded-lg bg-white">
                  <h4 className="font-bold mb-2">Panel 2:</h4>
                  <ComicBubble 
                    text="OMG she's cute. Act normal. Don't say anything weird." 
                    position="right" 
                    isThought={true}
                    delay={0.5}
                  />
                  <p className="text-center text-sm mt-2 text-gray-600">
                    Me internally 
                    <span 
                      className="ml-2 cursor-pointer inline-block" 
                      onClick={toggleError}
                    >
                      <Tooltip content="Click for a surprise!">
                        <span className="text-royal-purple font-bold">👀</span>
                      </Tooltip>
                    </span>
                  </p>
                </div>
                
                <div className="p-4 border border-gray-300 rounded-lg bg-white">
                  <h4 className="font-bold mb-2">Panel 3:</h4>
                  <ComicBubble 
                    text="Hi! Nice to meet you!" 
                    position="left"
                    delay={1}
                  />
                  <p className="text-center text-sm mt-2 text-gray-600">Aditi</p>
                </div>
                
                <div className="p-4 border border-gray-300 rounded-lg bg-white">
                  <h4 className="font-bold mb-2">Panel 4:</h4>
                  <ComicBubble 
                    text="...h-hi... heh." 
                    position="right"
                    delay={1.5}
                  />
                  <p className="text-center text-sm mt-2 text-gray-600">Me (Internally dying of awkwardness)</p>
                </div>
              </div>
            </div>
            
            {showError && (
              <div className="fixed inset-0 flex items-center justify-center z-50" onClick={toggleError}>
                <div className="bg-white p-8 rounded-xl golden-border shadow-2xl max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-red-500 mb-4">Error 404:</h3>
                  <p className="text-xl">Social Skills Not Found</p>
                  <div className="mt-4 text-center">
                    <button 
                      className="px-4 py-2 bg-royal-purple text-white rounded"
                      onClick={toggleError}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
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

export default Chapter1;
