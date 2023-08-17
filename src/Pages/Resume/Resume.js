import React from 'react'
import './Resume.css'
import { Grid, TextField, Typography } from '@mui/material'
import resumeData from '../../utils/resumeData'
import CustomTimeline,{CustomTimelineSeparator} from '../../components/Timeline/Timeline'
import WorkIcon from '@mui/icons-material/Work';
import {  TimelineContent, TimelineDot, TimelineItem } from '@mui/lab'
import SchoolIcon from '@mui/icons-material/School';
import Icon from '@mui/material/Icon';



import Paper from '@mui/material/Paper';
import CustomButton from '../../components/Button/Button'


const Resume = () => {
  // const [formValue,submitForm] = useState('All');
  return (
    <>
    {/* About Me */}
    <Grid container className='section p_45 pt_45'>
      <Grid item className='section_title mb_30' >
        <span></span>
          <h6 className='section_title_text'>About Me</h6>
        
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body2' className='about_text'>{resumeData.about}</Typography>
      </Grid>
      
    </Grid>
    {/* Education and Experience */}
    <Grid container className='section p_45'>
      <Grid item className='section_title mb_30' >
        <span></span>
          <h6 className='section_title_text'>Resume</h6>
      </Grid>
      <Grid item xs={12}>
        <Grid container className='resume_timeline'>
          {/* Experience */}
          <Grid item sm={12} md={6}>
          <CustomTimeline title='Work Experience' icon={<WorkIcon/>}>
            {resumeData.experience.map(experience => (
              <TimelineItem>
                <CustomTimelineSeparator/>
                <TimelineContent className='timeline_content'>
                  <Typography className='timeline_title'>{experience.title}</Typography>
                  <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                  <Typography cariant='body2' className='timeline_description'>{experience.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </CustomTimeline>

          </Grid>
          <Grid item sm={12} md={6}>
          <CustomTimeline title='Education History' icon={<SchoolIcon/>}>
            {resumeData.education.map(education => (
              <TimelineItem>
                <CustomTimelineSeparator/>
                <TimelineContent className='timeline_content'>
                  <Typography className='timeline_title'>{education.title}</Typography>
                  <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                  <Typography cariant='body2' className='timeline_description'>{education.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </CustomTimeline>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
    {/* Services */}
    <Grid container className='section p_45'>
  <Grid item className='section_title mb_30' >
        <span></span>
          <h6 className='section_title_text'>My Services</h6>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4} justifyContent={'space-around'}>
          {resumeData.services.map(service => (
            <Grid item xs={12} sm={6} md={3}>
              <div className='service'>
                <Icon className='service_icon'>{service.icon}</Icon>
                <Typography className='service_title' variant='h6'>{service.title}</Typography>
                <Typography className='service_description' variant='body2'>{service.description}</Typography>
              </div>
              </Grid>
          ))}
        </Grid>
        
      </Grid>

  </Grid>

      {/* Skills */}
      <Grid container className='section graybg p_45 p_50'>
        <Grid item xs={12}>
          <Grid container  justify='space-between' spacing={3}>
          {resumeData.skills.map((skill) => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={0} className='skill'>
              <Typography variant='h6' className='skill_title'>
                {skill.title}
              </Typography>
              {skill.description.map(element => (
                <Typography variant='body2' className='skill_description'>
                  <TimelineDot variant='outlined' className={'timeline_dot'}/>
                  {element}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
            
          </Grid>
        </Grid>

      </Grid>

      {/* contact */}
      
      <Grid container spacing={6} className='section pt_45 p_45'>
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span></span>
              <h6 className='section_title_text'>Contact Form</h6>
            </Grid>
           
            <Grid item xs={12}>
            
              <Grid container spacing={3}>
              
                <Grid item xs={12} sm={6}>
                <TextField id="standard-basic" label="Name" variant="standard" />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField id="standard-basic" label="Email" variant="standard" />
                </Grid>
                <Grid item xs={12} >
                <TextField id="standard-basic" label="Message" variant="standard" multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                
                <CustomButton  text='Submit' ></CustomButton> 
               
                </Grid>
                
              </Grid>
              
             
            </Grid>
            
            

          </Grid>
        </Grid>

        {/* contact information */}
        <Grid item xs={12} lg={5} id='contact' >
          <Grid container>
          <Grid item className='section_title mb_30'>
              <span></span>
              <h6 className='section_title_text'>Contact Information</h6>
            </Grid>
           
            <Grid item xs={12}>
              <Grid container >
                <Grid item>
                  <Typography className='contactInfo_item'>
                    <span>Address: </span> {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12} >
                  <Typography className='contactInfo_item'>
                    <span>Phone:</span> {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Email:</span> {resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className='contactInfo_socialsContainer'>
                {Object.keys(resumeData.Socials).map(key => (
                  <Grid item className='contactInfo_social'>
                    <a href={resumeData.Socials[key].link}>{resumeData.Socials[key].icon}</a>
                  
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  </>
  )
}

export default Resume