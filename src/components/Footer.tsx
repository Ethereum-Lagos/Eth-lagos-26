import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#2d3a28] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#c4ff0e] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#c4ff0e] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#c4ff0e] transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#c4ff0e] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#c4ff0e] transition-colors">
              Terms of Service
            </button>
            <button onClick={() => scrollToSection('home')} className="hover:text-[#c4ff0e] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#c4ff0e] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
