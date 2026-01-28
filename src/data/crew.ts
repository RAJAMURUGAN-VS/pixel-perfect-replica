import { TeamMember, TeamCategory, TimelineEvent } from './crewTypes';

export const LEADERSHIP: TeamMember[] = [
    { id: 'l1', name: 'Sirimavilla Kaushik', role: 'President', tagline: 'Leading the vision of the symposium.' },
    { id: 'l2', name: 'Christopher', role: 'Vice President', tagline: 'Supporting excellence in execution.' },
    { id: 'l3', name: 'Lakshmi Sri', role: 'Secretary', tagline: 'Coordinating seamless operations.' },
    { id: 'l4', name: 'Charan', role: 'Joint Secretary', tagline: 'Driving collaborative initiatives.' },
    { id: 'l5', name: 'Boopathi', role: 'Joint Secretary', tagline: 'Ensuring smooth coordination.' },
    { id: 'l6', name: 'Rakesh S', role: 'Treasurer', tagline: 'Managing resources effectively.' },
    { id: 'l7', name: 'Yeswanth Raj', role: 'Treasurer', tagline: 'Overseeing financial excellence.' },
];

export const TEAM_CATEGORIES: TeamCategory[] = [
    {
        id: 'cat_events',
        title: 'EVENT COORDINATORS',
        direction: 'left',
        groups: [
            {
                id: 'evt_ctf',
                title: 'CLAWCTF',
                members: [
                    {
                        id: 'ctf_theme',
                        name: 'CLAWCTF',
                        role: 'EVENT THEME',
                        tagline: 'Capture The Flag cybersecurity challenge.',
                        imageUrl: 'https://res.cloudinary.com/dydplsxdj/image/upload/v1769272314/event-2_i5dtfz.jpg'
                    },
                    { id: 'ctf1', name: 'Keerthi K P', role: 'Event Coordinator' },
                ]
            },
            {
                id: 'evt_vibe',
                title: 'VIBE-A-THON',
                members: [
                    {
                        id: 'vibe_theme',
                        name: 'VIBE-A-THON',
                        role: 'EVENT THEME',
                        tagline: 'AI prompt engineering competition.',
                        imageUrl: 'https://res.cloudinary.com/dydplsxdj/image/upload/v1769272314/event-3_holwyt.jpg'
                    },
                    { id: 'vibe1', name: 'Swetha J', role: 'Event Coordinator' },
                ]
            },
            {
                id: 'evt_tunes',
                title: 'STRANGER TUNES',
                members: [
                    {
                        id: 'tunes_theme',
                        name: 'STRANGER TUNES',
                        role: 'EVENT THEME',
                        tagline: 'Movies, music, and pop culture collide.',
                        imageUrl: 'https://res.cloudinary.com/dydplsxdj/image/upload/v1769259227/STRANGER_TUNES_LISTENING_TO_SONGS_okmpuc.png'
                    },
                    { id: 'tunes1', name: 'Badmalakshmi V', role: 'Event Coordinator' },
                    { id: 'tunes2', name: 'Vishnu Priya P G', role: 'Event Coordinator' },
                    { id: 'tunes3', name: 'D. Nishitha', role: 'Event Coordinator' },
                    { id: 'tunes4', name: 'Nivetha J', role: 'Event Coordinator' },
                    { id: 'tunes5', name: 'Prakash Babu S', role: 'Event Coordinator' },
                    { id: 'tunes6', name: 'Karthik A', role: 'Event Coordinator' },
                    { id: 'tunes7', name: 'Nancy D', role: 'Event Coordinator' },
                ]
            },
            {
                id: 'evt_ipl',
                title: 'IPL AUCTION',
                members: [
                    {
                        id: 'ipl_theme',
                        name: 'IPL AUCTION',
                        role: 'EVENT THEME',
                        tagline: 'Build your dream team, outbid rivals.',
                        imageUrl: 'https://res.cloudinary.com/dydplsxdj/image/upload/v1769272519/event-5_mzgrsc.jpg'
                    },
                    { id: 'ipl1', name: 'Karunamoorthi R', role: 'Event Coordinator' },
                    { id: 'ipl2', name: 'Mohammad Rafeeq S', role: 'Event Coordinator' },
                ]
            }
        ]
    },
    {
        id: 'cat_design',
        title: 'DESIGN TEAM',
        direction: 'right',
        groups: [
            {
                id: 'grp_design',
                title: 'CREATIVES',
                members: [
                    { id: 'ds1', name: 'Swetha J', role: 'Design Team' },
                ]
            }
        ]
    },
    {
        id: 'cat_social',
        title: 'SOCIAL MEDIA & OUTREACH',
        direction: 'right',
        groups: [
            {
                id: 'grp_social',
                title: 'COMMUNITY ENGAGEMENT',
                members: [
                    { id: 'sm1', name: 'Vishnu Priya P G', role: 'Outreach & Social Media' },
                ]
            }
        ]
    }
];

export const TIMELINE: TimelineEvent[] = [
    { title: '9:00 AM - Gates Open', date: 'Morning', description: 'Registration and welcome of participants' },
    { title: '10:00 AM - Inauguration', date: 'Morning Session', description: 'Official opening ceremony and event kickoff' },
    { title: '12:30 PM - Lunch Break', date: 'Afternoon', description: 'Refreshments and networking session' },
    { title: '1:00 PM - Prize Distribution', date: 'Afternoon', description: 'Announcing winners and awarding prizes' },
    { title: '3:00 PM - Event Ends', date: 'Closing', description: 'Thank you note and event wrap-up' },
];
