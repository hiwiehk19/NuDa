import { Check } from 'lucide-react';
import { productCards, serviceHighlights } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

export function ProductsSection() {
  return (
    <section className="px-5 py-16 lg:px-[clamp(20px,5vw,72px)] lg:py-28" id="products">
      <SectionHeading eyebrow="What we supply" title="Premium plywood for modern construction.">
        At Nu Da Trading, we specialize in supplying premium plywood designed to meet the demands of modern construction.
        Our products are carefully selected to ensure durability, strength, and reliability.
      </SectionHeading>

      <div className="grid gap-4 lg:grid-cols-3">
        {productCards.map((feature) => {
          const Icon = feature.icon;
          return (
            <article className="min-h-64 rounded-lg border border-slate-200 bg-white p-7 shadow-[0_18px_42px_rgba(20,58,78,0.06)] transition duration-200 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_24px_54px_rgba(20,58,78,0.1)]" key={feature.title}>
              <Icon className="mb-8 text-brand-blue" size={28} aria-hidden="true" />
              <h3 className="mb-3 text-lg font-black text-brand-ink">{feature.title}</h3>
              <p className="leading-7 text-slate-600">{feature.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-8 grid gap-px bg-slate-200 lg:grid-cols-3" aria-label="Service highlights">
        {serviceHighlights.map((item) => (
          <span className="flex min-h-[72px] items-center gap-2.5 bg-slate-50 p-[18px] font-extrabold leading-snug text-brand-ink transition duration-200 hover:-translate-y-0.5 hover:bg-white" key={item}>
            <Check className="shrink-0 text-brand-blue" size={17} aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
