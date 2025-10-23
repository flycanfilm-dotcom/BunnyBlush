import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onShopClick: () => void;
  onOurStoryClick: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShopClick, onOurStoryClick, onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-off-white-pink/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={onLogoClick} className="text-2xl font-display font-bold text-primary-pink">
          BunnyBlush
        </button>
        <nav className="hidden md:flex items-center space-x-8 font-body">
          <button onClick={onShopClick} className="text-text-dark hover:text-primary-pink transition-colors duration-300">Shop</button>
          <button onClick={onOurStoryClick} className="text-text-dark hover:text-primary-pink transition-colors duration-300">Our Story</button>
          <a href="#" className="text-text-dark hover:text-primary-pink transition-colors duration-300">Contact</a>
        </nav>
        <button onClick={onShopClick} className="bg-primary-pink text-white font-bold py-2 px-6 rounded-full hover:bg-light-pink shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
          Shop Now
        </button>
      </div>
    </header>
  );
};

export default Header;