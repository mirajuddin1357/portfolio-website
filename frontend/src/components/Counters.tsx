import AnimatedCounter from './AnimatedCounter';

export default function Counters() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
      <div className="glass p-4">
        <div className="text-2xl font-bold"><AnimatedCounter to={5} />+</div>
        <div className="text-slate-400 text-sm">Years Experience</div>
      </div>
      <div className="glass p-4">
        <div className="text-2xl font-bold"><AnimatedCounter to={40} />+</div>
        <div className="text-slate-400 text-sm">Projects</div>
      </div>
      <div className="glass p-4">
        <div className="text-2xl font-bold"><AnimatedCounter to={15} />+</div>
        <div className="text-slate-400 text-sm">Publications</div>
      </div>
    </div>
  );
}