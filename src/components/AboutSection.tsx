import partyImage from '@/assets/party-bikes.jpg';
import { Play } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-stranger text-2xl md:text-3xl glow-text mb-12 tracking-wider">
          ABOUT
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Card - Small Preview */}
          <div className="tech-border bg-card/80 backdrop-blur-sm p-4">
            <div className="text-sm font-terminal text-muted-foreground mb-3 tracking-wider">
              ABOUT
            </div>
            <div className="relative aspect-video mb-4 overflow-hidden">
              <img 
                src={partyImage} 
                alt="The Party" 
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-between px-2">
                <button className="w-8 h-8 flex items-center justify-center border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20 transition-colors">
                  ◁
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20 transition-colors">
                  ▷
                </button>
              </div>
            </div>
            <p className="font-terminal text-sm text-muted-foreground tracking-wider uppercase">
              Join the party. Friends don't lie.<br />
              The secrets of Hawkins.
            </p>
          </div>

          {/* Right Card - Large Image */}
          <div className="relative">
            <h3 className="font-stranger text-xl md:text-2xl text-foreground mb-4 text-center tracking-wider">
              ABOUT
            </h3>
            <div className="tech-border overflow-hidden">
              <div className="relative aspect-video">
                <img 
                  src={partyImage} 
                  alt="The Party on bikes" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Play Button */}
                <button className="absolute right-4 bottom-4 w-12 h-12 border-2 border-neon-cyan flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/20 transition-all hover:scale-110">
                  <Play className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="font-terminal text-lg md:text-xl text-foreground tracking-widest">
            JOIN THE PARTY: FRIENDS DON'T LIE.<br />
            THE SECRETS OF HAWKINS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
