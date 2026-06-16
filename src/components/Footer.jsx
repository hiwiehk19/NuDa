import { navLinks } from '../data/siteContent';
import { Logo } from './Logo';

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/', mark: 'f' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', mark: 'in' },
  { label: 'YouTube', href: 'https://www.youtube.com/', mark: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="grid gap-6 bg-[#071a27] px-5 py-8 text-left text-sm text-white/70 sm:text-base lg:px-[clamp(20px,5vw,72px)]">
      <section className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <a className="brightness-125" href="#top" aria-label="Nu Da Trading PLC home">
          <Logo className="h-12" />
        </a>

        <div className="grid gap-3 lg:justify-items-center">
          <p className="m-0">Quality plywood supply for construction and building projects.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {navLinks.filter((link) => link.href !== '#process').map((link) => (
              <a className="transition hover:text-brand-yellow" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 lg:justify-end">
          {socialLinks.map((social) => (
            <a
              className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-xs font-black text-white/70 transition hover:-translate-y-0.5 hover:bg-brand-yellow hover:text-brand-ink"
              href={social.href}
              aria-label={social.label}
              key={social.label}
            >
              <span className={social.label === 'YouTube' ? 'text-[8px] leading-none' : ''} aria-hidden="true">
                {social.mark}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-3 border-t border-white/10 pt-5 lg:grid-cols-[minmax(220px,360px)_1fr] lg:items-center">
        <div>
          <h2 className="text-base font-black uppercase tracking-normal text-white">
            Subscribe to our newsletter
          </h2>
          <p className="mt-1 max-w-xl text-sm leading-6 text-white/55">
            Leave your email for product or pricelist inquiries. We will be in touch within 24 hours.
          </p>
        </div>

        <form className="grid gap-2 sm:grid-cols-[1fr_auto] lg:ml-auto lg:w-full lg:max-w-[520px]" action="mailto:nudatrading@example.com" method="post" encType="text/plain">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              className="min-h-11 rounded-lg border border-white/15 bg-white/10 px-4 text-sm font-bold text-white outline-none transition placeholder:text-white/40 focus:border-brand-yellow focus:bg-white/15"
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
            />
            <button className="min-h-11 rounded-lg bg-brand-yellow px-5 text-sm font-black uppercase text-brand-ink transition hover:-translate-y-0.5 hover:bg-white" type="submit">
              Subscribe
            </button>
          </form>
      </section>
    </footer>
  );
}
