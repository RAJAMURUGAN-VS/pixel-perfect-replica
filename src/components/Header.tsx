import { motion } from 'framer-motion';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="font-stranger text-xl md:text-2xl glow-text tracking-[0.2em] cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          RENDEZVOUS<br />2026
        </motion.div>
        
        <nav className="flex items-center gap-6">
          {['home', 'events', 'about', 'transport', 'contact'].map((section, index) => (
            <motion.button
              key={section}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, color: 'hsl(var(--accent))' }}
              onClick={() => handleNavClick(section)}
              className="font-terminal text-sm md:text-base text-foreground/80 tracking-wider transition-colors capitalize hidden md:block hover:text-accent"
            >
              {section === 'about' ? 'ABOUT US' : 
               section === 'contact' ? 'CONTACT US' : 
               section.toUpperCase()}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
