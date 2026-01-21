import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-background.jpg';
import CountdownTimer from './CountdownTimer';
import VideoBackground from './VideoBackground';

interface HeroSectionProps {
  onExploreEvents: () => void;
}

const ATMOSPHERIC_VIDEO = 'https://res.cloudinary.com/dydplsxdj/video/upload/v1768999824/WhatsApp_Video_2026-01-21_at_6.00.55_PM_bhc5rj.mp4';

const HeroSection = ({ onExploreEvents }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Atmospheric Video Background - Full Screen Only */}
      <VideoBackground 
        src={ATMOSPHERIC_VIDEO} 
        isActive={true}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-background/50 via-transparent to-background/70 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 mt-20 w-full">
        {/* Event Name */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <h1 className="font-stranger text-6xl md:text-8xl lg:text-9xl glow-text tracking-[0.2em] mb-6">
            RENDEZVOUS
          </h1>
          <div className="font-stranger text-3xl md:text-4xl lg:text-5xl text-accent tracking-[0.15em]">
            2026
          </div>
        </motion.div>

        {/* Event Description */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10 max-w-3xl mx-auto"
        >
          <p className="font-terminal text-xl md:text-2xl lg:text-3xl text-foreground tracking-wider leading-relaxed glow-text mb-4">
            ENTER THE UPSIDE DOWN OF TECHNOLOGY
          </p>
          <p className="font-terminal text-base md:text-lg lg:text-xl text-muted-foreground/80 tracking-wider">
            Where code meets chaos and innovation breaks reality
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10"
        >
          <div className="font-terminal text-base md:text-lg lg:text-xl text-accent tracking-wider mb-6">
            EVENT STARTS IN
          </div>
          <CountdownTimer />
        </motion.div>

        {/* CTA Button */}
        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(var(--accent) / 0.6)' }}
          whileTap={{ scale: 0.98 }}
          onClick={onExploreEvents}
          className="tech-border bg-accent/20 hover:bg-accent/30 text-accent hover:text-accent-foreground px-10 py-5 md:px-12 md:py-6 font-terminal text-xl md:text-2xl lg:text-3xl tracking-wider transition-all duration-300 backdrop-blur-sm"
        >
          EXPLORE EVENTS
        </motion.button>

        {/* Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 max-w-2xl mx-auto"
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

export default HeroSection;