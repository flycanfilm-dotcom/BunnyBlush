import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-beige-pink overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-beige-pink via-off-white-pink to-lighter-pink opacity-50"></div>
      <div className="container mx-auto px-6 text-center z-10">
        <div className="opacity-0 animate-fade-in-up">
           <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-4">
            <span className="bg-gradient-to-r from-primary-pink via-light-pink to-lighter-pink bg-clip-text text-transparent animate-background-pan bg-[size:200%]">
              Unleash Your
            </span>
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6" style={{ animationDelay: '0.2s' }}>
             <span className="bg-gradient-to-r from-primary-pink via-light-pink to-lighter-pink bg-clip-text text-transparent animate-background-pan bg-[size:200%]">
              Ethereal Glow
            </span>
          </h2>
        </div>
        <p className="text-lg md:text-xl text-text-dark max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Crafted with cosmic love and earthly magic, our skincare is a ritual for the soul. Discover the secret to skin that doesn't just shine, it glows from within.
        </p>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={onExploreClick}
            className="bg-primary-pink text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-light-pink shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Explore Collection
          </button>
        </div>
      </div>
       <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 bg-primary-pink/20 rounded-full blur-3xl animate-subtle-float" 
        style={{ animationDelay: '0s' }}
      ></div>
      <div 
        className="absolute top-1/4 right-1/4 w-48 h-48 bg-lighter-pink/30 rounded-full blur-3xl animate-subtle-float" 
        style={{ animationDelay: '2s' }}
      ></div>
    </section>
  );
};

export default Hero;