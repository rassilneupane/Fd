import React from 'react';


import Layout from '../components/layout/Layout';
import { MenuList } from '../data/data';
import { Box, Card, CardContent,CardActionArea, CardMedia, Typography } from '@mui/material';
const Menu = () => {
  return (
    <Layout>
     <Box sx={{display:'flex',  flexWrap:'wrap', justifyContent:'center', alignItems:'center', padding:2}}>
      {
        MenuList.map(menu=>(
          <Card sx={{maxWidth: 345, margin: '20px auto',display:'flex',m:2}} key={menu.id}>
            <CardActionArea>
              <CardMedia sx = {{minHeight:'400px'}} component = {'img'} src = {menu.image} alt = {menu.name}/>
              <CardContent>
                <Typography variant = 'h5' gutterBottom component={'div'}>{menu.name}</Typography>
                <Typography variant = 'body2' >{menu.description}</Typography>
                <Typography variant = 'h5'>{menu.price}</Typography>
               
              </CardContent>

              
            </CardActionArea>
          </Card>
        ))
      }
     </Box>
     
    </Layout>
  )
}

export default Menu
