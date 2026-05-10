export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* NAV */}
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg tracking-tight">PriceLab</span>
        <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#79b8ff] transition-colors">Start Free Trial</a>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">No engineering team required</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          A/B Test Your Pricing Page<br />
          <span className="text-[#58a6ff]">Without Touching Code</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Create pricing variants visually, embed one script, and watch conversion data roll in. Built for founders who move fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] font-bold px-7 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-base">Get Started — $79/mo</a>
          <a href="#faq" className="border border-[#30363d] text-[#c9d1d9] font-medium px-7 py-3 rounded-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors text-base">See How It Works</a>
        </div>
        <p className="text-[#6e7681] text-sm mt-4">14-day free trial · No credit card required · Cancel anytime</p>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <div className="border-y border-[#21262d] bg-[#161b22] py-4 px-6">
        <p className="text-center text-[#6e7681] text-sm">
          Trusted by <span className="text-[#c9d1d9] font-semibold">400+ startups</span> · Avg. <span className="text-[#3fb950] font-semibold">+34% conversion lift</span> in first 30 days
        </p>
      </div>

      {/* FEATURES */}
      <section className="max-w-4xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-6">
        {[
          { icon: "🎨", title: "Visual Editor", desc: "Drag-and-drop pricing blocks. Change plans, prices, and CTAs in minutes." },
          { icon: "📊", title: "Live Analytics", desc: "Real-time conversion tracking per variant. Know which pricing wins." },
          { icon: "⚡", title: "One-Line Embed", desc: "Paste a single script tag. Works on any site — Webflow, WordPress, custom." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* PRICING CARD */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
          <h2 className="text-white font-bold text-xl mb-1">Growth</h2>
          <p className="text-[#8b949e] text-sm mb-4">Everything you need to optimize pricing</p>
          <div className="mb-6">
            <span className="text-5xl font-extrabold text-white">$79</span>
            <span className="text-[#8b949e] text-sm">/mo</span>
          </div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited A/B tests",
              "Up to 5 active variants",
              "Real-time conversion dashboard",
              "Visual pricing editor",
              "Embed on any website",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors">Start 14-Day Free Trial</a>
          <p className="text-[#6e7681] text-xs mt-3">No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-20">
        <h2 className="text-white text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Do I need to know how to code?",
              a: "Not at all. PriceLab is built for non-technical founders. You create variants in our visual editor and paste one script tag on your site — that's it."
            },
            {
              q: "How does the A/B testing work?",
              a: "Our embed script randomly shows visitors one of your pricing variants and tracks which version leads to more signups or purchases. Results appear in your dashboard in real time."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. No long-term contracts. Cancel from your account settings at any time and you won't be charged again."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#21262d] py-6 text-center text-[#6e7681] text-sm">
        <p>© {new Date().getFullYear()} PriceLab · <a href={checkoutUrl} className="text-[#58a6ff] hover:underline">Get Started</a></p>
      </footer>
    </main>
  );
}
