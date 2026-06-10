import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LocationSection } from './components/LocationSection';
import { MissionSection } from './components/MissionSection';
import { ProcessSection } from './components/ProcessSection';
import { ProductsSection } from './components/ProductsSection';
import { QuoteBand } from './components/QuoteBand';
import { StatsBand } from './components/StatsBand';

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-brand-ink">
      <Header />
      <HeroSection />
      <QuoteBand />
      <AboutSection />
      <StatsBand />
      <ProductsSection />
      <ProcessSection />
      <MissionSection />
      <ContactSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
