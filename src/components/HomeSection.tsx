import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-background.jpg';
import eventTitleImage from '@/assets/event-title.png';
import CountdownTimer from './CountdownTimer';

interface HomeSectionProps {
  onNavigateToEvents: () => void;
}

const HomeSection = ({ onNavigateToEvents }: HomeSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-3 sm:px-4 mt-16 md:mt-20 w-full max-w-4xl mx-auto">
        {/* Title Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="tech-border bg-card/30 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-8 inline-block origin-center"
        >
          <span className="font-terminal text-sm md:text-base text-muted-foreground">
            <img
              src={eventTitleImage}
              className="h-8 sm:h-10 md:h-auto max-w-[200px] sm:max-w-[280px] md:max-w-none object-contain"
              alt="Event Title"
            />
          </span>
        </motion.div>

        {/* Mission Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="tech-border bg-card/30 backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-4 mb-4 sm:mb-8 max-w-xl mx-auto origin-center"
        >
          <h1 className="font-terminal text-base sm:text-xl md:text-2xl text-foreground tracking-wider">
            Organized By CSE DEPARTMENT
          </h1>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="tech-border bg-card/30 backdrop-blur-sm px-4 sm:px-8 py-4 sm:py-6 mb-4 sm:mb-6 inline-block origin-center"
        >
          <CountdownTimer />
        </motion.div>

        {/* Warning Message */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="tech-border bg-card/30 backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-4 mb-4 sm:mb-8
             w-full max-w-[420px] mx-auto origin-center font-terminal text-sm sm:text-base"
        >
          GATE OPENING IMMINENT.<br />
          HAWKINS LAB UNDER ATTACK. PROTECT THE PARTY.
        </motion.p>

        {/* CTA Button - Navigate to Events */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNavigateToEvents}
          className="btn-investigate origin-center text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
        >
          INVESTIGATE
        </motion.button>

        {/* Decorative Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 sm:mt-12 max-w-2xl mx-auto origin-center hidden sm:block"
        >
          <svg className="w-full h-12" viewBox="0 0 400 50" fill="none">
            <path
              d="M0 25 Q 50 10, 100 25 T 200 25 T 300 25 T 400 25"
              stroke="hsl(var(--neon-cyan))"
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
