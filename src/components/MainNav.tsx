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
      className="flex flex-wrap items-center justify-center gap-8 px-6"
    >
      {navItems.map((item, index) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`text-white hover:text-[#FF72AA] transition-colors pb-1 ${
            item.id === 'agenda' ? 'border-b-2 border-[#FF72AA]' : ''
          }`}
        >
          {item.label}
        </button>
      ))}
    </motion.nav>
  );
}
