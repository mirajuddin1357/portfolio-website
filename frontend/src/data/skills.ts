import type { SkillItem, SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = ['Languages', 'Frameworks', 'Tools', 'Cloud', 'Databases', 'MLOps'];

export const skills: SkillItem[] = [
  { name: 'Python', level: 95, category: 'Languages' },
  { name: 'TypeScript', level: 85, category: 'Languages' },
  { name: 'R', level: 70, category: 'Languages' },
  { name: 'TensorFlow', level: 85, category: 'Frameworks' },
  { name: 'PyTorch', level: 80, category: 'Frameworks' },
  { name: 'Scikit-learn', level: 90, category: 'Frameworks' },
  { name: 'React', level: 85, category: 'Frameworks' },
  { name: 'Node.js', level: 80, category: 'Frameworks' },
  { name: 'Pandas', level: 95, category: 'Tools' },
  { name: 'NumPy', level: 92, category: 'Tools' },
  { name: 'Docker', level: 75, category: 'MLOps' },
  { name: 'Kubernetes', level: 55, category: 'MLOps' },
  { name: 'AWS', level: 70, category: 'Cloud' },
  { name: 'GCP', level: 60, category: 'Cloud' },
  { name: 'MongoDB', level: 75, category: 'Databases' },
  { name: 'PostgreSQL', level: 70, category: 'Databases' }
];