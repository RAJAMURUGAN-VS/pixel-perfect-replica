import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoBackground from './VideoBackground';
import Header from './Header';
import EventCategorySection from './EventCategorySection';
import EventModal from './EventModal';
import { Event } from '@/data/events';

interface EventCardsProps {
  isVisible: boolean;
  isVideoEnded: boolean;
  onVideoEnd: () => void;
}

const VIDEO_2 = 'https://res.cloudinary.com/dydplsxdj/video/upload/v1768999844/WhatsApp_Video_2026-01-21_at_6.07.22_PM_gsczzx.mp4';
const FINAL_IMAGE = 'https://res.cloudinary.com/dydplsxdj/image/upload/v1769003462/Gemini_Generated_Image_8a86wr8a86wr8a86_wd9xyu.png';

type ViewState = 'categories' | 'technical' | 'non-technical';

const EventCards = ({ isVisible, isVideoEnded, onVideoEnd }: EventCardsProps) => {
  const [currentView, setCurrentView] = useState<ViewState>('categories');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isVisible) return null;

  const cards = [
    { 
      title: 'TECH', 
      description: 'Explore the technological anomalies of Hawkins Lab',
      category: 'technical' as const
    },
    { 
      title: 'NON-TECH', 
      description: 'Discover the mysteries beyond the machines',
      category: 'non-technical' as const
    },
  ];

  const handleCategoryClick = (category: 'technical' | 'non-technical') => {
    setCurrentView(category);
  };

  const handleBack = () => {
    setCurrentView('categories');
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const handleNavigate = (section: string) => {
    if (section === 'events') {
      setCurrentView('categories');
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header - Always visible in events section */}
      <Header onNavigate={handleNavigate} />

      <motion.section
        id="events"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 min-h-screen flex items-center justify-center px-4 md:px-8 z-10 pt-20"
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
        <div className="relative z-10 w-full h-full overflow-y-auto pt-4">
          <AnimatePresence mode="wait">
            {currentView === 'categories' ? (
              <motion.div
                key="categories"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center min-h-[calc(100vh-120px)]"
              >
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-stranger text-2xl md:text-3xl glow-text mb-12 text-center tracking-wider"
                >
                  CHOOSE YOUR PATH
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 w-full">
                  {cards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.4 + index * 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94] as const,
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.5)',
                      }}
                      onClick={() => handleCategoryClick(card.category)}
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
              </motion.div>
            ) : (
              <motion.div
                key={currentView}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              >
                <EventCategorySection
                  category={currentView}
                  onBack={handleBack}
                  onEventClick={handleEventClick}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default EventCards;
