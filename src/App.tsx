import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    getCartItemCount,
  } = useCart();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header
          cartItemCount={getCartItemCount()}
          onSearch={handleSearch}
          onCartClick={handleCartClick}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                searchQuery={searchQuery}
                onAddToCart={handleAddToCart}
              />
            } 
          />
          <Route 
            path="/category/:categoryId" 
            element={
              <CategoryPage 
                onAddToCart={handleAddToCart}
              />
            } 
          />
        </Routes>

        <Footer />

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />

        {/* Floating Cart Button */}
        {getCartItemCount() > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-colors z-40"
          >
            <div className="relative">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center font-bold">
                {getCartItemCount()}
              </span>
            </div>
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;