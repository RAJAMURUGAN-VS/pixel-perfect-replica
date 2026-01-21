import { motion } from 'framer-motion';

const AnomaliesSection = () => {
  return (
    <section id="anomalies" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-stranger text-2xl md:text-3xl glow-text mb-8 tracking-wider"
        >
          ABOUT
        </motion.h2>

        {/* Content Box */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="tech-border bg-card/60 backdrop-blur-sm p-8 md:p-12 min-h-[300px] relative overflow-hidden"
        >
          <h3 className="font-terminal text-xl md:text-2xl text-accent tracking-wider mb-8">
            —UPCOMING ANOMALIES
          </h3>

          {/* Decorative Elements */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [45, 45, 45],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-8 right-8"
          >
            <div className="w-8 h-8 border-2 border-foreground/50 rotate-45" />
          </motion.div>

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
        </motion.div>
      </div>
    </section>
  );
};

export default AnomaliesSection;
