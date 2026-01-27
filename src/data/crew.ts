import { TeamMember, TeamCategory, TimelineEvent } from './crewTypes';

export const LEADERSHIP: TeamMember[] = [
    { id: 'l1', name: 'Dr. Faculty Head', role: 'Faculty Coordinator', tagline: 'Guiding the vision of technical excellence.' },
    { id: 'l2', name: 'Prof. CSE Dept', role: 'Faculty Coordinator', tagline: 'Empowering students to push boundaries.' },
    { id: 'l3', name: 'Student Lead 1', role: 'Student Event Coordinator', tagline: 'Bridging code and community.' },
    { id: 'l4', name: 'Student Lead 2', role: 'Student Event Coordinator', tagline: 'Turning logic into experiences.' },
];

export const TEAM_CATEGORIES: TeamCategory[] = [
    {
        title: 'EVENT COORDINATORS',
        direction: 'left',
        members: [
            { id: 'ec1', name: 'Coordinator 1', role: 'Venue Management' },
            { id: 'ec2', name: 'Coordinator 2', role: 'Floor Director' },
            { id: 'ec3', name: 'Coordinator 3', role: 'Stage Control' },
            { id: 'ec4', name: 'Coordinator 4', role: 'Technical Liaison' },
        ]
    },
    {
        title: 'OPERATIONS & IN-CHARGE TEAM',
        direction: 'right',
        members: [
            { id: 'ops1', name: 'Operations Lead 1', role: 'Logistics Head' },
            { id: 'ops2', name: 'Operations Lead 2', role: 'Operations Lead' },
            { id: 'ops3', name: 'Tech Infra Lead', role: 'Tech Infrastructure' },
            { id: 'ops4', name: 'Sponsorship Lead', role: 'Sponsorships' },
            { id: 'ops5', name: 'Security Lead', role: 'Security Chief' },
        ]
    },
    {
        title: 'DEVELOPERS',
        direction: 'left',
        members: [
            { id: 'd1', name: 'Dev Lead 1', role: 'Full Stack' },
            { id: 'd2', name: 'UI/UX Lead', role: 'UI/UX Designer' },
            { id: 'd3', name: 'Backend Dev', role: 'Backend Specialist' },
            { id: 'd4', name: 'Frontend Dev', role: 'Frontend Developer' },
            { id: 'd5', name: 'System Architect', role: 'System Architect' },
            { id: 'd6', name: 'Integration Dev', role: 'Integration Expert' },
        ]
    },
    {
        title: 'DESIGN TEAM',
        direction: 'right',
        members: [
            { id: 'ds1', name: 'Visual Designer', role: 'Visual Identity' },
            { id: 'ds2', name: 'Motion Designer', role: 'Motion Graphics' },
            { id: 'ds3', name: 'Asset Creator', role: 'Asset Creation' },
            { id: 'ds4', name: 'Brand Designer', role: 'Brand Design' },
        ]
    },
    {
        title: 'EDITORIAL TEAM',
        direction: 'left',
        members: [
            { id: 'ed1', name: 'Video Producer', role: 'Video Production' },
            { id: 'ed2', name: 'Copywriter', role: 'Copywriting' },
            { id: 'ed3', name: 'Marketing Lead', role: 'Digital Marketing' },
            { id: 'ed4', name: 'Photographer', role: 'Photography' },
        ]
    },
    {
        title: 'SOCIAL MEDIA & OUTREACH',
        direction: 'right',
        members: [
            { id: 'sm1', name: 'Community Manager', role: 'Community Manager' },
            { id: 'sm2', name: 'PR Lead', role: 'PR Outreach' },
            { id: 'sm3', name: 'Social Media Lead', role: 'Social Media' },
        ]
    }
];

export const TIMELINE: TimelineEvent[] = [
    { title: '10 AM - Inauguration', date: 'Event Day', description: 'Official opening ceremony and welcome address' },
    { title: 'Event Starts', date: 'Morning Session', description: 'Technical and non-technical competitions begin' },
    { title: 'Lunch Break', date: 'Afternoon', description: 'Refreshments and networking session' },
    { title: 'Final Call', date: 'Evening', description: 'Last round of competitions and submissions' },
    { title: 'Prize Distribution', date: 'Closing', description: 'Announcing winners and awarding prizes' },
    { title: 'Closing Ceremony', date: 'End of Day', description: 'Thank you note and event wrap-up' },
];
