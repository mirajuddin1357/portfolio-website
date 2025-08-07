import { useEffect, useRef, useState } from 'react';
import { testimonials } from '@data/testimonials';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => { if (timeoutRef.current) window.clearTimeout(timeoutRef.current); };
  }, [index]);

  const t = testimonials[index];

  return (
    <section className="section">
      <div className="container-responsive">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <div className="glass p-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-slate-400 text-sm">{t.role}</div>
            </div>
          </div>
          <p className="mt-4 text-lg">“{t.quote}”</p>
          <div className="mt-4 flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-primary-600' : 'bg-white/20'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}