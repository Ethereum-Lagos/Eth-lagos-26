import { motion, AnimatePresence } from 'motion/react';
import { X, User, Mail, Briefcase, CheckCircle } from 'lucide-react';
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
    'Smart Contracts',
    'Layer 2',
    'Gaming',
    'Social Impact',
    'Developer Tools',
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
    
    // Simulate form submission
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-gray-900 border border-purple-500/30 rounded-2xl w-full max-w-2xl my-8 overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
                <h2 className="text-2xl text-white">Register for EthLagos 2026</h2>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-purple-600/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                    <h3 className="text-3xl text-white mb-4">Registration Successful!</h3>
                    <p className="text-gray-400 mb-6 max-w-md mx-auto">
                      Thank you for registering for EthLagos 2026. We've sent a confirmation
                      email to {formData.email}. See you in March!
                    </p>
                    {connectedWallet && (
                      <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-4 mb-6 max-w-md mx-auto">
                        <p className="text-sm text-gray-400 mb-1">Your NFT ticket will be sent to:</p>
                        <p className="text-purple-400 font-mono text-sm">{connectedWallet}</p>
                      </div>
                    )}
                    <button
                      onClick={handleClose}
                      className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {!connectedWallet && (
                      <div className="bg-orange-600/10 border border-orange-500/30 rounded-lg p-4">
                        <p className="text-sm text-orange-400">
                          💡 Connect your wallet to receive an NFT ticket!
                        </p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-gray-800/50 border border-purple-500/20 rounded-lg pl-11 pr-4 py-3 text-white focus:border-purple-500/50 focus:outline-none transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-gray-800/50 border border-purple-500/20 rounded-lg pl-11 pr-4 py-3 text-white focus:border-purple-500/50 focus:outline-none transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          Company / Organization
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-gray-800/50 border border-purple-500/20 rounded-lg pl-11 pr-4 py-3 text-white focus:border-purple-500/50 focus:outline-none transition-colors"
                            placeholder="Acme Inc."
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          Role *
                        </label>
                        <select
                          required
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full bg-gray-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:border-purple-500/50 focus:outline-none transition-colors"
                        >
                          <option value="">Select your role</option>
                          <option value="developer">Developer</option>
                          <option value="designer">Designer</option>
                          <option value="entrepreneur">Entrepreneur</option>
                          <option value="investor">Investor</option>
                          <option value="student">Student</option>
                          <option value="researcher">Researcher</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-3">
                        Areas of Interest
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {interests.map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => handleInterestToggle(interest)}
                            className={`px-3 py-2 rounded-lg border transition-all ${
                              formData.interests.includes(interest)
                                ? 'bg-purple-600/30 border-purple-500/50 text-purple-400'
                                : 'bg-gray-800/50 border-purple-500/20 text-gray-400 hover:border-purple-500/40'
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>

                    {connectedWallet && (
                      <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-4">
                        <p className="text-sm text-gray-400 mb-1">Connected Wallet</p>
                        <p className="text-purple-400 font-mono text-sm">{connectedWallet}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        'Complete Registration'
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
