import { motion } from 'motion/react';
import { Users, Code, Rocket, Heart } from 'lucide-react';

export function Features() {
    const features = [
        {
            title: 'The UX Revolution',
            desc: 'Making Ethereum invisible to the end-user. Keywords: ERC-4337, Paymasters (Gasless), Intents, Mobile-First Design.',
            icon: Heart,
        },
        {
            title: 'L2 & Agent Economy',
            desc: 'Affordable rails for humans and autonomous machines. Keywords: ZK vs. Optimistic Rollups, The Superchain (OP Stack), AI Agents (ERC-8004), Low-cost Blobs.',
            icon: Rocket,
        },
        {
            title: 'Real-World Ethereum',
            desc: 'Moving beyond trading to settling real economic value. Keywords: Tokenizing Nigerian Assets (T-Bills, Real Estate), ZK-Identity, Advanced DeFi Primitives.',
            icon: Code,
        },
        {
            title: 'Cypherpunk Lagos',
            desc: 'Keeping the core ethos alive as we scale. Keywords: Decentralized Social (DeSo), Privacy Tools (ZK), Quadratic Funding.',
            icon: Users,
        },
    ];

    return (
        <section className="py-24 bg-[#FF72AA] relative overflow-hidden">
            {/* Subtle patterns/dots like in the design */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl font-black text-[#001929] mb-4 tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    ENGINEERED FOR IMPACT
                </h2>
                <p className="text-[#001929]/70 text-lg md:text-xl max-w-2xl mx-auto mb-20 font-black uppercase tracking-widest">
                    CORE CONFERENCE TRACKS
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
