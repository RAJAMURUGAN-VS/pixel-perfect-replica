import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hls from 'hls.js';

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loaderPhase, setLoaderPhase] = useState<'void' | 'streaks' | 'assemble' | 'waiting' | 'pulse' | 'exit'>('void');
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  // Cinematic loader sequence
  useEffect(() => {
    const sequence = async () => {
      setLoaderPhase('void');
      await new Promise(r => setTimeout(r, 800));
      
      setLoaderPhase('streaks');
      await new Promise(r => setTimeout(r, 2200));
      
      setLoaderPhase('assemble');
      await new Promise(r => setTimeout(r, 2000));

      setLoaderPhase('waiting');
    };
    sequence();
  }, []);

  // Handle video loading and autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = '/hls/output.m3u8';

    // Check if browser supports HLS natively (Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else if (Hls.isSupported()) {
      // Use HLS.js for other browsers
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hlsRef.current = hls;

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoaded(true);
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS Error:', data);
      });
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, []);

  // Auto-start video when loaded
  useEffect(() => {
    if (isLoaded && loaderPhase === 'waiting') {
      const startVideo = async () => {
        const video = videoRef.current;
        if (!video) return;

        // Start cinematic exit
        setLoaderPhase('pulse');
        await new Promise(r => setTimeout(r, 1000));
        
        setLoaderPhase('exit');
        await new Promise(r => setTimeout(r, 800)); // Longer for zoom effect

        // Play video (muted is fine)
        video.muted = true;
        video.play().catch((err) => {
          console.log('Video play failed:', err);
        });
        
        // Mark complete after video starts
        await new Promise(r => setTimeout(r, 300));
        setLoaderPhase('complete' as any);
      };
      startVideo();
    }
  }, [isLoaded, loaderPhase]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
      setTimeout(onComplete, 500);
    };

    const handleLoadedData = () => {
      // Additional check for native HLS support
      if (!hlsRef.current) {
        setIsLoaded(true);
      }
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [onComplete]);

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.pause();
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
          {/* Cinematic Loader */}
          {(loaderPhase !== 'exit' || loaderPhase === 'exit') && loaderPhase !== 'complete' && (
            <motion.div 
              className="absolute inset-0 z-50 flex items-center justify-center bg-[#050000] overflow-hidden select-none"
              animate={{ opacity: loaderPhase === 'exit' ? 0 : 1 }}
              transition={{ duration: 0.6, delay: loaderPhase === 'exit' ? 0.4 : 0 }}
            >
              {/* Cinematic Grain & Vignette */}
              <div className="absolute inset-0 z-40 pointer-events-none">
                <div className="absolute inset-0 opacity-20 brightness-200 contrast-200 mix-blend-overlay" 
                     style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)]" />
              </div>

              {/* Upside Down Spores/Particles */}
              <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={`spore-${i}`}
                    initial={{ 
                      x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0, 
                      y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
                      opacity: 0 
                    }}
                    animate={{ 
                      y: [null, Math.random() * -100],
                      x: [null, (Math.random() - 0.5) * 50],
                      opacity: [0, 0.4, 0]
                    }}
                    transition={{ 
                      duration: 5 + Math.random() * 5, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: Math.random() * 2 
                    }}
                    className="absolute w-1 h-1 rounded-full bg-slate-400 blur-[1px]"
                  />
                ))}
              </div>

              {/* Red Atmosphere */}
              <motion.div 
                className="absolute inset-0 z-0 bg-gradient-to-t from-red-950/20 via-transparent to-transparent"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Neon Streaks */}
              <AnimatePresence>
                {loaderPhase === 'streaks' && (
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={`h-streak-${i}`}
                        initial={{ x: '-100%', opacity: 0, scaleY: 1 }}
                        animate={{ x: '100%', opacity: [0, 1, 0], scaleY: [0.5, 2, 0.5] }}
                        transition={{ 
                          duration: 0.8, 
                          delay: i * 0.3,
                          ease: [0.43, 0.13, 0.23, 0.96] 
                        }}
                        className="absolute left-0 h-[2px] w-full bg-red-600 shadow-[0_0_20px_rgba(255,0,0,0.8)]"
                        style={{ top: `${20 + Math.random() * 60}%` }}
                      />
                    ))}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={`v-streak-${i}`}
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: '-100%', opacity: [0, 0.8, 0] }}
                        transition={{ 
                          duration: 1.2, 
                          delay: 0.5 + i * 0.4,
                          ease: "easeInOut" 
                        }}
                        className="absolute top-0 w-[1px] h-full bg-red-500 blur-[2px]"
                        style={{ left: `${30 + Math.random() * 40}%` }}
                      />
                    ))}
                  </div>
                )}
              </AnimatePresence>

              {/* Main Title */}
              <div className="relative z-30 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 3, letterSpacing: '1.5em', filter: 'blur(20px)' }}
                  animate={{ 
                    opacity: loaderPhase === 'void' || loaderPhase === 'streaks' ? 0 : 1,
                    scale: loaderPhase === 'pulse' ? 1.05 : loaderPhase === 'exit' ? 50 : 1,
                    letterSpacing: loaderPhase === 'pulse' ? '0.25em' : '0.3em',
                    filter: loaderPhase === 'pulse' ? 'blur(0px) brightness(1.5)' : 'blur(0px) brightness(1)'
                  }}
                  transition={{ 
                    duration: loaderPhase === 'exit' ? 0.8 : 3,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="text-center"
                >
                  <h1 className="relative text-4xl sm:text-6xl md:text-8xl font-black text-transparent tracking-widest uppercase"
                      style={{ 
                        fontFamily: "'Cinzel', serif",
                        WebkitTextStroke: '2px #c51b1b',
                        textShadow: '0 0 30px rgba(220, 38, 38, 0.5)'
                      }}
                  >
                    GATE OPENING
                    <motion.span 
                      animate={{ opacity: [0, 1] }}
                      transition={{ delay: 3, duration: 2 }}
                      className="absolute inset-0 text-red-900 mix-blend-multiply"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      GATE OPENING
                    </motion.span>
                  </h1>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: loaderPhase === 'waiting' || loaderPhase === 'pulse' ? 1 : 0,
                      y: 0 
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-4 sm:mt-6 flex items-center justify-center gap-4"
                  >
                    <div className="h-[1px] w-8 sm:w-12 bg-red-800 shadow-[0_0_10px_red]" />
                    <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-red-600 tracking-[0.8em] drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                        style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      RENDEZVOUS 2K26
                    </h2>
                    <div className="h-[1px] w-8 sm:w-12 bg-red-800 shadow-[0_0_10px_red]" />
                  </motion.div>
                </motion.div>
                
                {loaderPhase === 'pulse' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.8, 0] }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-red-600 mix-blend-overlay filter blur-[50px] scale-150"
                  />
                )}
              </div>

              {/* Loading indicator */}
              <AnimatePresence>
                {!isLoaded && (loaderPhase === 'assemble' || loaderPhase === 'waiting') && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-8 sm:bottom-12 z-30 flex flex-col items-center gap-2"
                  >
                    <div className="text-[10px] text-red-900 tracking-[0.4em] font-terminal">OPENING RIFT</div>
                    <div className="w-20 sm:w-24 h-[2px] bg-red-950/30 overflow-hidden">
                      <motion.div 
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="h-full w-1/2 bg-red-600 shadow-[0_0_10px_red]"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Black transition overlay */}
          <AnimatePresence>
            {loaderPhase === 'exit' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="absolute inset-0 z-40 bg-black"
              />
            )}
          </AnimatePresence>
          
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted={true}
            preload="auto"
          />
          
          {/* Skip button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaderPhase === 'complete' ? 1 : 0, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            onClick={handleSkip}
            className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 tech-border px-4 py-2 sm:px-6 sm:py-3 bg-card/80 backdrop-blur-sm hover:bg-card transition-all z-30"
          >
            <span className="font-terminal text-xs sm:text-sm md:text-base text-foreground tracking-wider hover:text-accent transition-colors">
              SKIP INTRO
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoIntro;
