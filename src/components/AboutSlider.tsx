import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import partyImage from '@/assets/party-bikes.jpg';

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: SlideData[] = [
  {
    title: 'RENDEZVOUS 2026',
    subtitle: 'Innovation Unleashed',
    description: 'Experience the future of technology through competitions, workshops, and exhibitions.',
    image: partyImage,
  },
  {
    title: 'TECH COMPETITIONS',
    subtitle: 'Code. Create. Conquer.',
    description: 'Participate in hackathons, coding contests, and technical challenges.',
    image: partyImage,
  },
  {
    title: 'CULTURAL EVENTS',
    subtitle: 'Art Meets Technology',
    description: 'Witness the perfect blend of creativity and innovation in our cultural programs.',
    image: partyImage,
  },
];

const AboutSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const slideVariants = {
    enter: { x: '100%', opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  };

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-stranger text-2xl md:text-3xl glow-text mb-12 tracking-wider text-center">
          ABOUT RENDEZVOUS
        </h2>

        <div
          className="relative w-full max-w-[90%] mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="tech-border bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="relative aspect-video md:aspect-[21/9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={slides[currentIndex].image}
                    alt={slides[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="font-stranger text-xl md:text-3xl text-accent mb-2 tracking-wider"
                    >
                      {slides[currentIndex].title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="font-terminal text-lg md:text-xl text-foreground mb-3 tracking-wider"
                    >
                      {slides[currentIndex].subtitle}
                    </motion.p>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="font-terminal text-sm md:text-base text-muted-foreground tracking-wider max-w-xl"
                    >
                      {slides[currentIndex].description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-6'
                    : 'bg-muted-foreground/50 hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSlider;
