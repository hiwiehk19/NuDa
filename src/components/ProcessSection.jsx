import { Check } from 'lucide-react';
import materialReadinessImage from '../assets/products/orange-laminated-closeup.jpg';
import { processMetrics, processSteps } from '../data/siteContent';

export function ProcessSection() {
  return (
    <section className="grid items-center gap-8 bg-brand-navy bg-[linear-gradient(135deg,rgba(8,33,54,0.95),rgba(14,49,73,0.94))] px-5 py-14 text-white sm:gap-10 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[clamp(28px,5vw,72px)] lg:px-[clamp(20px,5vw,72px)] lg:py-28" id="process">
      <div className="grid gap-4">
        <div className="relative min-h-72 overflow-hidden rounded-lg border border-white/15 bg-brand-ink shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:min-h-80">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={materialReadinessImage}
            alt="Stacked laminated plywood sheets ready for construction supply"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,33,54,0.08),rgba(8,33,54,0.86))]" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-brand-yellow">Material readiness</p>
            <h3 className="mt-2 text-2xl font-black text-white">Project supply</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
              Laminated plywood stock prepared for contractors, builders, and wholesale construction orders.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          {processMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div className="flex items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/10 p-4 transition duration-200 hover:-translate-y-0.5 hover:bg-white/15 sm:gap-4 sm:p-[18px]" key={metric.label}>
                <Icon className="text-brand-yellow" size={20} aria-hidden="true" />
                <span className="flex-1 text-white/75">{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <p className="mb-3.5 text-xs font-black uppercase tracking-[0.08em] text-brand-yellow">
          How we help
        </p>
        <h2 className="mb-4 text-[clamp(1.9rem,9vw,3.9rem)] font-black leading-[1.04] tracking-normal sm:text-[clamp(2rem,3.8vw,3.9rem)]">
          From material request to dependable supply.
        </h2>
        <p className="text-base leading-7 text-white/75 sm:text-[1.04rem]">
          A simple supply process for coated plywood, laminated plywood, and wholesale construction material needs.
        </p>
        <ul className="mt-7 grid gap-4">
          {processSteps.map((item) => (
            <li className="grid grid-cols-[30px_1fr] items-start gap-3 leading-6 text-white/80" key={item}>
              <Check className="text-brand-yellow" size={18} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
