
import React from 'react';
import { Link } from 'react-router-dom';

interface ChapterCardProps {
  number: number;
  title: string;
  subtitle: string;
  link: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ number, title, subtitle, link }) => {
  return (
    <Link to={link} className="block no-underline">
      <div className="chapter-card transform hover:scale-105 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-royal-purple text-white flex items-center justify-center font-bold text-xl">
            {number}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-royal-purple">{title}</h3>
            <p className="text-royal-dark mt-1 opacity-80">{subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChapterCard;
