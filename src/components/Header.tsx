import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/RMDEC.png';
import acmLogo from '@/assets/acm.png';

interface HeaderProps {
  currentSection?: string;
}

const Header = ({ currentSection = 'home' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { key: string; label: string; isExternal?: boolean; href?: string; to?: string }[] = [
    { key: 'home', label: 'HOME', to: '/' },
    { key: 'about', label: 'ABOUT', to: '/about' },
    { key: 'events', label: 'EVENTS', to: '/events' },
    { key: 'crew', label: 'THE CREW', to: '/crew' },
    { key: 'contact', label: 'CONTACT US', to: '/contact' },
    { key: 'bus', label: 'BUS ROUTES', isExternal: true, href: '/rmdbus.pdf' },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundColor: isScrolled ? 'hsl(var(--background) / 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)'
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 px-3 py-3 md:px-8 md:py-4 ${isScrolled ? 'shadow-lg shadow-black/20' : ''
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Left Side: Logo & College Text */}
          <Link
            to="/"
            className="flex items-center gap-2 md:gap-3 cursor-pointer"
          >
            <img
              src={logo}
              alt="College Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <div className="leading-tight">
              <h1 className="font-[Montserrat] text-sm md:text-base font-bold text-foreground tracking-wide">
                R.M.D. Engineering College
              </h1>
              <p className="font-[Montserrat] text-xs text-muted-foreground">
                (An Autonomous Institution)
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4" aria-label="Main navigation">
            {navItems.map((item, index) => (
              item.isExternal ? (
                <motion.a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, color: 'hsl(var(--accent))' }}
                  className="font-terminal text-base md:text-lg tracking-wider transition-colors text-foreground/80 hover:text-foreground"
                  aria-label={`Open ${item.label} in new tab`}
                >
                  {item.label}
                </motion.a>
              ) : (
                <Link to={item.to!}>
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, color: 'hsl(var(--accent))' }}
                    className={`font-terminal text-base md:text-lg tracking-wider transition-colors block ${currentSection === item.key
                      ? 'text-accent'
                      : 'text-foreground/80 hover:text-foreground'
                      }`}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              )
            ))}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="tech-border bg-card/80 backdrop-blur-sm flex items-center justify-center"
              style={{ padding: '2px' }}
            >
              <img
                src={acmLogo}
                alt="ACM Logo"
                className="h-8 md:h-10 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </motion.div>
          </nav>

          {/* Mobile Menu Button & ACM Logo */}
          <div className="flex md:hidden items-center gap-2">
            <div
              className="tech-border bg-card/80 backdrop-blur-sm flex items-center justify-center"
              style={{ padding: '2px' }}
            >
              <img
                src={acmLogo}
                alt="ACM Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="tech-border bg-card/80 backdrop-blur-sm p-2 text-foreground"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header >

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {
          isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 md:hidden"
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-background/95 backdrop-blur-md"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Menu Content */}
              <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-6 p-8"
              >
                {navItems.map((item, index) => (
                  item.isExternal ? (
                    <motion.a
                      key={item.key}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-stranger text-2xl tracking-wider transition-colors text-foreground/80 hover:text-accent"
                    >
                      {item.label}
                    </motion.a>
                  ) : (
                    <Link to={item.to!} onClick={() => setIsMobileMenuOpen(false)}>
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                        className={`font-stranger text-2xl tracking-wider transition-colors block ${currentSection === item.key
                          ? 'text-accent glow-text'
                          : 'text-foreground/80 hover:text-accent'
                          }`}
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  )
                ))}
              </motion.nav>
            </motion.div>
          )
        }
      </AnimatePresence >
    </>
  )
}

export default Header
