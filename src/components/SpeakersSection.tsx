import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';


export function SpeakersSection() {
  const speakers = [
    {
      name: 'Vitalik Buterin',
      title: 'Co-Founder @ Ethereum',
      image: '/web-asset/Vitalik_Buterin eth.jpg',
    },
    {
      name: 'Aya Miyaguchi',
      title: 'Executive Director @ EF',
      image: '/web-asset/Aya miyaguchi.webp',
    },
    {
      name: 'Iyinoluwa Aboyeji',
      title: 'Founder @ Future Africa',
      image: '/web-asset/Iyinoluwa Aboyeji.webp',
    },
    {
      name: 'Stani Kulechov',
      title: 'Founder & CEO @ Aave',
      image: '/web-asset/Stani Kulechov AAVE.jpg',
    },
    {
      name: 'Sandeep Nailwal',
      title: 'Co-Founder @ Polygon',
      image: '/web-asset/Sandeep-Nailwal polygon.webp',
    },
    {
      name: 'Yele Bademosi',
      title: 'Founder @ Nestcoin',
      image: '/web-asset/Yele-Bademosi-CEO-Cofounder-Nestcoin.jpg',
    },
  ];

  return (
    <section id="speakers" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-[#FF72AA]/10 border border-[#FF72AA]/20 rounded-full text-[#FF72AA] text-sm font-black mb-4 uppercase tracking-widest"
          >
            SPEAKERS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-[#001929] mb-4 tracking-tighter"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            LEARN FROM THE <span className="text-[#FF72AA]">BEST</span>
          </motion.h2>
          <p className="text-[#001929]/60 text-lg max-w-2xl mx-auto font-medium">
            Industry leaders, protocol founders, and visionaries sharing insights on building the decentralized future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-6 bg-[#001929]/5 border border-[#001929]/5">
                <ImageWithFallback
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#001929]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <button className="w-full py-4 bg-[#FF72AA] text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    VIEW PROFILE <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="text-3xl font-black text-[#001929] mb-1 tracking-tight group-hover:text-[#FF72AA] transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-[#001929]/40 font-black uppercase tracking-[0.2em] text-xs">
                  {speaker.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="mailto:info@ethlagos.ng"
            className="inline-flex px-10 py-5 bg-[#001929] text-white rounded-2xl font-black text-lg hover:bg-[#002340] transition-all shadow-xl shadow-[#001929]/10"
          >
            BECOME A SPEAKER
          </a>
        </div>
      </div>
    </section>
  );
}
