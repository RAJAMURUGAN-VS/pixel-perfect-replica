import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const slides = [
  'https://res.cloudinary.com/dydplsxdj/image/upload/v1769258170/con-1_gyfzow.jpg',
  'https://res.cloudinary.com/dydplsxdj/image/upload/v1769137598/card-1_eln5kv.jpg',
  'https://res.cloudinary.com/dydplsxdj/image/upload/v1769137613/card-3_ucz5hr.jpg',
  'https://res.cloudinary.com/dydplsxdj/image/upload/v1769137605/card-2_yvk7hr.jpg',
];

const AboutSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const slideVariants = {
    enter: { x: '100%', opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  };

  return (
    <section className="relative pt-4 pb-[5px] px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">

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
                    src={slides[currentIndex]}
                    alt={slides[currentIndex]}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

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
