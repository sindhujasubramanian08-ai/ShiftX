import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    { title: 'E-Commerce Platform', desc: 'Full-stack e-commerce with auth and payments', tech: ['React', 'Node.js', 'MongoDB'], image: '🛍️' },
    { title: 'Task Manager App', desc: 'Collaborative task management with real-time updates', tech: ['React', 'Firebase'], image: '📋' },
    { title: 'Weather Dashboard', desc: 'Real-time weather app with visualizations', tech: ['React', 'API'], image: '🌤️' },
    { title: 'Social Media API', desc: 'RESTful API with auth and notifications', tech: ['Express', 'MongoDB'], image: '💬' },
    { title: 'Portfolio Website', desc: 'Modern portfolio with animations', tech: ['React', 'Tailwind'], image: '🎨' },
    { title: 'Blog CMS', desc: 'Content management system for blogs', tech: ['MERN', 'JWT'], image: '📝' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-dark dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div key={proj.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -10 }} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-5xl">{proj.image}</div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{proj.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">{proj.tech.map(t => <span key={t} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">{t}</span>)}</div>
                <div className="flex gap-3">
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition"><FiGithub /> GitHub</a>
                  <a href="#" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:shadow-lg"><FiExternalLink /> Live</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;