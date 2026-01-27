import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Event } from '@/data/events';
import { useEffect } from 'react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
}

const EventModal = ({ isOpen, onClose, event }: EventModalProps) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
          >
            <div className="tech-border bg-card/95 backdrop-blur-md w-full max-w-4xl h-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden relative flex flex-col">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 tech-border bg-background/80 p-1.5 sm:p-2 text-foreground hover:text-accent transition-colors"
              >
                <X size={16} className="sm:hidden" />
                <X size={20} className="hidden sm:block" />
              </motion.button>

              {/* Content */}
              <div className="pt-16 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 md:px-8 lg:px-12 overflow-y-auto max-h-full scrollbar-hide">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-4 sm:mb-8"
                >
                  {/* Event Image */}
                  <div className="relative h-32 sm:h-48 md:h-64 overflow-hidden tech-border mb-4 sm:mb-6">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4 sm:mb-4 mt-8">
                    <div className={`tech-border px-2 sm:px-4 py-1 sm:py-2 inline-block text-xs sm:text-sm font-terminal tracking-wider ${
                      event.category === 'technical' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {event.category === 'technical' ? 'TECHNICAL EVENT' : 'NON-TECHNICAL EVENT'}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-stranger text-xl sm:text-3xl md:text-4xl lg:text-5xl glow-text tracking-wider mb-2 sm:mb-4 mt-8">
                    {event.title}
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mb-4 sm:mb-8"
                >
                  <h3 className="font-stranger text-base sm:text-xl md:text-2xl text-foreground mb-2 sm:mb-4 tracking-wider">
                    DESCRIPTION
                  </h3>
                  <div className="tech-border bg-background/50 p-3 sm:p-6">
                    <p className="font-terminal text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed tracking-wider">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-accent">
                      <span>🔗</span>
                      <a href='https://drive.google.com/file/d/1cAO941TtJCrtwuW-BQAEZL5d7nimiQ8_/view?usp=drivesdk' target="_blank" rel="noopener noreferrer" className="font-terminal text-sm sm:text-base md:text-lg leading-relaxed tracking-wider">
                        Resource
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Rules */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <h3 className="font-stranger text-base sm:text-xl md:text-2xl text-foreground mb-2 sm:mb-4 tracking-wider">
                    RULES & REGULATIONS
                  </h3>
                  <div className="tech-border bg-background/50 p-3 sm:p-6">
                    <ul className="space-y-2 sm:space-y-3">
                      {event.rules.map((rule, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                          className="font-terminal text-sm sm:text-base md:text-lg text-muted-foreground tracking-wider flex items-start"
                        >
                          <span className="text-accent mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-sm">▶</span>
                          {rule}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <h3 className="font-stranger text-xl md:text-2xl text-foreground mb-4 tracking-wider mt-8">
                    Event Connect
                  </h3>
                  <div className="tech-border bg-background/50 p-6">
                    <ul className="space-y-2 sm:space-y-3">
                      {event.coordinatorDetails.map((each, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                          className="font-terminal text-sm sm:text-base md:text-lg text-muted-foreground tracking-wider flex items-center"
                        >
                          <span className="text-accent mr-3 mt-1">▶</span>
                          <span>{each.studentCoordinator}</span>
                          <span className="ml-4">
                            <a
                              href={`tel:${each.contact.replace(/\s/g, '')}`}
                              className="font-terminal text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors"
                            >
                              {each.contact}
                            </a>
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Apply Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-4 sm:mt-8"
                >
                  <motion.a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px hsl(var(--accent) / 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full text-center py-3 sm:py-4 tech-border bg-accent/20 hover:bg-accent/30 text-accent font-terminal text-base sm:text-lg tracking-wider transition-all duration-300"
                  >
                    APPLY NOW
                  </motion.a>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="mt-4 sm:mt-8 hidden sm:block"
                >
                  <svg className="w-full h-8" viewBox="0 0 400 30" fill="none">
                    <path 
                      d="M0 15 Q 50 5, 100 15 T 200 15 T 300 15 T 400 15" 
                      stroke="hsl(var(--neon-cyan))" 
                      strokeWidth="1"
                      fill="none"
                      className="animate-pulse"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Corner decorations - hidden on very small screens */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-4 h-4 sm:w-8 sm:h-8 border-t-2 border-l-2 border-neon-cyan opacity-70 hidden sm:block" />
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-4 h-4 sm:w-8 sm:h-8 border-t-2 border-r-2 border-neon-cyan opacity-70 hidden sm:block" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-4 h-4 sm:w-8 sm:h-8 border-b-2 border-l-2 border-neon-cyan opacity-70 hidden sm:block" />
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-4 h-4 sm:w-8 sm:h-8 border-b-2 border-r-2 border-neon-cyan opacity-70 hidden sm:block" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EventModal;