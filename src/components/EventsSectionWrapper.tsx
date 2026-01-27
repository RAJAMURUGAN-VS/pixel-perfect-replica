import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoBackground from './VideoBackground';
import EventCards from './EventCards';
import { NavigationSection } from '@/hooks/useNavigation';
import heroImage from '@/assets/hero-background.jpg';

interface EventsSectionWrapperProps {
  isActive: boolean;
  onNavigate?: (section: NavigationSection) => void;
}

export type EventsPhase = 'idle' | 'phase1' | 'phase2' | 'phase3' | 'complete';

// Single merged HLS stream with all chunks
const VIDEO_MERGED = '/hls/merged/merged.m3u8';

const EventsSectionWrapper = ({ isActive, onNavigate }: EventsSectionWrapperProps) => {
  const [phase, setPhase] = useState<EventsPhase>('idle');
  const [isAnimating, setIsAnimating] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showEventCards, setShowEventCards] = useState(false);
  const hasStartedRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Skip function to immediately go to Events page
  const handleSkip = useCallback(() => {
    // Clear any running interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // Immediately complete the animation and show event cards
    setPhase('complete');
    setShowEventCards(true);
    setIsAnimating(false);
    setIsVideoEnded(true);
  }, []);

  // Start sequence when section becomes active
  useEffect(() => {
    if (isActive && !hasStartedRef.current) {
      hasStartedRef.current = true;
      // Immediate start - no delay
      setIsAnimating(true);
      setElapsedTime(0);
      setPhase('phase1');
      setIsVideoEnded(false);
      setShowEventCards(false);
    }

    if (!isActive) {
      hasStartedRef.current = false;
      setPhase('idle');
      setIsAnimating(false);
      setElapsedTime(0);
      setIsVideoEnded(false);
      setShowEventCards(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [isActive]);

  // Animation sequence timing
  useEffect(() => {
    if (!isAnimating) return;

    const startTime = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      setElapsedTime(elapsed);

      if (elapsed < 8) {
        setPhase('phase1');
      } else if (elapsed < 10) {
        setPhase('phase2');
      } else {
        setPhase('complete');
        setShowEventCards(true);
        setIsAnimating(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, 16);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isAnimating]);

  const onSecondVideoEnd = useCallback(() => {
    setIsVideoEnded(true);
  }, []);

  if (!isActive) return null;

  const isComplete = phase === 'complete';

  return (
    <div className="min-h-screen relative">
      {!isComplete && (
        <div className="fixed inset-0 z-40">
          {/* Static Background Image - Shows before video starts */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})`, zIndex: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
          </div>

          {/* Single merged video that plays all chunks sequentially */}
          <VideoBackground
            src={VIDEO_MERGED}
            isActive={phase === 'phase1' || phase === 'phase2' || phase === 'phase3'}
          />

          {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50 z-[1]" />

            {/* Animated transition elements */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: elapsedTime < 8 ? 1 : 0,
                  scale: 1,
                  rotateX: Math.min(elapsedTime / 7.5, 1) * 180,
                  y: -Math.min(elapsedTime / 7.5, 1) * 80 + 'vh'
                }}
                transition={{ duration: 0.3 }}
                className="text-center origin-center"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="tech-border bg-card/30 backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-4"
                  animate={{
                    boxShadow: [
                      '0 0 20px hsl(var(--neon-cyan) / 0.3)',
                      '0 0 40px hsl(var(--neon-cyan) / 0.5)',
                      '0 0 20px hsl(var(--neon-cyan) / 0.3)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <h2 className="font-stranger text-lg sm:text-2xl md:text-4xl glow-text tracking-wider">
                    ENTERING THE UPSIDE DOWN
                  </h2>
                </motion.div>
              </motion.div>
            </div>

            {/* Skip Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={handleSkip}
              className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 tech-border px-4 py-2 sm:px-6 sm:py-3 bg-card/80 backdrop-blur-sm hover:bg-card transition-all"
            >
              <span className="font-terminal text-xs sm:text-sm md:text-base text-foreground tracking-wider hover:text-accent transition-colors">
                SKIP
              </span>
            </motion.button>
          </div>
        )}

      {/* Event Cards - Show after sequence completes */}
      {showEventCards && (
        <EventCards
          isVisible={showEventCards}
          isVideoEnded={isVideoEnded}
          onVideoEnd={onSecondVideoEnd}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};

export default EventsSectionWrapper;
