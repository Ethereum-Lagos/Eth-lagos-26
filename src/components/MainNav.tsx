import { motion } from 'motion/react';

export function MainNav() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'agenda', label: 'Agenda' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'hackathon', label: 'Hackathon' },
    { id: 'incubation', label: 'Project Incubation' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex flex-wrap items-center justify-center gap-12 px-6 border-b border-white/5 w-full max-w-7xl"
    >
      {navItems.map((item, index) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="text-white/40 hover:text-[#FF72AA] transition-all pb-6 text-sm font-black uppercase tracking-widest relative group"
        >
          {item.label}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF72AA] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </button>
      ))}
    </motion.nav>
  );
}
