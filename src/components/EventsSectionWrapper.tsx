import EventCards from './EventCards';
import { NavigationSection } from '@/hooks/useNavigation';

interface EventsSectionWrapperProps {
  isActive: boolean;
}

const EventsSectionWrapper = ({ isActive }: EventsSectionWrapperProps) => {
  // if (!isActive) return null; // Controlled by Router now

  return (
    <div className="min-h-screen relative">
      <EventCards
        isVisible={true}
        isVideoEnded={true}
        onVideoEnd={() => { }}
      />
    </div>
  );
};

export default EventsSectionWrapper;
