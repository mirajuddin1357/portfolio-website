import type { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    company: 'AI Labs',
    role: 'Senior ML Engineer',
    logo: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=64&q=80&auto=format&fit=crop',
    start: '2022',
    end: 'Present',
    summary: 'Leading design and deployment of NLP and CV systems at scale.',
    highlights: [
      'Architected end-to-end pipelines for model training and serving',
      'Improved inference latency by 35% using quantization and batching',
      'Mentored junior engineers and interns'
    ]
  },
  {
    company: 'DataViz Media',
    role: 'Data Journalist',
    logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=64&q=80&auto=format&fit=crop',
    start: '2019',
    end: '2022',
    summary: 'Produced investigative stories backed by rigorous data analysis.',
    highlights: [
      'Built scraping and ETL to collect public sector datasets',
      'Published interactive visualizations and explainers',
      'Collaborated with editors and designers'
    ]
  }
];