'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

// ← 自分のメールアドレスに差し替える（Formsubmit.co が最初の登録時に確認メールを送ります）
const FORMSUBMIT_EMAIL = 'shoma.hashimoto.34@gmail.com';

export default function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          _subject: 'New OrderFlow Waitlist Signup',
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
      <div className='inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-4 rounded-lg font-medium text-sm'>
        <CheckCircle className='w-5 h-5 flex-shrink-0' />
        You&apos;re on the list! We&apos;ll be in touch when it&apos;s ready.
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
        <input
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='your@email.com'
          className={`flex-1 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 border ${dark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'border-gray-200 bg-white text-gray-900'}`}
        />
        <button
          type='submit'
          disabled={status === 'loading'}
          className='inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap'
        >
          {status === 'loading' ? 'Joining...' : 'Join free'}
          {status !== 'loading' && <ArrowRight className='w-4 h-4' />}
        </button>
      </form>
      {status === 'error' && (
        <p className='mt-2 text-sm text-red-500'>Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
