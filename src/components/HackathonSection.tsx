import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';

export function HackathonSection() {
  return (
    <section id="hackathon" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] rounded-2xl p-8 border border-transparent hover:border-[#c4ff0e]/20 transition-all"
          >
            <h2 className="text-4xl text-white mb-6">Hackathon</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Join Africa's biggest Ethereum hackathon! Build innovative dApps, 
              DeFi protocols, and Web3 solutions over 48 hours. Collaborate with 
              developers, receive mentorship from industry experts, and compete for prizes.
            </p>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-[#c4ff0e] mb-2">
                  <Trophy className="w-5 h-5" />
                  <span className="text-sm font-medium">Prize Pool</span>
                </div>
                <p className="text-white text-2xl font-bold">
                  $50,000 in ETH
                </p>
              </div>
              
              <div className="pt-4 border-t border-gray-800">
                <h3 className="text-white mb-3">Categories:</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Best DeFi Application - $15,000</li>
                  <li>• Best Social Impact Project - $12,000</li>
                  <li>• Best NFT/Creator Tool - $10,000</li>
                  <li>• Best Layer 2 Solution - $8,000</li>
                  <li>• Community Choice Award - $5,000</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] rounded-2xl p-8 border border-transparent hover:border-[#c4ff0e]/20 transition-all"
          >
            <h2 className="text-4xl text-white mb-6">Project Incubation</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Get your Web3 project off the ground with our 3-month incubation program. 
              Selected teams receive funding, technical support, and access to Ethereum's 
              top builders and investors.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-[#c4ff0e] mb-2">Program Benefits:</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Up to $25,000 seed funding</li>
                  <li>• 1-on-1 mentorship from protocol founders</li>
                  <li>• Free co-working space in Lagos</li>
                  <li>• Technical workshops & legal support</li>
                  <li>• Direct access to VC network</li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-gray-800">
                <p className="text-white font-medium mb-2">Application Deadline:</p>
                <p className="text-gray-400 text-sm">March 30, 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
