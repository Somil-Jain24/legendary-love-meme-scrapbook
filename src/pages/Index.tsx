
import React from 'react';
import Header from '../components/layout/Header';
import ChapterCard from '../components/ui/ChapterCard';
import ScrollText from '../components/ui/ScrollText';
import AditiCarousel from '../components/scrapbook/AditiCarousel';
import FireworkButton from '../components/scrapbook/FireworkButton';
import { Crown } from 'lucide-react';

const Index = () => {
  const chapters = [
    {
      number: 1,
      title: 'The Grand Introduction',
      subtitle: 'How We Met',
      link: '/chapter/1'
    },
    {
      number: 2,
      title: 'The First Conversation',
      subtitle: 'A Moment in History',
      link: '/chapter/2'
    },
    {
      number: 3,
      title: 'Why Aditi is the GOAT',
      subtitle: 'The Hall of Fame',
      link: '/chapter/3'
    },
    {
      number: 4,
      title: 'Countdown to April 4th',
      subtitle: 'The Day the Universe Changed',
      link: '/chapter/4'
    },
    {
      number: 5,
      title: 'Alternate Universes',
      subtitle: 'Where We Still Fall in Love',
      link: '/chapter/5'
    },
    {
      number: 6,
      title: 'Relationship Achievements Unlocked',
      subtitle: 'Our Biggest Milestones',
      link: '/chapter/6'
    },
    {
      number: 7,
      title: 'If Our Relationship Was a Netflix Show',
      subtitle: 'The Ultimate Rom-Com',
      link: '/chapter/7'
    },
    {
      number: 8,
      title: 'Our Future Chapters',
      subtitle: "What's Next?",
      link: '/chapter/8'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12 relative">
          <h2 className="text-2xl md:text-4xl font-bold text-royal-purple mb-4 inline-block relative">
            A Love Story No One Saw Coming
            <span className="absolute -top-5 -right-8 text-royal-gold animate-rotate-crown">
              <Crown className="h-8 w-8" />
            </span>
          </h2>
          
          <div className="max-w-2xl mx-auto mt-6 golden-border p-6 bg-white bg-opacity-80 rounded-xl">
            <ScrollText text="Forget those boring, predictable love stories." delay={500} />
            <ScrollText text="This one is legendary." delay={2000} />
            <ScrollText text="This is the tale of two people..." delay={3500} />
            <ScrollText text="One: Aditi—the effortlessly cool, sassy queen 👑." delay={5000} />
            <ScrollText text="The other: Me—nervous, overthinking, and very much in love. 💀😂" delay={6500} />
          </div>
        </div>
        
        <div className="flex justify-center mb-12">
          <AditiCarousel />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-royal-purple text-center mb-8">
          The Legendary Chapters 📚
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {chapters.map((chapter) => (
            <ChapterCard 
              key={chapter.number}
              number={chapter.number}
              title={chapter.title}
              subtitle={chapter.subtitle}
              link={chapter.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <FireworkButton />
        </div>
      </main>
      
      <footer className="w-full py-6 text-center text-royal-purple mt-auto">
        <p className="text-sm opacity-80">Made with 💜 for Aditi</p>
      </footer>
    </div>
  );
};

export default Index;
