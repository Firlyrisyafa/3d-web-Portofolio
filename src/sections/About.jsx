import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6">
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold mb-6 text-pink-400"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img src="/firly.jpeg" alt="Firly Risyafa Anindita" className="w-32 h-32 rounded-full object-cover border-4 border-pink-400 hover:border-pink-300 transition-colors duration-300" />
        </motion.div>
        <motion.p
          className="text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Hi! I'm Firly Risyafa Anindita, a high school student from SMAN 12 Surabaya with a passion for creativity and technology.
        </motion.p>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          I love combining art and code to create meaningful projects, from animations to web development. My goal is to keep learning and innovating!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
