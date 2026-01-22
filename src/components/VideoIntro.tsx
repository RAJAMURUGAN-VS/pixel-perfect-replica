import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Setup separate audio element
    const audio = new Audio('https://res.cloudinary.com/dydplsxdj/video/upload/v1769103515/upscaled-video_hqh9wj.mp4');
    audio.preload = 'auto';
    audio.volume = 1;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    
    // Play video muted
    video.muted = true;
    video.play();
    
    // Play audio separately
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.log('Audio play failed:', err);
      });
    }
    
    setHasStarted(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      setTimeout(onComplete, 500);
    };

    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [onComplete]);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1;
      setIsMuted(false);
    }
  };

  const handleSkip = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-terminal text-xl text-[hsl(var(--neon-cyan))] glow-text animate-pulse">
                LOADING...
              </div>
            </div>
          )}

          {/* Start button - appears when loaded but not started */}
          {isLoaded && !hasStarted && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={startPlayback}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tech-border px-12 py-6 bg-card/95 backdrop-blur-sm hover:bg-card transition-all z-10"
            >
              <div className="flex flex-col items-center gap-3">
                <span className="text-5xl">▶️</span>
                <span className="font-terminal text-xl md:text-2xl text-[hsl(var(--neon-cyan))] glow-text tracking-wider">
                  CLICK TO START
                </span>
              </div>
            </motion.button>
          )}
          
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted={true}
            preload="auto"
            style={{ opacity: isLoaded ? 1 : 0 }}
          >
            <source
              src="https://res.cloudinary.com/dydplsxdj/video/upload/v1769103515/upscaled-video_hqh9wj.mp4"
              type="video/mp4"
            />
          </video>

          {/* Skip button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={handleSkip}
            className="absolute bottom-8 right-8 tech-border px-6 py-3 bg-card/80 backdrop-blur-sm hover:bg-card transition-all"
          >
            <span className="font-terminal text-sm md:text-base text-foreground tracking-wider hover:text-accent transition-colors">
              SKIP INTRO
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoIntro;
