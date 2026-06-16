import { commitments } from '../data/siteContent';

export function MissionSection() {
  return (
    <section className="grid gap-3 bg-slate-50 px-5 py-14 sm:gap-4 sm:py-16 lg:grid-cols-2 lg:px-[clamp(20px,5vw,72px)] lg:py-28" id="mission">
      {commitments.map((item) => {
        const Icon = item.icon;
        return (
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_18px_42px_rgba(20,58,78,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(20,58,78,0.12)] sm:min-h-80 sm:p-[clamp(28px,4vw,42px)]" key={item.title}>
            <Icon className="mb-5 text-brand-yellow sm:mb-7" size={28} aria-hidden="true" />
            <h2 className="mb-4 text-[clamp(1.7rem,8vw,3rem)] font-black leading-tight text-brand-ink sm:text-[clamp(1.8rem,3vw,3rem)]">
              {item.title}
            </h2>
            <p className="text-base leading-7 text-slate-600 sm:text-[1.04rem]">{item.text}</p>
          </article>
        );
      })}
    </section>
  );
}
