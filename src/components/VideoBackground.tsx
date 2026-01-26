import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoBackgroundProps {
  src: string;
  isActive: boolean;
  onEnded?: () => void;
}

const VideoBackground = ({ src, isActive, onEnded }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isActive) return; // Only load when active

    // Check if browser supports HLS natively (Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else if (Hls.isSupported()) {
      // Use HLS.js for other browsers with optimized settings
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 30, // Reduced buffer
        maxBufferLength: 30, // Reduced buffer
        maxMaxBufferLength: 60,
        maxBufferSize: 60 * 1000 * 1000, // 60MB max
        maxBufferHole: 0.5,
        highBufferWatchdogPeriod: 2,
        nudgeOffset: 0.1,
        nudgeMaxRetry: 3,
        maxFragLookUpTolerance: 0.25,
        liveSyncDurationCount: 3,
        liveMaxLatencyDurationCount: 10,
        startLevel: -1, // Auto quality selection
        autoStartLoad: true
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hlsRef.current = hls;

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.error('HLS fatal error:', data);
        }
      });
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [src, isActive]); // Reinitialize when active state changes

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isActive) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay failed, try again with user interaction
          console.log('Autoplay prevented');
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
      // Clear video source when not active to free memory
      if (!video.canPlayType('application/vnd.apple.mpegurl') && hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    }
  }, [isActive]);

  // Don't render if not active - saves GPU
  if (!isActive) return null;

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      style={{ zIndex: 0, willChange: 'opacity' }}
      muted
      playsInline
      preload="auto"
      onEnded={onEnded}
    />
  );
};

export default VideoBackground;
