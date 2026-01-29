import { TeamMember, TeamCategory, TimelineEvent } from './crewTypes';

// Faculty Leadership
export const FACULTY: TeamMember[] = [
    { 
        id: 'f1', 
        name: 'Dr.P.Ezhumalai', 
        role: 'HOD', 
        tagline: 'Head of Department - CSE',
        imageUrl: '/crew-images/faculty%20coordinator-hod-Dr.P.Ezhumalai.jpg'
    },
    { 
        id: 'f2', 
        name: 'Gnanasekar', 
        role: 'Faculty Coordinator', 
        tagline: 'Guiding the symposium with expertise.',
        imageUrl: '/crew-images/faculty%20coordinator-%20Gnanasekar.jpeg'
    },
];

// Student Leadership - Row 1 (President, VP, Secretary, Joint Secretary)
export const LEADERSHIP: TeamMember[] = [
    { 
        id: 'l1', 
        name: 'Christopher A', 
        role: 'President', 
        tagline: 'Leading the vision of the symposium.',
        imageUrl: '/crew-images/president-CHRISTOPHER%20A.jpeg'
    },
    { 
        id: 'l2', 
        name: 'Sirimavilla Kaushik', 
        role: 'Vice President', 
        tagline: 'Supporting excellence in execution.',
        imageUrl: '/crew-images/vice%20president-Kaushik.jpeg'
    },
    { 
        id: 'l3', 
        name: 'Lakshmi Shri', 
        role: 'Secretary', 
        tagline: 'Coordinating seamless operations.',
        imageUrl: '/crew-images/sceretary-Lakshmi%20shri.jpeg'
    },
    { 
        id: 'l5', 
        name: 'Charan Sai', 
        role: 'Joint Secretary', 
        tagline: 'Driving collaborative initiatives.',
        imageUrl: '/crew-images/joint%20secratary-charan%20sai.jpeg'
    },
   
];

// Student Leadership - Row 2 (Joint Secretary, Treasurers)
export const LEADERSHIP2: TeamMember[] = [  
    { 
        id: 'l4', 
        name: 'Boopathi', 
        role: 'Joint Secretary', 
        tagline: 'Ensuring smooth coordination.',
        imageUrl: '/crew-images/joint%20secratary-Boopathi.jpeg'
    },
    {
        id: 'l6', 
        name: 'Yeswanth Raj C A', 
        role: 'Treasurer', 
        tagline: 'Managing resources effectively.',
        imageUrl: '/crew-images/Treasurer-YESWANTHRAJ%20C%20A.jpg'
    },
    { 
        id: 'l7', 
        name: 'Rakesh', 
        role: 'Treasurer', 
        tagline: 'Managing resources effectively.',
        imageUrl: '/crew-images/Treasurer-Rakesh.jpg'
    },
];

// Event Coordinators - for ticker animation
export const EVENT_COORDINATORS: { eventName: string; members: TeamMember[] }[] = [
    {
        eventName: 'CLAWCTF',
        members: [
            { 
                id: 'ctf1', 
                name: 'Keerthi K P', 
                role: 'Event Coordinator',
                imageUrl: '/crew-images/Event%20coordinator-clawCTF-KEERTHI%20K%20P.jpg'
            },
        ]
    },
    {
        eventName: 'STRANGER TUNES',
        members: [
            { 
                id: 'tunes1', 
                name: 'Badmalakshmi V', 
                role: 'Event Coordinator',
                imageUrl: '/crew-images/event%20coordinator-stranger%20tunes-BADMALAKSHMI%20V.jpeg'
            },
            { 
                id: 'tunes2', 
                name: 'Vishnu Priya P G', 
                role: 'Event Coordinator',
                imageUrl: '/crew-images/event%20coordinator,Social%20Media%20&%20Outreach-stranger%20tunes-VISHNU%20PRIYA%20P%20G.jpg'
            },
            { 
                id: 'tunes3', 
                name: 'Nishitha D', 
                role: 'Event Coordinator',
                imageUrl: '/crew-images/Event%20coordinator-stranger%20tunes-NISHITHA%20D.jpeg'
            },
            { 
                id: 'tunes4', 
                name: 'Nivetha J', 
                role: 'Event Coordinator',
                imageUrl: '/crew-images/Event%20coordinator-stranger%20tunes-NIVETHA%20J.png'
            },
            { 
                id: 'tunes5', 
                name: 'Prakash Babu S', 
                role: 'Event Coordinator',
                imageUrl: '/crew-images/Event%20coordinator-stranger%20tunes-PRAKASH%20BABU%20S.jpg'
            },
            { 
                id: 'tunes6', 
                name: 'Kaarthik A', 
                role: 'Event Coordinator',
                imageUrl: '/crew-images/Event%20coordinator-stranger%20tunes-Kaarthik%20A.jpg'
            },
            { 
                id: 'tunes7', 
                name: 'Nancy D', 
                role: 'Event Coordinator',
                imageUrl: '/crew-images/Event%20coordinator-stranger%20tumes-NANCY%20D.jpeg'
            },
        ]
    },
    {
        eventName: 'IPL AUCTION',
        members: [
            { 
                id: 'ipl1', 
                name: 'Karunamoorthi R', 
                role: 'Event Coordinator',
                imageUrl: '/crew-images/Event%20cooedinator-%20ipl%20Auction-KARUNAMOORTHI%20R.jpeg'
            },
            { 
                id: 'ipl2', 
                name: 'Mohammad Rafeeq S', 
                role: 'Event Coordinator',
                imageUrl: '/crew-images/Event%20coordinator-ipl%20auction-%20MOHAMMAD%20RAFEEQ%20S.jpg'
            },
            { 
                id: 'ipl3', 
                name: 'Sujin S', 
                role: 'Event Coordinator',
                imageUrl: '/crew-images/Event%20coordinator-ipl%20auction-%20sujin%20s.jpeg'
            },
            { 
                id: 'ipl4', 
                name: 'Prawin Balaji A', 
                role: 'Event Coordinator',
                imageUrl: '/crew-images/Event%20coordinator-ipl%20auction-PRAWIN%20BALAJI%20A.png'
            },
        ]
    },
];

