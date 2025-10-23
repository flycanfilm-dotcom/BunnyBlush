
import React, { useEffect } from 'react';
import type { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-name"
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-fade-in-up"
        style={{ animationDelay: '0.1s' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover"/>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between overflow-y-auto">
          <div>
            <h2 id="product-name" className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-4">{product.name}</h2>
            <p className="font-body text-gray-600 mb-6">{product.description}</p>
          </div>
          <button className="bg-primary-pink text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-light-pink shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mt-4 w-full self-end">
            Add to Bag
          </button>
        </div>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-primary-pink bg-white/50 rounded-full p-1 transition-colors"
          aria-label="Close product details"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
