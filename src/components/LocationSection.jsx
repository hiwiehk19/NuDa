import { MapPin } from 'lucide-react';
import { Button } from './Button';

export function LocationSection() {
  return (
    <section className="grid items-center gap-6 bg-white px-5 py-14 sm:gap-7 sm:py-16 lg:grid-cols-[1fr_auto] lg:px-[clamp(20px,5vw,72px)] lg:py-28" id="location">
      <div className="max-w-[820px]">
        <p className="mb-3.5 text-xs font-black uppercase tracking-[0.08em] text-brand-yellow">
          Office location
        </p>
        <h2 className="mb-4 text-[clamp(1.9rem,9vw,3.9rem)] font-black leading-[1.04] tracking-normal text-brand-ink sm:text-[clamp(2rem,3.8vw,3.9rem)]">
          Kazanchis, Rediet Building
        </h2>
        <p className="text-base leading-7 text-slate-600 sm:text-[1.04rem]">
          Visit Nu Da Trading PLC at Kazanchis Rediet Building, 3rd floor, Addis Ababa.
        </p>
      </div>
      <Button className="w-full sm:w-auto" href="https://maps.google.com/?q=Kazanchis%20Rediet%20Building%20Addis%20Ababa">
        Open map
        <MapPin size={18} aria-hidden="true" />
      </Button>
    </section>
  );
}
