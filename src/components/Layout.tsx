import { useState, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import ParticleBackground from '@/components/ParticleBackground';
import VideoIntro from '@/components/VideoIntro';

// Background video for non-home pages
const BACKGROUND_VIDEO = 'https://d2gfxmzi2tqh5n.cloudfront.net/upscaled-video%20(1).mp4';

const Layout = () => {
    const location = useLocation();
    const [showIntro, setShowIntro] = useState(() => {
        return !sessionStorage.getItem('hasViewedIntro');
    });

    // Determines current section based on path for styling/logic
    // Defaults to 'home' if path is '/'
    const currentSection = location.pathname === '/' ? 'home' : location.pathname.substring(1);

    const isEvents = currentSection === 'events';
    const isCrew = currentSection === 'crew';

    // Show intro video first if needed
    if (showIntro) {
        return <VideoIntro onComplete={() => {
            sessionStorage.setItem('hasViewedIntro', 'true');
            setShowIntro(false);
        }} />;
    }

    return (
        <div className={`min-h-screen bg-background relative scanlines ${!isCrew ? 'overflow-x-hidden' : ''}`}>
            {/* Looping Video Background - Shows on all pages except home */}
            {currentSection !== 'home' && (
                <div className="fixed inset-0 z-0">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={BACKGROUND_VIDEO}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="auto"
                    />
                    {/* Dark overlay on video for readability */}
                    <div className="absolute inset-0 bg-background/70" />
                </div>
            )}

            {/* Particle Effect - Hide when in events or crew section */}
            {!isEvents && !isCrew && <ParticleBackground />}

            {/* Main Content */}
            <div className="relative z-10">
                {/* Header - visible on all sections except during events cinematic */}
                {!isEvents && (
                    <Header currentSection={currentSection} />
                )}

                {/* Page Transitions */}
                <AnimatePresence mode={isEvents ? 'sync' : 'wait'}>
                    <motion.div
                        key={location.pathname}
                        initial={currentSection === 'home' ? { opacity: 0 } : { opacity: 0, y: 20 }}
                        animate={currentSection === 'home' ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        exit={currentSection === 'home' ? { opacity: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="w-full"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Bottom Gradient */}
            <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
        </div>
    );
};

export default Layout;
