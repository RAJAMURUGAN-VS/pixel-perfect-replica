import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  src: string;
  isActive: boolean;
  onEnded?: () => void;
}

const VideoBackground = ({ src, isActive, onEnded }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      className={`transition-opacity duration-700 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        objectFit: 'cover',
        margin: 0,
        padding: 0
      }}
      src={src}
      muted
      playsInline
      loop
      onEnded={onEnded}
    />
  );
};

export default VideoBackground;
