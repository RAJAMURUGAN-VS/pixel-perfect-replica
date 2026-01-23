import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import frameImage from '@/assets/frame.png';

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

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the frame click
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
 
          {/* Clickable static frame/poster - appears when loaded but not started */}
          {isLoaded && !hasStarted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={startPlayback}
              className="absolute inset-0 cursor-pointer z-20"
            >
              {/* Static frame image */}
              <img
                src={frameImage}
                alt="Click to play"
                className="w-full h-full object-cover"
              />
              
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center tech-border">
                    <span className="text-5xl md:text-6xl ml-2">▶</span>
                  </div>
                  <span className="font-terminal text-lg md:text-2xl text-[hsl(var(--neon-cyan))] glow-text tracking-wider">
                    CLICK ANYWHERE TO PLAY
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}
          
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted={true}
            preload="auto"
            style={{ opacity: hasStarted ? 1 : 0 }}
          >
            <source
              src="https://res.cloudinary.com/dydplsxdj/video/upload/v1769103515/upscaled-video_hqh9wj.mp4"
              type="video/mp4"
            />
          </video>

          {/* Skip button - only show after video has started */}
          {hasStarted && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={handleSkip}
              className="absolute bottom-8 right-8 tech-border px-6 py-3 bg-card/80 backdrop-blur-sm hover:bg-card transition-all z-30"
            >
              <span className="font-terminal text-sm md:text-base text-foreground tracking-wider hover:text-accent transition-colors">
                SKIP INTRO
              </span>
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoIntro;
