import { motion } from 'motion/react';

export function StatsRibbon() {
    const stats = [
        { value: '3', label: 'Days of Innovation' },
        { value: '40+', label: 'Technical Workshops' },
        { value: '20+', label: 'Partner Projects' },
        { value: '100%', label: 'Community Driven' },
    ];

    return (
        <div className="bg-[#00121D] py-16 px-6 border-y border-white/5">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-12 md:gap-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-start text-center md:text-left"
                    >
                        <div className="text-5xl md:text-6xl font-black text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            {stat.value}
                        </div>
                        <div className="text-sm font-bold text-white/30 uppercase tracking-[0.3em]">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
