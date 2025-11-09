import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei';
import { Leva } from 'leva';
import { motion } from 'framer-motion';
import './index.css';
import Computer from '../public/Computer';
import CanvasLoader from './components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';

const Lead = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section id="home" className="min-h-screen flex flex-col relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="flex w-full h-full items-center justify-between p-6 sm:flex-row flex-col">
        
        {/* Left Side: Intro Text */}
        <motion.div
          className="flex flex-col sm:items-start items-center sm:w-1/2 w-full sm:mb-0 mb-10 text-center sm:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="font-semibold sm:text-4xl text-2xl font-generalisans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I’m <span className="text-pink-400">Firly Risyafa Anindita</span>! <span className="waving-hand">👋</span>
          </motion.p>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A passionate high school student from <span className="font-semibold text-white">SMAN 12 Surabaya</span>,
            who loves bringing ideas to life through <span className="text-pink-400">creative websites</span>
            and <span className="text-blue-400">meaningful research</span>.
            <br className="hidden sm:block" />
            I’m always excited to learn, build, and innovate something new.
          </motion.p>

          <Leva collapsed />
        </motion.div>

        {/* Right Side: 3D Computer Model */}
        <div className="sm:w-1/2 w-full h-[400px] sm:h-[500px] relative">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={1.2} />
              <OrbitControls enableZoom={false} />
              <Computer
                rotation={[0, -0.4, 0]}
                position={[2, -1, -2.5]}
                scale={isMobile ? 0.45 : 0.55}
              />
              <Environment preset="sunset" />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Lead;
