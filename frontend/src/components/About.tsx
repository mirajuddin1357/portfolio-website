import { motion } from 'framer-motion';
import { profile } from '@data/profile';
import Counters from './Counters';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-responsive">
        <h2 className="text-2xl font-bold mb-6">About Me</h2>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 glass p-6 leading-relaxed">
            <p>{profile.about}</p>
            <div>
              <div className="sr-only">Quick stats</div>
              {/* Counters */}
              <div className="mt-4">
                <Counters />
              </div>
            </div>
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold mb-3">Career Highlights</h3>
            <ol className="relative border-s border-slate-700/40 ms-3">
              {profile.highlights.map((h, idx) => (
                <motion.li key={idx} className="mb-6 ms-6" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <span className="absolute -start-3 flex items-center justify-center w-6 h-6 bg-primary-600 rounded-full ring-8 ring-slate-900"></span>
                  <h4 className="font-medium">{h.title}</h4>
                  <p className="text-slate-400 text-sm">{h.period}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}