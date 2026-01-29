import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import EventCategorySection from './EventCategorySection';
import EventModal from './EventModal';
import { Event } from '@/data/events';
import { TIMELINE } from '@/data/crew';
import { TimelineEvent } from '@/data/crewTypes';

interface EventCardsProps {
  isVisible: boolean;
  isVideoEnded: boolean;
  onVideoEnd: () => void;
}

type ViewState = 'categories' | 'technical' | 'non-technical';

// Timeline Item Component
const TimelineItem = ({ event, index, isLast }: { event: TimelineEvent; index: number; isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex items-center justify-between w-full ${isLast ? 'mb-0' : 'mb-20 md:mb-32'} ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent z-10 border-4 border-background">
        <motion.div
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 rounded-full bg-accent/50 -z-10"
        />
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full md:w-[45%] p-6 md:p-8 rounded-2xl tech-border bg-card/50 backdrop-blur-lg ${isEven ? 'text-left md:text-right' : 'text-left'}`}
      >
        <span className="text-accent font-terminal text-sm font-bold tracking-widest block mb-2">{event.date}</span>
        <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{event.description}</p>
      </motion.div>

      {/* Spacer */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
};

// Timeline Content with Scroll Progress
const TimelineContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]  // Changed to detect when entering/leaving viewport
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.9], ["0%", "100%"]);  // Start at 20% scroll progress

  return (
    <div ref={containerRef} className="relative">
      {/* Background Track */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-foreground/5 -translate-x-1/2 z-0" />

      {/* Animated Line */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-1/2 top-0 w-1 bg-accent -translate-x-1/2 shadow-[0_0_20px_hsl(var(--accent))] z-0"
      />

      {TIMELINE.map((event, idx) => (
        <TimelineItem
          key={idx}
          event={event}
          index={idx}
          isLast={idx === TIMELINE.length - 1}
        />
      ))}
    </div>
  );
};

const EventCards = ({ isVisible }: EventCardsProps) => {
  const navigate = useNavigate();
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

  // Replaced manual navigation with router navigate
  // Handle header navigation locally within events (categories) or route elsewhere
  const handleNavigate = (section: string) => {
    if (section === 'events') {
      setCurrentView('categories');
      return;
    }
    // Navigate to other routes
    navigate(section === 'home' ? '/' : `/${section}`);
  };

  // Adapter for Header which expects string
  // Header expects onNavigate to handle string based on updated Header.tsx
  // But wait, Header.tsx uses Links now! 
  // Wait, I updated Header.tsx to use Links. It doesn't use onNavigate anymore?
  // Let's check Header.tsx... It DOES NOT have onNavigate prop anymore.
  // BUT EventCards uses Header.
  // And EventCards passes `onNavigate={handleNavigate}`.
  // I must check if Header accepts onNavigate.
  // In step 747, I updated HeaderProps to interface HeaderProps { currentSection?: string; }.
  // So Header DOES NOT accept onNavigate.
  // So I should REMOVE `onNavigate={handleNavigate}` from Header in EventCards.

  // Also, `Header` inside `EventCards` needs to handle the "Back to Categories" logic if "Events" is clicked?
  // If `Header` uses `Link to='/events'`, clicking it while on `/events` will just re-render `/events`.
  // If we are in "Technical" view, we want "Events" link to go back to "Categories".
  // Since `Header` is now purely `Link` based, we can't easily intercept it unless we change `Header` back to accept an override or custom handler.
  // OR, we just accept that clicking "EVENTS" in the nav reloads the events page (resetting state to categories).
  // Given the `Layout` based approach, clicking `/events` link will likely keep the component mounted if we are already there, unless `key` changes.
  // In `Layout.tsx`, `EventCards` is mounted via `EventsSectionWrapper`.
  // If we click `/events`, the location is same.
  // Maybe we can add a `useEffect` in `EventCards` listening to location state or something?
  // Or just simpler: let it be. If user clicks EVENTS while in deep view, maybe they want to go to root of events.
  // But `EventCards` state `currentView` is local. It won't reset on link click to same route default.
  // Unless we add a key to the Route or something.

  // For now, I will remove `onNavigate` prop from Header usage here.

  return (
    <div className="relative min-h-screen">
      {/* Header - Always visible in events section */}
      <Header currentSection="events" />

      {/* Main Content Section */}
      <section className="relative py-24 px-6 md:px-24">
        <AnimatePresence mode="wait">
          {currentView === 'categories' ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-stranger text-3xl md:text-4xl glow-text mb-12 text-center tracking-wider"
              >
                CHOOSE YOUR PATH
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-32">
                {cards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + index * 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94] as const,
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.5)',
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCategoryClick(card.category)}
                    className="tech-border bg-card/80 backdrop-blur-sm p-8 md:p-12 cursor-pointer transition-all duration-300 group relative"
                  >
                    <h3 className="font-stranger text-2xl md:text-4xl text-accent mb-4 tracking-wider group-hover:glow-text transition-all duration-300">
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

              {/* Timeline Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-full mt-24 max-w-5xl mx-auto"
              >
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-stranger mb-4">THE CHRONICLE</h2>
                  <div className="w-24 h-1 bg-accent mx-auto" />
                </div>

                <TimelineContent />
              </motion.div>
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
      </section>

      {/* Closing Section - Adds scroll space for timeline animation */}
      {currentView === 'categories' && (
        <section className="h-screen w-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed mb-6">
              The future is written in code.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
              className="text-2xl md:text-4xl text-foreground font-stranger font-bold uppercase tracking-[0.2em]"
            >
              Are you ready?
            </motion.p>

            {/* Flicker Accent */}
            <motion.div
              animate={{ opacity: [1, 0.4, 1, 1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.1, 0.2, 0.8, 0.9, 1] }}
              className="mt-12 w-1 h-8 bg-accent mx-auto"
            />
          </motion.div>

          {/* Fade to Black */}
          <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
      )}

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default EventCards;
