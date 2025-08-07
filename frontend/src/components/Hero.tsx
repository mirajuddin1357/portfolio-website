import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import { profile } from '@data/profile';

export default function Hero() {
  return (
    <section className="relative section overflow-hidden">
      <div className="container-responsive">
        <div className="relative glass p-8 md:p-12 flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold"
            >
              {profile.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-slate-300"
            >
              {profile.tagline}
            </motion.p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2 rounded-lg bg-primary-600 hover:bg-primary-500 transition">View Projects</a>
              <a href={profile.resumeUrl} className="px-5 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition" download>
                Download Resume
              </a>
            </div>
          </div>
          <motion.div
            className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-primary-600/30 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
      <ParticleBackground />
    </section>
  );
}