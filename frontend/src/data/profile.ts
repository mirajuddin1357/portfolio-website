import type { SocialLinks } from '../types';

const githubUsername = import.meta.env.VITE_GITHUB_USERNAME as string | undefined;
const avatarFromGitHub = githubUsername ? `https://avatars.githubusercontent.com/${githubUsername}` : undefined;

export const profile = {
  name: 'Miraj Ud Din',
  location: 'Peshawar, Pakistan',
  tagline: 'Data Scientist • ML Engineer • Full-Stack Developer • Journalist',
  about:
    'I am a multidisciplinary professional focused on building AI-driven products that create real-world impact. With experience across data science, machine learning, full-stack development, and journalism, I bring a unique blend of analytical rigor and storytelling to solve complex problems.',
  highlights: [
    { title: 'Built and deployed end-to-end ML systems', period: '2019 — Present' },
    { title: 'Investigative and data-driven journalism', period: '2017 — Present' },
    { title: 'Led full-stack web and data platforms', period: '2020 — Present' }
  ],
  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-linkedin',
    twitter: 'https://twitter.com/your-twitter',
    medium: 'https://medium.com/@your-medium',
    whatsapp: 'https://wa.me/923001234567'
  } as SocialLinks,
  avatarUrl: avatarFromGitHub || 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=640&auto=format&fit=crop',
  resumeUrl: '/assets/resume/Resume.pdf'
};