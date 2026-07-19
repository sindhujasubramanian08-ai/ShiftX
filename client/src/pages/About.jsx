import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-dark dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 min-h-80 flex items-center justify-center">
            <div className="text-center"><div className="text-8xl mb-4">🎯</div><h3 className="text-2xl font-bold">Your Story</h3></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-bold mb-4">Hello, I'm a Full Stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Passionate about creating beautiful web applications with clean code and best practices.</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center"><p className="text-3xl font-bold text-primary">50+</p><p className="text-gray-600 dark:text-gray-400 text-sm">Projects</p></div>
              <div className="text-center"><p className="text-3xl font-bold text-primary">30+</p><p className="text-gray-600 dark:text-gray-400 text-sm">Clients</p></div>
              <div className="text-center"><p className="text-3xl font-bold text-primary">5+</p><p className="text-gray-600 dark:text-gray-400 text-sm">Years</p></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;