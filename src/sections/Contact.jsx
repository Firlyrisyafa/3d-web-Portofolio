import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white px-6">
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold mb-6 text-yellow-400"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Feel free to reach out if you'd like to collaborate or just say hi!
        </motion.p>
        <motion.div
          className="text-gray-300 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <strong>Email:</strong> firlyrisyafaanindita@gmail.com
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/firly-risyafa-anindita" className="text-blue-400 hover:underline transition-colors duration-300">linkedin.com/in/firlyrisyafa</a>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <strong>Instagram:</strong> <a href="https://www.instagram.com/firlyyrisyafa" className="text-pink-400 hover:underline transition-colors duration-300">@firlyrisyafa</a>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <strong>GitHub:</strong> <a href="https://www.github.com/Firlyrisyafa" className="text-gray-400 hover:underline transition-colors duration-300">github.com/firlyrisyafa</a>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
