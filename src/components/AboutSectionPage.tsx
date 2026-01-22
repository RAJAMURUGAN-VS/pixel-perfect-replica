import { motion } from 'framer-motion';
import AboutSlider from './AboutSlider';
import heroImage from '@/assets/hero-background.jpg';

const AboutSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <AboutSlider />
        </motion.div>

        {/* Additional About Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto px-4 md:px-8 py-12"
        >
          <div className="tech-border bg-card/80 backdrop-blur-sm p-8">
            <h3 className="font-stranger text-xl md:text-2xl text-accent mb-6 tracking-wider">
              THE STORY
            </h3>
            <p className="font-terminal text-base md:text-lg text-muted-foreground tracking-wider leading-relaxed mb-6">
              In the depths of Hawkins Lab, something extraordinary awaits. The Department of Information Technology 
              presents an immersive tech symposium that bridges the gap between the known and unknown.
            </p>
            <p className="font-terminal text-base md:text-lg text-muted-foreground tracking-wider leading-relaxed">
              Step through the gate and discover a world of innovation, creativity, and technological marvels. 
              The Upside Down holds secrets waiting to be uncovered by those brave enough to investigate.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-5xl mx-auto px-4 md:px-8 pb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '20+', label: 'Events' },
              { value: '500+', label: 'Participants' },
              { value: '50K+', label: 'Prize Pool' },
              { value: '2', label: 'Days' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="tech-border bg-card/60 backdrop-blur-sm p-6 text-center"
              >
                <div className="font-stranger text-2xl md:text-3xl text-accent mb-2">
                  {stat.value}
                </div>
                <div className="font-terminal text-sm text-muted-foreground tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
