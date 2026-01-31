import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Agenda } from './components/Agenda';
import { Speakers } from './components/Speakers';
import { Hackathon } from './components/Hackathon';
import { ProjectIncubation } from './components/ProjectIncubation';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { WalletModal } from './components/WalletModal';
import { RegistrationModal } from './components/RegistrationModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'agenda', 'speakers', 'hackathon', 'incubation'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWalletConnect = (walletAddress: string) => {
    setConnectedWallet(walletAddress);
    setWalletModalOpen(false);
  };

  const handleWalletDisconnect = () => {
    setConnectedWallet(null);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation 
        activeSection={activeSection}
        connectedWallet={connectedWallet}
        onWalletClick={() => setWalletModalOpen(true)}
        onWalletDisconnect={handleWalletDisconnect}
      />
      <main>
        <Hero onRegisterClick={() => setRegistrationModalOpen(true)} />
        <About />
        <Agenda />
        <Speakers />
        <Hackathon onRegisterClick={() => setRegistrationModalOpen(true)} />
        <ProjectIncubation />
      </main>
      <Footer />
      
      <WalletModal
        isOpen={walletModalOpen}
        onClose={() => setWalletModalOpen(false)}
        onConnect={handleWalletConnect}
      />
      
      <RegistrationModal
        isOpen={registrationModalOpen}
        onClose={() => setRegistrationModalOpen(false)}
        connectedWallet={connectedWallet}
      />
    </div>
  );
}