export const TEAM_CATEGORIES: TeamCategory[] = [
    {
        id: 'cat_dev',
        title: 'DEVELOPERS',
        direction: 'left',
        groups: [
            {
                id: 'grp_dev',
                title: 'WEB DEVELOPERS',
                members: [
                    { 
                        id: 'dev1', 
                        name: 'Sri Nithilan R', 
                        role: 'Developer',
                        tagline: 'Building the digital experience.',
                        imageUrl: '/crew-images/developer-%20Sri%20Nithilan%20R.jpg'
                    },
                    { 
                        id: 'dev2', 
                        name: 'Rajamurugan', 
                        role: 'Developer',
                        tagline: 'Crafting seamless interfaces.',
                        imageUrl: '/crew-images/Developer-%20Rajamurugan.jpeg'
                    },
                    { 
                        id: 'dev3', 
                        name: 'Sidhanth', 
                        role: 'Developer',
                        tagline: 'Crafting seamless interfaces.',
                        imageUrl: '/crew-images/developer-%20Sidhanth.jpg'
                    },
                ]
            }
        ]
    },
    {
        id: 'cat_design',
        title: 'DESIGN & POSTER MAKING',
        direction: 'left',
        groups: [
            {
                id: 'grp_design',
                title: 'CREATIVE TEAM',
                members: [
                    { 
                        id: 'ds1', 
                        name: 'Sirisha S', 
                        role: 'Design Team',
                        tagline: 'Visualizing creative concepts.',
                        imageUrl: '/crew-images/Design%20and%20poster%20making-sirisha%20s.jpeg'
                    },
                    { 
                        id: 'ds2', 
                        name: 'Swetha J', 
                        role: 'Design Team',
                        tagline: 'Bringing ideas to life.',
                        imageUrl: '/crew-images/Design%20team%20and%20poster%20making-SWETHA%20J.jpg'
                    },
                ]
            }
        ]
    },
    {
        id: 'cat_editorial',
        title: 'EDITORIAL TEAM',
        direction: 'right',
        groups: [
            {
                id: 'grp_editorial',
                title: 'CONTENT CREATORS',
                members: [
                    { 
                        id: 'ed1', 
                        name: 'Shanmugam J', 
                        role: 'Editorial Team',
                        tagline: 'Crafting compelling narratives.',
                        imageUrl: '/crew-images/Editorial%20Team-SHANMUGAM%20J.jpg'
                    },
                    { 
                        id: 'ed2', 
                        name: 'Vasanth', 
                        role: 'Editorial Team',
                        tagline: 'Shaping the story.',
                        imageUrl: '/crew-images/Editorial%20Team-VASANTH.webp'
                    },
                ]
            }
        ]
    },
    
];

export const TIMELINE: TimelineEvent[] = [
    { title: 'Registration', date: '9:00 AM', description: 'Check-in and welcome of participants' },
    { title: 'Inauguration', date: '10:00 AM', description: 'Official opening ceremony and event kickoff' },
    { title: 'Events Start', date: '10:30 AM', description: 'Technical and non-technical events begin' },
    { title: 'Lunch Break', date: '12:30 PM', description: 'Refreshments and networking session' },
    { title: 'Prize Distribution', date: '1:15 PM', description: 'Announcing winners and awarding prizes' },
];
