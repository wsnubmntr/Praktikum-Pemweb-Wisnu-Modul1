const navItems = ["Overview", "Collection", "Details", "Contact"];

const features = [
  {
    title: "Private guidance",
    text: "Tailored recommendations and thoughtful strategy for brands that value clarity, confidence, and calm execution.",
  },
  {
    title: "Design precision",
    text: "Every detail is composed with refined hierarchy, premium materials, and a focused, elevated visual language.",
  },
  {
    title: "Measured impact",
    text: "Clear objectives and transparent execution help translate ambition into memorable business growth.",
  },
];

const highlights = [
  { value: "8+", label: "Years of craft" },
  { value: "24", label: "Luxury launches" },
  { value: "92%", label: "Client retention" },
  { value: "4.9/5", label: "Experience score" },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We uncover your positioning, audience, and the emotional language that best represents your brand.",
  },
  {
    number: "02",
    title: "Define",
    text: "We shape a focused design direction that feels polished, premium, and unmistakably modern.",
  },
  {
    number: "03",
    title: "Deliver",
    text: "We turn strategy into a refined experience built for trust, attention, and conversion.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-[#f5f0ee]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-4 py-6 sm:py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f2b0b0]/30 bg-white/5">
              <svg viewBox="0 0 64 64" className="h-5 w-5 fill-none stroke-[#d94a4a]" aria-hidden="true">
                <rect x="11" y="11" width="42" height="42" rx="12" strokeWidth="2" />
                <path d="M18 40V22h28v18M26 22l6-10 6 10M23 32h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#f3e7e5]">
              Maison Étoile
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-[10px] font-medium uppercase tracking-[0.2em] text-[#e7dbd8]/75 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors duration-200 hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#b93131] to-[#db4444] px-4 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white shadow-[0_14px_30px_rgba(191,59,59,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(191,59,59,0.42)]"
          >
            Book a call
          </a>
        </header>

        <section id="overview" className="grid items-center gap-12 py-8 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#d47f7f]">
              Crafted for discerning brands
            </p>
            <h1 className="text-5xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Present your <span className="text-[#d94a4a]">next chapter</span> with clarity.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#e9dcd8]/72 sm:text-lg">
              We design polished digital experiences for brands that want to feel premium, confident,
              and unmistakably memorable from the very first impression.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#b93131] to-[#db4444] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white shadow-[0_16px_32px_rgba(191,59,59,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(191,59,59,0.35)]"
              >
                Schedule a call
              </a>
              <a
                href="#details"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.02] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#f8efee] transition-all duration-200 hover:border-[#df6a6a]/40 hover:bg-[#d94a4a]/5"
              >
                Explore the approach
              </a>
            </div>

            <div className="mt-10 flex w-full max-w-[420px] items-center justify-between gap-4 border-t border-white/10 pt-5">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#f5e9e7]">
                  Trusted by founders
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#e7d7d3]/60">
                  Global luxury ventures
                </p>
              </div>
              <div className="flex items-center gap-2">
                {[...Array(4)].map((_, idx) => (
                  <span
                    key={idx}
                    className="block h-2.5 w-2.5 rounded-full bg-gradient-to-b from-[#ef7f7f] to-[#972a2a] shadow-[0_0_0_4px_rgba(195,82,82,0.12)]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[500px] rounded-[28px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_35px_80px_rgba(0,0,0,0.45)] backdrop-blur-[2px]">
              <div className="mb-4 flex items-center gap-2 px-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d65757]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9c1b8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#7e7a79]" />
              </div>

              <div className="rounded-[22px] border border-white/10 bg-[#101112] p-4 sm:p-5">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-[#d95d5d]/35 bg-[#b93333]/10 px-2.5 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#f2d5d4]">
                    Edition 2026
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#eee6e4]/55">
                    Private preview
                  </span>
                </div>

                <div className="rounded-[20px] border border-white/5 bg-gradient-to-br from-[#b93131]/25 to-[#111214] p-4">
                  <div className="grid grid-cols-[1.2fr_0.8fr] gap-4">
                    <div className="relative min-h-[220px] overflow-hidden rounded-[16px] border border-white/6 bg-[#1a1b1c]/60">
                      <span className="absolute left-[18%] top-[30%] h-[2px] w-[58%] rounded-full bg-[#d95d5d]/80" />
                      <span className="absolute left-[49%] top-[18%] h-[54%] w-[2px] rounded-full bg-white/25" />
                      <span className="absolute bottom-[22%] left-[18%] h-[2px] w-[58%] rounded-full bg-white/30" />
                    </div>

                    <div className="flex flex-col justify-end">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#f1e3e0]/75">Maison Atelier</p>
                      <p className="mt-3 text-3xl font-semibold leading-none tracking-[-0.05em] text-white">
                        Signature
                        <br />
                        Collection
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#f0e6e4]/65">Engagement</p>
                    <p className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-white">76%</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#f0e6e4]/65">Conversion</p>
                    <p className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-white">3.4x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="collection" className="py-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#d47f7f]">
              Why it feels elevated
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
              Intentional strategy for a premium presence.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="group rounded-[24px] border border-white/10 bg-white/[0.02] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#d55a5a]/40 hover:bg-white/[0.035] hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#de7c7c]/25 bg-[#b93131]/10 text-[11px] font-medium uppercase tracking-[0.18em] text-[#f9d7d7]">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{feature.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#e8dcd8]/70">{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="details" className="py-8 sm:py-12">
          <div className="grid gap-4 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-[18px] border border-white/10 bg-white/[0.02] px-5 py-7 text-center">
                <p className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">{item.value}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#e9dcd8]/65">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#d47f7f]">
              A refined process
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
              Designed to move with elegance and precision.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-[24px] border border-white/10 bg-white/[0.02] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#d55a5a]/40 hover:bg-white/[0.035] hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#de7c7c]/25 bg-[#b93131]/10 text-[11px] font-medium uppercase tracking-[0.18em] text-[#f9d7d7]">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{step.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#e8dcd8]/70">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12 sm:py-16">
          <div className="flex flex-col gap-6 rounded-[28px] border border-[#d85b5b]/20 bg-gradient-to-r from-[#b93131]/18 to-[#111214] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#d47f7f]">
                Ready to present with confidence
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                Build a digital impression worthy of your brand.
              </h2>
            </div>

            <a
              href="mailto:hello@maison-etoile.com"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#b93131] to-[#db4444] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white shadow-[0_16px_32px_rgba(191,59,59,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(191,59,59,0.35)]"
            >
              Start your project
            </a>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-center text-[10px] uppercase tracking-[0.18em] text-[#efe7e5]/70 sm:flex-row sm:text-left">
          <span>Maison Étoile</span>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:justify-end">
            <a href="#overview" className="transition-colors duration-200 hover:text-white">Overview</a>
            <a href="#collection" className="transition-colors duration-200 hover:text-white">Collection</a>
            <a href="#contact" className="transition-colors duration-200 hover:text-white">Contact</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
