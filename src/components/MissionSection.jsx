import { commitments } from '../data/siteContent';

export function MissionSection() {
  return (
    <section className="grid gap-4 bg-slate-50 px-5 py-16 lg:grid-cols-2 lg:px-[clamp(20px,5vw,72px)] lg:py-28" id="mission">
      {commitments.map((item) => {
        const Icon = item.icon;
        return (
          <article className="min-h-80 rounded-lg border border-slate-200 bg-white p-[clamp(28px,4vw,42px)] shadow-[0_18px_42px_rgba(20,58,78,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(20,58,78,0.12)]" key={item.title}>
            <Icon className="mb-7 text-brand-yellow" size={28} aria-hidden="true" />
            <h2 className="mb-4 text-[clamp(1.8rem,3vw,3rem)] font-black leading-tight text-brand-ink">
              {item.title}
            </h2>
            <p className="text-[1.04rem] leading-7 text-slate-600">{item.text}</p>
          </article>
        );
      })}
    </section>
  );
}
