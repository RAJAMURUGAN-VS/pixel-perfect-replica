// Cloudinary image URLs
const clawctfImage = 'https://res.cloudinary.com/dop49krua/image/upload/v1769174649/clawctf_jnmzry.png';
const paperPresentationImage = 'https://res.cloudinary.com/dop49krua/image/upload/v1769174651/paper-presentation_n5uxau.png';
const vibeAThonImage = 'https://res.cloudinary.com/dop49krua/image/upload/v1769174649/vibe-a-thon_nfgt48.png';
const strangerTunesImage = 'https://res.cloudinary.com/dop49krua/image/upload/v1769174649/stranger-tunes_zwgzkm.png';
const daVinciCodeImage = 'https://res.cloudinary.com/dop49krua/image/upload/v1769174648/the-da-vinci-code_ufwzmk.jpg';
const iplAuctionImage = 'https://res.cloudinary.com/dop49krua/image/upload/v1769174648/ipl-auction_hq8q1r.jpg';

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
    title: 'ClawCTF',
    description: 'ClawCTF is a 2-hour Capture The Flag competition open to students from all colleges. Compete solo or in teams of up to 2, solve challenges across multiple cybersecurity categories, and earn points by capturing flags. Beginner to intermediate friendly, with static and dynamic scoring and AI tools allowed.',
    rules: [
      'Solo or team participation (max 2 members)',
      'Duration: 2 hours',
      'Open to students from all colleges',
      'Multiple cybersecurity categories',
      'AI tools allowed',
      'Static and dynamic scoring system'
    ],
    image: clawctfImage,
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScPPhCodPBith9xpblxAMF5oGPuMMDcH8eiCyCBz9kn7MaV6A/viewform',
    category: 'technical'
  },
  {
    id: 'tech-2',
    title: 'Paper Presentation',
    description: 'Paper Presentation provides a platform for participants to showcase research ideas, technical concepts, or innovative solutions. It evaluates analytical skills, depth of knowledge, and presentation clarity. Participants defend their work through structured explanation and Q&A. The event promotes research aptitude and technical communication. It fosters confidence and academic excellence.',
    rules: [
      'Individual or team participation',
      'Research ideas, technical concepts, or innovative solutions',
      'Structured explanation and Q&A required',
      'Evaluates analytical skills and presentation clarity',
      'Promotes research aptitude and technical communication'
    ],
    image: paperPresentationImage,
    registrationLink: 'https://forms.gle/9yLSVw8iXFDCXrnS8',
    category: 'technical'
  },
  {
    id: 'tech-3',
    title: 'Vibe-a-Thon',
    description: 'Vibe-a-Thon is a competitive event where participants design precise and effective prompts to guide AI systems toward accurate, optimized outputs. It tests logical thinking, clarity of instruction, and problem-solving ability. Participants must balance creativity with technical precision. The event emphasizes understanding AI behavior and prompt engineering strategies. It encourages innovative thinking in human–AI interaction.',
    rules: [
      'Design precise and effective AI prompts',
      'Tests logical thinking and problem-solving ability',
      'Balance creativity with technical precision',
      'Understanding AI behavior and prompt engineering',
      'Encourages innovative thinking in human–AI interaction'
    ],
    image: vibeAThonImage,
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdbowx9oRuvTa31clxxQUlliuXdY6i4z0Atjs5N1G9ddkgzb/viewform',
    category: 'technical'
  }
];

export const nonTechnicalEvents: Event[] = [
  {
    id: 'non-tech-1',
    title: '🎬✨ Stranger Tunes',
    description: 'What happens when movies, music, and a touch of the Upside Down collide? Stranger Tunes is a high-energy, non-technical team event blending visual clues, iconic sounds, lyrical twists, and unexpected challenges inspired by pop culture and Kollywood. If you love guessing before others do, vibing to BGMs, and decoding surprises, this is your Hawkins moment.',
    rules: [
      'Team event',
      'High-energy non-technical competition',
      'Visual clues, iconic sounds, and lyrical twists',
      'Inspired by pop culture and Kollywood',
      'Decode surprises and guess before others'
    ],
    image: strangerTunesImage,
    registrationLink: 'https://forms.gle/SZcb7r1XyrjcKWTF6',
    category: 'non-technical'
  },
  {
    id: 'non-tech-2',
    title: 'The DA VINCI CODE',
    description: 'Ready to crack clues and chase the treasure? 🗺️ Treasure Hunt is an interactive hybrid event where teams solve online challenges and complete physical tasks to move ahead. Sharp thinking, teamwork, and speed are the keys to victory!',
    rules: [
      'Team participation required',
      'Interactive hybrid event',
      'Solve online challenges and complete physical tasks',
      'Sharp thinking, teamwork, and speed essential',
      'Move ahead by solving clues in sequence'
    ],
    image: daVinciCodeImage,
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScol5ECjW8Sc2-Jz5QxwOyFSZlaxp-867MIwTKoHeSHTMQSvA/viewform',
    category: 'non-technical'
  },
  {
    id: 'non-tech-3',
    title: '🔥 IPL Auction 🔥',
    description: 'Experience the thrill of a real IPL-style auction where strategy meets excitement. Build your dream team, manage budgets, and outbid rivals in a high-energy showdown. Join us for an unforgettable mix of cricket, competition, and campus fun! 🏏💥',
    rules: [
      'IPL-style auction format',
      'Build your dream team',
      'Manage budgets strategically',
      'Outbid rivals in high-energy showdown',
      'Mix of cricket, competition, and campus fun'
    ],
    image: iplAuctionImage,
    registrationLink: 'https://forms.gle/zf7i4VAfcVc82NKa7',
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
