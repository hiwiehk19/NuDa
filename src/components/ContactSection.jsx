import { Phone } from 'lucide-react';
import { phoneNumbers } from '../data/siteContent';

export function ContactSection() {
  return (
    <section className="grid items-center gap-8 bg-[#eaf3f8] px-5 py-14 sm:gap-10 sm:py-16 lg:grid-cols-[1fr_minmax(280px,460px)] lg:px-[clamp(20px,5vw,72px)] lg:py-28" id="contact">
      <div className="max-w-[760px]">
        <p className="mb-3.5 text-xs font-black uppercase tracking-[0.08em] text-brand-yellow">
          Contact numbers
        </p>
        <h2 className="mb-4 text-[clamp(1.9rem,9vw,3.9rem)] font-black leading-[1.04] tracking-normal text-brand-ink sm:text-[clamp(2rem,3.8vw,3.9rem)]">
          Talk to Nu Da Trading.
        </h2>
        <p className="text-base leading-7 text-slate-600 sm:text-[1.04rem]">
         Call us for coated plywood, laminated plywood, and Film faced plywood wholesale construction material supply.
        </p>
      </div>

      <div className="grid gap-3">
        {phoneNumbers.map((number) => (
          <a className="flex min-h-14 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-base font-black text-brand-ink shadow-[0_14px_34px_rgba(20,58,78,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_42px_rgba(151,102,13,0.14)] sm:px-[18px] sm:text-lg" href={`tel:${number}`} key={number}>
            <Phone className="text-brand-blue" size={18} aria-hidden="true" />
            {number}
          </a>
        ))}
      </div>
    </section>
  );
}
