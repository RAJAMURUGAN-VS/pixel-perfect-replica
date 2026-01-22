import { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Header from '@/components/Header';
import HomeSection from '@/components/HomeSection';
import AboutSectionPage from '@/components/AboutSectionPage';
import ContactSection from '@/components/ContactSection';
import EventsSectionWrapper from '@/components/EventsSectionWrapper';
import { useNavigation, NavigationSection } from '@/hooks/useNavigation';

const Index = () => {
  const { currentSection, navigateTo } = useNavigation('home');

  const handleNavigate = useCallback((section: NavigationSection) => {
    navigateTo(section);
  }, [navigateTo]);

  const handleNavigateToEvents = useCallback(() => {
    navigateTo('events');
  }, [navigateTo]);

  // Determine if we should show the header (not during events transition)
  const showHeader = currentSection !== 'events';

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden scanlines">
      {/* Particle Effect */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header - visible on all sections except during events cinematic */}
        {showHeader && (
          <Header onNavigate={handleNavigate} currentSection={currentSection} />
        )}

        <AnimatePresence mode="wait">
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

          {/* Events Section - with cinematic transition */}
          {currentSection === 'events' && (
            <motion.div
              key="events"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EventsSectionWrapper 
                isActive={currentSection === 'events'} 
                onNavigate={handleNavigate}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
    </div>
  );
};

export default Index;
