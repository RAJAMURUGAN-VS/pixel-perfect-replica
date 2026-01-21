import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    subtitle: string;
    description: string;
    rules: string[];
    category: 'technical' | 'non-technical';
  } | null;
}

const EventModal = ({ isOpen, onClose, event }: EventModalProps) => {
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
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
          >
            <div className="tech-border bg-card/95 backdrop-blur-md w-full max-w-4xl max-h-full overflow-hidden relative">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 tech-border bg-background/80 p-2 text-foreground hover:text-accent transition-colors"
              >
                <X size={20} />
              </motion.button>

              {/* Content */}
              <div className="p-6 md:p-8 lg:p-12 overflow-y-auto max-h-full">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-8"
                >
                  {/* Category Badge */}
                  <div className="mb-4">
                    <div className={`tech-border px-4 py-2 inline-block text-sm font-terminal tracking-wider ${
                      event.category === 'technical' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {event.category === 'technical' ? 'TECHNICAL EVENT' : 'NON-TECHNICAL EVENT'}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-stranger text-3xl md:text-4xl lg:text-5xl glow-text tracking-wider mb-4">
                    {event.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="font-terminal text-lg md:text-xl text-accent tracking-wider">
                    {event.subtitle}
                  </p>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mb-8"
                >
                  <h3 className="font-stranger text-xl md:text-2xl text-foreground mb-4 tracking-wider">
                    DESCRIPTION
                  </h3>
                  <div className="tech-border bg-background/50 p-6">
                    <p className="font-terminal text-base md:text-lg text-muted-foreground leading-relaxed tracking-wider">
                      {event.description}
                    </p>
                  </div>
                </motion.div>

                {/* Rules */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <h3 className="font-stranger text-xl md:text-2xl text-foreground mb-4 tracking-wider">
                    RULES & REGULATIONS
                  </h3>
                  <div className="tech-border bg-background/50 p-6">
                    <ul className="space-y-3">
                      {event.rules.map((rule, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                          className="font-terminal text-base md:text-lg text-muted-foreground tracking-wider flex items-start"
                        >
                          <span className="text-accent mr-3 mt-1">▶</span>
                          {rule}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="mt-8"
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

              {/* Corner decorations */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-neon-cyan opacity-70" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-neon-cyan opacity-70" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-neon-cyan opacity-70" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-neon-cyan opacity-70" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EventModal;