import { NavigationSection } from '@/hooks/useNavigation';
import EventCards from './EventCards';

interface EventsSectionWrapperProps {
  isActive: boolean;
  onNavigate?: (section: NavigationSection) => void;
}

const EventsSectionWrapper = ({ isActive, onNavigate }: EventsSectionWrapperProps) => {
  if (!isActive) return null;

  return (
    <div className="min-h-screen relative">
      {/* Event Cards - Show directly without video transition */}
      <EventCards
        isVisible={isActive}
        isVideoEnded={true}
        onVideoEnd={() => { }}
        onNavigate={onNavigate}
      />
    </div>
  );
};

export default EventsSectionWrapper;
