import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { StatsRibbon } from './components/StatsRibbon';
import { LogoShowcase } from './components/LogoShowcase';
import { About } from './components/About';
import { AgendaSection } from './components/AgendaSection';
import { SpeakersSection } from './components/SpeakersSection';
import { HackathonSection } from './components/HackathonSection';
import { SponsorsSection } from './components/SponsorsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#001929] selection:bg-[#FF72AA]/30 selection:text-[#FF72AA]">
      <Hero />
      <Features />
      <StatsRibbon />
      <LogoShowcase />
      <About />
      <AgendaSection />
      <SpeakersSection />
      <HackathonSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}
