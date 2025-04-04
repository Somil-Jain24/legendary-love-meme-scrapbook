
import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import { Clock } from 'lucide-react';

const Chapter4 = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isApril4th, setIsApril4th] = useState(false);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const today = new Date();
      const currentYear = today.getFullYear();
      const targetDate = new Date(currentYear, 3, 4); // April 4th (month is 0-indexed)
      
      // If we've already passed April 4th this year, set target to next year
      if (today > targetDate) {
        targetDate.setFullYear(currentYear + 1);
      }
      
      // Check if today is April 4th
      const isToday = today.getDate() === 4 && today.getMonth() === 3;
      setIsApril4th(isToday);
      
      const difference = targetDate.getTime() - today.getTime();
      
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    };
    
    const timer = setTimeout(() => {
      calculateTimeLeft();
    }, 1000);
    
    calculateTimeLeft();
    
    return () => clearTimeout(timer);
  }, [days, hours, minutes, seconds]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8 flex-grow">
        <div className="golden-border p-6 bg-white bg-opacity-90 rounded-xl mb-8">
          <h2 className="text-3xl font-bold text-royal-purple mb-6 text-center">
            Chapter 4: Countdown to April 4th
          </h2>
          <h3 className="text-xl text-center mb-8 italic">The Day the Universe Changed</h3>
          
          <div className="prose max-w-none">
            <div className="flex justify-center items-center mb-12">
              <div className="w-24 h-24 bg-royal-purple rounded-full flex items-center justify-center">
                <Clock className="h-12 w-12 text-white" />
              </div>
            </div>
            
            {isApril4th ? (
              <div className="text-center">
                <div className="mb-8 animate-bounce">
                  <h3 className="text-3xl font-bold text-royal-gold">TODAY IS THE DAY!</h3>
                  <p className="text-xl mt-4">Happy Anniversary, Aditi! ❤️</p>
                </div>
                
                <div className="py-12">
                  <div className="fireworks-container relative h-64">
                    {Array.from({length: 10}).map((_, i) => (
                      <div 
                        key={i} 
                        className={`absolute w-4 h-4 rounded-full bg-royal-gold animate-firework-${i % 5 + 1}`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-4 gap-4 text-center mb-12">
                  <div className="golden-border p-4 bg-royal-cream rounded-lg">
                    <div className="text-4xl font-bold text-royal-purple">{days}</div>
                    <div className="text-royal-dark">Days</div>
                  </div>
                  <div className="golden-border p-4 bg-royal-cream rounded-lg">
                    <div className="text-4xl font-bold text-royal-purple">{hours}</div>
                    <div className="text-royal-dark">Hours</div>
                  </div>
                  <div className="golden-border p-4 bg-royal-cream rounded-lg">
                    <div className="text-4xl font-bold text-royal-purple">{minutes}</div>
                    <div className="text-royal-dark">Minutes</div>
                  </div>
                  <div className="golden-border p-4 bg-royal-cream rounded-lg">
                    <div className="text-4xl font-bold text-royal-purple">{seconds}</div>
                    <div className="text-royal-dark">Seconds</div>
                  </div>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-royal-purple mb-4 text-center">
                    Waiting Level:
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                    <div 
                      className="bg-royal-purple h-4 rounded-full animate-pulse" 
                      style={{width: '90%'}}
                    ></div>
                  </div>
                  <p className="text-center text-royal-purple font-bold">
                    IMPATIENTLY WAITING FOR THE BIG DAY
                  </p>
                </div>
              </>
            )}
            
            <div className="text-center mt-12">
              <p className="text-lg">
                April 4th marks the day our incredible journey began. 
                A day that changed everything for the better.
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

export default Chapter4;
