import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/contact`, form);
      setStatus({ type: 'success', msg: 'Message sent successfully!' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', msg: 'Failed to send message.' });
    }
    setLoading(false);
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-dark dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.a href="mailto:your@email.com" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4"><div className="p-4 bg-primary/10 rounded-lg"><FiMail className="text-primary" size={28} /></div><div><h3 className="font-bold">Email</h3><p className="text-gray-600 dark:text-gray-400">your@email.com</p></div></div>
          </motion.a>
          <motion.a href="tel:+15551234567" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4"><div className="p-4 bg-primary/10 rounded-lg"><FiPhone className="text-primary" size={28} /></div><div><h3 className="font-bold">Phone</h3><p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p></div></div>
          </motion.a>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4"><div className="p-4 bg-primary/10 rounded-lg"><FiMapPin className="text-primary" size={28} /></div><div><h3 className="font-bold">Location</h3><p className="text-gray-600 dark:text-gray-400">City, Country</p></div></div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:border-primary" />
              <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:border-primary" />
            </div>
            <input type="text" placeholder="Subject" value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:border-primary" />
            <textarea placeholder="Your message..." value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} required rows="6" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:border-primary resize-none"></textarea>
            {status && <div className={`p-4 rounded-lg font-semibold ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{status.msg}</div>}
            <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.05 }} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold hover:shadow-lg disabled:opacity-50"><FiSend /> {loading ? 'Sending...' : 'Send Message'}</motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;