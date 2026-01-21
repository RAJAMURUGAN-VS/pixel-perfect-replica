import { motion } from 'framer-motion';

interface EventCardsProps {
  isVisible: boolean;
}

const EventCards = ({ isVisible }: EventCardsProps) => {
  if (!isVisible) return null;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const cards = [
    { title: 'TECH', description: 'Explore the technological anomalies of Hawkins Lab' },
    { title: 'NON-TECH', description: 'Discover the mysteries beyond the machines' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-stranger text-2xl md:text-3xl glow-text mb-12 text-center tracking-wider"
        >
          CHOOSE YOUR PATH
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.5)',
              }}
              className="tech-border bg-card/80 backdrop-blur-sm p-8 cursor-pointer transition-all duration-300 group"
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
