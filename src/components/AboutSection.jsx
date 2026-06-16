import { clients } from '../data/siteContent';

export function AboutSection() {
  return (
    <section className="relative z-10 grid gap-8 bg-white px-5 py-14 sm:gap-10 sm:py-16 lg:grid-cols-[1fr_minmax(260px,430px)] lg:items-center lg:bg-[linear-gradient(90deg,#fff_0%,#fff_58%,#f5f7f8_58%,#f5f7f8_100%)] lg:px-[clamp(20px,5vw,72px)] lg:py-28" id="about">
      <div className="max-w-[820px]">
        <p className="mb-3.5 text-xs font-black uppercase tracking-[0.08em] text-brand-yellow">
          About Nu Da Trading PLC
        </p>
        <h2 className="mb-4 text-[clamp(1.9rem,9vw,3.9rem)] font-black leading-[1.04] tracking-normal text-brand-ink sm:text-[clamp(2rem,3.8vw,3.9rem)]">
          A dependable partner for construction materials.
        </h2>
        <p className="text-base leading-7 text-slate-600 sm:text-[1.04rem]">
          Whether you are a contractor, builder, or construction company, we provide dependable materials that help
          bring your projects to life. With a focus on quality, timely supply, and customer satisfaction, Nu Da Trading
          is committed to supporting the success of every construction project.
        </p>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-[1.04rem]">
          When you choose Nu Da Trading, you are choosing quality materials and a partner you can trust.
        </p>
      </div>

      <div className="rounded-lg border border-white/15 bg-brand-navy p-5 text-white shadow-[0_24px_60px_rgba(20,58,78,0.12)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(20,58,78,0.12)] sm:p-7">
        <h3 className="mb-3 text-lg font-black">Serving professionals who build</h3>
        <div className="mt-5 grid gap-2.5 sm:mt-6">
          {clients.map((client) => (
            <span className="rounded-lg bg-white/10 px-4 py-3.5 font-extrabold text-white/90 transition duration-200 hover:translate-x-1 hover:bg-white/15" key={client}>
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
