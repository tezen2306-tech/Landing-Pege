import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#footer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              AnaiMedia
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://youtube.com/@tegedigital"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Suscríbete
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://youtube.com/@tegedigital"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              Suscríbete
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;