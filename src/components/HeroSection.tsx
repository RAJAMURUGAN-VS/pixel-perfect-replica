import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-background.jpg';
import CountdownTimer from './CountdownTimer';
import VideoBackground from './VideoBackground';
import { SequencePhase } from '@/hooks/useInvestigateSequence';

interface HeroSectionProps {
  phase: SequencePhase;
  elapsedTime: number;
  onInvestigate: () => void;
}

const VIDEO_1 = 'https://res.cloudinary.com/dydplsxdj/video/upload/v1768999824/WhatsApp_Video_2026-01-21_at_6.00.55_PM_bhc5rj.mp4';
const VIDEO_2 = 'https://res.cloudinary.com/dydplsxdj/video/upload/v1768999844/WhatsApp_Video_2026-01-21_at_6.07.22_PM_gsczzx.mp4';

const HeroSection = ({ phase, elapsedTime, onInvestigate }: HeroSectionProps) => {
  const isAnimating = phase !== 'idle';
  
  // Calculate animation progress (0-1) for the 8 second phase
  const rotationProgress = Math.min(elapsedTime / 8, 1);
  const rotation = rotationProgress * 360;
  const translateY = -rotationProgress * 100;
  
  // Fade out progress for phase 2-3 (8s-10s)
  const fadeProgress = phase === 'phase2' || phase === 'phase3' 
    ? Math.min((elapsedTime - 8) / 2, 1) 
    : 0;
  const elementOpacity = 1 - fadeProgress;
  const elementBlur = fadeProgress * 10;

  // Hide entirely when complete
  if (phase === 'complete') return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Video Backgrounds */}
      <VideoBackground 
        src={VIDEO_1} 
        isActive={phase === 'phase1'} 
      />
      <VideoBackground 
        src={VIDEO_2} 
        isActive={phase === 'phase2' || phase === 'phase3'} 
      />

      {/* Dark overlay for videos */}
      {isAnimating && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50 z-[1]" />
      )}

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 mt-20"
        style={{
          transform: isAnimating 
            ? `rotate(${rotation}deg) translateY(${translateY}vh)` 
            : 'none',
          opacity: elementOpacity,
          filter: elementBlur > 0 ? `blur(${elementBlur}px)` : 'none',
          transition: 'filter 0.5s ease-out',
        }}
      >
        {/* Title Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="tech-border bg-card/80 backdrop-blur-sm px-6 py-3 mb-8 inline-block"
        >
          <span className="font-terminal text-sm md:text-base text-muted-foreground">TITLE</span>
        </motion.div>

        {/* Mission Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="tech-border bg-card/90 backdrop-blur-sm px-8 py-4 mb-8 max-w-xl mx-auto"
        >
          <h1 className="font-terminal text-xl md:text-2xl text-foreground tracking-wider">
            CURRENT MISSION: FIND 011
          </h1>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="tech-border bg-card/80 backdrop-blur-sm px-8 py-6 mb-6 inline-block"
        >
          <CountdownTimer />
        </motion.div>

        {/* Warning Message */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-terminal text-base md:text-lg text-foreground/90 mb-8 tracking-wider max-w-md mx-auto"
        >
          GATE OPENING IMMINENT.<br />
          HAWKINS LAB UNDER ATTACK. PROTECT THE PARTY.
        </motion.p>

        {/* CTA Button */}
        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onInvestigate}
          className="btn-investigate"
        >
          INVESTIGATE
        </motion.button>

        {/* Decorative Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1.2 }}
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
