import { experiences } from '@data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-responsive">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <ol className="relative border-s border-slate-700/40 ms-3">
          {experiences.map((e, idx) => (
            <li key={idx} className="mb-10 ms-6">
              <span className="absolute -start-3 flex items-center justify-center w-6 h-6 bg-primary-600 rounded-full ring-8 ring-slate-900">
                <img src={e.logo} alt="logo" className="w-5 h-5 rounded-full" />
              </span>
              <h3 className="font-semibold">{e.role} — {e.company}</h3>
              <p className="text-slate-400 text-sm">{e.start} — {e.end}</p>
              <p className="mt-2 text-slate-300">{e.summary}</p>
              <ul className="list-disc ms-4 mt-2 text-slate-300">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}