export interface TeamMember {
    id: string;
    name: string;
    role: string;
    tagline?: string;
    imageUrl?: string;
}

export interface TeamGroup {
    id: string;
    title: string;
    members: TeamMember[];
}

export interface TeamCategory {
    id: string;
    title: string;
    groups: TeamGroup[];
    direction: 'left' | 'right';
}

export interface TimelineEvent {
    title: string;
    date: string;
    description: string;
}
