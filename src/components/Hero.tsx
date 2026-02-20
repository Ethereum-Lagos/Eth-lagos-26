import { motion } from 'motion/react';
import { EthereumLogo } from './EthereumLogo';
import { TopNav } from './TopNav';
import { MainNav } from './MainNav';
import { Calendar, MapPin, Users } from 'lucide-react';

interface HeroProps {
  connectedWallet: string | null;
  onWalletClick: () => void;
  onWalletDisconnect: () => void;
}

export function Hero({ connectedWallet, onWalletClick, onWalletDisconnect }: HeroProps) {
  const scrollToAgenda = () => {
    const element = document.getElementById('agenda');
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1749058387715-1efad0eadc8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWdvcyUyMHNreXNjcmFwZXJzJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3MDc5NzgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Lagos Skyscrapers"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001929]/90 via-[#001929]/80 to-[#001929]" />
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,114,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,114,170,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF72AA]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#59A9DC]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10">
        <TopNav
          connectedWallet={connectedWallet}
          onWalletClick={onWalletClick}
          onWalletDisconnect={onWalletDisconnect}
        />

        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-[#FF72AA]/20 rounded-full blur-2xl animate-pulse" />
            <img
              src={new URL('../assets/logo.png', import.meta.url).href}
              alt="EthLagos Logo"
              className="w-32 h-32object-cover"
            />
            {/* <EthereumLogo className="w-32 h-32 md:w-40 md:h-40 relative z-10 drop-shadow-[0_0_30px_rgba(255,114,170,0.5)]" /> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1
              className="text-7xl md:text-9xl text-[#FF72AA] mb-4 tracking-tight relative"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              EthLagos
              <motion.div
                className="absolute -inset-2 bg-[#FF72AA]/10 blur-2xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Africa's Premier Ethereum Conference
            </motion.p>

            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-6 mb-10 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#59A9DC]" />
                <span>July 16-18, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#59A9DC]" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#59A9DC]" />
                <span>1000+ Attendees</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              onClick={scrollToAgenda}
              className="px-8 py-4 bg-[#FF72AA] hover:bg-[#ff5a99] text-white rounded-lg transition-all hover:scale-105 shadow-lg shadow-[#FF72AA]/20 text-lg relative overflow-hidden group"
            >
              <span className="relative z-10">View Full Agenda</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>


        </div>

      </div>

      {/* MainNav positioned at bottom of hero, closer to agenda section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center">
        <MainNav />
      </div>
    </section>
  );
}
