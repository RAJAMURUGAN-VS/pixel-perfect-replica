import { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSlider from '@/components/AboutSlider';
import AnomaliesSection from '@/components/AnomaliesSection';
import EventCards from '@/components/EventCards';
import { useInvestigateSequence } from '@/hooks/useInvestigateSequence';

const Index = () => {
  const { phase, elapsedTime, isVideoEnded, startSequence, onSecondVideoEnd } = useInvestigateSequence();
  const isComplete = phase === 'complete';

  const handleNavigate = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden scanlines">
      {/* Particle Effect */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!isComplete && (
            <motion.div
              key="main-content"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Header onNavigate={handleNavigate} />
              
              <div id="home">
                <HeroSection 
                  phase={phase}
                  elapsedTime={elapsedTime}
                  onInvestigate={startSequence}
                />
              </div>
              
              {phase === 'idle' && (
                <>
                  <motion.div
                    id="about"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <AboutSlider />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <AnomaliesSection />
                  </motion.div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Event Cards - Show after sequence completes */}
        <AnimatePresence>
          {isComplete && (
            <EventCards 
              isVisible={isComplete} 
              isVideoEnded={isVideoEnded}
              onVideoEnd={onSecondVideoEnd}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
    </div>
  );
};

export default Index;
