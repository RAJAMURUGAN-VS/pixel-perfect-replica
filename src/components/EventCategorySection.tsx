import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Event, getEventsByCategory } from '@/data/events';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface EventCategorySectionProps {
  category: 'technical' | 'non-technical';
  onBack: () => void;
  onEventClick: (event: Event) => void;
}

const EventCategorySection = ({ category, onBack, onEventClick }: EventCategorySectionProps) => {
  const events = getEventsByCategory(category);
  const categoryTitle = category === 'technical' ? 'TECHNICAL EVENTS' : 'NON-TECHNICAL EVENTS';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-6xl mx-auto px-4 py-8"
    >
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="flex items-center gap-2 mb-8 tech-border px-4 py-2 bg-card/80 backdrop-blur-sm text-accent font-terminal tracking-wider hover:bg-accent/10 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        BACK
      </motion.button>

      {/* Category Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-stranger text-2xl md:text-4xl glow-text mb-8 text-center tracking-wider"
      >
        {categoryTitle}
      </motion.h2>

      {/* Events Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {events.map((event) => (
          <motion.div
            key={event.id}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              y: -5,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="relative mx-auto w-full pt-0 overflow-hidden tech-border bg-card/90 backdrop-blur-sm hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)] transition-all duration-300 group cursor-pointer"
              onClick={() => onEventClick(event)}
            >
              {/* Image with overlay */}
              <div className="relative aspect-video w-full overflow-hidden">
                <div className="absolute inset-0 z-30 bg-black/35" />
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="relative z-20 aspect-video w-full object-cover brightness-60 group-hover:brightness-75 transition-all duration-500 group-hover:scale-110"
                />
              </div>
              
              <CardHeader className="relative z-40">
                <CardAction>
                  <Badge 
                    variant="secondary" 
                    className="font-terminal tracking-wider bg-accent/20 text-accent border-accent/30 hover:bg-accent/30"
                  >
                    {category === 'technical' ? 'TECH' : 'NON-TECH'}
                  </Badge>
                </CardAction>
                <CardTitle className="font-stranger text-xl md:text-2xl text-accent tracking-wider group-hover:glow-text transition-all duration-300">
                  {event.title}
                </CardTitle>
                <CardDescription className="font-terminal text-sm md:text-base text-muted-foreground tracking-wider line-clamp-2">
                  {event.description}
                </CardDescription>
              </CardHeader>
              
              <CardFooter>
                <Button className="w-full font-terminal tracking-wider bg-accent/20 text-accent border border-accent/30 hover:bg-accent hover:text-background transition-all duration-300">
                  View Event
                </Button>
              </CardFooter>
              
              {/* Decorative corner elements */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-neon-cyan opacity-30 group-hover:opacity-100 transition-opacity z-50" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-neon-cyan opacity-30 group-hover:opacity-100 transition-opacity z-50" />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default EventCategorySection;
