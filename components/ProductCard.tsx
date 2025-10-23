
import React, { useRef } from 'react';
import type { Product } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

interface ProductCardProps {
  product: Product;
  index: number;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, onProductClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`bg-white/50 rounded-2xl shadow-lg overflow-hidden group flex flex-col transition-all duration-500 transform hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-w-4 aspect-h-5">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="p-6 text-center flex-grow flex flex-col justify-center">
        <h3 className="text-xl font-display font-bold text-text-dark">{product.name}</h3>
      </div>
      <div className="bg-beige-pink px-6 py-4 mt-auto">
        <button 
          onClick={() => onProductClick(product)}
          className="w-full font-bold text-primary-pink transition-all duration-300 group-hover:tracking-wider"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
