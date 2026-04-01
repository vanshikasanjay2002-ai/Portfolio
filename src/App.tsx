/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      // Disable heavy animations if user prefers reduced motion
    }
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Splash key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <AnimatedBackground />
            <CustomCursor />
            <Navbar />
            <Hero />
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
            <Education />
            <Footer />

          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
