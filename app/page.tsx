import { ArrowRight, Package, Clock, AlertCircle, ExternalLink } from "lucide-react";

// ── 差し替える3箇所 ──────────────────────────────────────────
const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_ID"; // Google フォーム URL
const LINKEDIN_URL    = "https://linkedin.com/in/YOUR_PROFILE"; // LinkedIn URL
const YOUR_NAME       = "Your Name"; // 表示名
// ────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-4xl mx-auto">
        <span className="font-bold text-lg">OrderFlow</span>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          Join waitlist →
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          Stop managing jewelry orders in DMs.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          Every custom order starts in Instagram DMs — size, material, budget,
          deadline — scattered across dozens of threads.
          You copy-paste into spreadsheets, miss messages, and lose customers.{" "}
          <span className="text-gray-900 font-semibold">
            OrderFlow gives you one shareable link. Customers fill in the details.
            You manage everything in one place.
          </span>
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Join waitlist — it&apos;s free
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-3 text-sm text-gray-400">No credit card. No spam. Early access is free.</p>
      </section>

      {/* Pain points */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Sound familiar?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <AlertCircle className="w-7 h-7 text-red-400 mb-3" />,
                title: "Order details buried in DMs",
                desc: "Stone type, ring size, engraving text — all in different threads. One missed message and the order is wrong.",
              },
              {
                icon: <Clock className="w-7 h-7 text-yellow-400 mb-3" />,
                title: "Hours lost every week",
                desc: "Copying info into spreadsheets, chasing payments, sending status updates manually. That's time you could spend making.",
              },
              {
                icon: <Package className="w-7 h-7 text-blue-400 mb-3" />,
                title: "No tool built for custom orders",
                desc: "Calendly is for meetings. Etsy is a marketplace. Nothing handles intake → specs → payment → fulfillment in one flow.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                {icon}
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">How OrderFlow works</h2>
        <ol className="space-y-6">
          {[
            {
              step: "1",
              title: "Share your link",
              desc: "Add your OrderFlow link to your Instagram bio. Customers tap it to start a custom order — no DM needed.",
            },
            {
              step: "2",
              title: "Customers fill in the details",
              desc: "Stone, size, budget, deadline, reference images — all captured in a structured form.",
            },
            {
              step: "3",
              title: "Manage everything in one dashboard",
              desc: "See all orders, update status, send a Stripe payment link, and draft replies with AI — in one place.",
            },
          ].map(({ step, title, desc }) => (
            <li key={step} className="flex gap-5">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm">
                {step}
              </span>
              <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA 2 */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Get early access — free</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Join the waitlist. The first 50 makers get lifetime 50% off.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Join waitlist
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      {/* Profile */}
      <section className="py-12 px-6 max-w-3xl mx-auto">
        <div className="flex items-start gap-5 border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg flex-shrink-0">
            {YOUR_NAME.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{YOUR_NAME}</p>
            <p className="text-sm text-gray-500 mt-1">
              Software engineer &amp; PM building tools for makers.
              Talking to custom jewelry artists to make sure I&apos;m solving
              the right problem — not guessing.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline mt-2"
            >
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-8">
        © {new Date().getFullYear()} OrderFlow. Built for makers, by a maker.
      </footer>

    </main>
  );
}
