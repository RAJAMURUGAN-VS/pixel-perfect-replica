import { motion } from 'framer-motion'
import logo from '@/assets/RMDEC.png';

interface HeaderProps {
  onNavigate?: (section: string) => void
}

const Header = ({ onNavigate }: HeaderProps) => {
  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section)
    } else {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side: Logo & College Text */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <img
            src={logo}
            alt="College Logo"
            className="h-10 w-10 object-contain"
          />
          <div className="leading-tight">
            <h1 className="font-terminal text-sm md:text-base text-foreground tracking-wide">
              R.M.D. Engineering College
            </h1>
            <p className="font-terminal text-xs text-muted-foreground">
              (An Autonomous Institution)
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          {['home', 'about', 'events'].map((section, index) => (
            <motion.button
              key={section}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, color: 'hsl(var(--accent))' }}
              onClick={() => handleNavClick(section)}
              className="font-terminal text-base md:text-lg text-foreground/80 tracking-wider transition-colors capitalize hidden md:block"
            >
              {section.toUpperCase()}
            </motion.button>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="tech-border px-4 py-2 bg-card/80 backdrop-blur-sm"
          >
            <span className="font-terminal text-lg md:text-xl text-foreground tracking-wider cursor-pointer hover:text-accent transition-colors">
              THE LATEST
            </span>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
