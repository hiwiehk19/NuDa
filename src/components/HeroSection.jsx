import { useEffect, useState } from 'react';
import { ChevronRight, Phone } from 'lucide-react';
import blackCoatedImage from '../assets/products/coated-black-warehouse.jpg';
import greenLaminatedImage from '../assets/products/green-laminated-stack.jpg';
import laminatedImage from '../assets/products/laminated-stacked-yellow-red.jpg';
import { trustItems } from '../data/siteContent';
import { Button } from './Button';

const heroSlides = [
  {
    image: greenLaminatedImage,
    label: 'Green laminated plywood',
    alt: 'Green laminated plywood sheets stacked in a warehouse',
    position: 'center center',
  },
  {
    image: blackCoatedImage,
    label: 'Black coated plywood',
    alt: 'Black coated plywood sheets stacked in a warehouse',
    position: '58% center',
  },
  {
    image: laminatedImage,
    label: 'Laminated plywood stock',
    alt: 'Yellow and red laminated plywood sheets stacked indoors',
    position: 'center center',
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative grid min-h-[720px] items-center px-5 pb-20 pt-48 text-white lg:px-[clamp(20px,5vw,72px)] lg:pt-[150px]" id="top">
      <div className="absolute inset-0 bg-brand-ink" aria-hidden="true" />

      <div className="absolute inset-y-0 right-0 h-full w-full overflow-hidden lg:w-[68%]" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <img
            className={`absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out ${
              index === activeSlide ? 'scale-100 opacity-100' : 'scale-[1.02] opacity-0'
            }`}
            src={slide.image}
            alt=""
            key={slide.label}
            style={{ objectPosition: slide.position }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#082136_0%,rgba(8,33,54,0.98)_34%,rgba(8,33,54,0.70)_52%,rgba(8,33,54,0.10)_80%),linear-gradient(180deg,rgba(6,29,45,0.02),rgba(6,29,45,0.42))]" aria-hidden="true" />

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

      <div className="absolute bottom-8 right-[clamp(20px,5vw,72px)] z-10 hidden rounded-lg border border-white/15 bg-brand-ink/70 px-4 py-3 text-sm font-extrabold text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-md lg:block">
        <span className="block text-xs uppercase tracking-[0.08em] text-brand-yellow">Showing</span>
        <span>{heroSlides[activeSlide].label}</span>
        <div className="mt-2 flex gap-1.5" aria-label="Hero image slide indicators">
          {heroSlides.map((slide, index) => (
            <button
              className={`h-1.5 rounded-full transition-all ${
                index === activeSlide ? 'w-6 bg-brand-yellow' : 'w-2 bg-white/45 hover:bg-white/75'
              }`}
              type="button"
              aria-label={`Show ${slide.label}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
              key={slide.label}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
