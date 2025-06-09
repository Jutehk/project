import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Get to Know Us',
      links: ['About ShopZone', 'Careers', 'Press Releases', 'ShopZone Cares', 'Gift a Smile'],
    },
    {
      title: 'Make Money with Us',
      links: ['Sell products on ShopZone', 'Sell apps on ShopZone', 'Become an Affiliate', 'Advertise Your Products', 'Self-Publish with Us'],
    },
    {
      title: 'ShopZone Payment Products',
      links: ['ShopZone Business Card', 'Shop with Points', 'Reload Your Balance', 'ShopZone Currency Converter'],
    },
    {
      title: 'Let Us Help You',
      links: ['ShopZone and COVID-19', 'Your Account', 'Your Orders', 'Shipping Rates & Policies', 'Returns & Replacements'],
    },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Back to Top */}
      <div 
        className="bg-slate-800 py-4 text-center cursor-pointer hover:bg-slate-700 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-sm">Back to top</span>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-bold text-lg mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">Get the latest deals and updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <span className="text-orange-400">Shop</span>Zone
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Help Center</a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm text-gray-500">
          © 2024 ShopZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;