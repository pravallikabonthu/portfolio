import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AssignmentOutlined, GitHub, Language, WebOutlined, YouTube } from '@mui/icons-material';

// eslint-disable-next-line
export default {
    name : 'Pravallika Bonthu',
    title: 'Software Developer',
    address:'855 E University Ave,Las Cruces,NM',

    email:'pravallikabonthu978@gmail.com',
    phone: '575-650-1627',
    Socials:{
        LinkedIn:{
            link:'https://www.linkedin.com/in/pravallikabonthu/',
            text:'MyLinkedIn',
            icon:<LinkedInIcon/>
        },
        Github:{
            link:'https://github.com/pravallikabonthu',
            text:'MyGithub',
            icon:<GitHubIcon/>
        },
        Portfolio:{
            link:'https://pravallika-portfolio.web.app/',
            text:'MyPortfolio',
        }
    
    },
    about:'2+ years of experience as a Front-end developer is now looking to obtain summer internship opportunities \n\nwhere I can contribute my skills/experience and learn new technologies.',


    experience:[
        {
            title: 'Work1',
            date: '2022 - Present',
            description:'Worked as a front-end developer for HCL technologies'
        },
        {
            title: 'Work2',
            date: '2021 - 2022',
            description:'Worked as a front-end developer for HCL technologies'

        },
        {
            title: 'Work3',
            date: '2020 - 2021',
            description:'Worked as a front-end developer for HCL technologies'
        }
    ],
    
    education:[
        {
            title: 'NMSU',
            date: '2020 - 2021',
            description:'Masters in Computer science'
        },
        {
            title: 'Acharya Nagarjuna University',
            date: '2020 - 2021',
            description:'B.Tech in Computer Science'
        },
        {
            title:'NRI',
            date:'2013-2015',
            description: 'MPC'

        }
    ],
    services: [
        {
            title:'Web Devolpment',
            description:'i Have developed websites',
            icon: <WebOutlined/>,
        },
        {
            title:'Web Dev',
            description:'i Have developed websites',
            icon: <AssignmentOutlined/>,
        },
        {
            title:'Web Dev',
            description:'i Have developed websites',
            icon: <WebOutlined/>
        }

    ],
    skills:[
        {
            title:'Front-end',
            description:['React JS','Javascript','Angular','Bootsrtap','Python','MachineLearning']
        },
        {
            title:'Databases',
            description:['Firebase','MySQL']
        },
        {
            title:'Source Control',
            description:['Git','Github','SCRUM/Agile',]
        }
    ],
    Projects:[
        {
            tag:'React',
            images:['https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg'],
            title:'React Project 1',
            caption:'A short description',
            description:'This is my project description.',
            links:[
                {link: 'https://www.google.com',icon:<YouTube/>},
                {link: 'https://www.google.com',icon:<GitHub/>},
                {link: 'https://www.google.com',icon:<Language/>}
            ]
        },
        {
            tag:'React',
            images:['https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg'],
            title:'React Project 2',
            caption:'A short description',
            description:'This is my project description.',
            links:[
                {link: 'https://www.google.com',icon:<YouTube/>},
                {link: 'https://www.google.com',icon:<GitHub/>},
                {link: 'https://www.google.com',icon:<Language/>}
            ]
        },
        {
            tag:'Python',
            images:['https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg'],
            title:'Python Project 1',
            caption:'A short description',
            description:'This is my project description.',
            links:[
                {link: 'https://www.google.com',icon:<YouTube/>},
                {link: 'https://www.google.com',icon:<GitHub/>},
                {link: 'https://www.google.com',icon:<Language/>}
            ]
        },
        {
            tag:'Java',
            images:['https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg'],
            title:'Java Project 1',
            caption:'A short description',
            description:'This is my project description.',
            links:[
                {link: 'https://www.google.com',icon:<YouTube/>},
                {link: 'https://www.google.com',icon:<GitHub/>},
                {link: 'https://www.google.com',icon:<Language/>}
            ]
        }
    ]
    
}
