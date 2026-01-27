import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-background.jpg';
import eventTitleImage from '@/assets/event-title.png';
import CountdownTimer from './CountdownTimer';
import VideoBackground from './VideoBackground';
import Hls from 'hls.js';

interface HomeSectionProps {
  onNavigateToEvents: () => void;
}

// Video source - same as used in EventsSectionWrapper
const VIDEO_MERGED = '/hls/merged/merged.m3u8';

const HomeSection = ({ onNavigateToEvents }: HomeSectionProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const prefetchVideoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  // Prefetch video chunks on component mount
  useEffect(() => {
    const video = prefetchVideoRef.current;
    if (!video) return;

    // Check if browser supports HLS natively (Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = VIDEO_MERGED;
    } else if (Hls.isSupported()) {
      // Use HLS.js for other browsers with optimized settings for prefetching
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 30,
        maxBufferLength: 30,
        maxMaxBufferLength: 60,
        maxBufferSize: 60 * 1000 * 1000,
        autoStartLoad: true, // Start loading immediately
        startLevel: -1,
      });

      hls.loadSource(VIDEO_MERGED);
      hls.attachMedia(video);
      hlsRef.current = hls;

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // Preload first few segments by seeking to start
        video.currentTime = 0;
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.error('HLS prefetch error:', data);
        }
      });
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, []);

  const handleInvestigate = useCallback(() => {
    setShowVideo(true);
    setIsVideoEnded(false);
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsVideoEnded(true);
    // Automatically navigate to events page when video ends
    onNavigateToEvents();
  }, [onNavigateToEvents]);

  const handleSkip = useCallback(() => {
    setShowVideo(false);
    setIsVideoEnded(false);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})`, zIndex: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Video Background - Plays when investigate is clicked */}
      {showVideo && (
        <div className="absolute inset-0" style={{ zIndex: 5 }}>
          <VideoBackground
            src={VIDEO_MERGED}
            isActive={showVideo && !isVideoEnded}
            onEnded={handleVideoEnd}
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
            opacity: showVideo ? 0.3 : 1,
            y: showVideo ? -10 : 0,
            rotateX: showVideo ? 180 : 0,
            scale: showVideo ? 0.95 : 1,
            filter: showVideo ? 'blur(2px)' : 'blur(0px)'
          }}
          transition={{
            duration: showVideo ? 1.2 : 0.8,
            delay: showVideo ? 0 : 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
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
            opacity: showVideo ? 0.2 : 1,
            y: showVideo ? 15 : 0,
            rotateY: showVideo ? 15 : 0,
            scale: showVideo ? 0.92 : 1,
            filter: showVideo ? 'blur(3px)' : 'blur(0px)'
          }}
          transition={{
            duration: showVideo ? 1.5 : 0.8,
            delay: showVideo ? 0.1 : 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
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
            opacity: showVideo ? 0.25 : 1,
            y: showVideo ? -20 : 0,
            rotateZ: showVideo ? -5 : 0,
            scale: showVideo ? 0.9 : 1,
            filter: showVideo ? 'blur(4px)' : 'blur(0px)'
          }}
          transition={{
            duration: showVideo ? 1.4 : 0.8,
            delay: showVideo ? 0.2 : 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="tech-border bg-card/30 backdrop-blur-sm px-4 sm:px-8 py-4 sm:py-6 mb-4 sm:mb-6 inline-block origin-center"
        >
          <CountdownTimer />
        </motion.div>

        {/* Warning Message */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: showVideo ? 0.15 : 1,
            y: showVideo ? 25 : 0,
            rotateX: showVideo ? -15 : 0,
            scale: showVideo ? 0.88 : 1,
            filter: showVideo ? 'blur(5px)' : 'blur(0px)'
          }}
          transition={{
            duration: showVideo ? 1.6 : 0.8,
            delay: showVideo ? 0.3 : 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
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
      {showVideo && !isVideoEnded && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={handleSkip}
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 tech-border px-4 py-2 sm:px-6 sm:py-3 bg-card/80 backdrop-blur-sm hover:bg-card transition-all"
          style={{ zIndex: 50 }}
        >
          <span className="font-terminal text-xs sm:text-sm md:text-base text-foreground tracking-wider hover:text-accent transition-colors">
            SKIP
          </span>
        </motion.button>
      )}

      {/* Hidden video element for prefetching */}
      <video
        ref={prefetchVideoRef}
        className="hidden"
        muted
        playsInline
        preload="auto"
      />
    </section>
  );
};

export default HomeSection;
