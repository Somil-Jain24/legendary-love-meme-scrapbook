
import React from 'react';
import { Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-4 flex justify-center items-center relative">
      <div className="absolute left-4 top-4">
        <Link to="/" className="flex items-center gap-2">
          <Crown className="h-6 w-6 text-royal-gold" />
          <span className="font-royal text-lg text-royal-purple">Home</span>
        </Link>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-royal-purple text-center px-4 font-royal">
        Aditi <span className="text-royal-gold">&</span> Me
      </h1>
    </header>
  );
};

export default Header;
