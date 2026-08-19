function Bottle({ liquid = "#c9a24b", cap = "#0f2e22" }) {
  return (
    <svg viewBox="0 0 220 380" className="h-full w-full">
      <defs>
        <linearGradient id={`glass-${liquid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id={`liquid-${liquid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={liquid} stopOpacity="0.9" />
          <stop offset="100%" stopColor={liquid} stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* cap */}
      <rect x="85" y="10" width="50" height="46" rx="4" fill={cap} />
      <rect x="85" y="10" width="50" height="46" rx="4" fill="none" stroke="#e6cd8a" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="95" y="52" width="30" height="10" fill={cap} />

      {/* neck */}
      <rect x="98" y="62" width="24" height="22" fill="#0000000a" />

      {/* body */}
      <path
        d="M70 84 Q70 84 70 100 L70 320 Q70 345 110 345 Q150 345 150 320 L150 100 Q150 84 150 84 Z"
        fill={`url(#liquid-${liquid})`}
        stroke="#e6cd8a"
        strokeWidth="1.2"
        strokeOpacity="0.7"
      />
      <path
        d="M70 84 Q70 84 70 100 L70 320 Q70 345 110 345 Q150 345 150 320 L150 100 Q150 84 150 84 Z"
        fill={`url(#glass-${liquid})`}
      />

      {/* label */}
      <rect x="84" y="180" width="52" height="60" rx="2" fill="none" stroke="#e6cd8a" strokeWidth="0.8" />
      <text x="110" y="200" textAnchor="middle" className="font-display" fontSize="13" fill="#e6cd8a" letterSpacing="1">
        TITAN
      </text>
      <text x="110" y="214" textAnchor="middle" className="font-display" fontSize="10" fill="#e6cd8a" letterSpacing="3">
        HEURE
      </text>
      <line x1="94" y1="222" x2="126" y2="222" stroke="#e6cd8a" strokeOpacity="0.5" strokeWidth="0.5" />
      <text x="110" y="234" fontSize="6" textAnchor="middle" fill="#e6cd8a" fillOpacity="0.7">
        50ml e.d.p.
      </text>
    </svg>
  );
}

function MovementDiagram() {
  const rings = [
    { r: 130, label: "TOP NOTES", sub: "Bergamot · Saffron · Pink Pepper", color: "#e6cd8a" },
    { r: 90, label: "HEART NOTES", sub: "Iris · Cedar · Amber", color: "#c9a24b" },
    { r: 50, label: "BASE NOTES", sub: "Oud · Vetiver · Musk", color: "#8a6f2e" },
  ];
  return (
    <svg viewBox="0 0 360 360" className="h-full w-full">
      <circle cx="180" cy="180" r="150" fill="none" stroke="#e6cd8a" strokeOpacity="0.15" strokeWidth="1" />
      {rings.map((r) => (
        <circle key={r.label} cx="180" cy="180" r={r.r} fill="none" stroke={r.color} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 3" />
      ))}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const x1 = 180 + 145 * Math.sin((angle * Math.PI) / 180);
        const y1 = 180 - 145 * Math.cos((angle * Math.PI) / 180);
        const x2 = 180 + 152 * Math.sin((angle * Math.PI) / 180);
        const y2 = 180 - 152 * Math.cos((angle * Math.PI) / 180);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#e6cd8a" strokeOpacity="0.35" strokeWidth={i % 6 === 0 ? 2 : 1} />;
      })}
      <circle cx="180" cy="180" r="8" fill="#c9a24b" />
    </svg>
  );
}

