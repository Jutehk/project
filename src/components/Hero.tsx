import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Shop Everything You Need
              <span className="block text-orange-400">All in One Place</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-xl">
              Discover millions of products with fast, free delivery and unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Shop Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-4">Today's Deals</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white bg-opacity-10 rounded-lg">
                  <span>Electronics</span>
                  <span className="text-orange-300 font-bold">Up to 50% off</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white bg-opacity-10 rounded-lg">
                  <span>Fashion</span>
                  <span className="text-orange-300 font-bold">Up to 40% off</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white bg-opacity-10 rounded-lg">
                  <span>Home & Garden</span>
                  <span className="text-orange-300 font-bold">Up to 35% off</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400 bg-opacity-20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400 bg-opacity-20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;