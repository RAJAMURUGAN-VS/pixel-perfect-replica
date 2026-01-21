import heroImage from '@/assets/hero-forest.jpg';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 mt-20">
        {/* Title Box */}
        <div className="tech-border bg-card/80 backdrop-blur-sm px-6 py-3 mb-8 inline-block">
          <span className="font-terminal text-sm md:text-base text-muted-foreground">TITLE</span>
        </div>

        {/* Mission Text */}
        <div className="tech-border bg-card/90 backdrop-blur-sm px-8 py-4 mb-8 max-w-xl mx-auto">
          <h1 className="font-terminal text-xl md:text-2xl text-foreground tracking-wider">
            CURRENT MISSION: FIND 011
          </h1>
        </div>

        {/* Countdown Timer */}
        <div className="tech-border bg-card/80 backdrop-blur-sm px-8 py-6 mb-6 inline-block">
          <CountdownTimer />
        </div>

        {/* Warning Message */}
        <p className="font-terminal text-base md:text-lg text-foreground/90 mb-8 tracking-wider max-w-md mx-auto">
          GATE OPENING IMMINENT.<br />
          HAWKINS LAB UNDER ATTACK. PROTECT THE PARTY.
        </p>

        {/* CTA Button */}
        <button className="btn-investigate">
          INVESTIGATE
        </button>

        {/* Decorative Line */}
        <div className="mt-12 max-w-2xl mx-auto">
          <svg className="w-full h-12 opacity-50" viewBox="0 0 400 50" fill="none">
            <path 
              d="M0 25 Q 50 10, 100 25 T 200 25 T 300 25 T 400 25" 
              stroke="hsl(var(--neon-cyan))" 
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
