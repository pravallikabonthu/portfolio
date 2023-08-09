import { Typography } from '@mui/material'
import React from 'react'
import './Profile.css'
import CustomTimeline from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { CustomTimelineSeparator } from '../Timeline/Timeline'
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import CustomButton from '../Button/Button'
import DownloadIcon from '@mui/icons-material/Download';




const CustomTimelineItem =( {title,text,link}) => (
  <TimelineItem >
    <CustomTimelineSeparator/>
    <TimelineContent className="timeline_content">
      
      {link ? (
      <Typography className='timelineItem_text'>
        <span>{title}:</span>{" "}
        <a href={link} target='_blank' rel="noreferrer">
          {text}
        </a>
      </Typography>) : (
        <Typography className='timelineItem_text'>
          <span>{title}:</span>{text}</Typography>
      )}

    </TimelineContent>
       
      </TimelineItem>
)

const Profile = () => {
  return (
    <div className='profile container_shadow'>
        <div className='profile_name'>
          <Typography className='name'>{resumeData.name}</Typography>
          <Typography className='title'>{resumeData.title}</Typography>
        </div>

    <figure className='profile_image'>
        <img src={require('../../assets/images/pravallika_pic.jpeg')} alt=""/>
    </figure>

    <div className='profile_information'>
        <CustomTimeline icon= {<PersonOutlineIcon/>}>
        <CustomTimelineItem title='Name' text={resumeData.name}/>
        <CustomTimelineItem title='Title' text={resumeData.title}/>
        <CustomTimelineItem title='Email' text={resumeData.email}/>
        {Object.keys(resumeData.Socials).map((key)=>(
          <CustomTimelineItem 
          title={key} 
          text={resumeData.Socials[key].text} 
          link={resumeData.Socials[key].link}
          />
        ))}

        </CustomTimeline>
        <div className='button_container' style={{display:'flex'}} >
        <CustomButton text= {'Download CV'} icon= {<DownloadIcon/>}/>

        </div>
        
    </div>  
   </div>   
    
  )
}

export default Profile