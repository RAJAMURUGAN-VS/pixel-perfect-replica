import { useCallback } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSlider from '@/components/AboutSlider';
import EventsSection from '@/components/EventsSection';

const Index = () => {
  const handleNavigate = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleExploreEvents = useCallback(() => {
    const eventsElement = document.getElementById('events');
    if (eventsElement) {
      eventsElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden scanlines">
      {/* Particle Effect */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header onNavigate={handleNavigate} />
        
        <div id="home">
          <HeroSection onExploreEvents={handleExploreEvents} />
        </div>
        
        <motion.div
          id="events"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <EventsSection />
        </motion.div>
        
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
          id="transport"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="font-stranger text-3xl md:text-4xl glow-text mb-8 tracking-wider">
              TRANSPORT
            </h2>
            <p className="font-terminal text-lg text-muted-foreground tracking-wider">
              Coming Soon...
            </p>
          </div>
        </motion.div>
        
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="font-stranger text-3xl md:text-4xl glow-text mb-8 tracking-wider">
              CONTACT US
            </h2>
            <p className="font-terminal text-lg text-muted-foreground tracking-wider">
              Coming Soon...
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
    </div>
  );
};

export default Index;
