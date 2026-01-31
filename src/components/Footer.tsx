import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { EthereumLogo } from './EthereumLogo';

export function Footer() {
  return (
    <footer className="bg-gray-900/80 border-t border-purple-500/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <EthereumLogo className="w-8 h-8" />
              <span className="text-xl text-white">
                <span className="text-purple-400">Eth</span>Lagos
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Africa's premier Ethereum conference bringing together the brightest minds in blockchain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#agenda" className="hover:text-purple-400 transition-colors">Agenda</a></li>
              <li><a href="#speakers" className="hover:text-purple-400 transition-colors">Speakers</a></li>
              <li><a href="#hackathon" className="hover:text-purple-400 transition-colors">Hackathon</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Venue</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Sponsors</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="p-2 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-colors">
                <Twitter className="w-4 h-4 text-purple-400" />
              </a>
              <a href="#" className="p-2 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-colors">
                <Linkedin className="w-4 h-4 text-purple-400" />
              </a>
              <a href="#" className="p-2 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-colors">
                <Github className="w-4 h-4 text-purple-400" />
              </a>
              <a href="#" className="p-2 bg-purple-600/20 hover:bg-purple-600/40 rounded-colors">
                <Mail className="w-4 h-4 text-purple-400" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              info@ethlagos.org
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 EthLagos. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
