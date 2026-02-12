import { motion } from 'motion/react';
import { Clock, MapPin, Calendar } from 'lucide-react';

interface AgendaSectionProps {
  onWalletClick: () => void;
  connectedWallet: string | null;
}

export function AgendaSection({ onWalletClick, connectedWallet }: AgendaSectionProps) {
  const events = [
    {
      title: 'Opening Ceremony & Welcome',
      speaker: 'Vitalik Buterin, Ethereum Foundation',
      time: '09:00 AM',
      date: 'March 15',
      location: 'Main Auditorium',
      description: 'Official opening with keynote on Ethereum\'s vision for Africa',
    },
    {
      title: 'Building DeFi in Africa',
      speaker: 'Panel: Aave, Uniswap & MakerDAO Leaders',
      time: '11:00 AM',
      date: 'March 15',
      location: 'Main Auditorium',
      description: 'How decentralized finance can solve real problems across Africa',
    },
    {
      title: 'Smart Contract Security',
      speaker: 'Tincho Abbate, OpenZeppelin',
      time: '02:00 PM',
      date: 'March 15',
      location: 'Workshop Room A',
      description: 'Hands-on workshop on auditing and securing Solidity contracts',
    },
    {
      title: 'Layer 2 Scaling Solutions',
      speaker: 'Optimism & Arbitrum Core Teams',
      time: '04:00 PM',
      date: 'March 15',
      location: 'Tech Stage',
      description: 'Understanding rollups and how to build on L2 networks',
    },
    {
      title: 'Web3 & African Innovation',
      speaker: 'Iyinoluwa Aboyeji, Future Africa',
      time: '10:00 AM',
      date: 'March 16',
      location: 'Main Auditorium',
      description: 'How blockchain technology is transforming African businesses',
    },
    {
      title: 'NFTs & Digital Identity',
      speaker: 'Polygon Studios & ENS Team',
      time: '03:00 PM',
      date: 'March 16',
      location: 'Creator Space',
      description: 'Building decentralized identity and creative economies on-chain',
    },
  ];

  return (
    <section id="agenda" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-white"
          >
            Agenda
          </motion.h2>
          
          {!connectedWallet && (
            <button 
              onClick={onWalletClick}
              className="px-6 py-3 bg-[#c4ff0e] hover:bg-[#b3e600] text-black rounded-lg transition-colors"
            >Register For Event</button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl p-6 hover:bg-[#222] transition-all border border-transparent hover:border-[#c4ff0e]/30 group"
            >
              <h3 className="text-white text-lg mb-3 group-hover:text-[#c4ff0e] transition-colors">
                {event.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 min-h-[60px] leading-relaxed">
                {event.speaker}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 text-[#c4ff0e]" />
                  <span>{event.date}</span>
                </div>
                {event.time && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4 text-[#c4ff0e]" />
                    <span>{event.time}</span>
                  </div>
                )}
                {event.location && (
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 text-[#c4ff0e]" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>

              {event.description && (
                <p className="text-gray-500 text-xs italic border-t border-gray-800 pt-3">
                  {event.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
