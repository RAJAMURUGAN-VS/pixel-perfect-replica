import ParticleBackground from '@/components/ParticleBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AnomaliesSection from '@/components/AnomaliesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden scanlines">
      {/* Particle Effect */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <AnomaliesSection />
      </div>

      {/* Bottom Gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
    </div>
  );
};

export default Index;