export default function Home() {
  const collection = [
    { name: "Gold Hour", liquid: "#c9a24b", note: "Bergamot, amber, warm cedar", price: "₹3,450" },
    { name: "Midnight Hour", liquid: "#3a2e6e", note: "Oud, iris, black pepper", price: "₹3,850" },
    { name: "Rose Hour", liquid: "#b5626b", note: "Pink pepper, rose, soft musk", price: "₹3,650" },
  ];

  const features = [
    { title: "Precision-Blended Accords", desc: "Each formula is calibrated to a fixed ratio, batch after batch — no drift, no inconsistency." },
    { title: "Hand-Finished Glass", desc: "Every bottle is individually inspected and numbered before it leaves the atelier." },
    { title: "12-Hour Wear, Verified", desc: "Longevity-tested to hold through a full day, engineered like a movement built to run." },
    { title: "90-Day Scent Guarantee", desc: "If it doesn't suit you, return it within 90 days for a full refund — no questions asked." },
  ];

  const testimonials = [
    { quote: "It genuinely smells like nothing else I own. Gold Hour gets compliments every single time.", name: "Ananya R." },
    { quote: "The bottle alone looks like it belongs on a dresser in a much more expensive house.", name: "Vikram S." },
    { quote: "Midnight Hour lasted through an entire wedding, no reapplication needed.", name: "Meher K." },
  ];

  const faqs = [
    { q: "Is this an official Titan Company product?", a: "This is a concept project built for an educational internship assignment — it is not an official Titan Company Limited product." },
    { q: "Is it suitable for sensitive skin?", a: "Formulated without common irritants, but as with any fragrance, patch-test before full application." },
    { q: "Where does it ship?", a: "Concept only for this project — no real shipping is available." },
  ];

  return (
    <main className="min-h-screen font-body" style={{ background: "var(--emerald-deep)", color: "var(--ivory)" }}>
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(8,28,21,0.92)", backdropFilter: "blur(6px)" }}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-display text-2xl tracking-[0.15em]" style={{ color: "var(--gold-soft)" }}>
            TITAN HEURE
          </span>
          <a href="#collection" className="rounded-full border px-6 py-2 font-display text-sm tracking-wide" style={{ borderColor: "var(--gold)", color: "var(--gold-soft)" }}>
            Discover the Collection
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-36" style={{ background: "radial-gradient(circle at 70% 30%, #16402f 0%, #081c15 65%)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 font-display text-sm italic tracking-widest" style={{ color: "var(--gold-soft)" }}>
              A Watchmaker&apos;s First Fragrance House
            </p>
            <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl">
              A Fragrance,
              <br />
              Engineered <span style={{ color: "var(--gold-soft)" }}>Like Time.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: "#cfe3d8" }}>
              TITAN HEURE brings a century of precision engineering to scent —
              every accord calibrated, every bottle numbered, built to endure
              the way a fine movement endures.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#collection" className="rounded-full px-8 py-3.5 text-center font-display tracking-wide" style={{ background: "var(--gold)", color: "#0f2e22" }}>
                Shop the Collection
              </a>
              <a href="#movement" className="rounded-full border px-8 py-3.5 text-center font-display tracking-wide" style={{ borderColor: "var(--gold)", color: "var(--gold-soft)" }}>
                The Fragrance Movement
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-80 w-52 sm:h-96 sm:w-64">
              <Bottle liquid="#c9a24b" cap="#0f2e22" />
            </div>
          </div>
        </div>
      </section>

      {/* MOVEMENT DIAGRAM */}
      <section id="movement" className="px-6 py-24" style={{ background: "var(--emerald)" }}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-sm italic tracking-widest" style={{ color: "var(--gold-soft)" }}>
            THE FRAGRANCE MOVEMENT
          </p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl">
            Built in Three Layers, Like a Watch.
          </h2>
          <p className="mx-auto mt-4 max-w-lg" style={{ color: "#cfe3d8" }}>
            Every TITAN HEURE scent unfolds the way a fine movement runs —
            top notes for the first moment, heart notes that carry the day,
            base notes that stay long after.
          </p>
          <div className="mx-auto mt-10 h-80 w-80 sm:h-96 sm:w-96">
            <MovementDiagram />
          </div>
          <div className="mx-auto mt-8 grid max-w-xl gap-4 text-left sm:grid-cols-3">
            <div>
              <p className="font-display text-lg" style={{ color: "#e6cd8a" }}>Top</p>
              <p className="text-xs" style={{ color: "#cfe3d8" }}>Bergamot · Saffron · Pink Pepper</p>
            </div>
            <div>
              <p className="font-display text-lg" style={{ color: "#c9a24b" }}>Heart</p>
              <p className="text-xs" style={{ color: "#cfe3d8" }}>Iris · Cedar · Amber</p>
            </div>
            <div>
              <p className="font-display text-lg" style={{ color: "#8a6f2e" }}>Base</p>
              <p className="text-xs" style={{ color: "#cfe3d8" }}>Oud · Vetiver · Musk</p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="px-6 py-24" style={{ background: "var(--ivory)", color: "var(--ink)" }}>
        <div className="mx-auto max-w-6xl">
          <p className="text-center font-display text-sm italic tracking-widest" style={{ color: "#8a6f2e" }}>
            THE COLLECTION
          </p>
          <h2 className="mt-2 text-center font-display text-4xl sm:text-5xl">
            Three Hours. One Standard.
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {collection.map((c) => (
              <div key={c.name} className="rounded-2xl border p-6 text-center" style={{ borderColor: "#c9a24b55" }}>
                <div className="mx-auto h-56 w-36">
                  <Bottle liquid={c.liquid} cap="#0f2e22" />
                </div>
                <h3 className="mt-4 font-display text-xl">{c.name}</h3>
                <p className="mt-2 text-sm" style={{ color: "#5a5646" }}>{c.note}</p>
                <p className="mt-4 font-display text-lg" style={{ color: "#8a6f2e" }}>{c.price}</p>
                <button className="mt-4 w-full rounded-full py-2.5 font-display text-sm tracking-wide text-white" style={{ background: "#0f2e22" }}>
                  Add to Bag
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-24" style={{ background: "var(--emerald)" }}>
        <div className="mx-auto max-w-6xl">
          <p className="text-center font-display text-sm italic tracking-widest" style={{ color: "var(--gold-soft)" }}>
            WHY IT&apos;S DIFFERENT
          </p>
          <h2 className="mt-2 text-center font-display text-4xl sm:text-5xl">
            Made Like a Watch. Worn Like a Scent.
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border p-6" style={{ borderColor: "#c9a24b33" }}>
                <div className="mb-3 h-8 w-8 rounded-full border" style={{ borderColor: "var(--gold)" }} />
                <h3 className="font-display text-lg">{f.title}</h3>
                <p className="mt-2 text-sm" style={{ color: "#cfe3d8" }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border p-6 sm:flex-row" style={{ borderColor: "var(--gold)" }}>
            <div>
              <p className="font-display text-sm italic tracking-widest" style={{ color: "var(--gold-soft)" }}>
                CERTIFICATE OF COMPOSITION
              </p>
              <p className="mt-1 font-display text-xl">Batch TH-2026-014 — Perfumer Verified</p>
              <p className="mt-1 text-sm" style={{ color: "#cfe3d8" }}>Accord ratio calibrated · Longevity tested to 12hrs</p>
            </div>
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border font-display text-xs" style={{ borderColor: "var(--gold)", color: "var(--gold-soft)" }}>
              ✓ Verified
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24" style={{ background: "var(--ivory)", color: "var(--ink)" }}>
        <div className="mx-auto max-w-6xl">
          <p className="text-center font-display text-sm italic tracking-widest" style={{ color: "#8a6f2e" }}>
            FROM THE HOUSE&apos;S CLIENTS
          </p>
          <h2 className="mt-2 text-center font-display text-4xl sm:text-5xl">
            People Return Within a Season.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border p-6" style={{ borderColor: "#c9a24b55" }}>
                <p className="font-display text-lg italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-5 text-sm" style={{ color: "#5a5646" }}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24" style={{ background: "var(--emerald)" }}>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-4xl sm:text-5xl">Before You Ask</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b pb-6" style={{ borderColor: "#c9a24b33" }}>
                <p className="font-display text-lg">{f.q}</p>
                <p className="mt-2 text-sm" style={{ color: "#cfe3d8" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24" style={{ background: "radial-gradient(circle at 30% 30%, #16402f 0%, #081c15 70%)" }}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm italic tracking-widest" style={{ color: "var(--gold-soft)" }}>
            RESERVE YOUR HOUR
          </p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl">
            Every Great Scent Begins With a Moment.
          </h2>
          <p className="mt-4" style={{ color: "#cfe3d8" }}>
            Founding Collection is limited to 500 numbered bottles per scent.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-full border bg-transparent px-5 py-3 text-sm outline-none"
              style={{ borderColor: "var(--gold)", color: "var(--ivory)" }}
            />
            <button type="submit" className="whitespace-nowrap rounded-full px-6 py-3 font-display tracking-wide" style={{ background: "var(--gold)", color: "#0f2e22" }}>
              Notify Me
            </button>
          </form>
          <p className="mt-3 text-xs" style={{ color: "#cfe3d8" }}>No payment today. We&apos;ll email you at launch.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8" style={{ background: "var(--emerald-deep)" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs sm:flex-row" style={{ color: "#8fae9e" }}>
          <span className="font-display tracking-widest" style={{ color: "var(--gold-soft)" }}>TITAN HEURE</span>
          <p>Concept project for an educational internship assignment. Not an official Titan Company Limited product.</p>
        </div>
      </footer>
    </main>
  );
}
