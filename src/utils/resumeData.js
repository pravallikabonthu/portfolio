import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { AssignmentOutlined, GitHub, Language, WebOutlined} from '@mui/icons-material';
import projectImage from '../assets/images/React.png';
import React2 from '../assets/images/React2.png';
import React3 from '../assets/images/React3.png';
import React4 from '../assets/images/React4.png';
import Angular1 from '../assets/images/Angular1.png';
import Angular2 from '../assets/images/Angular2.png';
import Angular3 from '../assets/images/Angular3.png';
import Angular4 from '../assets/images/Angular4.png';
import Python1 from '../assets/images/Python1.png';
import Python2 from '../assets/images/Python2.png';
import ml1 from '../assets/images/ml1.png';
import ml2 from '../assets/images/ml2.png';
import ml3 from '../assets/images/ml3.png';
import db1 from '../assets/images/db1.png';
import ui1 from '../assets/images/ui1.png';
import ui2 from '../assets/images/ui2.png';
import ui4 from '../assets/images/ui4.png';
import ui5 from '../assets/images/ui5.png';
import r1 from '../assets/images/project-1.jpg';
import r2 from '../assets/images/project-2.jpg';
import r3 from '../assets/images/project3.jpg';
import r4 from '../assets/images/project-7.jpg';
import r5 from '../assets/images/project-8.jpg';
import ml4 from '../assets/images/mls.png';
import vue1 from '../assets/images/vue1.png';
import vue2 from '../assets/images/vue2.png';
import sp1 from '../assets/images/sp1.png';
import sp2 from '../assets/images/sp2.png';
import sp3 from '../assets/images/sp3.png';
import cc from '../assets/images/cc.png';
import cc1 from '../assets/images/cc1.png';




