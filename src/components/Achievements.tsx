import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, TrendingUp, Users, Target, Zap, Award } from 'lucide-react';
import { resumeData } from '../data';

const Counter: React.FC<{ value: string }> = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract number from string (e.g., "100+" -> 100, "30%" -> 30)
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / numericValue));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= numericValue) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-black text-blue-500 tracking-tighter">
      {count}{suffix}
    </span>
  );
};

const AchievementCard: React.FC<{ achievement: any; index: number }> = ({ achievement, index }) => {
  const icons = [Trophy, TrendingUp, Users, Target, Zap, Award];
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none group overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 mb-6 transition-colors group-hover:bg-blue-500 group-hover:text-white">
          <Icon size={24} />
        </div>

        <Counter value={achievement.metric} />

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2">
          {achievement.label}
        </h3>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          {achievement.context}
        </p>
      </div>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  // Top 3 Impact Strip (Only from resume data)
  const topImpact = resumeData.achievements.slice(0, 3);

  return (
    <section id="achievements" className="py-24 px-6 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black uppercase tracking-[0.3em] text-sm mb-4"
          >
            Measurable Success
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-6"
          >
            Key <span className="text-blue-500">Achievements</span>
          </motion.h2>

          {/* Top 3 Impact Strip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-wrap items-center justify-center gap-8 p-6 rounded-3xl bg-blue-500 text-white shadow-2xl shadow-blue-500/20 mb-12"
          >
            {topImpact.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center px-6 border-r border-white/20 last:border-0">
                <span className="text-3xl font-black">{item.metric}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.achievements.map((achievement, idx) => (
            <AchievementCard key={idx} achievement={achievement} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
