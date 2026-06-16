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
    <section className="relative grid min-h-[660px] items-end px-5 pb-14 pt-34 text-white sm:min-h-[700px] sm:items-center sm:pb-20 sm:pt-44 lg:min-h-[720px] lg:px-[clamp(20px,5vw,72px)] lg:pt-[150px]" id="top">
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

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,33,54,0.56)_0%,rgba(8,33,54,0.34)_28%,rgba(8,33,54,0.92)_74%,#082136_100%)] sm:bg-[linear-gradient(90deg,#082136_0%,rgba(8,33,54,0.98)_34%,rgba(8,33,54,0.70)_52%,rgba(8,33,54,0.10)_80%),linear-gradient(180deg,rgba(6,29,45,0.02),rgba(6,29,45,0.42))]" aria-hidden="true" />

      <div className="animate-fade-up relative z-10 w-full max-w-[640px]">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.08em] text-brand-yellow sm:mb-3.5">
          Wholesale construction materials
        </p>
        <h1 className="mb-4 max-w-[760px] text-[clamp(2.45rem,13vw,6.1rem)] font-black leading-[0.98] tracking-normal sm:mb-5 sm:text-[clamp(2.8rem,6vw,6.1rem)]">
          Trusted Materials. Honest Business.
        </h1>
        <p className="max-w-[650px] text-base leading-7 text-white/85 sm:text-[clamp(1.05rem,2vw,1.28rem)]">
          Nu Da Trading PLC supplies premium coated and laminated plywood for contractors, builders, and construction
          companies that need dependable materials for modern building projects.
        </p>

        <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-3.5">
          <Button className="w-full sm:w-auto" href="tel:+251999777771">
            Call Nu Da Trading
            <Phone size={18} aria-hidden="true" />
          </Button>
          <Button className="w-full sm:w-auto" href="#products" variant="secondary">
            View plywood products
            <ChevronRight size={18} aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-2.5 text-sm font-bold text-white/82 min-[430px]:grid-cols-3 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3.5 sm:text-base sm:font-normal sm:text-white/80" aria-label="Company highlights">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/8 px-3 py-2 backdrop-blur-sm sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0" key={item.label}>
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
