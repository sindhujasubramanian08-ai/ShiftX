import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">Portfolio</Link>
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="hover:text-primary transition">{link.name}</Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark border-t">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="block px-4 py-2 hover:text-primary" onClick={() => setIsOpen(false)}>{link.name}</Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;