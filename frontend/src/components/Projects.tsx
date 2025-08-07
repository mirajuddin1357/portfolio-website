import { useMemo, useState } from 'react';
import { projects } from '@data/projects';
import { ProjectItem, ProjectCategory } from '../types';
import ProjectModal from './ProjectModal';

const categories: Array<ProjectCategory | 'All'> = ['All', 'AI', 'ML', 'Data', 'Web', 'Journalism'];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | 'All'>('All');
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="section">
      <div className="container-responsive">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3 py-1 rounded-full border ${active === c ? 'bg-primary-600 border-transparent' : 'border-white/10 bg-white/5'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <button key={p.id} onClick={() => setSelected(p)} className="glass p-4 text-left hover:scale-[1.01] transition">
              <img src={p.image} alt={p.title} className="rounded" />
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="text-slate-400 text-sm">{p.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs">{t}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}