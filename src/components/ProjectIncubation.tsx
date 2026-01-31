import { motion } from 'motion/react';
import { Rocket, DollarSign, Users, TrendingUp } from 'lucide-react';

export function ProjectIncubation() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Funding Support',
      description: 'Access to seed funding and investor connections',
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Guidance from experienced blockchain entrepreneurs',
    },
    {
      icon: Rocket,
      title: 'Technical Resources',
      description: 'Development tools, infrastructure, and support',
    },
    {
      icon: TrendingUp,
      title: 'Growth Programs',
      description: 'Marketing, business development, and scaling assistance',
    },
  ];

  return (
    <section id="incubation" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Project <span className="text-purple-400">Incubation</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Turn your blockchain idea into reality with our comprehensive incubation program.
            Get the support you need to build, launch, and scale your Web3 project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <benefit.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl text-white mb-4">Ready to Build?</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our incubation program provides early-stage blockchain projects with mentorship,
                funding, and resources needed to succeed. Applications are open for innovative
                teams building on Ethereum.
              </p>
              <ul className="space-y-3 text-gray-400 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>3-month intensive program</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Up to $50,000 in seed funding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Weekly mentorship sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Demo day with investors</span>
                </li>
              </ul>
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all hover:scale-105 shadow-lg shadow-purple-500/50">
                Apply Now
              </button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1643000296927-f4f1c8722b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcmV1bSUyMGJsb2NrY2hhaW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTU1MTM5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Blockchain Technology"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
