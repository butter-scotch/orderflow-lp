import { ArrowRight, Package, Clock, AlertCircle, ExternalLink, Users } from 'lucide-react';

// ── 差し替える箇所 ───────────────────────────────────────────
const GOOGLE_FORM_URL = 'https://forms.gle/b3uvChSz5cQTLMEw5'; // Google フォーム URL
const LINKEDIN_URL = 'https://www.linkedin.com/in/shoma-hashimoto/?locale=en-US'; // LinkedIn URL
const YOUR_NAME = 'Shoma Hashimoto'; // 表示名

// ウェイティングリスト人数（Google フォーム登録者が増えたらここを更新）
// ※ 実際の登録者数 + 3（初期シード値）を手動で更新する
const WAITLIST_COUNT = 3;
// ────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className='min-h-screen bg-white text-gray-900'>
      {/* Nav */}
      <nav className='flex items-center justify-between px-6 py-4 max-w-4xl mx-auto'>
        <span className='font-bold text-lg'>OrderFlow</span>
        <a
          href={GOOGLE_FORM_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm font-medium text-indigo-600 hover:underline'
        >
          Join waitlist →
        </a>
      </nav>

      {/* Hero */}
      <section className='px-6 pt-20 pb-16 max-w-3xl mx-auto text-center'>
        <h1 className='text-4xl sm:text-5xl font-extrabold leading-tight mb-6'>
          Stop managing jewelry orders in DMs.
        </h1>
        <p className='text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10'>
          Every custom order starts in Instagram DMs — size, material, budget, deadline — scattered
          across dozens of threads. You copy-paste into spreadsheets, miss messages, and lose
          customers.{' '}
          <span className='text-gray-900 font-semibold'>
            OrderFlow gives you one shareable link. Customers fill in the details. You manage
            everything in one place.
          </span>
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors'
        >
          Join waitlist — free forever
          <ArrowRight className='w-5 h-5' />
        </a>
        <p className='mt-3 text-sm text-gray-400'>No credit card. No spam. Free forever for early members.</p>

        {/* Waitlist counter */}
        <div className='mt-6 inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-2 rounded-full'>
          <Users className='w-4 h-4' />
          <span>{WAITLIST_COUNT} makers already on the waitlist</span>
        </div>
      </section>

      {/* Pain points */}
      <section className='bg-gray-50 py-16 px-6'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-2xl font-bold text-center mb-10'>Sound familiar?</h2>
          <div className='grid sm:grid-cols-3 gap-6'>
            {[
              {
                icon: <AlertCircle className='w-7 h-7 text-red-400 mb-3' />,
                title: 'Order details buried in DMs',
                desc: 'Stone type, ring size, engraving text — all in different threads. One missed message and the order is wrong.',
              },
              {
                icon: <Clock className='w-7 h-7 text-yellow-400 mb-3' />,
                title: 'Hours lost every week',
                desc: "Copying info into spreadsheets, chasing payments, sending status updates manually. That's time you could spend making.",
              },
              {
                icon: <Package className='w-7 h-7 text-blue-400 mb-3' />,
                title: 'No tool built for custom orders',
                desc: 'Calendly is for meetings. Etsy is a marketplace. Nothing handles intake → specs → payment → fulfillment in one flow.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className='bg-white rounded-xl p-6 shadow-sm border border-gray-100'>
                {icon}
                <h3 className='font-semibold mb-2'>{title}</h3>
                <p className='text-sm text-gray-500'>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className='py-16 px-6 max-w-3xl mx-auto'>
        <h2 className='text-2xl font-bold text-center mb-10'>How OrderFlow works</h2>
        <ol className='space-y-6'>
          {[
            {
              step: '1',
              title: 'Share your link',
              desc: 'Add your OrderFlow link to your Instagram bio. Customers tap it to start a custom order — no DM needed.',
            },
            {
              step: '2',
              title: 'Customers fill in the details',
              desc: 'Stone, size, budget, deadline, reference images — all captured in a structured form.',
            },
            {
              step: '3',
              title: 'Manage everything in one dashboard',
              desc: 'See all orders, update status, send a Stripe payment link, and draft replies with AI — in one place.',
            },
          ].map(({ step, title, desc }) => (
            <li key={step} className='flex gap-5'>
              <span className='flex-shrink-0 w-9 h-9 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm'>
                {step}
              </span>
              <div>
                <h3 className='font-semibold mb-1'>{title}</h3>
                <p className='text-gray-500 text-sm'>{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA 2 */}
      <section className='bg-indigo-50 py-16 px-6 text-center'>
        <h2 className='text-2xl font-bold mb-4'>Join free — no catch</h2>
        <p className='text-gray-600 mb-2 max-w-md mx-auto'>
          Early members get OrderFlow <span className='font-semibold text-indigo-700'>free forever</span>.
          We&apos;re building this with you, not for you.
        </p>
        <div className='inline-flex items-center gap-2 text-sm text-indigo-600 font-medium mb-8'>
          <Users className='w-4 h-4' />
          {WAITLIST_COUNT} makers already joined
        </div>
        <br />
        <a
          href={GOOGLE_FORM_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors'
        >
          Join waitlist — it&apos;s free
          <ArrowRight className='w-5 h-5' />
        </a>
        <p className='mt-3 text-sm text-gray-400'>No credit card. Cancel anytime.</p>
      </section>

      {/* Profile */}
      <section className='py-12 px-6 max-w-3xl mx-auto'>
        <div className='flex items-start gap-5 border border-gray-100 rounded-xl p-6 shadow-sm'>
          <div className='w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg flex-shrink-0'>
            {YOUR_NAME.charAt(0)}
          </div>
          <div>
            <p className='font-semibold'>{YOUR_NAME}</p>
            <p className='text-sm text-gray-500 mt-1'>
              Software engineer &amp; PM building tools for makers. Talking to custom jewelry
              artists to make sure I&apos;m solving the right problem — not guessing.
            </p>
            <a
              href={LINKEDIN_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline mt-2'
            >
              LinkedIn <ExternalLink className='w-3 h-3' />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='text-center text-xs text-gray-400 py-8'>
        © {new Date().getFullYear()} OrderFlow. Built for makers, by a maker.
      </footer>
    </main>
  );
}
