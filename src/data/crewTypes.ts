export interface TeamMember {
    id: string;
    name: string;
    role: string;
    tagline?: string;
}

export interface TeamCategory {
    title: string;
    members: TeamMember[];
    direction: 'left' | 'right';
}

export interface TimelineEvent {
    title: string;
    date: string;
    description: string;
}
