import { ProjectItem } from '../types';
import { motion } from 'framer-motion';

interface Props {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="glass max-w-2xl w-full p-6"
      >
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
        </div>
        <img src={project.image} alt={project.title} className="mt-4 rounded" />
        <p className="mt-4 text-slate-300">{project.description}</p>
        <div className="mt-6 flex gap-3">
          {project.githubUrl && (
            <a className="px-4 py-2 rounded bg-white/10 hover:bg-white/20" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {project.liveUrl && (
            <a className="px-4 py-2 rounded bg-primary-600 hover:bg-primary-500" href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo</a>
          )}
        </div>
      </motion.div>
    </div>
  );
}