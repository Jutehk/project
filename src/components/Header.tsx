import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from '../data/products';

interface HeaderProps {
  cartItemCount: number;
  onSearch: (query: string) => void;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onSearch, onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    navigate('/');
  };

  const handleCategoryClick = (categoryId: string) => {
    setIsMenuOpen(false);
    if (categoryId === 'all') {
      navigate('/');
    } else {
      navigate(`/category/${categoryId}`);
    }
  };

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      {/* Main Header */}
      <div className="flex items-center px-4 py-3 gap-2 md:gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="text-xl md:text-2xl font-bold text-white">
            <span className="text-orange-400">Shop</span>Zone
          </div>
        </Link>

        {/* Delivery Location */}
        <div className="hidden lg:flex items-center gap-1 text-sm hover:bg-slate-800 p-2 rounded cursor-pointer">
          <MapPin className="w-4 h-4" />
          <div>
            <div className="text-xs text-gray-300">Deliver to</div>
            <div className="font-medium">New York 10001</div>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-3xl mx-2 md:mx-4">
          <div className="flex">
            <select 
              className="bg-gray-200 text-black px-2 md:px-3 py-2 rounded-l-md border-r border-gray-300 text-xs md:text-sm focus:outline-none"
              onChange={(e) => handleCategoryClick(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.displayName}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ShopZone"
              className="flex-1 px-2 md:px-4 py-2 text-black focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 px-3 md:px-4 py-2 rounded-r-md transition-colors"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </form>

        {/* Account and Cart */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="hidden md:flex items-center gap-1 hover:bg-slate-800 p-2 rounded">
            <User className="w-5 h-5" />
            <div className="text-left text-sm">
              <div className="text-xs text-gray-300">Hello, Sign in</div>
              <div className="font-medium">Account & Lists</div>
            </div>
          </button>

          <button 
            onClick={onCartClick}
            className="flex items-center gap-1 hover:bg-slate-800 p-2 rounded relative"
          >
            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
            <span className="hidden md:block text-sm font-medium ml-1">Cart</span>
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-slate-800 px-4 py-2 overflow-x-auto">
        <div className="flex items-center gap-4 md:gap-6 text-sm whitespace-nowrap">
          <button
            className="flex items-center gap-1 hover:bg-slate-700 p-1 rounded md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-4 h-4" />
            All
          </button>
          {categories.slice(1).map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="hover:bg-slate-700 p-1 rounded whitespace-nowrap transition-colors"
            >
              {category.displayName}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="p-4 space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="block w-full text-left p-2 hover:bg-slate-700 rounded transition-colors"
              >
                {category.displayName}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;