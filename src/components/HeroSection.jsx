import { ChevronRight, Phone } from 'lucide-react';
import heroImage from '../assets/products/green-coated-large-stack.jpg';
import { trustItems } from '../data/siteContent';
import { Button } from './Button';

export function HeroSection() {
  return (
    <section className="relative grid min-h-[720px] items-center px-5 pb-20 pt-48 text-white lg:px-[clamp(20px,5vw,72px)] lg:pt-[150px]" id="top">
      <div className="absolute inset-0 bg-brand-ink" aria-hidden="true" />
      <img
        className="animate-hero-settle absolute inset-y-0 right-0 h-full w-full object-cover object-center lg:w-[68%] lg:object-[50%_center]"
        src={heroImage}
        alt="Large stacks of green coated plywood in a warehouse"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#082136_0%,rgba(8,33,54,0.98)_34%,rgba(8,33,54,0.72)_52%,rgba(8,33,54,0.18)_78%),linear-gradient(180deg,rgba(6,29,45,0.02),rgba(6,29,45,0.46))]" aria-hidden="true" />

      <div className="animate-fade-up relative z-10 w-full max-w-[640px]">
        <p className="mb-3.5 text-xs font-black uppercase tracking-[0.08em] text-brand-yellow">
          Wholesale construction materials
        </p>
        <h1 className="mb-5 max-w-[760px] text-[clamp(2.8rem,6vw,6.1rem)] font-black leading-[0.96] tracking-normal">
          Trusted Materials. Honest Business.
        </h1>
        <p className="max-w-[650px] text-[clamp(1.05rem,2vw,1.28rem)] leading-7 text-white/85">
          Nu Da Trading PLC supplies premium coated and laminated plywood for contractors, builders, and construction
          companies that need dependable materials for modern building projects.
        </p>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <Button href="tel:+251999777771">
            Call Nu Da Trading
            <Phone size={18} aria-hidden="true" />
          </Button>
          <Button href="#products" variant="secondary">
            View plywood products
            <ChevronRight size={18} aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-3.5 text-white/80" aria-label="Company highlights">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <span className="inline-flex items-center gap-2" key={item.label}>
                <Icon size={16} aria-hidden="true" />
                {item.label}
              </span>
            );
          })}
        </div>
      </div>

    </section>
  );
}
