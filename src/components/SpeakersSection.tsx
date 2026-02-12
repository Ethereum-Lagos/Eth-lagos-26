import { motion } from 'motion/react';

export function SpeakersSection() {
  const speakers = [
    {
      name: 'Vitalik Buterin',
      title: 'Co-Founder, Ethereum',
      description: 'Leading the future of decentralized technology and scaling solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Aya Miyaguchi',
      title: 'Executive Director, Ethereum Foundation',
      description: 'Driving global adoption and ecosystem growth across emerging markets',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: 'Iyinoluwa Aboyeji',
      title: 'Founder, Future Africa',
      description: 'Championing African innovation and venture building in Web3',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: 'Stani Kulechov',
      title: 'Founder & CEO, Aave',
      description: 'Building decentralized lending protocols and DeFi infrastructure',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    },
    {
      name: 'Brantly Millegan',
      title: 'Director of Operations, ENS',
      description: 'Creating decentralized identity and naming systems for Web3',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Yele Bademosi',
      title: 'Founder, Bundle Africa',
      description: 'Enabling cryptocurrency access across African markets',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section id="speakers" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-white mb-12"
        >
          Speakers
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-2xl p-6 hover:bg-[#222] transition-all border border-transparent hover:border-[#c4ff0e]/20"
            >
              <div className="flex items-start gap-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-white text-xl mb-2">{speaker.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {speaker.title}
                  </p>
                  {speaker.description && (
                    <p className="text-gray-500 text-sm mt-2">
                      {speaker.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
