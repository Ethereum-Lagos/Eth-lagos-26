import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { EthereumLogo } from './EthereumLogo';

interface HeroProps {
  onRegisterClick: () => void;
}

export function Hero({ onRegisterClick }: HeroProps) {
  const scrollToAgenda = () => {
    const element = document.getElementById('agenda');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1569706971306-de5d78f6418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWdvcyUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3Njk1NTEzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Lagos Skyline"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/90 to-gray-950" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,127,220,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,127,220,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <EthereumLogo className="w-24 h-24 drop-shadow-[0_0_30px_rgba(139,127,220,0.5)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl mb-6"
        >
          <span className="text-purple-400">Eth</span>
          <span className="text-white">Lagos</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-4"
        >
          Africa's Premier Ethereum Conference
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Join the leading minds in blockchain technology, innovation, and Web3 development
          in Lagos, Nigeria. March 15-17, 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={onRegisterClick}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all hover:scale-105 shadow-lg shadow-purple-500/50"
          >
            Register Now
          </button>
          <button 
            onClick={scrollToAgenda}
            className="px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 rounded-lg transition-all"
          >
            View Schedule
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToAgenda}
        >
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </motion.div>
      </div>
    </section>
  );
}
