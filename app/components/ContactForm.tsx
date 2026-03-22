'use client';

import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

const FORMSUBMIT_EMAIL = 'shoma.hashimoto.34@gmail.com';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `OrderFlow Contact: ${form.name}`,
          _captcha: 'false',
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className='flex items-center gap-3 bg-green-50 text-green-700 px-6 py-5 rounded-xl font-medium'>
        <CheckCircle className='w-5 h-5 flex-shrink-0' />
        Message sent! I&apos;ll get back to you within 24 hours.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='grid sm:grid-cols-2 gap-4'>
        <input
          type='text'
          required
          placeholder='Your name'
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className='px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
        <input
          type='email'
          required
          placeholder='your@email.com'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className='px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
      </div>
      <textarea
        required
        rows={4}
        placeholder='What would you like to say?'
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className='w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none'
      />
      {status === 'error' && (
        <p className='text-sm text-red-500'>Something went wrong. Please try again.</p>
      )}
      <button
        type='submit'
        disabled={status === 'loading'}
        className='inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm'
      >
        <Send className='w-4 h-4' />
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}
