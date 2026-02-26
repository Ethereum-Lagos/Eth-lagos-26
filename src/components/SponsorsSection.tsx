import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const partners = {
    platinum: [
        { name: 'Ethereum Foundation', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024' },
        { name: 'Polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=024' },
    ],
    gold: [
        { name: 'Aave', logo: 'https://cryptologos.cc/logos/aave-aave-logo.png?v=024' },
        { name: 'Uniswap', logo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=024' },
        { name: 'Optimism', logo: 'https://cryptologos.cc/logos/optimism-ethereum-op-logo.png?v=024' },
        { name: 'Arbitrum', logo: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=024' },
    ],
    silver: [
        { name: 'Chainlink', logo: 'https://cryptologos.cc/logos/chainlink-link-logo.png?v=024' },
        { name: 'The Graph', logo: 'https://cryptologos.cc/logos/the-graph-grt-logo.png?v=024' },
        { name: 'ENS', logo: 'https://cryptologos.cc/logos/ethereum-name-service-ens-logo.png?v=024' },
        { name: 'Gitcoin', logo: 'https://cryptologos.cc/logos/gitcoin-gtc-logo.png?v=024' },
    ]
};

export function SponsorsSection() {
    return (
        <section className="py-24 bg-[#FDFAFC] relative overflow-hidden" id="partners">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 bg-[#FF72AA]/10 border border-[#FF72AA]/20 rounded-full text-[#FF72AA] text-sm font-black mb-6 uppercase tracking-widest"
                    >
                        PARTNERS
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black text-[#001929] mb-6 tracking-tighter" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        BACKED BY THE <span className="text-[#FF72AA]">BEST</span>
                    </h2>
                    <p className="text-[#001929]/60 text-lg max-w-2xl mx-auto font-medium">
                        Supported by leading protocols and organizations in the Ethereum ecosystem.
                    </p>
                </div>

                {/* Tier Groupings */}
                <div className="space-y-20">
                    {/* Platinum */}
                    <div className="flex flex-col items-center">
                        <div className="text-center mb-8">
                            <span className="text-xs font-black tracking-[0.4em] text-[#001929]/30 uppercase">Platinum Partners</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {partners.platinum.map((p, i) => <PartnerCard key={p.name} partner={p} tier="platinum" delay={i * 0.1} />)}
                        </div>
                    </div>

                    {/* Gold */}
                    <div className="flex flex-col items-center">
                        <div className="text-center mb-8">
                            <span className="text-xs font-black tracking-[0.4em] text-[#001929]/30 uppercase">Gold Partners</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {partners.gold.map((p, i) => <PartnerCard key={p.name} partner={p} tier="gold" delay={i * 0.1} />)}
                        </div>
                    </div>

                    {/* Silver */}
                    <div className="flex flex-col items-center">
                        <div className="text-center mb-8">
                            <span className="text-xs font-black tracking-[0.4em] text-[#001929]/30 uppercase">Silver Partners</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {partners.silver.map((p, i) => <PartnerCard key={p.name} partner={p} tier="silver" delay={i * 0.1} />)}
                        </div>
                    </div>

                </div>

                <div className="mt-24 text-center">
                    <p className="text-[#001929]/40 font-bold mb-6">Interested in partnering with ETH Lagos?</p>
                    <a
                        href="mailto:info@ethlagos.ng"
                        className="inline-flex px-10 py-4 bg-[#001929]/5 border border-[#001929]/10 text-[#001929] rounded-2xl font-black text-lg hover:bg-[#001929] hover:text-white transition-all"
                    >
                        BECOME A PARTNER
                    </a>
                </div>
            </div>
        </section>
    );
}

function PartnerCard({ partner, tier, delay }: { partner: any, tier: string, delay: number }) {
    const sizeClasses = {
        platinum: 'h-40 w-72 px-12 md:h-44 md:w-80',
        gold: 'h-32 w-52 px-8 md:h-36 md:w-60',
        silver: 'h-24 w-40 px-6 md:h-28 md:w-48',
    };

    const imgSize = {
        platinum: 'h-16',
        gold: 'h-12',
        silver: 'h-8',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            viewport={{ once: true }}
            className={`${sizeClasses[tier as keyof typeof sizeClasses]} bg-white rounded-[24px] border border-[#001929]/5 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-[#001929]/5 group`}
        >
            <ImageWithFallback
                src={partner.logo}
                alt={partner.name}
                className={`${imgSize[tier as keyof typeof sizeClasses]} w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mb-3`}
            />
            <span className="text-[10px] font-black tracking-widest text-[#001929]/20 uppercase group-hover:text-[#001929]/40 transition-colors">
                {partner.name}
            </span>
        </motion.div>
    );
}
