import { education } from '@data/education';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-responsive">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((ed) => (
            <div key={ed.institute} className="glass p-5">
              <div className="flex items-center gap-3">
                <img src={ed.logo} alt={ed.institute} className="w-10 h-10 rounded" />
                <div>
                  <h3 className="font-semibold">{ed.institute}</h3>
                  <p className="text-slate-400 text-sm">{ed.start} — {ed.end}</p>
                </div>
              </div>
              <p className="mt-3">{ed.degree} — {ed.field}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}