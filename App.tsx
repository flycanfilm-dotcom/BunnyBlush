import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import OurStory from './components/OurStory';
import { PRODUCTS } from './constants';
import type { Product } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'story'>('home');
  const [scrollToProducts, setScrollToProducts] = useState(false);
  const productsRef = useRef<HTMLElement>(null);

  const handleScrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleShopNavigation = () => {
    if (currentPage === 'home') {
      handleScrollToProducts();
    } else {
      setCurrentPage('home');
      setScrollToProducts(true);
    }
  };
  
  const navigateToStory = () => {
    setCurrentPage('story');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (currentPage === 'home' && scrollToProducts) {
      // Allow the DOM to update before scrolling
      const timer = setTimeout(() => {
        handleScrollToProducts();
        setScrollToProducts(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentPage, scrollToProducts]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-off-white-pink min-h-screen font-body text-text-dark antialiased">
      <Header 
        onShopClick={handleShopNavigation}
        onOurStoryClick={navigateToStory}
        onLogoClick={navigateToHome}
      />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onExploreClick={handleScrollToProducts} />
            <ProductGrid 
              ref={productsRef} 
              products={PRODUCTS} 
              onProductClick={handleProductClick} 
            />
          </>
        ) : (
          <OurStory onBackToShopClick={navigateToHome} />
        )}
      </main>
      <Footer />
      {selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;