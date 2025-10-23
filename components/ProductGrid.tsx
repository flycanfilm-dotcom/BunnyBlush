import React, { forwardRef } from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.ForwardRefRenderFunction<HTMLElement, ProductGridProps> = ({ products, onProductClick }, ref) => {
  return (
    <section ref={ref} className="py-20 md:py-28 bg-off-white-pink">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark">Our Magical Collection</h2>
          <p className="text-lg text-gray-500 mt-4">Handpicked ingredients for an enchanting experience.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index} 
              onProductClick={onProductClick} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default forwardRef(ProductGrid);