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

            {/* Print-only Resume View */}
            <div className="hidden print:block fixed inset-0 z-[100] bg-white text-black p-12 overflow-auto">
              <div className="max-w-4xl mx-auto border-b-2 border-black pb-8 mb-8">
                <h1 className="text-4xl font-bold mb-2">Vanshika Shah</h1>
                <p className="text-xl font-semibold text-gray-700 mb-4">Paid Media & Lead Generation Specialist</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span>vanshikasanjay2002@gmail.com</span>
                  <span>437-262-2024</span>
                  <span>Toronto, ON</span>
                  <span>LinkedIn</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider border-b border-gray-300 mb-4">Summary</h2>
                <p className="leading-relaxed">Results-driven marketing professional with 2+ years of experience in B2B lead generation, paid media, and sales enablement. Proven track record of driving pipeline growth, optimizing ad performance, and increasing revenue through data-driven strategies across Google and X (Twitter) platforms.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider border-b border-gray-300 mb-4">Professional Experience</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between font-bold">
                      <span>Teleperformance Inc. (Client: Google)</span>
                      <span>06/2025 – Present</span>
                    </div>
                    <p className="italic mb-2">Ads Specialist – Google B2B Partnership Program</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Generated and qualified 100+ B2B leads weekly across multiple industries.</li>
                      <li>Increased outreach efficiency by 30% using tools like LinkedIn Sales Navigator, ZoomInfo, Lusha, and Apollo.</li>
                      <li>Conducted 20–30 discovery calls per week, identifying high-value businesses.</li>
                      <li>Successfully onboarded 30+ qualified businesses, maintaining a 95% qualification accuracy rate.</li>
                      <li>Reduced partner onboarding time by 20%, improving time-to-launch for new advertisers.</li>
                      <li>Maintained 100% CRM accuracy using ConnectLeads and ConnectSales.</li>
                      <li>Contributed to 15% MoM growth in partner acquisition.</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between font-bold">
                      <span>Teleperformance Inc. (Client: X)</span>
                      <span>10/2024 – 06/2025</span>
                    </div>
                    <p className="italic mb-2">X Ads Specialist (Paid Media & Client Strategy)</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Managed 100+ outbound prospects weekly via email and cold calling.</li>
                      <li>Built and optimized paid ad campaigns, improving client performance by ~30%.</li>
                      <li>Reduced CPA by 20% while increasing conversion rates.</li>
                      <li>Increased ARPA by 25%, driving higher client spend and platform revenue.</li>
                      <li>Supported end-to-end campaign setup including tracking, targeting, and analysis.</li>
                      <li>Managed client pipelines and reporting via Salesforce CRM.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider border-b border-gray-300 mb-4">Education</h2>
                <div className="flex justify-between font-bold">
                  <span>Centennial College</span>
                  <span>2023</span>
                </div>
                <p>Diploma in Business Marketing</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider border-b border-gray-300 mb-4">Skills</h2>
                <p><strong>Paid Media:</strong> Google Ads, X Ads, Campaign Optimization, Lead Generation, Performance Marketing</p>
                <p><strong>Sales & CRM:</strong> Salesforce, LinkedIn Sales Navigator, Apollo, ZoomInfo, Lusha</p>
                <p><strong>Tools:</strong> Excel, Campaign Tracking, Conversion Optimization, Shopify, Wix, Canva</p>
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
