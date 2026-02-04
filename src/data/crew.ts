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
        name: 'Sirimavilla Kaushik',
        role: 'President',
        tagline: 'Leading the vision of the symposium.',
        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690838/vice_president-Kaushik_znth0t.jpg'
    },
    {
        id: 'l2',
        name: 'Christopher A',
        role: 'Vice President',
        tagline: 'Supporting excellence in execution.',
        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690835/president-CHRISTOPHER_A_vcmbzk.jpg'
    },
    {
        id: 'l3',
        name: 'Lakshmi Sri',
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
            {
                id: 'ctf3',
                name: 'Sharvesh',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dydplsxdj/image/upload/v1770043014/d807d704-69f9-4203-a28e-c6be41966fe6_apump8.jpg'
            },
            {
                id: 'ctf2',
                name: 'Joshni Rohina J',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790387/pic_-_JOSHNI_ROHINA_J_CSE_DEPT_io3uak.jpg'
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
            {
                id: 'tunes8',
                name: 'Jeshwin Sharun A S',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790294/Screenshot_20260129_211603_2_-_JESHWIN_SHARUN_A_S_CSE_DEPT_wewybl.jpg'
            },
            {
                id: 'tunes9',
                name: 'Girivardhan Murugan',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790293/Screenshot_20260130-165624_-_Girivardhan_Murugan_iydl8o.png'
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
            {
                id: 'ipl5',
                name: 'Avinash A',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790343/IMG-20260129-WA0003_-_AVINASH_A_CSE_DEPT_ijazpd.jpg'
            },
            {
                id: 'ipl6',
                name: 'Lohith V',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790343/IMG-20250920-WA0067_-_LOHITH_V_CSE_DEPT_snwffs.jpg'
            },
            {
                id: 'ipl7',
                name: 'Selva Kumar',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769826496/IMG_5357_-_SELVAKUMAR_M_CSE_DEPT_tnpixr.jpg'
            },
        ]
    },
    {
        eventName: 'VIBEA-THON',
        members: [
            {
                id: 'vb1',
                name: 'RAJAMURUGAN VS',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dydplsxdj/image/upload/v1769703897/Screenshot_2026-01-29_214552_dxzbpf.png'
            },
            {
                id: 'vb2',
                name: 'Swetha J',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690837/Design_team_and_poster_making-SWETHA_J_tfbliw.jpg'
            },
            {
                id: 'vb3',
                name: 'Sirisha S',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690834/Design_and_poster_making-sirisha_s_vbmr5d.jpg'
            },
            {
                id: 'vb4',
                name: 'DHANESH KUMAR S',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/df2gd97od/image/upload/v1769873674/Gemini_Generated_Image_e2fdose2fdose2fd_dkmmdf.png'
            },
            {
                id: 'vb5',
                name: 'Harish R',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790291/imagee_-_HARISH_R_CSE_DEPT_kfx5dx.jpg'
            },
        ]
    },
    {
        eventName: 'ARTIST',
        members: [
            {
                id: 'art1',
                name: 'Pokuru Srinu',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790291/Copy_of_IMG_1184_-_POKURU_SRINU_CSE_DEPT_yiiuxp.jpg'
            },
            {
                id: 'art2',
                name: 'Shaik Mohammed Khadhar',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790342/IMG_20251107_105116_678_-_SHAIK_MOHAMMED_KHADHAR_CSE_DEPT_wyawti.jpg'
            },
        ]
    },
    {
        eventName: 'THE DAVINCI CODE',
        members: [
            {
                id: 'dvc0',
                name: 'J. Senthil Raj',
                role: 'Event Coordinator',
                imageUrl: 'https://6971c32f0fbe657fd5e60948.imgix.net/WhatsApp%20Image%202026-02-04%20at%2010.07.04%20PM.jpeg'
            },
            {
                id: 'dvc1',
                name: 'Janani P',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790291/WhatsApp_Image_2026-01-30_at_7.03.26_PM_-_JANANI_P_CSE_DEPT_wflcbo.jpg'
            },
            {
                id: 'dvc2',
                name: 'Kiruthika S T',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790291/Kiruthika_-_KIRUTHIKA_S_T_CSE_DEPT_z6wde8.png'
            },
            {
                id: 'dvc3',
                name: 'Divya Dharshini S',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790293/DIVYA_DHARSHINI_S_-_DIVYA_DHARSHINI_S_CSE_DEPT_nwinfi.jpg'
            },
        ]
    },
    {
        eventName: 'PAPER PRESENTATION',
        members: [
            // {
            //     id: 'pp1',
            //     name: 'Harsha Vardhan S',
            //     role: 'Event Coordinator',
            //     imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790293/IMG_3255_-_HARSHA_VARDHAN_S_CSE_DEPT_soyn2w.heic'
            // },
            {
                id: 'pp2',
                name: 'Thanesh R K',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790295/IMG_20260129_230115_-_THANESH_R_K_CSE_DEPT_xrlnqo.png'
            },
            {
                id: 'pp3',
                name: 'Navya Sri S',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790342/Adobe_Scan_May_22_2023_1_-_NAVYA_SRI_S_CSE_DEPT_x5ew9x.jpg'
            },
            {
                id: 'pp4',
                name: 'Tarun T A',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790296/SGCAM_20260104_104429383_-_TARUN_T_A_CSE_DEPT_vxdhzb.jpg'
            },
            {
                id: 'pp5',
                name: 'Hashwanth C',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790298/IMG_20260129_210708_-_HASHWANTH_C_CSE_DEPT_x5d9fu.jpg'
            },
            {
                id: 'pp6',
                name: 'Kaaviya S',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790295/PICTURE_-_KAAVIYA_S_CSE_DEPT_jlrua7.jpg'
            },
            {
                id: 'pp7',
                name: 'Yuvaraj B',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790295/IMG-20250915-WA0014_-_YUVARAJ_B_CSE_DEPT_flwtxh.jpg'
            },
            {
                id: 'pp8',
                name: 'Harshitha KG',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790340/HarshithaKG_-_Harshitha_KG_wvfjrz.jpg'
            },
            {
                id: 'pp9',
                name: 'Jayakumar S',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790341/IMG_20250510_160703_-_JAYAKUMAR_S_CSE_DEPT_t7q82u.jpg'
            },
            {
                id: 'pp10',
                name: 'Bhuvana Sri S',
                role: 'Event Coordinator',
                imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769790343/1000154009-Picsart-AiImageEnhancer_-_BHUVANA_SRI_S_CSE_DEPT_u2wxpn.jpg'
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
                        tagline: 'Built to Build.',
                        imageUrl: 'https://res.cloudinary.com/dydplsxdj/image/upload/v1769703897/Screenshot_2026-01-29_214552_dxzbpf.png'
                    },
                    {
                        id: 'dev3',
                        name: 'Sidhanth',
                        role: 'Developer',
                        tagline: 'Eyes on the build.',
                        imageUrl: 'https://res.cloudinary.com/dop49krua/image/upload/v1769690839/developer-_Sidhanth_tewdeh.jpg'
                    },
                                        {
                        id: 'dev4',
                        name: 'DHANESH KUMAR S',
                        role: 'Developer',
                        tagline: 'solution evangelist and crafting seamless interfaces.',
                        imageUrl: 'https://res.cloudinary.com/df2gd97od/image/upload/v1769873674/Gemini_Generated_Image_e2fdose2fdose2fd_dkmmdf.png'
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
    {
        id: 'cat_social',
        title: 'Social Media Handler',
        direction: 'right',
        groups: [
            {
                id: 'grp_editorial',
                title: 'Social Media Curator',
                members: [
                    {
                        id: 'smh1',
                        name: 'Divilash Sriram',
                        role: 'Social Media Team',
                        tagline: 'Crafting compelling narratives.',
                        imageUrl: 'https://res.cloudinary.com/dydplsxdj/image/upload/v1770041619/IMG_2700_-_SRIRAM_DIVILASH_CSE_DEPT_gk0fpa.jpg'
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
