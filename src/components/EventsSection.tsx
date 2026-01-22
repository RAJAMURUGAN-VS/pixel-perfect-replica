import { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';
import EventModal from './EventModal';
import { Event, technicalEvents, nonTechnicalEvents, getAllEvents } from '@/data/events';

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'non-technical'>('all');

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const filteredEvents = activeCategory === 'all' 
    ? getAllEvents() 
    : activeCategory === 'technical' ? technicalEvents : nonTechnicalEvents;

  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="text-center mb-16"
        >
          <h2 className="font-stranger text-3xl md:text-4xl lg:text-5xl glow-text mb-6 tracking-wider">
            EVENTS
          </h2>
          <p className="font-terminal text-lg md:text-xl text-muted-foreground tracking-wider max-w-2xl mx-auto">
            Choose your path and dive into the world of innovation and creativity
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { key: 'all', label: 'ALL EVENTS' },
            { key: 'technical', label: 'TECHNICAL' },
            { key: 'non-technical', label: 'NON-TECHNICAL' }
          ].map((category) => (
            <motion.button
              key={category.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.key as 'all' | 'technical' | 'non-technical')}
              className={`tech-border px-6 py-3 font-terminal text-sm md:text-base tracking-wider transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-accent/20 text-accent'
                  : 'bg-card/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Events Grid */}
        {activeCategory === 'all' ? (
          <>
            {/* Technical Events */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-16"
            >
              <h3 className="font-stranger text-2xl md:text-3xl text-accent mb-8 tracking-wider text-center">
                TECHNICAL EVENTS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {technicalEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  >
                    <EventCard
                      title={event.title}
                      description={event.description}
                      category={event.category}
                      onClick={() => handleEventClick(event)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Non-Technical Events */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h3 className="font-stranger text-2xl md:text-3xl text-primary mb-8 tracking-wider text-center">
                NON-TECHNICAL EVENTS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nonTechnicalEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  >
                    <EventCard
                      title={event.title}
                      description={event.description}
                      category={event.category}
                      onClick={() => handleEventClick(event)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                >
                  <EventCard
                    title={event.title}
                    description={event.description}
                    category={event.category}
                    onClick={() => handleEventClick(event)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Event Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
      />
    </section>
  );
};

export default EventsSection;
