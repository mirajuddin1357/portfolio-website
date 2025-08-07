import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container-responsive">
        <nav className="mt-4 glass flex items-center justify-between px-4 py-3">
          <Link to="/" className="font-bold text-lg">Miraj Ud Din</Link>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-primary-400 transition">
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
          </div>
        </nav>
      </div>
      <motion.div layoutId="nav-underline" />
    </header>
  );
}