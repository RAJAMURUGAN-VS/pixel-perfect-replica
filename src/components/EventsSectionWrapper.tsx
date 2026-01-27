import EventCards from './EventCards';
import { NavigationSection } from '@/hooks/useNavigation';

interface EventsSectionWrapperProps {
  isActive: boolean;
  onNavigate?: (section: NavigationSection) => void;
}

const EventsSectionWrapper = ({ isActive, onNavigate }: EventsSectionWrapperProps) => {
  if (!isActive) return null;

  return (
    <div className="min-h-screen relative">
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
