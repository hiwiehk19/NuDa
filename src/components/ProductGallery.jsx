import coatedBlackWarehouse from '../assets/products/coated-black-warehouse.jpg';
import greenCoatedLargeStack from '../assets/products/green-coated-large-stack.jpg';
import loadingPlywoodTruck from '../assets/products/loading-plywood-truck.jpg';
import orangeLaminatedCloseup from '../assets/products/orange-laminated-closeup.jpg';
import { productGallery } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

const galleryImages = {
  coatedBlackWarehouse,
  greenCoatedLargeStack,
  loadingPlywoodTruck,
  orangeLaminatedCloseup,
};

export function ProductGallery() {
  return (
    <section className="bg-white px-5 py-14 sm:py-16 lg:px-[clamp(20px,5vw,72px)] lg:py-28" id="gallery">
      <SectionHeading eyebrow="Real inventory" title="Actual plywood stock, ready for construction supply.">
        These photos show Nu Da Trading plywood products in storage, handling, and project supply contexts so customers
        can see the materials before they call.
      </SectionHeading>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {productGallery.map((item, index) => (
          <article
            className={index === 0 ? 'group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_42px_rgba(20,58,78,0.08)] lg:col-span-2 lg:row-span-2' : 'group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_42px_rgba(20,58,78,0.08)]'}
            key={item.title}
          >
            <div className={index === 0 ? 'aspect-[5/4] overflow-hidden sm:aspect-[4/3] lg:aspect-[16/11]' : 'aspect-[5/4] overflow-hidden sm:aspect-[4/3]'}>
              <img
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                src={galleryImages[item.image]}
                alt={item.title}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
            <div className="p-4 sm:p-5">
              <span className="text-xs font-black uppercase tracking-[0.08em] text-brand-yellow">
                {item.category}
              </span>
              <h3 className="mt-2 text-lg font-black text-brand-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
