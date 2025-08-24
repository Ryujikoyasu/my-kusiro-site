'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">946</span>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-800">くしろまちづくり研究所</h1>
              <p className="text-sm text-gray-600">釧路の未来を創るパートナー</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">概要</a>
            <a href="#activities" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">活動内容</a>
            <a href="#members" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">メンバー</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">お問い合わせ</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium">概要</a>
              <a href="#activities" className="text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium">活動内容</a>
              <a href="#members" className="text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium">メンバー</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2 font-medium">お問い合わせ</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;