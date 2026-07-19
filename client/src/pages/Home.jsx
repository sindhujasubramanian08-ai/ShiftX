import React from 'react';
import { motion } from 'framer-motion';
import { Typed } from 'react-typed';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-dark dark:via-gray-900 dark:to-dark flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-lg text-primary font-semibold mb-2">Welcome to My Portfolio</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-primary">Your Name</span></h1>
            <div className="text-2xl md:text-3xl font-semibold text-secondary mb-6 h-20 flex items-center">
              <Typed strings={['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator']} typeSpeed={100} backSpeed={50} loop />
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">I create beautiful, functional web applications using React, Node.js, and MongoDB.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button whileHover={{ scale: 1.05 }} className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg"><FiDownload /> Resume</motion.button>
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} className="flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition"><FiMail /> Contact</motion.a>
            </div>
            <div className="flex gap-4">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:text-primary"><FiGithub size={24} /></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:text-primary"><FiLinkedin size={24} /></motion.a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">👨‍💻</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;