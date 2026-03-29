import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { resumeData } from '../data';
import { Experience as ExperienceType } from '../types';

const ExperienceCard: React.FC<{ experience: ExperienceType; index: number }> = ({ experience, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-8 group"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`relative p-6 md:p-8 rounded-3xl cursor-pointer transition-all duration-500 border ${
          isOpen
            ? 'bg-white dark:bg-slate-900 border-blue-500/30 shadow-2xl shadow-blue-500/10'
            : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-blue-500/20'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
              isOpen ? 'bg-blue-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
            }`}>
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                {experience.role}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                {experience.company}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              {experience.dates}
            </div>
            {experience.location && (
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                {experience.location}
              </div>
            )}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              className="ml-auto md:ml-4 p-1 rounded-full bg-slate-100 dark:bg-slate-800"
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>
        </div>

        {/* Metrics Preview */}
        {!isOpen && experience.metrics && (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.metrics.slice(0, 3).map((metric, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-100 dark:border-blue-800"
              >
                {metric}
              </span>
            ))}
          </div>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-8 border-t border-slate-100 dark:border-slate-800 mt-6">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    {experience.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                        <TrendingUp size={16} />
                        Impact Highlights
                      </div>
                      <div className="space-y-3">
                        {experience.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                            <span className="text-blue-500 font-black text-lg">#</span>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black uppercase tracking-[0.3em] text-sm mb-4"
          >
            Professional Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter"
          >
            Experience & <span className="text-blue-500">Impact</span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-500 dark:text-slate-400 max-w-md text-right hidden md:block"
        >
          Over 2 years of driving pipeline growth and optimizing ad performance across global platforms.
        </motion.div>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-slate-200 dark:via-slate-800 to-transparent hidden md:block" />

        <div className="space-y-4">
          {resumeData.experience.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
