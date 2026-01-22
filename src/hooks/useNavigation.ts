import { useState, useCallback } from 'react';

export type NavigationSection = 'home' | 'about' | 'events' | 'contact';

interface UseNavigationReturn {
  currentSection: NavigationSection;
  navigateTo: (section: NavigationSection) => void;
  isSection: (section: NavigationSection) => boolean;
}

export const useNavigation = (initialSection: NavigationSection = 'home'): UseNavigationReturn => {
  const [currentSection, setCurrentSection] = useState<NavigationSection>(initialSection);

  const navigateTo = useCallback((section: NavigationSection) => {
    setCurrentSection(section);
  }, []);

  const isSection = useCallback((section: NavigationSection) => {
    return currentSection === section;
  }, [currentSection]);

  return {
    currentSection,
    navigateTo,
    isSection,
  };
};
