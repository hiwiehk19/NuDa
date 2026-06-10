import { ArrowRight, Clock3, MapPin, Phone } from 'lucide-react';
import { navLinks } from '../data/siteContent';
import { Button } from './Button';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="animate-header-drop fixed inset-x-0 top-0 z-20 text-brand-ink shadow-[0_16px_42px_rgba(8,28,44,0.08)]">
      <div className="grid justify-center gap-1.5 bg-brand-ink px-4 py-1 text-center text-[11px] font-bold text-white/85 md:grid-cols-3 md:gap-6 md:text-xs">
        <span className="inline-flex items-center justify-center gap-2">
          <Phone className="text-brand-yellow" size={13} aria-hidden="true" />
          +251999777771
        </span>
        <span className="inline-flex items-center justify-center gap-2">
          <Clock3 className="text-brand-yellow" size={13} aria-hidden="true" />
          Wholesale construction material supply
        </span>
        <span className="inline-flex items-center justify-center gap-2">
          <MapPin className="text-brand-yellow" size={13} aria-hidden="true" />
          Kazanchis, Rediet Building, 3rd floor
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto] items-center gap-5 bg-white/95 px-4 py-1.5 backdrop-blur-xl lg:grid-cols-[auto_1fr_auto] lg:px-[clamp(20px,5vw,72px)]">
        <a href="#top" aria-label="Nu Da Trading PLC home">
          <Logo className="h-10 sm:h-11" />
        </a>

        <nav className="hidden items-center justify-center gap-6 text-sm font-extrabold text-slate-700 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a className="transition hover:text-brand-blue" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <a className="hidden font-extrabold text-brand-ink transition hover:text-brand-blue sm:inline" href="#location">
            Location
          </a>
          <Button className="min-h-8 px-3 text-sm shadow-none" href="tel:+251999777771">
            Call
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  );
}
