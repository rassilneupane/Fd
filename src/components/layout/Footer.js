import React from 'react'
import {Box,Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign: 'center', bgcolor: 'black', color: 'white', p: 2}}>
      <Box sx = {{my:3 , '& svg' : {fontSize: "2rem", cursor: 'pointer', mr : '10px' }
    ,
    '& svg:hover': {color: 'goldenrod',transform: 'translateY(-5px)', transition: 'all 400ms ease-in-out'}}}>
        {/*icons*/}
        <a href = 'https://www.instagram.com'title = "Visit Instagram">
        <InstagramIcon sx={{color: 'goldenrod', fontSize: '2rem', marginRight: '10px'}} /> </a>
        <a href = "hrrps://www.facebook.com" title = "Visit Youtube "> <FacebookIcon sx={{color: 'goldenrod', fontSize: '2rem', marginRight: '10px'}} /> </a>
       <a href = "https://x.com"title = "Visit "> <XIcon sx={{color: 'goldenrod', fontSize: '2rem'}} /></a>
        <a href = "https://youtube.com"title = "Visit Youtube"><YouTubeIcon sx={{color: 'goldenrod', fontSize: '2rem', marginLeft: '10px'}} /> </a> 
      </Box>
      <Typography variant = 'h5' sx={{'@media (max-width: 600px)': {fontSize: '1.2rem'}}}>
        
        All rights reserved &copy; 2023

      </Typography>
    </Box>
      
    </>
  )
}

export default Footer
