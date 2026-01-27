import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { LEADERSHIP, TEAM_CATEGORIES, TIMELINE } from '@/data/crew';
import { TeamCategory, TeamMember, TimelineEvent } from '@/data/crewTypes';

/**
 * 1. HERO SECTION
 */
const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-background">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-10 text-center px-4"
            >
                <motion.h1
                    initial={{ letterSpacing: "0.2em", opacity: 0 }}
                    animate={{ letterSpacing: "0.05em", opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="font-stranger text-4xl md:text-7xl font-bold text-foreground mb-4 tracking-widest glow-text"
                >
                    BEHIND THE PORTAL
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-muted-foreground text-lg md:text-xl font-light tracking-wide italic"
                >
                    The Minds That Built the Event
                </motion.p>
            </motion.div>

            {/* Cinematic Fog Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-background/40 to-background" />
        </section>
    );
};

/**
 * 2. LEADERSHIP SECTION
 */
const LeadershipCard = ({ name, role, tagline }: TeamMember) => {
    return (
        <motion.div
            whileHover={{ y: -8, boxShadow: "0 10px 30px -10px hsl(var(--accent) / 0.3)" }}
            className="group relative p-8 rounded-2xl tech-border bg-card/50 backdrop-blur-lg overflow-hidden transition-all duration-300 h-full flex flex-col justify-between"
        >
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
                <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 font-terminal">{role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{tagline}</p>
            </div>
            {/* Subtle Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
};

const LeadershipSection = () => {
    return (
        <section className="py-24 px-6 md:px-24 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-stranger">THE ARCHITECTS</h2>
                    <div className="w-20 h-1 bg-accent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {LEADERSHIP.map((leader) => (
                        <LeadershipCard key={leader.id} {...leader} />
                    ))}
                </div>
            </div>
        </section>
    );
};

/**
 * 3. PROFILE CARD & CATEGORY SCROLL SECTIONS
 */
const ProfileCard = ({ name, role }: TeamMember) => (
    <div className="relative flex-shrink-0 w-[280px] h-[420px] rounded-xl overflow-hidden group bg-card/80 tech-border transition-all duration-500 hover:border-accent/50">
        {/* PLACEHOLDER AREA */}
        <div className="absolute inset-0 bg-muted/10 group-hover:scale-110 transition-transform duration-700 ease-out">
            {/* Avatar Placeholder */}
            <div className="w-full h-full flex items-center justify-center text-foreground/10 font-stranger text-6xl font-bold">
                {name.charAt(0)}
            </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="w-8 h-1 bg-accent mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <h4 className="text-2xl font-bold text-foreground font-terminal leading-none mb-1">{name}</h4>
            <p className="text-neon-cyan text-xs font-bold uppercase tracking-widest">{role}</p>
        </div>
    </div>
);

const CategoryHeader = ({ title, index }: { title: string; index: number }) => (
    <div className="relative flex-shrink-0 flex flex-col justify-center h-[420px] w-[320px] md:w-[500px] pl-8 pr-6 mr-12 ml-4 md:ml-12 z-10 border-l-2 border-border bg-gradient-to-r from-muted/5 to-transparent">
        {/* Abstract Background Number */}
        <span className="absolute -top-12 left-0 font-stranger text-[10rem] md:text-[14rem] font-bold text-foreground/5 select-none leading-none z-0 pointer-events-none">
            0{index + 1}
        </span>

        <div className="relative z-10">
            <div className="w-20 h-1.5 bg-accent mb-6 shadow-[0_0_15px_hsl(var(--accent)/0.5)]" />
            <h3 className="text-3xl md:text-5xl font-stranger font-bold text-foreground leading-tight tracking-wide drop-shadow-2xl">
                {title}
            </h3>
        </div>
    </div>
);

const CategoryScrollSection = ({ category, index }: { category: TeamCategory; index: number }) => {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-background">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <motion.div style={{ x }} className="flex items-center h-full min-w-max pl-[5vw]">
                    {/* Category Header */}
                    <CategoryHeader title={category.title} index={index} />

                    {/* Horizontal Cards */}
                    <div className="flex gap-8 pr-24">
                        {category.members.map((member) => (
                            <ProfileCard key={member.id} {...member} />
                        ))}
                    </div>

                    {/* End Marker */}
                    <div className="flex flex-col items-center justify-center opacity-30 px-12 border-l border-border h-[200px] ml-12">
                        <div className="w-12 h-0.5 bg-accent mb-2" />
                        <span className="font-terminal text-xs tracking-widest text-muted-foreground [writing-mode:vertical-rl]">NEXT SECTION</span>
                    </div>
                </motion.div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-border">
                    <motion.div
                        style={{ scaleX: scrollYProgress }}
                        className="h-full bg-accent origin-left shadow-[0_0_10px_hsl(var(--accent)/0.5)]"
                    />
                </div>
            </div>
        </section>
    );
};

/**
 * 4. TIMELINE SECTION
 */
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

const TimelineSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]  // Detect when entering/leaving viewport
    });

    const lineHeight = useTransform(scrollYProgress, [0.2, 0.9], ["0%", "100%"]);  // Start at 20% scroll progress

    return (
        <section className="relative py-24 px-6 md:px-24 bg-background overflow-hidden">
            <div className="max-w-5xl mx-auto relative">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground font-stranger mb-4">THE CHRONICLE</h2>
                    <div className="w-24 h-1 bg-accent mx-auto" />
                </div>

                <div ref={containerRef} className="relative mt-20">
                    {/* Background Track */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-foreground/5 -translate-x-1/2 z-0" />

                    {/* Animated Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-1/2 top-0 w-1 bg-accent -translate-x-1/2 shadow-[0_0_20px_hsl(var(--accent))] z-[100]"
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
            </div>
        </section>
    );
};

/**
 * 5. CLOSING SECTION
 */
const ClosingSection = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center bg-background text-center px-6">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
                <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed mb-6">
                    This is more than an event.
                </p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="text-2xl md:text-4xl text-foreground font-stranger font-bold uppercase tracking-[0.2em]"
                >
                    This is a convergence.
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
    );
};

/**
 * MAIN COMPONENT
 */
const CrewSection = () => {
    return (
        <div className="relative min-h-screen">
            <HeroSection />
            <LeadershipSection />

            {/* Separator */}
            <div className="px-6 md:px-24 py-12 bg-background">
                <h2 className="text-xl font-bold text-accent/80 font-terminal mb-1 tracking-widest">THE ROSTER</h2>
                <h3 className="text-4xl md:text-6xl font-extrabold text-foreground font-stranger shadow-black drop-shadow-lg">CORE COMMAND</h3>
            </div>

            {/* Team Categories */}
            {TEAM_CATEGORIES.map((category, index) => (
                <CategoryScrollSection key={category.title} category={category} index={index} />
            ))}

            <TimelineSection />
            <ClosingSection />
        </div>
    );
};

export default CrewSection;
