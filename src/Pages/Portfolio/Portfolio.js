import React, { useState } from 'react'
import './Portfolio.css'
import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tabs, Typography } from '@mui/material/node'
import Tab from '@mui/material/node/Tab';
import resumeData from '../../utils/resumeData';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

const Portfolio = () => {
    const [tabValue,setTabValue] = useState('All');
    const[projectDialog,setProjectDialog] = useState(false)
   

  return (
   <Grid container spacing={1} className='section p_45 pt_45'>
    {/* Title */}
   <Grid item className='section_title mb_20' >
        <span></span>
          <h6 className='section_title_text'>Portfolio</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs value={tabValue} indicatorColor='White' className='custom_tabs' onChange={(event ,newValue) => setTabValue(newValue)}>
            <Tab label='All' value='All' className={tabValue == 'All' ? 'customTabs_item active' : 'customTabs_item'}/>
            {[...new Set(resumeData.Projects.map(item => item.tag))].map(tag => (
                <Tab label={tag} value={tag} className= {tabValue == tag ? 'customTabs_item active' : 'customTabs_item'} />
            ) )}

        </Tabs>
      </Grid>

      {/* Project */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
            {resumeData.Projects.map(Projects => (
                <>
                {tabValue == Projects.tag || tabValue =='All' ? (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grow in timeout={1000}>
                    <Card className='customCard' onClick={() => setProjectDialog(Projects)}>
                        <CardActionArea>
                            <CardMedia className='customCard_image' image={Projects.images} title={Projects.title} />
                                <CardContent>
                                    <Typography variant={'body2'} className='customCard_title'>{Projects.title}</Typography>
                                    <Typography variant='caption' className='customCard_caption'>{Projects.caption}</Typography>
                                </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grow>
                    
                </Grid>
                ): null }
                
            </>
   
            ))}
        </Grid>
      </Grid>
      <Dialog open={projectDialog} onClose={()=> setProjectDialog(false)} className='projectDialog' maxWidth={'lg'} fullWidth>
            <DialogTitle onClose={()=> setProjectDialog(false)}>
                 {projectDialog.title} 
                 </DialogTitle>
                <img src={projectDialog.image} alt="" className='projectDialog_image' />
                <DialogContent style={{height:'80vh'}}>
                    {projectDialog.images && (
                        <ImageGallery images={projectDialog.images} />
                    )}
                    <Typography className='projectDialog_description'>{projectDialog.description}</Typography>
                    
                </DialogContent>
                <DialogActions className='projectDialog_actions'>
                    {projectDialog?.links?.map((link => (
                        <a href={link.link} target='_blank' className='projectDialog_icon'>{link.icon}</a>
                    )))}
                </DialogActions>
        </Dialog>

   </Grid>
  )
}

export default Portfolio;
