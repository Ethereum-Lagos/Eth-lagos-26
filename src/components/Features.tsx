import { motion } from 'motion/react';
import { Users, Code, Rocket, Heart } from 'lucide-react';

export function Features() {
    const features = [
        {
            title: 'Developer Summit',
            desc: 'Deep technical workshops, protocol discussions, and hands-on coding sessions with Ethereum core developers.',
            icon: Code,
        },
        {
            title: 'Community Building',
            desc: 'Connect with 1000+ builders, investors, and innovators shaping the future of Web3 in Africa.',
            icon: Users,
        },
        {
            title: 'Hackathon',
            desc: '48-hour buildathon with $50,000 in prizes for the most innovative dApps and infrastructure projects.',
            icon: Rocket,
        },
        {
            title: 'Global Impact',
            desc: 'Bringing together thought leaders from Ethereum Foundation, leading protocols, and African innovators.',
            icon: Heart,
        },
    ];

    return (
        <section className="py-24 bg-[#FF72AA] relative overflow-hidden">
            {/* Subtle patterns/dots like in the design */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl font-black text-[#001929] mb-4 tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    WHAT WILL YOU FIND?
                </h2>
                <p className="text-[#001929]/70 text-lg md:text-xl max-w-2xl mx-auto mb-20 font-medium">
                    Join Africa's leading Ethereum conference to learn, build, and connect with the global blockchain community.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[40px] text-left hover:scale-[1.03] transition-all duration-500 shadow-xl shadow-[#001929]/5 group"
                        >
                            <div className="w-14 h-14 bg-[#FF72AA]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF72AA] transition-colors">
                                <feature.icon className="w-7 h-7 text-[#FF72AA] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black text-[#001929] mb-4 tracking-tight leading-none">{feature.title}</h3>
                            <p className="text-[#001929]/60 font-bold leading-relaxed text-sm uppercase tracking-wide">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
