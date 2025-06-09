import React, { useState, useMemo } from 'react';
import Hero from './Hero';
import ProductGrid from './ProductGrid';
import { products } from '../data/products';
import { Product } from '../types/Product';

interface HomePageProps {
  searchQuery: string;
  onAddToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ searchQuery, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product =>
        product.category === selectedCategory
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {!searchQuery && <Hero />}
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {searchQuery 
              ? `Search results for "${searchQuery}"` 
              : 'Featured Products'
            }
          </h2>
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>
        
        <ProductGrid
          products={filteredProducts}
          onAddToCart={onAddToCart}
        />
      </main>
    </div>
  );
};

export default HomePage;