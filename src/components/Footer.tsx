import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-24 px-6 bg-slate-950 text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-8"
            >
              Let's <span className="text-blue-500">Connect</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 max-w-md mb-12 leading-relaxed"
            >
              Ready to drive pipeline growth and optimize your paid media performance? Let's discuss how I can help your business.
            </motion.p>

            <div className="space-y-6">
              <motion.a
                href={`mailto:${resumeData.basics.email}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Me</p>
                  <p className="text-lg font-bold group-hover:text-blue-500 transition-colors">{resumeData.basics.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${resumeData.basics.phone}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Call Me</p>
                  <p className="text-lg font-bold group-hover:text-blue-500 transition-colors">{resumeData.basics.phone}</p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Location</p>
                  <p className="text-lg font-bold">{resumeData.basics.location}</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-8 mb-16">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Socials</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={resumeData.basics.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-bold hover:text-blue-500 transition-colors group"
                    >
                      LinkedIn
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={resumeData.basics.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-bold hover:text-blue-500 transition-colors group"
                    >
                      Portfolio
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Navigation</h4>
                <ul className="space-y-4">
                  <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold hover:text-blue-500 transition-colors">Home</button></li>
                  <li><button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold hover:text-blue-500 transition-colors">Experience</button></li>
                  <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="font-bold hover:text-blue-500 transition-colors">Projects</button></li>
                </ul>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full p-8 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-between group hover:bg-blue-500 transition-all"
            >
              <span className="text-2xl font-black tracking-tighter">Back to top</span>
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-white group-hover:text-blue-500 transition-all">
                <ArrowUpRight size={24} />
              </div>
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium text-slate-500">
          <p>© {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
