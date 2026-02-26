import { motion } from 'motion/react';
import logo from '../assets/logo.png';

export function LogoShowcase() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-[#00121D] via-[#001929] to-[#001929] relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background radial glow */}
            <div className="absolute inset-0 bg-[#FF72AA]/5 blur-[150px] rounded-full transform -translate-y-1/2" />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative z-10 w-full flex flex-col items-center justify-center text-center"
            >
                <motion.div
                    animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative flex flex-col items-center"
                >
                    <img
                        src={logo}
                        alt="ETH Lagos Logo Showcase"
                        className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] object-contain drop-shadow-[0_0_80px_rgba(255,114,170,0.3)] mx-auto"
                    />
                </motion.div>

                <div className="mt-8 text-center px-2">
                    <div className="text-[#FF72AA] font-black text-xs uppercase tracking-[0.5em] mb-2 opacity-60">The Heart of Africa's Ethereum Community</div>
                    <h3 className="text-white text-3xl font-black uppercase tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        One Community. <span className="text-[#FF72AA]">Limitless Innovation.</span>
                    </h3>
                </div>
            </motion.div>
        </section>
    );
}
