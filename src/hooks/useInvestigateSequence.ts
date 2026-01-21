import { useState, useCallback, useEffect, useRef } from 'react';

export type SequencePhase = 'idle' | 'phase1' | 'phase2' | 'phase3' | 'complete';

interface UseInvestigateSequenceReturn {
  phase: SequencePhase;
  isAnimating: boolean;
  elapsedTime: number;
  isVideoEnded: boolean;
  startSequence: () => void;
  resetSequence: () => void;
  onSecondVideoEnd: () => void;
}

const AUDIO_URL = 'https://res.cloudinary.com/dydplsxdj/video/upload/v1768999824/WhatsApp_Video_2026-01-21_at_6.00.55_PM_bhc5rj.mp4';

export const useInvestigateSequence = (): UseInvestigateSequenceReturn => {
  const [phase, setPhase] = useState<SequencePhase>('idle');
  const [isAnimating, setIsAnimating] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Setup audio element
  useEffect(() => {
    const audio = new Audio(AUDIO_URL);
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle audio fade out
  const fadeOutAudio = useCallback(() => {
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    const fadeInterval = setInterval(() => {
      if (audio.volume > 0.1) {
        audio.volume = Math.max(0, audio.volume - 0.1);
      } else {
        audio.volume = 0;
        audio.pause();
        clearInterval(fadeInterval);
      }
    }, 100);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      setElapsedTime(elapsed);

      if (elapsed < 8) {
        setPhase('phase1');
      } else if (elapsed < 10) {
        setPhase('phase2');
      } else {
        // Transition to complete immediately after phase2
        setPhase('complete');
        setIsAnimating(false);
        clearInterval(interval);
      }
    }, 16); // ~60fps for smoother animations

    return () => clearInterval(interval);
  }, [isAnimating]);

  const startSequence = useCallback(() => {
    setIsAnimating(true);
    setElapsedTime(0);
    setPhase('phase1');
    setIsVideoEnded(false);

    // Start audio playback
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 1;
      audioRef.current.play().catch(() => {
        // Audio autoplay might be blocked
        console.log('Audio autoplay blocked');
      });
    }
  }, []);

  const resetSequence = useCallback(() => {
    setPhase('idle');
    setIsAnimating(false);
    setElapsedTime(0);
    setIsVideoEnded(false);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  const onSecondVideoEnd = useCallback(() => {
    setIsVideoEnded(true);
    fadeOutAudio();
  }, [fadeOutAudio]);

  return { 
    phase, 
    isAnimating, 
    elapsedTime, 
    isVideoEnded,
    startSequence, 
    resetSequence,
    onSecondVideoEnd
  };
};
