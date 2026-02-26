import { motion } from 'motion/react';
import { Trophy, Code, Rocket, Landmark, Palette, ShieldCheck, Cpu, Star, Calendar } from 'lucide-react';

const LUMA_REGISTRATION_URL = 'https://luma.com/sa6qy16d';

export function HackathonSection() {
  const tracks = [
    { title: 'DeFi Innovation', icon: Landmark, desc: 'Build the next generation of decentralized finance protocols.', prize: '$15,000', color: '#59A9DC' },
    { title: 'Social Impact', icon: ShieldCheck, desc: 'Solutions addressing real-world problems in African communities.', prize: '$12,000', color: '#FF72AA' },
    { title: 'NFT & Creator Tools', icon: Palette, desc: 'Tools and platforms empowering digital creators.', prize: '$10,000', color: '#F5DB5E' },
    { title: 'Layer 2 Solutions', icon: Cpu, desc: 'Innovative scaling solutions and rollup implementations.', prize: '$8,000', color: '#FF72AA' },
  ];

  return (
    <section id="hackathon" className="py-24 px-6 bg-[#FDFAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-[#FF72AA]/10 border border-[#FF72AA]/20 rounded-full text-[#FF72AA] text-sm font-black mb-4 uppercase tracking-widest"
          >
            HACKATHON
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-[#001929] mb-4 uppercase tracking-tighter"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            BUILD THE <span className="text-[#FF72AA]">FUTURE</span>
          </motion.h2>
          <p className="text-[#001929]/40 text-lg max-w-2xl mx-auto font-medium mb-12">
            48 hours of non-stop building. Four tracks. $50,000 in prizes.
          </p>

          <div className="inline-flex items-center gap-4 px-10 py-5 bg-[#FF72AA] bg-opacity-5 border-2 border-[#FF72AA] rounded-[32px] text-[#FF72AA] mb-20 shadow-xl shadow-[#FF72AA]/5">
            <Trophy className="w-8 h-8 fill-current" />
            <div className="text-left">
              <div className="text-xs font-black uppercase tracking-[0.2em] opacity-60">Total Prize Pool</div>
              <div className="text-3xl font-black tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>$50,000 in ETH</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-24">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-[#001929]/5 p-8 rounded-[32px] transition-all duration-500 hover:shadow-2xl hover:shadow-[#001929]/5 flex flex-col items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2" style={{ backgroundColor: `${track.color}11` }}>
                <track.icon className="w-6 h-6" style={{ color: track.color }} />
              </div>
              <div className="text-2xl font-black text-[#FF72AA]">{track.prize}</div>
              <h3 className="text-xl font-black text-[#001929] tracking-tight">{track.title}</h3>
              <p className="text-[#001929]/50 text-sm font-medium leading-relaxed">
                {track.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#001929] rounded-[48px] p-12 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF72AA]/10 rounded-full blur-[120px] -mr-64 -mt-32" />

          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif' }}>
              What You Get
            </h3>
            <ul className="space-y-4">
              {[
                'Access to mentor pool of protocol founders',
                'AWS & Infura credits for all participants',
                'Direct introductions to VCs and Investors',
                'Fast-track to ETH Lagos Incubator program',
                'Sponsor bounties and prizes',
                'Post-hackathon support and guidance'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/70 font-bold">
                  <div className="w-2 h-2 rounded-full bg-[#59A9DC]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-[32px] p-10 border border-white/10">
            <h4 className="text-2xl font-black mb-8 text-[#FF72AA] uppercase tracking-tighter">Hackathon Timeline</h4>
            <div className="space-y-6 mb-10">
              {[
                { step: '1', title: 'Kickoff - July 16, 4:30 PM', desc: 'Team formation, idea pitches, mentor introductions' },
                { step: '2', title: 'Building - July 16-18', desc: '48 hours of coding, mentorship sessions, workshops' },
                { step: '3', title: 'Demo Day - July 18, 3:30 PM', desc: 'Project presentations and winner announcements' }
              ].map((t, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#59A9DC]/20 flex items-center justify-center font-black text-[#59A9DC] shrink-0">{t.step}</div>
                  <div>
                    <div className="font-black text-white">{t.title}</div>
                    <div className="text-white/40 text-xs font-bold">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={LUMA_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-5 bg-[#FF72AA] text-white rounded-2xl font-black text-xl hover:bg-[#ff5a99] transition-all shadow-xl shadow-[#FF72AA]/20"
            >
              REGISTER FOR HACKATHON
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