// eslint-disable-next-line
export default {
    name : 'Pravallika Bonthu',
    title: 'Software Engineer',
    address:'1630 Wyoming Ave ,Las Cruces,NM',

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
    // about:' Hello! I`m Pravallika Bonthu, and my passion lies in UI design and web development. I possess adept skills as a front-end \n\ndeveloper and hybrid mobile application developer. With a year of experience in data analytics, I am also well-versed in this \n\ndomain. I exhibit swift learning abilities and thrive as a collaborative team member, ensuring the successful completion of \n\ntasks. I`m always willing to contribute my experience and at the same time willing to learn new opportunities that will come \n\nacross my way.',
    about: (
        <div style={{ lineHeight:1.5 }}>
          <p>
          Hello! I'm Pravallika Bonthu, and I'm really passionate about UI design and web development. I've got some pretty good skills in both front-end development and building hybrid mobile apps. Over the past year, I've been diving into data analytics and machine learning projects, which I've found really interesting. I've also worked on Azure cloud to deploy software applications throught the year. I'm a quick learner and love working with others to get things done. I'm always excited to share my experiences and learn new things along the way.          </p>
        </div>
      ),
      

    experience:[
        {
            title: 'Graduate Research Assistant',
            date: 'May 2023 - Present',
            description:'Worked as a GA Research Assistant for NMSU'
        },
        {
            title: 'Application Developer',
            date: 'December 2020 - January 2022',
            description:'Worked as a Application developer for Western Union'

        },
        {
            title: 'Software Engineer',
            date: 'January 2020 - December 2020',
            description:'Worked as a Front-end developer for HCL Technologies'
        }
    ],
    
    education:[
        {
            title: 'NMSU',
            date: '2022 - 2024',
            description:'Masters in Computer science'
        },
        {
            title: 'Acharya Nagarjuna University',
            date: '2015 - 2019',
            description:'Bachelors in Computer Science'
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
            description:'I Have developed websites',
            icon: <WebOutlined/>,
        },
        {
            title:'Python Development',
            description:'I Have done Machine learning models to perform data analysis',
            icon: <AssignmentOutlined/>,
        },
        {
            title:'Salesforce',
            description:'I Have done project in Trailhead',
            icon: <WebOutlined/>
        }

    ],
    skills:[
        {
            title:'Front-end',
            description:['React JS','Javascript','Typescript','Angular','VueJS','Bootstrap','Python','MachineLearning','Salesforce']
        },
        {
            title:'Databases',
            description:['Firebase','MySQL','AWS-beginner']
        },
        {
            title:'Source Control',
            description:['Git','Github','Scrum/Agile',]
        },
        {
            title:'IDE/Tools',
            description:['VS code','JIRA','Apptimise','Amplitude','Braze','Nagios','Wireshark']
        },

    ],
    Projects:[
        {
            tag:'React',
            images: [r1,r2,r3,r4,r5,projectImage,React2,React3,React4],
            title:'React Project',
            caption:'Personal Portfolio, Westren Union App',    
            description:'These are the screenshots of React project.In Western Union I Developed Fx alert feature - user can create the alerts by daily bases or threshold values.Feature - Exchange values for different countriesCreated Apptimize experiments for different countries to enable or disable the featureFeature - Applies for both logged in, logged out and anonymous state users.When the user clicks on the bell icon, it will display the pop-up to create the alert.Created braze configurations to generate the link and integrated it into codeIf the user sets the alert,then the user will get the push notification when the threshold value reaches the fx value from the braze site.User clicks on the push notification it will redirect to Send money page with pre-selected data.Performed Testing through postman/Braze to check whether the link is working or not.Design and Developed the pop-up screenIf the user is on receiver`s page and trying to navigate to another screen,then it will give pop-up.When the user clicks on Finish later,the data will be stored in the database, and whenever they want to continue user can able to proceed',
            links:[
                {link: 'https://pravallika-portfolio.web.app/',icon:<WebAssetIcon/>},
                {link: 'https://github.com/pravallikabonthu',icon:<GitHub/>},
                {link: 'https://www.google.com',icon:<Language/>}
            ]
        },
        {
            tag:'ML',
            images:[ml1,ml2,ml3,ml4,sp1,sp2,sp3,cc,cc1],
            title:'Machine Learning',
            caption:'Solar PV Project, California Price Pridiction,Object Detection and Classification in plants, Phishing Websites Detection',
            description:'This is my Machine Learning Project.The goal of the project is to view like photovoltaic data from the gateway, as well as record data over a period of time. Once data is gathered it can be analyzed using a variety of techniques and visualized for better comprehension.I did correlation matrix.A correlation matrix graph provides a visual representation of the relationships between variables in a dataset.​Each cell in the matrix represents the correlation coefficient between two analysis, and as diagnostic for advanced analysis.I performed machine learning algorithms for predictive analysis and anomaly detection(Performed K-means clustering and DBscan methods)',
            links:[
                {link: 'https://pravallika-portfolio.web.app/',icon:<WebAssetIcon/>},
                {link: 'https://github.com/pravallikabonthu',icon:<GitHub/>},
                {link: 'https://www.google.com',icon:<Language/>}
            ]
        },
        {
            tag:'Database',
            images:[db1],
            title:'Database',
            caption:'Database MYSQL Project',
            description:'This is my Database project description.In a recent project, I have used Python programming to develop a comprehensive hospital management system using MySQL. This endeavor involved creating a structured database to store vital hospital-related information. I adeptly implemented CRUD (Create, Read, Update, Delete) operations to seamlessly manage the data, ensuring the system`s efficiency and accuracy. Furthermore, I skillfully executed complex queries on the database, enabling the extraction of valuable insights to support informed decision-making. This project showcased my ability to integrate programming skills with database management, resulting in a practical solution that enhances hospital operations.',
            links:[
                {link: 'https://pravallika-portfolio.web.app/',icon:<WebAssetIcon/>},
                {link: 'https://github.com/pravallikabonthu',icon:<GitHub/>},
                {link: 'https://www.google.com',icon:<Language/>}
            ]
        },
        {
            tag:'VueJS',
            images:[vue1,vue2],
            title:'VueJS & Python',
            caption:'Drowsiness monitoring system',
            description:'This is my project description.Drowsiness Monitoring system.Aim of the project is implementing the system as a prototype by capturing the eye blinks of the driver and send alarm when he feels drowsy.Our objective of the project is to ensure the driver safety in the car is one of the most wanted system to avoid accidents. ​To improve safety, we developed the drowsiness monitoring system to detect the driver`s eye blinks.​',
            links:[
                {link: 'https://pravallika-portfolio.web.app/',icon:<WebAssetIcon/>},
                {link: 'https://github.com/pravallikabonthu',icon:<GitHub/>},
                {link: 'https://www.google.com',icon:<Language/>}
            ]
        },
        {
            tag:'UI',
            images:[ui1,ui2,ui4,ui5],
            title:'HTML/CSS/JS/Bootstrap',
            caption:'Personal Portfolio Project',
            description:'This is my project description.I successfully designed and developed a dynamic website by harnessing a combination of HTML, CSS, JavaScript, and Bootstrap. Through meticulous coding and thoughtful design, I created an engaging and user-friendly interface that seamlessly adapts to different screen sizes. By skillfully incorporating Bootstrap`s responsive framework, I ensured a consistent and visually appealing experience across various devices. This project not only showcased my proficiency in front-end development but also demonstrated my commitment to crafting interactive and visually appealing digital solutions.',
            links:[
                {link: 'https://pravallika-portfolio.web.app/',icon:<WebAssetIcon/>},
                {link: 'https://github.com/pravallikabonthu',icon:<GitHub/>},
                {link: 'https://www.google.com',icon:<Language/>}
            ]
        },
        {
            tag:'Python',
            images:[Python1,Python2],
            title:'Python Project',
            caption:'Solar PV Data',
            description:'This is Data Visualization.This project involved establishing a TCP connection to the photovoltaic data source. The Python script sends a Modbus TCP request to the server to fetch data from the specified register addresses. The response message received from the server is then parsed to extract the register values. The data is then saved in a CSV file. The script pulls values in user determined intervals and runs until a user terminates it.​',
            links:[
                {link: 'https://pravallika-portfolio.web.app/',icon:<WebAssetIcon/>},
                {link: 'https://github.com/pravallikabonthu',icon:<GitHub/>},
                {link: 'https://www.google.com',icon:<Language/>}
            ]
        },
        {
            tag:'Angular',
            images:[Angular1,Angular2,Angular3,Angular4],
            title:'Angular Project',
            caption:'Online Shopping Website',
            description:'This is my Angular Online Shopping Project description.I initiated and executed an individual project centered around an Angular-based Online Shopping platform. Within this initiative, I meticulously conceptualized, designed, and developed a dynamic online store. Notably, I implemented a robust routing system to seamlessly facilitate navigation between different pages, thereby enhancing user experience. This project underscores my proficiency in Angular development and showcases my ability to craft engaging and interactive digital solutions.',
            links:[
                {link: 'https://pravallika-portfolio.web.app/',icon:<WebAssetIcon/>},
                {link: 'https://github.com/pravallikabonthu',icon:<GitHub/>},
                {link: 'https://www.google.com',icon:<Language/>}
            ]
        }
    ]
    
}
