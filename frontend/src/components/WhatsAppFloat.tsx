import { profile } from '@data/profile';

export default function WhatsAppFloat() {
  if (!profile.social.whatsapp) return null;
  return (
    <a
      href={profile.social.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-green-500 hover:bg-green-400 text-white flex items-center justify-center shadow-lg"
      aria-label="Chat on WhatsApp"
    >
      WA
    </a>
  );
}