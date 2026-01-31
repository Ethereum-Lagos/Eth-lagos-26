import { motion } from 'motion/react';
import { Users, Code, Zap, Globe } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Users, label: 'Attendees', value: '1000+' },
    { icon: Code, label: 'Developers', value: '500+' },
    { icon: Zap, label: 'Workshops', value: '20+' },
    { icon: Globe, label: 'Countries', value: '30+' },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            About <span className="text-purple-400">EthLagos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            EthLagos is the largest Ethereum-focused conference in Africa, bringing together
            developers, entrepreneurs, investors, and enthusiasts to explore the future of
            decentralized technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/50 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-600/10 to-cyan-600/10 border border-purple-500/20 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower the African blockchain ecosystem by providing world-class education,
                networking opportunities, and resources for developers and entrepreneurs building
                on Ethereum.
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-white mb-4">Why Attend?</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Learn from industry experts and Ethereum core developers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Network with Africa's leading blockchain innovators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Participate in hands-on workshops and hackathons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Showcase your projects to investors and partners</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
