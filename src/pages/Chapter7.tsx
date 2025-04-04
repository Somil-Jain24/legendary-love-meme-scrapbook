
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { Play, Film, Star } from 'lucide-react';

const Chapter7 = () => {
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);
  
  const genres = [
    { name: "Romance", percentage: 50, color: "bg-pink-500" },
    { name: "Comedy", percentage: 30, color: "bg-yellow-500" },
    { name: "Aditi making fun of me", percentage: 15, color: "bg-blue-500" },
    { name: "Me overthinking texts", percentage: 5, color: "bg-green-500" }
  ];
  
  const playTrailer = () => {
    setIsPlayingTrailer(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsPlayingTrailer(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8 flex-grow">
        <div className="golden-border p-6 bg-white bg-opacity-90 rounded-xl mb-8 relative">
          <h2 className="text-3xl font-bold text-royal-purple mb-6 text-center">
            Chapter 7: If Our Relationship Was a Netflix Show
          </h2>
          <h3 className="text-xl text-center mb-8 italic">The Ultimate Rom-Com</h3>
          
          <div className="prose max-w-none">
            <div className="aspect-video golden-border bg-royal-dark rounded-lg mb-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-60"></div>
              
              <div className="relative z-10 text-center p-6">
                <div className="flex justify-center mb-4">
                  <Film className="h-12 w-12 text-royal-gold" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Aditi & Me
                </h3>
                <p className="text-xl text-white mb-6">
                  The Romantic Comedy That No One Expected
                </p>
                
                <button 
                  onClick={playTrailer}
                  className="flex items-center gap-2 bg-royal-gold text-royal-dark px-6 py-3 rounded-lg mx-auto hover:bg-yellow-400 transition-colors"
                >
                  <Play className="h-5 w-5" />
                  <span>Play Trailer</span>
                </button>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-royal-purple mb-4">
                Tagline:
              </h3>
              <div className="golden-border p-4 bg-royal-cream rounded-lg text-center italic">
                <p className="text-lg">
                  "One awkward dude. One super cool girl. One unforgettable love story."
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-royal-purple mb-4">
                Genres:
              </h3>
              
              <div className="space-y-4">
                {genres.map((genre, index) => (
                  <div key={index} className="golden-border p-4 bg-white rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">{genre.name}</span>
                      <span>{genre.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className={`${genre.color} h-4 rounded-full`} 
                        style={{width: `${genre.percentage}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="golden-border p-4 bg-royal-cream rounded-lg mb-8">
              <h3 className="text-xl font-bold text-royal-purple mb-4 text-center">
                Critics Say:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Star className="h-6 w-6 text-royal-gold" />
                  </div>
                  <div>
                    <p className="italic">"A heartwarming tale of how opposites attract. The chemistry is undeniable!"</p>
                    <p className="text-sm font-bold mt-1">— The Love Chronicle</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Star className="h-6 w-6 text-royal-gold" />
                  </div>
                  <div>
                    <p className="italic">"The male lead's awkwardness is somehow endearing. We're rooting for this couple!"</p>
                    <p className="text-sm font-bold mt-1">— Romance Weekly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {isPlayingTrailer && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
              <div className="max-w-2xl w-full p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider">
                  In a world where love is unpredictable...
                </h2>
                <h3 className="text-xl text-white mb-8">
                  ONE MAN TRIES TO IMPRESS THE COOLEST WOMAN EVER...
                </h3>
                <div className="animate-pulse">
                  <p className="text-royal-gold text-2xl font-bold">Coming Soon</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <footer className="w-full py-6 text-center text-royal-purple">
        <p className="text-sm opacity-80">Made with 💜 for Aditi</p>
      </footer>
    </div>
  );
};

export default Chapter7;
