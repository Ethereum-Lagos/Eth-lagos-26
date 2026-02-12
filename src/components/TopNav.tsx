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
        {/* Replace placeholder square with actual logo asset */}
        <img
          src={new URL('../assets/logo.png', import.meta.url).href}
          alt="EthLagos Logo"
          className="logo object-cover"
        />
        <span className="text-white text-lg">EthLagos</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <button onClick={() => scrollToSection('agenda')} className="hover:text-[#c4ff0e] transition-colors">
          Agenda
        </button>
        <button onClick={() => scrollToSection('speakers')} className="hover:text-[#c4ff0e] transition-colors">
          Speakers
        </button>
        <button onClick={() => scrollToSection('hackathon')} className="hover:text-[#c4ff0e] transition-colors">
          Hackathon
        </button>
        <button onClick={() => scrollToSection('incubation')} className="hover:text-[#c4ff0e] transition-colors">
          Project Incubation
        </button>
      </div>

      {connectedWallet ? (
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#c4ff0e]/10 border border-[#c4ff0e]/30 text-[#c4ff0e] rounded-lg text-sm">
            <span>{formatWalletAddress(connectedWallet)}</span>
          </div>
          <button
            onClick={onWalletDisconnect}
            className="p-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors"
            title="Disconnect"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={onWalletClick}
          className="px-6 py-2 bg-[#c4ff0e] hover:bg-[#b3e600] text-black rounded-lg transition-colors text-sm"
        >Register For Event</button>
      )}
    </nav>
  );
}
