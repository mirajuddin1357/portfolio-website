import { SkillItem } from '../types';
import { skills, skillCategories } from '@data/skills';
import { motion } from 'framer-motion';

function SkillBar({ skill }: { skill: SkillItem }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{skill.name}</span>
        <span className="text-slate-400 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-slate-700/40 rounded">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-2 rounded bg-gradient-to-r from-primary-400 to-primary-600"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-responsive">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-6">
            {skills.map((s) => (
              <SkillBar key={s.name} skill={s} />
            ))}
          </div>
          <div className="glass p-6">
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {skillCategories.map((c) => (
                <span key={c} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}