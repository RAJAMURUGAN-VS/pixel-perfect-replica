export interface Event {
  id: string;
  title: string;
  description: string;
  rules: string[];
  image: string;
  registrationLink: string;
  category: 'technical' | 'non-technical';
}

export const technicalEvents: Event[] = [
  {
    id: 'tech-1',
    title: 'Code Wars',
    description: 'Battle it out in an intense coding competition. Solve complex algorithmic challenges under time pressure and prove your programming prowess.',
    rules: [
      'Individual participation only',
      'Duration: 2 hours',
      'Languages: C, C++, Java, Python',
      'No external libraries allowed',
      'Plagiarism leads to disqualification'
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    registrationLink: '#register',
    category: 'technical'
  },
  {
    id: 'tech-2',
    title: 'Hackathon',
    description: 'A 24-hour marathon of innovation. Build something extraordinary from scratch and present your solution to industry experts.',
    rules: [
      'Team size: 2-4 members',
      'Duration: 24 hours',
      'Any tech stack allowed',
      'Must present a working prototype',
      'Judging based on innovation, feasibility, and presentation'
    ],
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop',
    registrationLink: '#register',
    category: 'technical'
  },
  {
    id: 'tech-3',
    title: 'Debug the Matrix',
    description: 'Find and fix bugs in the given code snippets. Race against time to debug complex programs and emerge victorious.',
    rules: [
      'Individual participation',
      'Duration: 1.5 hours',
      '15 bugs to find and fix',
      'Partial marking available',
      'Fastest correct submission wins'
    ],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop',
    registrationLink: '#register',
    category: 'technical'
  },
  {
    id: 'tech-4',
    title: 'UI/UX Challenge',
    description: 'Design stunning user interfaces and experiences. Create prototypes that blend aesthetics with functionality.',
    rules: [
      'Individual or team (max 2)',
      'Duration: 3 hours',
      'Tools: Figma, Adobe XD, or similar',
      'Must include mobile responsive design',
      'Presentation required'
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    registrationLink: '#register',
    category: 'technical'
  },
  {
    id: 'tech-5',
    title: 'ML Quest',
    description: 'Apply machine learning to solve real-world problems. Build models that predict, classify, and amaze.',
    rules: [
      'Team size: 1-3 members',
      'Duration: 4 hours',
      'Dataset provided',
      'Python/R only',
      'Accuracy metrics for scoring'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    registrationLink: '#register',
    category: 'technical'
  },
  {
    id: 'tech-6',
    title: 'Circuit Breaker',
    description: 'Design and simulate electronic circuits. From basic logic gates to complex microcontroller systems.',
    rules: [
      'Individual participation',
      'Duration: 2 hours',
      'Simulation software provided',
      'Hardware components available',
      'Efficiency and correctness judged'
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    registrationLink: '#register',
    category: 'technical'
  }
];

export const nonTechnicalEvents: Event[] = [
  {
    id: 'non-tech-1',
    title: 'Treasure Hunt',
    description: 'Embark on an adventure across the campus. Solve riddles, find clues, and discover hidden treasures.',
    rules: [
      'Team size: 3-4 members',
      'Duration: 2 hours',
      'All clues must be found in order',
      'No mobile phones allowed',
      'Physical fitness required'
    ],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    registrationLink: '#register',
    category: 'non-technical'
  },
  {
    id: 'non-tech-2',
    title: 'Quiz Master',
    description: 'Test your knowledge across various domains. From science to pop culture, prove you are the ultimate quiz champion.',
    rules: [
      'Team size: 2 members',
      'Multiple rounds',
      'Negative marking in finals',
      'Topics: General Knowledge, Science, Tech, Entertainment',
      'Tie-breaker rounds possible'
    ],
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=300&fit=crop',
    registrationLink: '#register',
    category: 'non-technical'
  },
  {
    id: 'non-tech-3',
    title: 'Photography Walk',
    description: 'Capture the beauty around you. A photography competition that celebrates creativity and perspective.',
    rules: [
      'Individual participation',
      'Duration: 3 hours',
      'Theme revealed on spot',
      'DSLR or smartphone allowed',
      'Basic editing permitted'
    ],
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
    registrationLink: '#register',
    category: 'non-technical'
  },
  {
    id: 'non-tech-4',
    title: 'Short Film Festival',
    description: 'Create and showcase your filmmaking skills. Tell stories that move, inspire, and entertain.',
    rules: [
      'Team size: up to 6 members',
      'Duration: 5-10 minutes',
      'Any genre accepted',
      'Original content only',
      'Submit 48 hours before event'
    ],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop',
    registrationLink: '#register',
    category: 'non-technical'
  },
  {
    id: 'non-tech-5',
    title: 'Dance Battle',
    description: 'Express yourself through movement. Solo or crew, bring your best moves to the dance floor.',
    rules: [
      'Solo or group (max 8)',
      'Duration: 3-5 minutes per act',
      'Any dance style',
      'Own music required',
      'Props allowed'
    ],
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&h=300&fit=crop',
    registrationLink: '#register',
    category: 'non-technical'
  },
  {
    id: 'non-tech-6',
    title: 'Stand-Up Comedy',
    description: 'Make the audience laugh with your wit and humor. A platform for budding comedians to shine.',
    rules: [
      'Individual participation',
      'Duration: 5-7 minutes',
      'Clean humor only',
      'No offensive content',
      'Original material preferred'
    ],
    image: 'https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=400&h=300&fit=crop',
    registrationLink: '#register',
    category: 'non-technical'
  }
];

export const getAllEvents = (): Event[] => [...technicalEvents, ...nonTechnicalEvents];

export const getEventsByCategory = (category: 'technical' | 'non-technical'): Event[] => {
  return category === 'technical' ? technicalEvents : nonTechnicalEvents;
};

export const getEventById = (id: string): Event | undefined => {
  return getAllEvents().find(event => event.id === id);
};
