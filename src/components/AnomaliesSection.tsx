const AnomaliesSection = () => {
  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-stranger text-2xl md:text-3xl glow-text mb-8 tracking-wider">
          ABOUT
        </h2>

        {/* Content Box */}
        <div className="tech-border bg-card/60 backdrop-blur-sm p-8 md:p-12 min-h-[300px] relative overflow-hidden">
          <h3 className="font-terminal text-xl md:text-2xl text-accent tracking-wider mb-8">
            —UPCOMING ANOMALIES
          </h3>

          {/* Decorative Elements */}
          <div className="absolute bottom-8 right-8">
            <div className="w-8 h-8 border-2 border-foreground/50 rotate-45 animate-float" />
          </div>

          {/* Scanning Lines Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 4px,
                hsl(var(--neon-cyan) / 0.1) 4px,
                hsl(var(--neon-cyan) / 0.1) 8px
              )`
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnomaliesSection;
