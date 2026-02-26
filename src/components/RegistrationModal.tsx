import { motion, AnimatePresence } from 'motion/react';
import { X, User, Mail, Briefcase, CheckCircle, Globe, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  connectedWallet: string | null;
}

export function RegistrationModal({ isOpen, onClose, connectedWallet }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interests: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const interests = [
    'DeFi',
    'NFTs',
    'DAOs',
    'Scaling',
    'Privacy',
    'Security',
    'Social',
    'Infra',
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      interests: [],
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#001929]/90 backdrop-blur-xl z-[100]"
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#001929] border border-white/10 rounded-[40px] w-full max-w-2xl my-8 overflow-hidden shadow-[0_0_100px_rgba(255,114,170,0.1)] relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF72AA]/5 rounded-full blur-[100px] -mr-20 -mt-20" />

              {/* Header */}
              <div className="flex items-center justify-between p-8 border-b border-white/5 relative z-10">
                <div>
                  <h2 className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Join the <span className="text-[#FF72AA]">Movement</span></h2>
                  <p className="text-white/40 text-sm font-medium">Register for EthLagos 2026</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center transition-all group"
                >
                  <X className="w-5 h-5 text-white/40 group-hover:text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 relative z-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-[#FF72AA]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-12 h-12 text-[#FF72AA]" />
                    </div>
                    <h3 className="text-4xl font-black text-white mb-4">You're In!</h3>
                    <p className="text-white/60 mb-10 max-w-md mx-auto text-lg">
                      Welcome to the community. We've sent a special invitation to your inbox. Get ready for an unforgettable experience in Lagos.
                    </p>
                    <button
                      onClick={handleClose}
                      className="px-12 py-4 bg-[#FF72AA] text-white rounded-2xl font-black shadow-xl shadow-[#FF72AA]/20 hover:scale-[1.02] transition-all"
                    >
                      LET'S GO
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-white/30 ml-1">Full Name</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-[#FF72AA] transition-colors" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:border-[#FF72AA]/50 focus:outline-none transition-all"
                            placeholder="Vitalik Buterin"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-white/30 ml-1">Email Address</label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-[#FF72AA] transition-colors" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:border-[#FF72AA]/50 focus:outline-none transition-all"
                            placeholder="vb@ethereum.org"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-white/30 ml-1">Role</label>
                        <select
                          required
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white focus:border-[#FF72AA]/50 focus:outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#001929]">Select Role</option>
                          <option value="developer" className="bg-[#001929]">Developer</option>
                          <option value="founder" className="bg-[#001929]">Founder</option>
                          <option value="investor" className="bg-[#001929]">Investor</option>
                          <option value="creator" className="bg-[#001929]">Artist / Creator</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-white/30 ml-1">Company</label>
                        <div className="relative group">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-[#FF72AA] transition-colors" />
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:border-[#FF72AA]/50 focus:outline-none transition-all"
                            placeholder="Ethereum Foundation"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-widest text-white/30 ml-1">Interests</label>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => handleInterestToggle(interest)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${formData.interests.includes(interest)
                                ? 'bg-[#FF72AA] border-[#FF72AA] text-white shadow-lg shadow-[#FF72AA]/20'
                                : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30'
                              }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-5 bg-[#FF72AA] hover:bg-[#ff5a99] disabled:opacity-50 text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-[#FF72AA]/20 flex items-center justify-center gap-3"
                    >
                      {submitting ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>SECUREING YOUR SPOT...</span>
                        </>
                      ) : (
                        'COMPLETE REGISTRATION'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
