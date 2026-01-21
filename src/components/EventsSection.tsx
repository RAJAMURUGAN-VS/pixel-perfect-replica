import { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';
import EventModal from './EventModal';

interface Event {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  rules: string[];
  category: 'technical' | 'non-technical';
  shortDescription: string;
}

const events: Event[] = [
  // Technical Events
  {
    id: 'vibeathon',
    title: 'VIBEATHON',
    subtitle: 'Code. Create. Innovate.',
    description: 'Vibeathon is a fast-paced innovation challenge where teams brainstorm, design, and build solutions within a limited time. Participants are judged on creativity, feasibility, and presentation.',
    rules: [
      'Team size: 2–4 members',
      'Problem statements will be revealed on the spot',
      'Internet access may be restricted',
      'Plagiarism will lead to disqualification',
      'Judges\' decision is final'
    ],
    category: 'technical',
    shortDescription: 'Fast-paced innovation challenge where teams brainstorm, design, and build solutions within a limited time.'
  },
  {
    id: 'ctf',
    title: 'CAPTURE THE FLAG',
    subtitle: 'Hack the system. Capture the flag.',
    description: 'A cybersecurity challenge where participants solve puzzles related to cryptography, web security, networking, and logic to capture hidden flags.',
    rules: [
      'Individual or team participation (max 2 per team)',
      'Use of external tools is allowed unless specified',
      'Sharing answers between teams is prohibited',
      'Flags must be submitted within the given time'
    ],
    category: 'technical',
    shortDescription: 'Cybersecurity challenge with puzzles related to cryptography, web security, and networking.'
  },
  {
    id: 'paper-presentation',
    title: 'PAPER PRESENTATION',
    subtitle: 'Ideas that Inspire Innovation',
    description: 'Present your research ideas or technical concepts in front of a panel of judges. This event encourages analytical thinking and effective communication.',
    rules: [
      'Team size: 1–3 members',
      'Presentation time: 6–8 minutes + Q&A',
      'PPT format preferred',
      'Topics must be technical and original',
      'Plagiarism is strictly prohibited'
    ],
    category: 'technical',
    shortDescription: 'Present your research ideas or technical concepts to encourage analytical thinking and communication.'
  },
  // Non-Technical Events
  {
    id: 'stranger-tunes',
    title: 'STRANGER TUNES',
    subtitle: 'Connect through music',
    description: 'Participants are paired with strangers and must identify or vibe with each other through music-based challenges. Fun, energy, and creativity guaranteed!',
    rules: [
      'Individual participation',
      'No offensive content allowed',
      'Decisions by coordinators are final',
      'Follow the time limits strictly'
    ],
    category: 'non-technical',
    shortDescription: 'Music-based challenges where participants connect through creative musical activities.'
  },
  {
    id: 'da-vinci-code',
    title: 'DA VINCI CODE',
    subtitle: 'Crack the clues. Unlock the mystery.',
    description: 'A thrilling puzzle-based event where participants solve interconnected clues and riddles to reach the final solution.',
    rules: [
      'Team size: 2–3 members',
      'Use of mobile phones is not allowed',
      'Skipping clues is not permitted',
      'Time-based scoring system'
    ],
    category: 'non-technical',
    shortDescription: 'Thrilling puzzle-based event with interconnected clues and riddles to solve.'
  },
  {
    id: 'fun-fiesta',
    title: 'FUN FIESTA',
    subtitle: 'Pure fun, zero stress',
    description: 'A collection of exciting mini-games designed to test coordination, presence of mind, and teamwork — all while having fun.',
    rules: [
      'Open for all',
      'Games will be explained on-spot',
      'Time limits apply',
      'Fair play is mandatory'
    ],
    category: 'non-technical',
    shortDescription: 'Collection of exciting mini-games testing coordination, presence of mind, and teamwork.'
  },
  {
    id: 'meme-royale',
    title: 'MEME ROYALE',
    subtitle: 'Creativity meets humor',
    description: 'Participants create or respond to situations using memes. Creativity, humor, and relevance are key judging criteria.',
    rules: [
      'Individual participation',
      'Offensive or political content is not allowed',
      'Templates will be provided (or announced)',
      'Judges\' decision is final'
    ],
    category: 'non-technical',
    shortDescription: 'Creative meme competition where participants respond to situations with humor and creativity.'
  }
];

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
    ? events 
    : events.filter(event => event.category === activeCategory);

  const technicalEvents = events.filter(event => event.category === 'technical');
  const nonTechnicalEvents = events.filter(event => event.category === 'non-technical');

  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              onClick={() => setActiveCategory(category.key as any)}
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
                      description={event.shortDescription}
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
                      description={event.shortDescription}
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
                    description={event.shortDescription}
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