import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const LUMA_REGISTRATION_URL = 'https://luma.com/sa6qy16d';

export function TopNav() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-16 py-5 md:py-8 gap-3">
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="EthLagos Logo"
          className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-110 drop-shadow-lg"
        />
        <span className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
          ETH<span className="text-[#FF72AA]">LAGOS</span>
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-[0.16em] text-white/60">
        <button onClick={() => scrollToSection('about')} className="hover:text-white transition-all cursor-pointer">About</button>
        <button onClick={() => scrollToSection('speakers')} className="hover:text-white transition-all cursor-pointer">Speakers</button>
        <button onClick={() => scrollToSection('agenda')} className="hover:text-white transition-all cursor-pointer">Schedule</button>
        <button onClick={() => scrollToSection('about')} className="hover:text-white transition-all cursor-pointer">Venue</button>
      </div>

      <a
        href={LUMA_REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 md:px-8 py-2.5 md:py-4 bg-[#FF72AA] hover:bg-[#ff5a99] text-[#001929] rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.16em] md:tracking-[0.3em] flex items-center gap-1.5 md:gap-2 group shadow-lg shadow-[#FF72AA]/20 whitespace-nowrap"
      >
        Register Now
        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
      </a>
    </nav>
  );
}
