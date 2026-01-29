import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-background.jpg';
import eventTitleImage from '@/assets/event-title.png';
import CountdownTimer from './CountdownTimer';

import { useNavigate } from 'react-router-dom';

// Transition video - loops in background
const TRANSITION_VIDEO = 'https://d2gfxmzi2tqh5n.cloudfront.net/upscaled-video%20(1).mp4';

// Transition duration in ms before navigating to events
const TRANSITION_DURATION = 4000;

const HomeSection = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Prefetch video on mount for instant playback
  useEffect(() => {
    const video = document.createElement('video');
    video.preload = 'auto';
    video.src = TRANSITION_VIDEO;
    video.load();
  }, []);

  // Handle navigation after transition
  useEffect(() => {
    if (showVideo && !isNavigating) {
      // Set a timeout to navigate after the transition duration
      navigationTimeoutRef.current = setTimeout(() => {
        setIsNavigating(true);
        navigate('/events');
      }, TRANSITION_DURATION);
    }

    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [showVideo, isNavigating, navigate]);

  const handleInvestigate = useCallback(() => {
    setShowVideo(true);
    setIsNavigating(false);

    // Start video playback immediately
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const handleSkip = useCallback(() => {
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }
    setShowVideo(false);
    setIsNavigating(true);
    // Navigate directly to events page when skipping
    navigate('/events');
  }, [navigate]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"    >
      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})`, zIndex: 0 }}
        role="img"
        aria-label="Hero background image"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Video Background - Plays when investigate is clicked */}
      {showVideo && (
        <div className="absolute inset-0" style={{ zIndex: 5 }}>
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={TRANSITION_VIDEO}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
          />
          {/* Dark overlay on video */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50" style={{ zIndex: 8 }} />
        </div>
      )}

      {/* Content */}
      <div className="relative text-center px-3 sm:px-4 mt-16 md:mt-20 w-full max-w-4xl mx-auto" style={{ zIndex: 10 }}>
        {/* Title Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: showVideo ? [1, 0.6, 0.3, 0] : 1,
            y: showVideo ? [0, -5, -10, -15] : 0,
            scale: showVideo ? [1, 0.98, 0.95, 0.9] : 1,
            filter: showVideo ? ['blur(0px)', 'blur(1px)', 'blur(2px)', 'blur(4px)'] : 'blur(0px)'
          }}
          transition={{
            duration: showVideo ? 3.5 : 0.8,
            delay: showVideo ? 0 : 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: showVideo ? [0, 0.3, 0.6, 1] : undefined
          }}
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
          animate={{
            opacity: showVideo ? [1, 0.5, 0.25, 0] : 1,
            y: showVideo ? [0, 5, 10, 15] : 0,
            scale: showVideo ? [1, 0.97, 0.93, 0.88] : 1,
            filter: showVideo ? ['blur(0px)', 'blur(1.5px)', 'blur(3px)', 'blur(5px)'] : 'blur(0px)'
          }}
          transition={{
            duration: showVideo ? 3.8 : 0.8,
            delay: showVideo ? 0.1 : 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: showVideo ? [0, 0.3, 0.6, 1] : undefined
          }}
          className="tech-border bg-card/30 backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-4 mb-4 sm:mb-8 max-w-xl mx-auto origin-center"
        >
          <h1 className="font-terminal text-base sm:text-xl md:text-2xl text-foreground tracking-wider">
            Organized By CSE DEPARTMENT
          </h1>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: showVideo ? [1, 0.55, 0.3, 0] : 1,
            y: showVideo ? [0, -3, -8, -12] : 0,
            scale: showVideo ? [1, 0.96, 0.91, 0.85] : 1,
            filter: showVideo ? ['blur(0px)', 'blur(2px)', 'blur(3.5px)', 'blur(6px)'] : 'blur(0px)'
          }}
          transition={{
            duration: showVideo ? 4 : 0.8,
            delay: showVideo ? 0.2 : 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: showVideo ? [0, 0.3, 0.6, 1] : undefined
          }}
          className="tech-border bg-card/30 backdrop-blur-sm px-4 sm:px-8 py-4 sm:py-6 mb-4 sm:mb-6 inline-block origin-center"
        >
          <CountdownTimer />
        </motion.div>

        {/* Warning Message */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: showVideo ? [1, 0.45, 0.2, 0] : 1,
            y: showVideo ? [0, 8, 15, 20] : 0,
            scale: showVideo ? [1, 0.95, 0.9, 0.82] : 1,
            filter: showVideo ? ['blur(0px)', 'blur(2.5px)', 'blur(4px)', 'blur(7px)'] : 'blur(0px)'
          }}
          transition={{
            duration: showVideo ? 4.2 : 0.8,
            delay: showVideo ? 0.3 : 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: showVideo ? [0, 0.3, 0.6, 1] : undefined
          }}
          className="tech-border bg-card/30 backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-4 mb-4 sm:mb-8
             w-full max-w-[420px] mx-auto origin-center font-terminal text-sm sm:text-base"
        >
          GATE OPENING IMMINENT.<br />
          HAWKINS LAB UNDER ATTACK. PROTECT THE PARTY.
        </motion.p>

        {/* CTA Button - INVESTIGATE */}
        {!showVideo && (
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleInvestigate}
            className="btn-investigate origin-center text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
            aria-label="Start investigation and play video"
          >
            INVESTIGATE
          </motion.button>
        )}

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

      {/* Skip Button - Shows when video is playing */}
      {showVideo && !isNavigating && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={handleSkip}
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 tech-border px-4 py-2 sm:px-6 sm:py-3 bg-card/80 backdrop-blur-sm hover:bg-card transition-all"
          style={{ zIndex: 50 }}
          aria-label="Skip video and go to events"
        >
          <span className="font-terminal text-xs sm:text-sm md:text-base text-foreground tracking-wider hover:text-accent transition-colors">
            SKIP
          </span>
        </motion.button>
      )}
    </section>
  );
};

export default HomeSection;
