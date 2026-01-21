import { useState, useCallback, useEffect } from 'react';

export type SequencePhase = 'idle' | 'phase1' | 'phase2' | 'phase3' | 'complete';

interface UseInvestigateSequenceReturn {
  phase: SequencePhase;
  isAnimating: boolean;
  elapsedTime: number;
  startSequence: () => void;
  resetSequence: () => void;
}

export const useInvestigateSequence = (): UseInvestigateSequenceReturn => {
  const [phase, setPhase] = useState<SequencePhase>('idle');
  const [isAnimating, setIsAnimating] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

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
      } else if (elapsed < 12) {
        setPhase('phase3');
      } else {
        setPhase('complete');
        setIsAnimating(false);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const startSequence = useCallback(() => {
    setIsAnimating(true);
    setElapsedTime(0);
    setPhase('phase1');
  }, []);

  const resetSequence = useCallback(() => {
    setPhase('idle');
    setIsAnimating(false);
    setElapsedTime(0);
  }, []);

  return { phase, isAnimating, elapsedTime, startSequence, resetSequence };
};
