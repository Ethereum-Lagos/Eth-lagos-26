import { motion, AnimatePresence } from 'motion/react';
import { X, Wallet } from 'lucide-react';
import { useState } from 'react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (walletAddress: string) => void;
}

export function WalletModal({ isOpen, onClose, onConnect }: WalletModalProps) {
  const [connecting, setConnecting] = useState<string | null>(null);

  const wallets = [
    {
      name: 'MetaMask',
      icon: '🦊',
      description: 'Connect using MetaMask wallet',
    },
    {
      name: 'WalletConnect',
      icon: '📱',
      description: 'Scan with WalletConnect',
    },
    {
      name: 'Coinbase Wallet',
      icon: '🔵',
      description: 'Connect with Coinbase Wallet',
    },
    {
      name: 'Rainbow',
      icon: '🌈',
      description: 'Connect using Rainbow wallet',
    },
  ];

  const handleConnect = async (walletName: string) => {
    setConnecting(walletName);
    
    // Simulate wallet connection
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate a mock wallet address
    const mockAddress = '0x' + Math.random().toString(16).substring(2, 42).padEnd(40, '0');
    
    onConnect(mockAddress);
    setConnecting(null);
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
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#002340] border border-[#FF72AA]/30 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#FF72AA]/20">
                <div className="flex items-center gap-3">
                  <Wallet className="w-6 h-6 text-[#FF72AA]" />
                  <h2 className="text-2xl text-white">Connect Wallet</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-[#FF72AA]/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-400 mb-6">
                  Connect your wallet to access exclusive features and register for events.
                </p>

                <div className="space-y-3">
                  {wallets.map((wallet) => (
                    <button
                      key={wallet.name}
                      onClick={() => handleConnect(wallet.name)}
                      disabled={connecting !== null}
                      className="w-full bg-[#001929] hover:bg-[#003050] border border-[#59A9DC]/20 hover:border-[#FF72AA]/50 rounded-xl p-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{wallet.icon}</span>
                        <div className="flex-1 text-left">
                          <div className="text-white mb-1">{wallet.name}</div>
                          <div className="text-sm text-gray-400">{wallet.description}</div>
                        </div>
                        {connecting === wallet.name && (
                          <div className="w-5 h-5 border-2 border-[#FF72AA] border-t-transparent rounded-full animate-spin" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <p className="text-xs text-gray-500 mt-6 text-center">
                  By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
