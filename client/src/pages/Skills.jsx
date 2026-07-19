import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication'] },
    { category: 'Database', items: ['MongoDB', 'MySQL', 'Mongoose', 'Database Design'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Docker'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-dark dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <motion.div key={skill.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map(item => <li key={item} className="text-gray-600 dark:text-gray-400">• {item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;