import type { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
  {
    id: '1',
    title: 'Fake News Detection with BERT',
    description: 'A transformer-based classifier to detect misinformation across multilingual sources.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    tags: ['NLP', 'BERT', 'Transformers', 'Python'],
    category: 'AI',
    githubUrl: 'https://github.com/your-username/fake-news-bert',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'MLOps Pipeline with FastAPI & Docker',
    description: 'CI/CD-ready pipeline with model versioning, monitoring, and containerized deployment.',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=800&auto=format&fit=crop',
    tags: ['MLOps', 'Docker', 'FastAPI', 'Prometheus'],
    category: 'ML',
    githubUrl: 'https://github.com/your-username/mlops-pipeline',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'Data Journalism Dashboard',
    description: 'Interactive dashboard visualizing socio-economic indicators and narratives.',
    image: 'https://images.unsplash.com/photo-1551281044-8b29d3b4edb7?q=80&w=800&auto=format&fit=crop',
    tags: ['D3.js', 'React', 'DataViz'],
    category: 'Journalism',
    githubUrl: 'https://github.com/your-username/data-journalism-dashboard',
    liveUrl: '#'
  },
  {
    id: '4',
    title: 'Full-Stack Notes App',
    description: 'MERN stack application with authentication and real-time collaboration.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=800&auto=format&fit=crop',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    category: 'Web',
    githubUrl: 'https://github.com/your-username/mern-notes',
    liveUrl: '#'
  }
];