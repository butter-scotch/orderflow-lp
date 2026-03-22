import { ExternalLink, Users, ArrowRight } from 'lucide-react';
import WaitlistForm from './components/WaitlistForm';
import ContactForm from './components/ContactForm';

const GOOGLE_FORM_URL = 'https://forms.gle/b3uvChSz5cQTLMEw5';
const LINKEDIN_URL = 'https://www.linkedin.com/in/shoma-hashimoto/?locale=en-US';
const YOUR_NAME = 'Shoma Hashimoto';
const WAITLIST_COUNT = 3;

export default function Home() {
  return (
    <main className='min-h-screen bg-white text-gray-900 antialiased'>

      {/* ── Nav ── */}
      <nav className='flex items-center justify-between px-6 py-5 max-w-5xl mx-auto'>
        <span className='font-semibold text-base tracking-tight'>OrderFlow</span>
        <a
          href={GOOGLE_FORM_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm text-gray-500 hover:text-gray-900 transition-colors'
        >
          Take the survey →
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className='px-6 pt-16 pb-10 max-w-3xl mx-auto text-center'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase'>
          <span className='w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse' />
          Early access — free forever
        </div>

        <h1 className='text-5xl sm:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 text-gray-900'>
          Custom orders,<br />not DM chaos.
        </h1>

        <p className='text-lg text-gray-500 leading-relaxed max-w-xl mx-auto mb-8'>
          One link in your bio. Customers fill in every detail.
          You manage intake, status, and payments — all in one place.
        </p>

        {/* Waitlist form */}
        <div className='flex justify-center mb-4'>
          <WaitlistForm />
        </div>
        <p className='text-xs text-gray-400 mb-5'>No credit card. No spam.</p>

        {/* Counter */}
        <div className='inline-flex items-center gap-1.5 text-sm text-gray-400'>
          <Users className='w-4 h-4' />
          <span><span className='font-semibold text-gray-700'>{WAITLIST_COUNT} makers</span> already on the waitlist</span>
        </div>
      </section>

      {/* ── Product mockup ── */}
      <section className='px-6 pb-20 max-w-4xl mx-auto'>
        {/* Browser frame */}
        <div className='rounded-2xl border border-gray-200 shadow-2xl shadow-gray-100 overflow-hidden'>
          {/* Browser chrome */}
          <div className='bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2'>
            <span className='w-3 h-3 rounded-full bg-red-400' />
            <span className='w-3 h-3 rounded-full bg-yellow-400' />
            <span className='w-3 h-3 rounded-full bg-green-400' />
            <div className='flex-1 mx-4 bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-400 text-center'>
              app.orderflow.co/dashboard
            </div>
          </div>
          {/* Dashboard mockup */}
          <div className='bg-gray-50 p-4 sm:p-6'>
            <div className='flex gap-4'>
              {/* Sidebar */}
              <div className='hidden sm:flex flex-col gap-1 w-36 flex-shrink-0'>
                {['Dashboard', 'Orders', 'Customers', 'Settings'].map((item, i) => (
                  <div
                    key={item}
                    className={`text-xs px-3 py-2 rounded-lg font-medium ${i === 1 ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              {/* Main */}
              <div className='flex-1 space-y-3'>
                {/* Header */}
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-sm font-semibold text-gray-800'>Orders</span>
                  <span className='text-xs bg-indigo-600 text-white px-3 py-1 rounded-full font-medium'>+ New order link</span>
                </div>
                {/* Table */}
                <div className='bg-white rounded-xl border border-gray-200 overflow-hidden'>
                  <div className='grid grid-cols-4 text-xs font-medium text-gray-400 px-4 py-2.5 border-b border-gray-100'>
                    <span>Customer</span><span>Item</span><span>Status</span><span>Due</span>
                  </div>
                  {[
                    { name: 'Emma S.', item: 'Gold ring — 18k, size 7, "E+J"', status: 'In Progress', statusColor: 'bg-yellow-100 text-yellow-700', due: 'Mar 28' },
                    { name: 'Lena K.', item: 'Silver necklace — moon charm', status: 'New', statusColor: 'bg-blue-100 text-blue-700', due: 'Apr 3' },
                    { name: 'Sofia M.', item: 'Custom bracelet — 3 birthstones', status: 'Ready', statusColor: 'bg-green-100 text-green-700', due: 'Mar 25' },
                    { name: 'Hana T.', item: 'Earrings — rose quartz pair', status: 'Delivered', statusColor: 'bg-gray-100 text-gray-500', due: 'Mar 20' },
                  ].map((row) => (
                    <div key={row.name} className='grid grid-cols-4 text-xs px-4 py-3 border-b border-gray-50 last:border-0 items-center hover:bg-gray-50 transition-colors'>
                      <span className='font-medium text-gray-800'>{row.name}</span>
                      <span className='text-gray-500 truncate pr-2'>{row.item}</span>
                      <span className={`inline-flex w-fit px-2 py-0.5 rounded-full font-medium text-[11px] ${row.statusColor}`}>{row.status}</span>
                      <span className='text-gray-400'>{row.due}</span>
                    </div>
                  ))}
                </div>
                {/* AI chip */}
                <div className='bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-2.5 flex items-center gap-2'>
                  <span className='text-xs text-indigo-500 font-medium'>✦ AI draft</span>
                  <span className='text-xs text-gray-500 truncate'>"Hi Emma! Your ring is being crafted — expected by Mar 28. Here's your payment link…"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className='px-6 py-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto'>
          <p className='text-xs font-semibold tracking-widest text-indigo-500 uppercase text-center mb-3'>Why OrderFlow</p>
          <h2 className='text-3xl font-bold text-center mb-12'>Everything a maker needs.</h2>
          <div className='grid sm:grid-cols-3 gap-6'>
            {[
              {
                icon: '🔗',
                title: 'One link, all platforms',
                desc: 'Share a single URL on Instagram, X, Etsy, anywhere. Customers land on your intake form — no DM back-and-forth.',
              },
              {
                icon: '📋',
                title: 'End-to-end tracking',
                desc: 'From intake to delivery. Status updates, payment reminders, and deadline tracking — all in one dashboard.',
              },
              {
                icon: '✦',
                title: 'AI-drafted replies',
                desc: 'Generate a quote, status update, or follow-up in one click. Your voice, your tone — just faster.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className='bg-white rounded-2xl p-6 border border-gray-100'>
                <div className='text-2xl mb-4'>{icon}</div>
                <h3 className='font-semibold mb-2 text-gray-900'>{title}</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className='px-6 py-20 max-w-3xl mx-auto'>
        <p className='text-xs font-semibold tracking-widest text-indigo-500 uppercase text-center mb-3'>How it works</p>
        <h2 className='text-3xl font-bold text-center mb-12'>Set up in 2 minutes.</h2>
        <ol className='space-y-8'>
          {[
            { step: '01', title: 'Share your link', desc: 'Add your OrderFlow link to your bio. It works everywhere — Instagram, X, Linktree, Etsy.' },
            { step: '02', title: 'Customers fill in the details', desc: 'Stone, size, budget, deadline, reference images. Structured. Complete. No clarification DMs.' },
            { step: '03', title: 'You run the dashboard', desc: 'See every order at a glance. Update status, send a payment link, draft a reply with AI.' },
          ].map(({ step, title, desc }) => (
            <li key={step} className='flex gap-6'>
              <span className='flex-shrink-0 text-3xl font-black text-gray-100 w-12 text-right leading-none mt-1'>{step}</span>
              <div>
                <h3 className='font-semibold text-lg mb-1'>{title}</h3>
                <p className='text-gray-500 text-sm leading-relaxed'>{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── CTA ── */}
      <section className='px-6 py-20 bg-gray-900 text-white text-center'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-4'>Ready to stop the DM chaos?</h2>
        <p className='text-gray-400 mb-8 max-w-md mx-auto'>
          Early members get OrderFlow free forever. No catch.
        </p>
        <div className='flex justify-center mb-4'>
          <WaitlistForm dark />
        </div>
        <p className='text-xs text-gray-600'>
          Or{' '}
          <a href={GOOGLE_FORM_URL} target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white underline'>
            take our 2-min survey
          </a>{' '}
          to help us build the right thing.
        </p>
      </section>

      {/* ── Contact ── */}
      <section className='px-6 py-20 max-w-2xl mx-auto'>
        <p className='text-xs font-semibold tracking-widest text-indigo-500 uppercase text-center mb-3'>Contact</p>
        <h2 className='text-2xl font-bold text-center mb-2'>Have a question?</h2>
        <p className='text-sm text-gray-500 text-center mb-10'>I read every message and reply within 24 hours.</p>
        <ContactForm />
      </section>

      {/* ── Profile ── */}
      <section className='px-6 pb-16 max-w-2xl mx-auto'>
        <div className='flex items-start gap-4 border border-gray-100 rounded-2xl p-6'>
          <div className='w-11 h-11 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold flex-shrink-0'>
            {YOUR_NAME.charAt(0)}
          </div>
          <div>
            <p className='font-semibold text-sm'>{YOUR_NAME}</p>
            <p className='text-sm text-gray-500 mt-1 leading-relaxed'>
              Software engineer &amp; PM building tools for makers.
              Talking directly to custom jewelry artists to make sure
              I&apos;m solving the right problem — not guessing.
            </p>
            <a
              href={LINKEDIN_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1 text-xs text-indigo-500 hover:underline mt-2'
            >
              LinkedIn <ExternalLink className='w-3 h-3' />
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className='border-t border-gray-100 px-6 py-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4'>
        <span className='font-semibold text-sm'>OrderFlow</span>
        <p className='text-xs text-gray-400'>© {new Date().getFullYear()} OrderFlow. Built for makers, by a maker.</p>
        <a
          href={GOOGLE_FORM_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='text-xs text-gray-400 hover:text-gray-700 inline-flex items-center gap-1'
        >
          2-min survey <ArrowRight className='w-3 h-3' />
        </a>
      </footer>

    </main>
  );
}
