import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return alert('Please fill all fields.');
    setStatus('sending');
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      await emailjs.send(serviceId, templateId, form, { publicKey });
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-responsive">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <form onSubmit={onSubmit} className="glass p-6 grid gap-4 max-w-2xl">
          <input className="px-4 py-2 rounded bg-white/5 border border-white/10" name="name" placeholder="Name" value={form.name} onChange={onChange} />
          <input className="px-4 py-2 rounded bg-white/5 border border-white/10" name="email" placeholder="Email" type="email" value={form.email} onChange={onChange} />
          <textarea className="px-4 py-2 rounded bg-white/5 border border-white/10 min-h-[120px]" name="message" placeholder="Message" value={form.message} onChange={onChange} />
          <div className="flex items-center gap-3">
            <button disabled={status === 'sending'} className="px-5 py-2 rounded bg-primary-600 hover:bg-primary-500 disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send'}</button>
            {status === 'sent' && <span className="text-green-400">Sent successfully!</span>}
            {status === 'error' && <span className="text-red-400">Failed to send.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}