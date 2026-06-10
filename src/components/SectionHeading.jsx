export function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="mb-3.5 text-xs font-black uppercase tracking-[0.08em] text-brand-yellow">
          {eyebrow}
        </p>
        <h2 className="text-[clamp(2rem,3.8vw,3.9rem)] font-black leading-[1.02] tracking-normal text-brand-ink">
          {title}
        </h2>
      </div>
      <p className="text-[1.04rem] leading-7 text-slate-600">{children}</p>
    </div>
  );
}
