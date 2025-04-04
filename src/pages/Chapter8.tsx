
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import ComicBubble from '../components/ui/ComicBubble';
import Tooltip from '../components/scrapbook/Tooltip';

const Chapter8 = () => {
  const [hoveredCrystalBall, setHoveredCrystalBall] = useState(false);
  const [prediction, setPrediction] = useState("");
  
  const timelines = [
    {
      period: "1 Year Later",
      status: "Still obsessed with Aditi.",
      details: "Creating elaborate gifts and surprises just to see her smile."
    },
    {
      period: "5 Years Later",
      status: "Still making her laugh, still best friends.",
      details: "Our inside jokes have inside jokes."
    },
    {
      period: "50 Years Later",
      status: "Still teasing each other, but now we have matching sweaters.",
      details: "We're that old couple that everyone aspires to be."
    }
  ];
  
  const predictions = [
    "Aditi will become the world's most professional eye-roller.",
    "I will still be making terrible jokes that only Aditi laughs at.",
    "We'll have the most epic love story ever told.",
    "Aditi will still be the coolest person I know.",
    "We'll invent a new love language based entirely on inside jokes."
  ];
  
  const showRandomPrediction = () => {
    const randomIndex = Math.floor(Math.random() * predictions.length);
    setPrediction(predictions[randomIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8 flex-grow">
        <div className="golden-border p-6 bg-white bg-opacity-90 rounded-xl mb-8">
          <h2 className="text-3xl font-bold text-royal-purple mb-6 text-center">
            Chapter 8: Our Future Chapters
          </h2>
          <h3 className="text-xl text-center mb-8 italic">What's Next?</h3>
          
          <div className="prose max-w-none">
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {timelines.map((timeline, index) => (
                  <div 
                    key={index}
                    className="golden-border p-6 bg-royal-cream rounded-lg text-center hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-royal-purple mb-3">
                      {timeline.period}
                    </h3>
                    <p className="font-bold mb-2">{timeline.status}</p>
                    <p className="text-sm text-royal-dark">{timeline.details}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="golden-border p-6 bg-white rounded-lg mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 relative">
                  <div 
                    className={`w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-royal-purple flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      hoveredCrystalBall ? 'shadow-lg shadow-royal-purple/50' : ''
                    }`}
                    onMouseEnter={() => {
                      setHoveredCrystalBall(true);
                      showRandomPrediction();
                    }}
                    onMouseLeave={() => setHoveredCrystalBall(false)}
                  >
                    <span className="text-5xl">🔮</span>
                  </div>
                  
                  <Tooltip content="Hover to see the future!">
                    <span className="absolute -bottom-2 -right-2 text-royal-purple cursor-help">
                      ✨
                    </span>
                  </Tooltip>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-royal-purple mb-4">
                    Crystal Ball Predictions
                  </h3>
                  
                  {hoveredCrystalBall ? (
                    <ComicBubble 
                      text={prediction} 
                      position="left" 
                    />
                  ) : (
                    <p className="italic text-royal-dark">
                      Hover over the crystal ball to see what the future holds...
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-royal-purple mb-4">
                The Best Chapter Is Yet To Come
              </h3>
              <p className="text-lg">
                Every moment with you is another page in our story, Aditi.
                And I can't wait to see what happens next.
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

export default Chapter8;
