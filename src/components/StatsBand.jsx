import { productStats } from '../data/siteContent';

export function StatsBand() {
  return (
    <section className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4" aria-label="Nu Da Trading highlights">
      {productStats.map((item, index) => (
        <article
          className="animate-fade-up bg-white px-5 py-5 sm:px-[clamp(18px,3vw,36px)] sm:py-6"
          key={item.label}
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <span className="text-xs font-black uppercase text-slate-500">{item.label}</span>
          <strong className="mt-2 block text-[clamp(1.2rem,6vw,1.65rem)] font-black text-brand-ink sm:mt-2.5 sm:text-[clamp(1.25rem,2vw,1.65rem)]">
            {item.value}
          </strong>
        </article>
      ))}
    </section>
  );
}
