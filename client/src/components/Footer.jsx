import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Building modern web experiences</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li><a href="/projects" className="hover:text-primary">Projects</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-primary hover:text-white transition"><FiGithub /></a>
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-primary hover:text-white transition"><FiLinkedin /></a>
              <a href="#" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-primary hover:text-white transition"><FiMail /></a>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 My Portfolio. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-2 bg-primary text-white rounded-full hover:shadow-lg"><FiArrowUp /></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;