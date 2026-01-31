import { motion } from 'motion/react';
import { Trophy, Users, Clock, Zap } from 'lucide-react';

interface HackathonProps {
  onRegisterClick: () => void;
}

export function Hackathon({ onRegisterClick }: HackathonProps) {
  const prizes = [
    { place: '1st Place', amount: '$10,000', icon: Trophy, color: 'text-yellow-400' },
    { place: '2nd Place', amount: '$5,000', icon: Trophy, color: 'text-gray-300' },
    { place: '3rd Place', amount: '$2,500', icon: Trophy, color: 'text-amber-600' },
  ];

  const tracks = [
    {
      title: 'DeFi Innovation',
      description: 'Build next-generation decentralized finance applications',
      icon: Zap,
    },
    {
      title: 'Social Impact',
      description: 'Create solutions addressing African challenges with blockchain',
      icon: Users,
    },
    {
      title: 'Developer Tools',
      description: 'Develop tools to improve the Ethereum developer experience',
      icon: Clock,
    },
  ];

  return (
    <section id="hackathon" className="py-24 px-6 bg-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            EthLagos <span className="text-purple-400">Hackathon</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            48 hours of intense building, learning, and collaboration. Compete for prizes
            and bring your innovative ideas to life.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl overflow-hidden border border-purple-500/20"
        >
          <img
            src="https://images.unsplash.com/photo-1638029202288-451a89e0d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2Rpbmd8ZW58MXx8fHwxNzY5NTAzNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hackathon"
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>

        {/* Prize Pool */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl text-white text-center mb-8">Prize Pool</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {prizes.map((prize, index) => (
              <motion.div
                key={prize.place}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/10 to-cyan-600/10 border border-purple-500/30 rounded-xl p-8 text-center hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <prize.icon className={`w-12 h-12 ${prize.color} mx-auto mb-4`} />
                <div className="text-2xl text-white mb-2">{prize.place}</div>
                <div className="text-3xl text-purple-400">{prize.amount}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tracks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl text-white text-center mb-8">Hackathon Tracks</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <track.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="text-xl text-white mb-3">{track.title}</h4>
                <p className="text-gray-400">{track.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button 
            onClick={onRegisterClick}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all hover:scale-105 shadow-lg shadow-purple-500/50"
          >
            Register for Hackathon
          </button>
          <p className="text-gray-400 mt-4">Limited spots available • March 16-17, 2026</p>
        </motion.div>
      </div>
    </section>
  );
}
