import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from '@hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="glass px-3 py-2 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition"
    >
      {isDark ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-slate-600" />}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}