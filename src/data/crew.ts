import { TeamMember, TeamCategory, TimelineEvent } from './crewTypes';

// Faculty Leadership
export const FACULTY: TeamMember[] = [
    { 
        id: 'f1', 
        name: 'Dr.P.Ezhumalai', 
        role: 'HOD', 
        tagline: 'Head of Department - CSE',
        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690833/faculty_coordinator-hod-Dr.P.Ezhumalai_tjxgpi.jpg'
    },
    { 
        id: 'f2', 
        name: 'Gnanasekar', 
        role: 'Faculty Coordinator', 
        tagline: 'Guiding the symposium with expertise.',
        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690833/faculty_coordinator-_Gnanasekar_krpiui.jpg'
    },
];

// Student Leadership - Row 1 (President, VP, Secretary, Joint Secretary)
export const LEADERSHIP: TeamMember[] = [
    { 
        id: 'l1', 
        name: 'Christopher A', 
        role: 'President', 
        tagline: 'Leading the vision of the symposium.',
        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690835/president-CHRISTOPHER_A_vcmbzk.jpg'
    },
    { 
        id: 'l2', 
        name: 'Sirimavilla Kaushik', 
        role: 'Vice President', 
        tagline: 'Supporting excellence in execution.',
        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690838/vice_president-Kaushik_znth0t.jpg'
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
        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690836/joint_secratary-charan_sai_zllhpb.jpg'
    },
   
];

// Student Leadership - Row 2 (Joint Secretary, Treasurers)
export const LEADERSHIP2: TeamMember[] = [  
    { 
        id: 'l4', 
        name: 'Boopathi', 
        role: 'Joint Secretary', 
        tagline: 'Ensuring smooth coordination.',
        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690838/joint_secratary-Boopathi_yqp20j.jpg'
    },
    {
        id: 'l6', 
        name: 'Yeswanth Raj C A', 
        role: 'Treasurer', 
        tagline: 'Managing resources effectively.',
        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690837/Treasurer-YESWANTHRAJ_C_A_cbogpd.jpg'
    },
    { 
        id: 'l7', 
        name: 'Rakesh', 
        role: 'Treasurer', 
        tagline: 'Managing resources effectively.',
        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690838/Treasurer-Rakesh_hqiefj.jpg'
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
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690840/Event_coordinator-clawCTF-KEERTHI_K_P_hekw8i.jpg'
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
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690836/event_coordinator-stranger_tunes-BADMALAKSHMI_V_f8srtt.jpg'
            },
            { 
                id: 'tunes2', 
                name: 'Vishnu Priya P G', 
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690832/event_coordinator_Social_Media_Outreach-stranger_tunes-VISHNU_PRIYA_P_G_pn5mki.jpg'
            },
            { 
                id: 'tunes3', 
                name: 'Nishitha D', 
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690833/Event_coordinator-stranger_tunes-NISHITHA_D_jo8hpu.jpg'
            },
            { 
                id: 'tunes4', 
                name: 'Nivetha J', 
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690835/Event_coordinator-stranger_tunes-NIVETHA_J_l5cm2s.png'
            },
            { 
                id: 'tunes5', 
                name: 'Prakash Babu S', 
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690834/Event_coordinator-stranger_tunes-PRAKASH_BABU_S_ytii7y.jpg'
            },
            { 
                id: 'tunes6', 
                name: 'Kaarthik A', 
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690837/Event_coordinator-stranger_tunes-Kaarthik_A_vk4gja.jpg'
            },
            { 
                id: 'tunes7', 
                name: 'Nancy D', 
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690837/Event_coordinator-stranger_tumes-NANCY_D_p8p1es.jpg'
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
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690835/Event_cooedinator-_ipl_Auction-KARUNAMOORTHI_R_agbdqk.jpg'
            },
            { 
                id: 'ipl2', 
                name: 'Mohammad Rafeeq S', 
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690832/Event_coordinator-ipl_auction-_MOHAMMAD_RAFEEQ_S_edl8pe.jpg'
            },
            { 
                id: 'ipl3', 
                name: 'Sujin S', 
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690834/Event_coordinator-ipl_auction-_sujin_s_eod5nt.jpg'
            },
            { 
                id: 'ipl4', 
                name: 'Prawin Balaji A', 
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690834/Event_coordinator-ipl_auction-PRAWIN_BALAJI_A_zn9c7j.png'
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
                        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769692128/IMG-20250608-WA0001_1_uak7qm.jpg'
                    },
                    { 
                        id: 'dev2', 
                        name: 'RAJAMURUGAN VS', 
                        role: 'Developer',
                        tagline: 'Crafting seamless interfaces.',
                        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690834/Developer-_Rajamurugan_waeug8.jpg'
                    },
                    { 
                        id: 'dev3', 
                        name: 'Sidhanth', 
                        role: 'Developer',
                        tagline: 'Crafting seamless interfaces.',
                        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690839/developer-_Sidhanth_tewdeh.jpg'
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
                        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690834/Design_and_poster_making-sirisha_s_vbmr5d.jpg'
                    },
                    { 
                        id: 'ds2', 
                        name: 'Swetha J', 
                        role: 'Design Team',
                        tagline: 'Bringing ideas to life.',
                        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690837/Design_team_and_poster_making-SWETHA_J_tfbliw.jpg'
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
                        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690835/Editorial_Team-SHANMUGAM_J_guozra.jpg'
                    },
                    { 
                        id: 'ed2', 
                        name: 'Vasanth', 
                        role: 'Editorial Team',
                        tagline: 'Shaping the story.',
                        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690837/Editorial_Team-VASANTH_ofkgic.webp'
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
