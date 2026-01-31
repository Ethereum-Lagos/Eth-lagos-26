import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';

export function Speakers() {
  const speakers = [
    {
      name: 'Vitalik Buterin',
      title: 'Co-founder, Ethereum',
      image: 'https://images.unsplash.com/photo-1665495005618-6f55e5f77a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHNwZWFrZXIlMjBhZnJpY2FufGVufDF8fHx8MTc2OTU1MTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Leading the future of decentralized systems and Ethereum protocol development.',
      social: { twitter: '#', linkedin: '#' },
    },
    {
      name: 'Sarah Chen',
      title: 'Head of Developer Relations, ConsenSys',
      image: 'https://images.unsplash.com/photo-1678282955808-de92256dbd59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwZGV2ZWxvcGVyJTIwYWZyaWNhbnxlbnwxfHx8fDE3Njk1NTEzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Empowering developers to build the next generation of Web3 applications.',
      social: { twitter: '#', linkedin: '#' },
    },
    {
      name: 'Michael Okonkwo',
      title: 'Smart Contract Auditor, OpenZeppelin',
      image: 'https://images.unsplash.com/photo-1665495005618-6f55e5f77a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHNwZWFrZXIlMjBhZnJpY2FufGVufDF8fHx8MTc2OTU1MTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Ensuring security and reliability in blockchain smart contracts.',
      social: { twitter: '#', linkedin: '#' },
    },
    {
      name: 'Amina Mohammed',
      title: 'NFT Artist & Founder, AfroDigital',
      image: 'https://images.unsplash.com/photo-1678282955808-de92256dbd59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwZGV2ZWxvcGVyJTIwYWZyaWNhbnxlbnwxfHx8fDE3Njk1NTEzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Bridging African culture and digital art through blockchain technology.',
      social: { twitter: '#', linkedin: '#' },
    },
    {
      name: 'Emma Williams',
      title: 'UX Designer, MetaMask',
      image: 'https://images.unsplash.com/photo-1665495005618-6f55e5f77a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHNwZWFrZXIlMjBhZnJpY2FufGVufDF8fHx8MTc2OTU1MTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Creating intuitive and accessible Web3 user experiences.',
      social: { twitter: '#', linkedin: '#' },
    },
    {
      name: 'John Smith',
      title: 'L2 Solutions Architect, Polygon',
      image: 'https://images.unsplash.com/photo-1678282955808-de92256dbd59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwZGV2ZWxvcGVyJTIwYWZyaWNhbnxlbnwxfHx8fDE3Njk1NTEzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bio: 'Scaling Ethereum for mass adoption through Layer 2 innovations.',
      social: { twitter: '#', linkedin: '#' },
    },
  ];

  return (
    <section id="speakers" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Featured <span className="text-purple-400">Speakers</span>
          </h2>
          <p className="text-xl text-gray-400">
            Learn from the brightest minds in the Ethereum ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl text-white mb-1">{speaker.name}</h3>
                <p className="text-purple-400 mb-3">{speaker.title}</p>
                <p className="text-gray-400 text-sm mb-4">{speaker.bio}</p>

                <div className="flex gap-3">
                  <a
                    href={speaker.social.twitter}
                    className="p-2 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-purple-400" />
                  </a>
                  <a
                    href={speaker.social.linkedin}
                    className="p-2 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-purple-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
