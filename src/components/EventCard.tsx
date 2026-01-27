import { motion } from 'framer-motion';
import VideoBackground from './VideoBackground';

interface EventCardsProps {
  isVisible: boolean;
  isVideoEnded: boolean;
  onVideoEnd: () => void;
}

const VIDEO_2 = '/hls/merged/merged.m3u8';
const FINAL_IMAGE = 'https://res.cloudinary.com/dydplsxdj/image/upload/v1769003462/Gemini_Generated_Image_8a86wr8a86wr8a86_wd9xyu.png';

const EventCards = ({ isVisible, isVideoEnded, onVideoEnd }: EventCardsProps) => {
  if (!isVisible) return null;

  const cards = [
    { title: 'TECH', description: 'Explore the technological anomalies of Hawkins Lab' },
    { title: 'NON-TECH', description: 'Discover the mysteries beyond the machines' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 min-h-screen flex items-center justify-center px-4 md:px-8 z-10"
    >
      {/* Second Video Background */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isVideoEnded ? 'opacity-0' : 'opacity-100'}`}>
        <VideoBackground 
          src={VIDEO_2}
          isActive={isVisible}
          onEnded={onVideoEnd}
        />
      </div>

      {/* Final Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          isVideoEnded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${FINAL_IMAGE})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/60 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-stranger text-2xl md:text-3xl glow-text mb-12 text-center tracking-wider"
        >
          CHOOSE YOUR PATH
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.5)',
              }}
              className="tech-border bg-card/80 backdrop-blur-sm p-8 cursor-pointer transition-all duration-300 group relative"
            >
              <h3 className="font-stranger text-2xl md:text-3xl text-accent mb-4 tracking-wider group-hover:glow-text transition-all duration-300">
                {card.title}
              </h3>
              <p className="font-terminal text-base md:text-lg text-muted-foreground tracking-wider">
                {card.description}
              </p>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default EventCards;