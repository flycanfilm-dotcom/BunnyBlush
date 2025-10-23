
import React from 'react';

const HeartIcon = () => (
  <svg className="w-5 h-5 inline-block mx-1 text-primary-pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-beige-pink text-text-dark py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-body text-lg flex items-center justify-center">
          Made with <HeartIcon /> by
          <span className="font-display font-bold text-xl ml-2 text-primary-pink">Dhara Pandey</span>
        </p>
        <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary-pink transition-colors duration-300">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-primary-pink transition-colors duration-300">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-primary-pink transition-colors duration-300">Pinterest</a>
        </div>
        <p className="text-sm text-gray-400 mt-6">© {new Date().getFullYear()} BunnyBlush. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
