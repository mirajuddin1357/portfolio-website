import { profile } from '@data/profile';

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="container-responsive">
        <div className="glass p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="font-semibold">{profile.name}</div>
            <div className="text-slate-400 text-sm">Peshawar, Pakistan</div>
          </div>
          <div className="flex gap-4">
            {profile.social.github && <a href={profile.social.github} target="_blank" rel="noreferrer">GitHub</a>}
            {profile.social.linkedin && <a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
            {profile.social.twitter && <a href={profile.social.twitter} target="_blank" rel="noreferrer">Twitter</a>}
            {profile.social.medium && <a href={profile.social.medium} target="_blank" rel="noreferrer">Medium</a>}
            {profile.social.whatsapp && <a href={profile.social.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>}
          </div>
        </div>
        <div className="py-6 text-sm text-slate-500 text-center">© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}