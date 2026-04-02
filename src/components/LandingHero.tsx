export function LandingHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-amber-200/20 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.2),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(251,191,36,0.22),transparent_33%),linear-gradient(135deg,#0b1320,#111827_50%,#172436)] p-8 sm:p-10">
      <div className="absolute -bottom-20 right-[-60px] h-56 w-56 rounded-full bg-amber-300/15 blur-3xl" aria-hidden="true" />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/80">
            Tessa Literary and Debating Society
          </p>
          <h1 className="font-heading text-3xl leading-tight text-white sm:text-5xl">
            2026 Recruitment Application
          </h1>
          <p className="text-sm leading-relaxed text-slate-200/90 sm:text-base">
            Join a high-discipline community of thinkers, writers, and speakers.
            Submit your application, complete payment, and upload proof for review.
          </p>
        </div>
        <div className="rounded-2xl border border-amber-200/30 bg-slate-900/40 p-4 backdrop-blur">
          <img
            className="h-20 w-20 object-contain"
            src="/assets/logo-placeholder.svg"
            alt="Tessa Literary and Debating Society placeholder logo"
          />
        </div>
      </div>
    </section>
  )
}
