export function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-8 grid items-end gap-4 sm:mb-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
      <div>
        <p className="mb-3 text-xs font-black uppercase tracking-[0.08em] text-brand-yellow sm:mb-3.5">
          {eyebrow}
        </p>
        <h2 className="text-[clamp(1.9rem,9vw,3.9rem)] font-black leading-[1.04] tracking-normal text-brand-ink sm:text-[clamp(2rem,3.8vw,3.9rem)]">
          {title}
        </h2>
      </div>
      <p className="text-base leading-7 text-slate-600 sm:text-[1.04rem]">{children}</p>
    </div>
  );
}
