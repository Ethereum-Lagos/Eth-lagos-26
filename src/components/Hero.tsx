import { motion } from 'motion/react';
import { MapPin, ArrowRight, CalendarDays } from 'lucide-react';
import { TopNav } from './TopNav';
import logo from '../assets/logo.png';

const LUMA_REGISTRATION_URL = 'https://luma.com/sa6qy16d';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#001929] overflow-hidden flex flex-col">
      {/* Top Navigation Overlay */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <TopNav />
      </div>

      {/* Background with Lagos Skyline */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/web-asset/victoria-island-view.png"
          alt="Lagos Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001929] via-[#001929]/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-1 flex items-center pt-24">
        <div className="grid lg:grid-cols-[1.2fr_0.6fr_1.2fr] gap-4 items-center w-full">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col z-20"
          >
            <h1 className="text-[70px] md:text-[100px] lg:text-[110px] font-black leading-[0.85] tracking-tighter mb-6 text-white uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
              ETH<br />
              <span className="text-[#FF72AA]">LAGOS</span>
            </h1>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#FF72AA]/40 bg-[#FF72AA]/10 px-5 py-2.5 mb-6 text-[#FFD4E7] shadow-[0_0_30px_rgba(255,114,170,0.2)]">
              <CalendarDays className="w-4 h-4 text-[#FF72AA]" />
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.18em]">July 16 to July 18</span>
            </div>

            <p className="text-xl md:text-2xl text-white/70 max-w-sm font-medium leading-[1.2] mb-8">
              Africa's Premier Ethereum Conference & Developer Summit
            </p>

            <div className="flex items-start gap-2 text-white/40 mb-10">
              <MapPin className="w-5 h-5 text-[#FF72AA] mt-1 shrink-0" />
              <span className="text-lg font-bold uppercase tracking-tight">NATIONAL THEATRE, LAGOS</span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mb-12">
              <StatItem label="Attendees" value="1000+" />
              <StatItem label="Speakers" value="50+" />
              <StatItem label="Prize Pool" value="$50K" isAccent />
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={LUMA_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-10 py-5 bg-[#FF72AA] text-[#001929] rounded-2xl font-black text-xl flex items-center gap-3 transition-all hover:bg-[#ff5a99] shadow-2xl shadow-[#FF72AA]/20"
            >
              Register Now
              <ArrowRight className="w-6 h-6 -rotate-45" />
            </motion.a>
          </motion.div>

          {/* Middle: Pronounced Community Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex flex-col items-center justify-center p-4 relative z-10 pl-20"
          >
            <div className="absolute inset-0 bg-[#FF72AA]/5 blur-[120px] rounded-full" />
            <img
              src={logo}
              alt="Ethereum Lagos Community"
              className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_60px_rgba(255,114,170,0.5)] relative z-10 brightness-110"
            />
          </motion.div>

          {/* Right Side: Larger Bridge Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:scale-125 lg:translate-x-12 z-0"
          >
            {/* Blue glow background to match the bridge asset */}
            <div className="absolute inset-0 bg-[#59A9DC]/10 blur-[150px] rounded-full" />

            <img
              src="/web-asset/lagos-bridge.png"
              alt="Lagos Bridge"
              className="relative z-0 w-full h-auto drop-shadow-[0_0_100px_rgba(89,169,220,0.4)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ label, value, isAccent = false }: { label: string, value: string, isAccent?: boolean }) {
  return (
    <div className="flex flex-col">
      <div className={`text-3xl md:text-4xl lg:text-5xl font-black mb-1 ${isAccent ? 'text-[#FF72AA]' : 'text-white'}`}>
        {value}
      </div>
      <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] leading-none">
        {label}
      </div>
    </div>
  );
}
