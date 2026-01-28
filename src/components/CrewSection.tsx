import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, MotionValue, useSpring } from 'framer-motion';
import { LEADERSHIP, TEAM_CATEGORIES } from '@/data/crew';
import { TeamCategory, TeamGroup, TeamMember } from '@/data/crewTypes';

/**
 * CONFIGURATION FOR SMOOTH SCROLL PHYSICS
 */
const SPRING_OPTIONS = {
    stiffness: 50,
    damping: 25,
    mass: 0.6,
    restDelta: 0.001
};

/**
 * 1. HERO SECTION
 */
const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#050505]">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full" />
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
                    className="font-stranger text-4xl md:text-7xl font-bold text-white mb-4 tracking-widest"
                >
                    BEHIND THE GATE
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-gray-400 text-lg md:text-xl font-light tracking-wide italic"
                >
                    The Minds That Built the Event
                </motion.p>
            </motion.div>

            {/* Cinematic Fog Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]" />
        </section>
    );
};

/**
 * 2. LEADERSHIP SECTION
 */
const LeadershipCard = ({ name, role, tagline, imageUrl }: TeamMember) => {
    const bgImage = imageUrl || `https://api.dicebear.com/9.x/initials/svg?seed=${name}&backgroundColor=1a1a1a&textColor=555555&fontSize=40`;

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative h-[420px] rounded-xl overflow-hidden bg-[#050505] border border-white/10 shadow-2xl cursor-pointer"
        >
            {/* Image Container with Zoom Effect */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle vignette for cinematic feel */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/20 opacity-80 transition-opacity duration-500 group-hover:opacity-60 pointer-events-none" />

                <img
                    src={bgImage}
                    alt={name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out filter grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                />
            </div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-end h-full pointer-events-none">
                {/* Localized gradient for text area */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />

                <div className="relative p-6 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    {/* ID / Badge */}
                    <div className="flex items-center gap-3 mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="h-[2px] w-6 bg-red-600" />
                        <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest">LEADERSHIP</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white font-stranger mb-1 drop-shadow-lg">{name}</h3>
                    <p className="text-white/80 font-bold text-xs tracking-widest uppercase mb-3">{role}</p>

                    {/* Tagline reveals on hover */}
                    <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100">
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 pb-2 border-t border-white/10 pt-2">
                            {tagline}
                        </p>
                    </div>
                </div>
            </div>

            {/* Active Selection Border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-red-900/40 rounded-xl transition-colors duration-500 pointer-events-none" />
        </motion.div>
    );
};

const LeadershipSection = () => {
    return (
        <section className="py-24 px-6 md:px-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-stranger">OPERATIONS & IN-CHARGE TEAM</h2>
                    <div className="w-20 h-1 bg-red-600" />
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
 * 3. PROFILE CARD - ID CARD DESIGN
 */
interface ProfileCardProps extends TeamMember {
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
}

const ProfileCard = ({ name, role, index, total, scrollYProgress, imageUrl }: ProfileCardProps) => {
    const isThemeCard = role === 'EVENT THEME';

    const cardWidth = 300;
    const gap = 30;
    const expandedOffset = index * (cardWidth + gap);
    const stackedOffset = index * 10;

    const xPos = useTransform(scrollYProgress, [0, 0.12], [stackedOffset, expandedOffset]);

    const randomTilt = (index % 2 === 0 ? 3 : -3) * ((index % 3) + 0.5);
    const rotate = useTransform(scrollYProgress, [0, 0.12], [isThemeCard ? 0 : randomTilt, 0]);

    const opacity = useTransform(scrollYProgress, [0, 0.08], [1 - (index * 0.15), 1]);
    const scale = useTransform(scrollYProgress, [0, 0.12], [0.9 + (index * 0.02), 1]);

    const displayImage = imageUrl || `https://api.dicebear.com/9.x/initials/svg?seed=${name}&backgroundColor=111111&textColor=888888&fontSize=45`;

    const idDisplay = isThemeCard
        ? "EVENT"
        : `ID: ${name.split(' ')[0].substring(0, 3).toUpperCase()}-00${index}`;

    return (
        <motion.div
            style={{ x: xPos, rotate: rotate, zIndex: total - index, scale, opacity, willChange: "transform" }}
            className="absolute top-0 left-0 w-[300px] h-[450px] rounded-xl bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl origin-bottom-left"
        >
            {/* Holographic Edge/Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-red-900/20 pointer-events-none z-30" />

            {/* Top Bar (ID Card Style) */}
            <div className="absolute top-0 left-0 right-0 z-40">
                <div className={`h-1 w-full ${isThemeCard ? 'bg-red-600' : 'bg-red-600/80'}`} />
                <div className="flex justify-between items-center px-4 py-2">
                    <div className="w-16 h-1 bg-white/20 rounded-full" />
                    <div className="flex gap-1">
                        <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Image Area */}
            <div className="absolute inset-0 z-0">
                <img
                    src={displayImage}
                    alt={name}
                    className={`w-full h-full object-cover filter transition-all duration-500 ${isThemeCard ? 'brightness-75 hover:brightness-100 grayscale-0' : 'grayscale hover:grayscale-0'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
            </div>

            {/* Content Area */}
            <div className="relative z-20 h-full p-6 flex flex-col justify-end group">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`text-[10px] font-mono tracking-widest uppercase border px-1 py-0.5 rounded ${isThemeCard ? 'text-white border-white/50 bg-red-600/80' : 'text-red-500 border-red-900/50'}`}>
                            {idDisplay}
                        </span>
                    </div>
                    <h4 className="font-bold text-white font-stranger leading-none mb-2 drop-shadow-lg ${isThemeCard ? 'text-3xl' : 'text-2xl'}">{name}</h4>
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-8 bg-red-500" />
                        <p className={`text-xs font-bold uppercase tracking-wider ${isThemeCard ? 'text-white' : 'text-gray-300'}`}>
                            {role}
                        </p>
                    </div>
                </div>

                {/* Tech Decoration Lines */}
                <div className="absolute bottom-6 right-6 flex flex-col gap-1 opacity-50">
                    <div className="w-1 h-1 bg-white/40" />
                    <div className="w-1 h-1 bg-white/40" />
                    <div className="w-1 h-1 bg-white/40" />
                </div>
            </div>
        </motion.div>
    );
};

/**
 * 4. GROUP DECK
 */
const GroupDeck = ({ group, scrollYProgress }: { group: TeamGroup; scrollYProgress: MotionValue<number> }) => {
    const cardWidth = 300;
    const gap = 30;
    const totalMembers = group.members.length;

    const stackedWidth = cardWidth + 60;
    const expandedWidth = (totalMembers * (cardWidth + gap)) + 20;

    const width = useTransform(scrollYProgress, [0, 0.12], [stackedWidth, expandedWidth]);

    return (
        <motion.div style={{ width, willChange: "width" }} className="relative flex-shrink-0 h-[500px] mr-32 md:mr-48">
            <h4 className="absolute -top-16 left-0 text-xl md:text-3xl font-stranger font-bold text-white/80 whitespace-nowrap tracking-wider flex items-center gap-3">
                <span className="w-8 h-[2px] bg-red-600 inline-block" /> {group.title}
            </h4>
            <div className="relative w-full h-full">
                {group.members.map((member, i) => (
                    <ProfileCard
                        key={member.id}
                        index={i}
                        total={totalMembers}
                        scrollYProgress={scrollYProgress}
                        {...member}
                    />
                ))}
            </div>
        </motion.div>
    );
};

/**
 * 5. CATEGORY HEADER
 */
const CategoryHeader = ({ title, index }: { title: string; index: number }) => (
    <div className="relative flex-shrink-0 flex flex-col justify-center h-[500px] w-[320px] md:w-[450px] pl-8 pr-6 mr-16 z-10 border-l-2 border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent backdrop-blur-sm">
        <span className="absolute -top-12 left-0 font-stranger text-[10rem] md:text-[16rem] font-bold text-white/[0.04] select-none leading-none z-0 pointer-events-none">
            0{index + 1}
        </span>

        <div className="relative z-10">
            <div className="w-24 h-2 bg-red-600 mb-8 shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
            <h3 className="text-4xl md:text-6xl font-stranger font-bold text-white leading-tight tracking-wide drop-shadow-2xl">
                {title}
            </h3>
            <p className="mt-4 text-gray-400 text-sm font-mono tracking-widest opacity-60">
        // AUTHORIZED PERSONNEL ONLY
            </p>
        </div>
    </div>
);

/**
 * 6. CATEGORY SCROLL SECTION
 */
const CategoryScrollSection = ({ category, index }: { category: TeamCategory; index: number }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const numberOfGroups = category.groups.length;

    // CONDITIONAL HEIGHT (Version 9 Logic):
    // Single group categories get short scroll (250vh) to avoid sensitivity
    // Multi-group categories get longer scroll for smooth panning
    const isSingleGroup = numberOfGroups === 1;
    const dynamicHeight = `${isSingleGroup ? 250 : 400 + (numberOfGroups * 100)}vh`;

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, SPRING_OPTIONS);

    // CALIBRATED PAN PERCENTAGES (Version 9 Logic):
    // Fixed tiers based on group count for predictable behavior
    let panPercentage = 0;
    if (numberOfGroups === 1) panPercentage = 25;      // Slight pan for single groups
    else if (numberOfGroups === 2) panPercentage = 50;
    else if (numberOfGroups === 3) panPercentage = 75;
    else panPercentage = 96;                           // Full pan for 6+ groups

    const endPan = `-${panPercentage}%`;
    const containerX = useTransform(smoothProgress, [0.1, 1], ["0%", endPan]);

    return (
        <section ref={targetRef} style={{ height: dynamicHeight }} className="relative bg-[#050505]">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Main Content Row */}
                <div className="flex items-center h-full min-w-max pl-[5vw] md:pl-[8vw]">

                    <CategoryHeader title={category.title} index={index} />

                    {/* Groups (Decks) Container */}
                    <motion.div
                        style={{ x: containerX, willChange: "transform" }}
                        className="flex items-center h-[550px] pr-[10vw]"
                    >
                        {category.groups.map((group) => (
                            <GroupDeck
                                key={group.id}
                                group={group}
                                scrollYProgress={smoothProgress}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-12 right-12 flex flex-col items-end gap-2">
                    <span className="text-xs font-mono text-red-500/50">SECTION PROGRESS</span>
                    <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            style={{ scaleX: smoothProgress }}
                            className="h-full bg-red-600 origin-left"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};




/**
 * 8. CLOSING SECTION
 */
const ClosingSection = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-center px-6">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
                <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed mb-6">
                    This is more than an event.
                </p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="text-2xl md:text-4xl text-white font-stranger font-bold uppercase tracking-[0.2em]"
                >
                    This is a convergence.
                </motion.p>

                <motion.div
                    animate={{ opacity: [1, 0.4, 1, 1, 0.2, 1] }}
                    transition={{ repeat: Infinity, duration: 4, times: [0, 0.1, 0.2, 0.8, 0.9, 1] }}
                    className="mt-12 w-1 h-8 bg-red-600 mx-auto"
                />
            </motion.div>
            <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
};

/**
 * MAIN COMPONENT
 */
const CrewSection = () => {
    return (
        <div className="relative">
            <HeroSection />
            <LeadershipSection />

            <div className="px-6 md:px-24 py-12 bg-[#050505]">
                <h2 className="text-xl font-bold text-red-600/80 font-stranger mb-1 tracking-widest">CLASSIFIED FILES</h2>
                <h3 className="text-4xl md:text-6xl font-extrabold text-white font-stranger shadow-black drop-shadow-lg">DEPARTMENT HEADS</h3>
            </div>

            {TEAM_CATEGORIES.map((category, index) => (
                <CategoryScrollSection key={category.id} category={category} index={index} />
            ))}


            <ClosingSection />

            <div className="fixed inset-0 pointer-events-none z-50 mix-blend-soft-light opacity-30 shadow-[inset_0_0_15vw_rgba(255,0,0,0.5)]" />
        </div>
    );
};

export default CrewSection;
