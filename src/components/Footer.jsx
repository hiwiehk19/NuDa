import { navLinks } from '../data/siteContent';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="grid items-center gap-6 bg-[#071a27] px-5 py-7 text-left text-white/70 lg:grid-cols-[auto_1fr_auto] lg:px-[clamp(20px,5vw,72px)]">
      <a className="brightness-125" href="#top" aria-label="Nu Da Trading PLC home">
        <Logo className="h-12" />
      </a>
      <p className="m-0 lg:text-center">Quality plywood supply for construction and building projects.</p>
      <div className="flex flex-wrap items-center gap-5 lg:justify-end">
        {navLinks.filter((link) => link.href !== '#process').map((link) => (
          <a className="transition hover:text-brand-yellow" href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
