import { Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001929] py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-white/40 text-sm font-bold uppercase tracking-widest">
          © {currentYear} ETHEREUM NIGERIA. ALL RIGHTS RESERVED.
        </div>

        <div className="flex items-center gap-6">
          <SocialLink href="https://www.linkedin.com/company/ethereum-lagos" icon={Linkedin} />
          <SocialLink href="https://x.com/EthereumLagos" icon={Twitter} />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      className="text-white/40 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}
