import { LogOut } from 'lucide-react';

interface TopNavProps {
  connectedWallet: string | null;
  onWalletClick: () => void;
  onWalletDisconnect: () => void;
}

export function TopNav({ connectedWallet, onWalletClick, onWalletDisconnect }: TopNavProps) {
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

  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-6">
      <div className="flex items-center gap-2">
        {/* <div className="w-4 h-4 bg-[#FF72AA] transform rotate-45"></div> */}
        <img
          src={new URL('../assets/logo.png', import.meta.url).href}
          alt="EthLagos Logo"
          className="logo object-cover"
        />
        {/* <span className="text-white text-lg">EthLagos</span> */}
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <button onClick={() => scrollToSection('agenda')} className="hover:text-[#FF72AA] transition-colors">
          Agenda
        </button>
        <button onClick={() => scrollToSection('speakers')} className="hover:text-[#FF72AA] transition-colors">
          Speakers
        </button>
        <button onClick={() => scrollToSection('hackathon')} className="hover:text-[#FF72AA] transition-colors">
          Hackathon
        </button>
        <button onClick={() => scrollToSection('incubation')} className="hover:text-[#FF72AA] transition-colors">
          Project Incubation
        </button>
      </div>

      {connectedWallet ? (
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#FF72AA]/10 border border-[#FF72AA]/30 text-[#FF72AA] rounded-lg text-sm">
            <span>{formatWalletAddress(connectedWallet)}</span>
          </div>
          <button
            onClick={onWalletDisconnect}
            className="p-2 bg-[#FE0115]/20 hover:bg-[#FE0115]/30 text-[#FE0115] rounded-lg transition-colors"
            title="Disconnect"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button 
          onClick={onWalletClick}
          className="px-6 py-2 bg-[#FF72AA] hover:bg-[#ff5a99] text-white rounded-lg transition-colors text-sm"
        >Register For Event</button>
      )}
    </nav>
  );
}
