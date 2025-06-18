import React,{useState} from 'react';
import { AppBar, Box, IconButton,Toolbar, Typography,Drawer, Divider } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {  NavLink} from 'react-router-dom';
import '../../styles/HeaderStyles.css';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  const[mobileOpen,setMobileOpen] = useState(false);
  //handle menu click 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  //menu drawer 
  const drawer = (
    <Box onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}>
      <Typography variant='h6'  sx={{ flexGrow:1 , my: 2, color: 'goldenrod' }}>
        <FastfoodIcon />
        Food Website
      </Typography>
      <Divider />
      
      <ul className='mobile-nav'>
        <li>
          <NavLink activeClassName="active" to={'/'}> Home </NavLink>
        </li>
        <li>
          <NavLink to={'/Menu'}> Menu </NavLink>
        </li>
        <li>
          <NavLink to={'/About'}> About </NavLink>
        </li>
        <li>
          <NavLink to={'/Contact'}> Contact </NavLink>
        </li>
      </ul>
    </Box>
  )
  return (
      <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton aria-label='open drawer'
              edge='start' 
              sx={{ mr: 2, color: 'goldenrod', display: { sm: 'none' } }}
               onClick={handleDrawerToggle}>
                
              <MenuIcon sx={{ color: 'White',display:{sm:'none'}}}/>
              
            </IconButton>
            <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow: 1}}>

               <FastfoodIcon/>
              Food Website
             
            </Typography>
            <Box sx={{
              display: {
              xs:'none', sm:'block'
            }}} >
              <ul className='nav-menu'>
                <li>
                  <NavLink activeClassName='active' to={'/'}> Home </NavLink>
                </li>
                <li>
                  <NavLink to={'/Menu'}> Menu </NavLink>
                </li>
                <li>
                  <NavLink to={'/About'}> About </NavLink>
                </li>
                <li>
                  <NavLink to={'/Contact'}> Contact </NavLink>
                </li>
                
              </ul>
      </Box>

          </Toolbar>
         
        </AppBar>
        <Box component='nav'>
          <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '240px',
             
          }}}>
            {drawer}
          </Drawer>

        </Box>
        <Box >
        <Toolbar />
        </Box>
         </Box>
          
    </>
  )
}

export default Header;
