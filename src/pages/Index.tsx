import { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Header from '@/components/Header';
import HomeSection from '@/components/HomeSection';
import AboutSectionPage from '@/components/AboutSectionPage';
import ContactSection from '@/components/ContactSection';
import EventsSectionWrapper from '@/components/EventsSectionWrapper';
import CrewSection from '@/components/CrewSection';
import VideoIntro from '@/components/VideoIntro';
import { useNavigation, NavigationSection } from '@/hooks/useNavigation';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const { currentSection, navigateTo } = useNavigation('home');

  const handleNavigate = useCallback((section: NavigationSection) => {
    navigateTo(section);
  }, [navigateTo]);

  const handleNavigateToEvents = useCallback(() => {
    navigateTo('events');
  }, [navigateTo]);

  // Determine if we should show the header (not during events transition)
  const showHeader = currentSection !== 'events';

  // Show intro video first
  if (showIntro) {
    return <VideoIntro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className={`min-h-screen bg-background relative scanlines ${currentSection !== 'crew' ? 'overflow-x-hidden' : ''}`}>
      {/* Preload video for events section in background */}
      <link rel="preload" as="fetch" href="/hls/merged/merged.m3u8" />

      {/* Particle Effect - Hide when in events or crew section */}
      {currentSection !== 'events' && currentSection !== 'crew' && <ParticleBackground />}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header - visible on all sections except during events cinematic */}
        {showHeader && (
          <Header onNavigate={handleNavigate} currentSection={currentSection} />
        )}

        <AnimatePresence mode={currentSection === 'events' ? 'sync' : 'wait'}>
          {/* Home Section */}
          {currentSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomeSection onNavigateToEvents={handleNavigateToEvents} />
            </motion.div>
          )}

          {/* About Section */}
          {currentSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <AboutSectionPage />
            </motion.div>
          )}

          {/* Contact Section */}
          {currentSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ContactSection />
            </motion.div>
          )}

          {/* Crew Section */}
          {currentSection === 'crew' && (
            <div key="crew">
              <CrewSection />
            </div>
          )}

          {/* Events Section - with cinematic transition */}
          {currentSection === 'events' && (
            <div key="events">
              <EventsSectionWrapper
                isActive={currentSection === 'events'}
                onNavigate={handleNavigate}
              />
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
    </div>
  );
};

export default Index;
