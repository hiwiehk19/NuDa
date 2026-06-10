export function Button({ children, href, variant = 'primary', className = '' }) {
  const variants = {
    primary:
      'border-brand-yellow bg-brand-yellow text-brand-ink shadow-[0_18px_34px_rgba(151,102,13,0.18)] hover:shadow-[0_22px_42px_rgba(151,102,13,0.22)]',
    secondary:
      'border-white/35 bg-white/10 text-white shadow-none backdrop-blur-md hover:bg-white/15',
  };

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2.5 rounded-lg border px-4 font-black transition duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}
