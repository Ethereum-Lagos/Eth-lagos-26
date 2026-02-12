import { useState } from 'react';
import { Hero } from './components/Hero';
import { AgendaSection } from './components/AgendaSection';
import { SpeakersSection } from './components/SpeakersSection';
import { HackathonSection } from './components/HackathonSection';
import { ProjectIncubationSection } from './components/ProjectIncubationSection';
import { Footer } from './components/Footer';
import { WalletModal } from './components/WalletModal';

export default function App() {
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);

  const handleWalletConnect = (walletAddress: string) => {
    setConnectedWallet(walletAddress);
    setWalletModalOpen(false);
  };

  const handleWalletDisconnect = () => {
    setConnectedWallet(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Hero 
        connectedWallet={connectedWallet}
        onWalletClick={() => setWalletModalOpen(true)}
        onWalletDisconnect={handleWalletDisconnect}
      />
      <AgendaSection 
        onWalletClick={() => setWalletModalOpen(true)}
        connectedWallet={connectedWallet}
      />
      <SpeakersSection />
      <HackathonSection />
      <ProjectIncubationSection />
      <Footer />
      
      <WalletModal
        isOpen={walletModalOpen}
        onClose={() => setWalletModalOpen(false)}
        onConnect={handleWalletConnect}
      />
    </div>
  );
}
