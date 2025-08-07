import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

export default function ParticleBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        background: { color: { value: 'transparent' } },
        fullScreen: { enable: false },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' } },
          modes: { repulse: { distance: 120 } }
        },
        particles: {
          color: { value: '#6a90ff' },
          links: { color: '#6a90ff', distance: 140, enable: true, opacity: 0.3, width: 1 },
          move: { enable: true, speed: 1, outModes: { default: 'out' } },
          number: { density: { enable: true, area: 800 }, value: 60 },
          opacity: { value: 0.4 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
      }}
      className="absolute inset-0 -z-10"
    />
  );
}