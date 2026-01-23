import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-background.jpg';
import eventTitleImage from '@/assets/event-title.png';
import CountdownTimer from './CountdownTimer';
import VideoBackground from './VideoBackground';
import { SequencePhase } from '@/hooks/useInvestigateSequence';

interface HeroSectionProps {
  phase: SequencePhase;
  elapsedTime: number;
  onInvestigate: () => void;
}

const VIDEO_1 = 'https://res.cloudinary.com/dydplsxdj/video/upload/v1769104411/WhatsApp_Video_2026-01-22_at_10.15.31_AM_fgai4j.mp4';
const VIDEO_2 = 'https://res.cloudinary.com/dydplsxdj/video/upload/v1769104462/WhatsApp_Video_2026-01-22_at_10.15.32_AM_hwlvb7.mp4';

// Element animation config with subtle random delays for organic feel
const elementConfigs = [
  { id: 'title', delay: 0 },
  { id: 'mission', delay: 0.15 },
  { id: 'countdown', delay: 0.3 },
  { id: 'warning', delay: 0.45 },
  { id: 'button', delay: 0.6 },
  { id: 'waveform', delay: 0.75 },
];

const HeroSection = ({ phase, elapsedTime, onInvestigate }: HeroSectionProps) => {
  const isAnimating = phase !== 'idle';
  
  // Calculate animation progress for each element (0-1 over 8 seconds)
  const getElementStyle = (delay: number) => {
    if (!isAnimating) return {};
    
    // Adjust elapsed time by element's delay for staggered effect
    const adjustedTime = Math.max(0, elapsedTime - delay);
    const progress = Math.min(adjustedTime / 7.5, 1); // Complete before 8s
    
    // 180 degree rotation with rotateX for flip effect
    const rotation = progress * 180;
    
    // Moon gravity - slow, floaty upward movement
    // Use cubic-bezier-like easing manually for moon gravity feel
    const easedProgress = 1 - Math.pow(1 - progress, 2); // ease-out
    const translateY = -easedProgress * 80; // Move up 80vh
    
    // Fade out during phase 2-3
    let opacity = 1;
    let blur = 0;
    if (phase === 'phase2' || phase === 'phase3') {
      const fadeProgress = Math.min((elapsedTime - 8) / 2, 1);
      opacity = 1 - fadeProgress;
      blur = fadeProgress * 8;
    }
    
    return {
      transform: `perspective(1000px) rotateX(${rotation}deg) translateY(${translateY}vh)`,
      opacity,
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
      transition: 'filter 0.3s ease-out',
    };
  };

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

      {/* Content - Each element animates independently */}
      <div className="relative z-10 text-center px-4 mt-20">
        {/* Title Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={getElementStyle(elementConfigs[0].delay)}
          className="tech-border bg-card/30 backdrop-blur-sm px-6 py-3 mb-8 inline-block origin-center"
        >
          <span className="font-terminal text-sm md:text-base text-muted-foreground">
            <span className="font-terminal text-sm md:text-base text-muted-foreground">
              <img
                src={eventTitleImage}
                className="text-base md:text-lg lg:text-xl"
              />
            </span>
          </span>
        </motion.div>

        {/* Mission Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={getElementStyle(elementConfigs[1].delay)}
          className="tech-border bg-card/30 backdrop-blur-sm px-8 py-4 mb-8 max-w-xl mx-auto origin-center"
        >
          <h1 className="font-terminal text-xl md:text-2xl text-foreground tracking-wider">
            Organized By CSE DEPARTMENT
          </h1>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={getElementStyle(elementConfigs[2].delay)}
          className="tech-border bg-card/30 backdrop-blur-sm px-8 py-6 mb-6 inline-block origin-center"
        >
          <CountdownTimer />
        </motion.div>

        {/* Warning Message */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={getElementStyle(elementConfigs[3].delay)}
          className="tech-border bg-card/30 backdrop-blur-sm px-8 py-4 mb-8
             w-[420px] mx-auto origin-center"
        >
          GATE OPENING IMMINENT.<br />
          HAWKINS LAB UNDER ATTACK. PROTECT THE PARTY.
        </motion.p>

        {/* CTA Button */}
        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={getElementStyle(elementConfigs[4].delay)}
          whileHover={!isAnimating ? { scale: 1.05 } : {}}
          whileTap={!isAnimating ? { scale: 0.98 } : {}}
          onClick={onInvestigate}
          disabled={isAnimating}
          className="btn-investigate origin-center"
        >
          INVESTIGATE
        </motion.button>

        {/* Decorative Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={getElementStyle(elementConfigs[5].delay)}
          className="mt-12 max-w-2xl mx-auto origin-center"
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
