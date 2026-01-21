import { motion } from 'framer-motion';
import batmanImage from '../batman.jpeg';

interface EventCardProps {
  title: string;
  description: string;
  category: 'technical' | 'non-technical';
  onClick: () => void;
}

const EventCard = ({ title, description, category, onClick }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 30px hsl(var(--accent) / 0.6)',
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="tech-border bg-card/80 backdrop-blur-sm cursor-pointer transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={batmanImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <div className={`tech-border px-3 py-1 text-xs font-terminal tracking-wider ${
            category === 'technical' 
              ? 'bg-accent/20 text-accent' 
              : 'bg-primary/20 text-primary'
          }`}>
            {category === 'technical' ? 'TECH' : 'NON-TECH'}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-stranger text-xl md:text-2xl text-accent mb-3 tracking-wider group-hover:glow-text transition-all duration-300">
          {title}
        </h3>
        <p className="font-terminal text-sm md:text-base text-muted-foreground tracking-wider leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default EventCard;