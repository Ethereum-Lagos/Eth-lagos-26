import { Wallet, LogOut } from 'lucide-react';
import { motion } from 'motion/react';
import { EthereumLogo } from './EthereumLogo';

interface NavigationProps {
  activeSection: string;
  connectedWallet: string | null;
  onWalletClick: () => void;
  onWalletDisconnect: () => void;
}

export function Navigation({ activeSection, connectedWallet, onWalletClick, onWalletDisconnect }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'agenda', label: 'Agenda' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'hackathon', label: 'Hackathon' },
    { id: 'incubation', label: 'Incubation' },
  ];

  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <EthereumLogo className="w-8 h-8" />
            <span className="text-xl text-white">
              <span className="text-purple-400">Eth</span>Lagos
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-colors ${
                  activeSection === item.id ? 'text-purple-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400"
                  />
                )}
              </button>
            ))}
          </div>

          {connectedWallet ? (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 text-purple-400 rounded-lg">
                <Wallet className="w-4 h-4" />
                <span className="text-sm">{formatWalletAddress(connectedWallet)}</span>
              </div>
              <button
                onClick={onWalletDisconnect}
                className="p-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors"
                title="Disconnect Wallet"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button 
              onClick={onWalletClick}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
            >
              <Wallet className="w-4 h-4" />
              <span className="hidden sm:inline">Connect Wallet</span>
            </button>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
