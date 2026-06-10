import { Check } from 'lucide-react';
import { processMetrics, processSteps } from '../data/siteContent';
import { PlywoodStack } from './PlywoodStack';

export function ProcessSection() {
  return (
    <section className="grid items-center gap-10 bg-brand-navy bg-[linear-gradient(135deg,rgba(8,33,54,0.95),rgba(14,49,73,0.94))] px-5 py-16 text-white lg:grid-cols-[1.15fr_0.85fr] lg:gap-[clamp(28px,5vw,72px)] lg:px-[clamp(20px,5vw,72px)] lg:py-28" id="process">
      <div className="grid gap-4">
        <div className="soft-shine relative min-h-80 overflow-hidden rounded-lg border border-white/15 bg-brand-ink bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6">
          <div className="flex items-center justify-between gap-4 text-white/75">
            <span>Material readiness</span>
            <strong className="text-xl font-black text-brand-yellow">Project supply</strong>
          </div>
          <PlywoodStack />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {processMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div className="flex items-center justify-between gap-4 rounded-lg border border-white/15 bg-white/10 p-[18px] transition duration-200 hover:-translate-y-0.5 hover:bg-white/15" key={metric.label}>
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
        <h2 className="mb-4 text-[clamp(2rem,3.8vw,3.9rem)] font-black leading-[1.02] tracking-normal">
          From material request to dependable supply.
        </h2>
        <p className="text-[1.04rem] leading-7 text-white/75">
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
