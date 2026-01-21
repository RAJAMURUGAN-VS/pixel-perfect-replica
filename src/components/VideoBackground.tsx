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
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: 0 }}
      src={src}
      muted
      playsInline
      onEnded={onEnded}
    />
  );
};

export default VideoBackground;
