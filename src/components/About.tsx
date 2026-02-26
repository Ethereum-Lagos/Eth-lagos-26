import { motion } from 'motion/react';
import { MapPin, Navigation, Wifi, Users, Monitor, Coffee } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#001929] relative overflow-hidden">
      {/* City Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/web-asset/victoria-island-view.png"
          alt="Lagos Skyline"
          className="w-full h-full object-cover opacity-10 grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001929] via-transparent to-[#001929]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-[#FF72AA]/10 border border-[#FF72AA]/20 rounded-full text-[#FF72AA] text-sm font-black mb-6 uppercase tracking-widest"
          >
            VENUE
          </motion.div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif' }}>
            WELCOME TO <span className="text-[#FF72AA]">LAGOS</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
            Africa's tech hub and the beating heart of innovation on the continent. Join the community at the iconic National Theatre.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Venue Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#00121D]/80 backdrop-blur-xl border border-white/10 rounded-[48px] p-8 md:p-12 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF72AA]/5 rounded-full blur-3xl -mr-20 -mt-20" />

            <div className="flex items-start gap-6 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-[#FF72AA]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-[#FF72AA]" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                  Wole Soyinka Centre for Culture and Creative Arts
                  <span className="block text-[#FF72AA] text-xl">(National Theatre Nigeria)</span>
                </h3>
                <p className="text-white/40 font-bold leading-relaxed uppercase tracking-wide text-sm">
                  Iganmu, Lagos Apapa Local Government, Lagos
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Monitor, text: 'State-of-the-art facilities' },
                { icon: Wifi, text: 'High-speed fiber internet' },
                { icon: Coffee, text: 'Large exhibition halls' },
                { icon: Users, text: 'Dedicated hackathon space' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/70">
                  <div className="w-2 h-2 rounded-full bg-[#FF72AA] shadow-[0_0_10px_#FF72AA]" />
                  <span className="text-lg font-bold">{item.text}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-5 bg-[#FF72AA] hover:bg-[#ff5a99] text-[#001929] rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl shadow-[#FF72AA]/20 uppercase tracking-wider">
              <Navigation className="w-6 h-6 fill-current" />
              GET DIRECTIONS
            </button>
          </motion.div>

          {/* Right: National Theatre Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#FF72AA]/10 blur-[120px] rounded-full" />
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-white/10 group">
              <img
                src="/web-asset/national-theatre.png"
                alt="National Theatre Nigeria"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001929] via-transparent to-transparent opacity-60" />
            </div>

            {/* Architectural Highlight Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl hidden md:block border border-neutral-100"
            >
              <div className="text-[#001929] font-black text-sm uppercase tracking-widest mb-1">Architectural Icon</div>
              <div className="text-[#FF72AA] font-black text-xs">National Monument</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
