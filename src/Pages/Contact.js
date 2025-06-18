import React from 'react'
import Layout from '../components/layout/Layout';
import { Box , Typography,TableContainer, Paper,Table, TableHead,TableRow, TableCell, TableBody} from '@mui/material';

import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
  return (
    <Layout>
    <Box sx = {{backgroundColor: 'black', color : 'goldenrod', mt:1 ,mb:1, '& h4': {
      fontWeight: 'bold'

    },
    '@media (max-width: 600px)': {
      '& h4': {
        fontSize: '1.5rem',
        textAlign: 'center',
      },
    }}}>
      <Typography variant = 'h4'>
        Contact Us
        </Typography ></Box>
       
        
    <p>We value your feedback and are here to assist you with any questions or concerns you may have. Our team is dedicated to providing you with the best service possible.</p>

    <p>If you have any inquiries, please feel free to reach out to us through the contact information provided below. We look forward to hearing from you!</p>
    <p>For reservations, please call us at least 24 hours in advance. We recommend booking early, especially during peak hours and weekends.</p> 
    <p>Thank you for choosing our restaurant. We appreciate your support and look forward to serving you soon!</p>
    
    <Box sx={{ my: 4, mx: 'auto', maxWidth: 800, p: 3, bgcolor: '#f5f5f5', borderRadius: 2, boxShadow: 3,'@media (max-width: 600px)': {
        Width: '300px', ml: 0, mt: 0, p: 1,}}}> 
      <TableContainer component={Paper}>
        <Table aria-label="contact table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: 'black', fontWeight: 'bold', color: 'white' }} align='center'>
                Contact Information
              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{ mr: 1 , color:'goldenrod'}} /> TollFree Number: 1800-123-4567

                </TableCell>
              
            </TableRow>
            <TableRow>
              <TableCell>
                <EmailIcon sx={{ mr: 1 , color:'goldenrod'}} /> Email:Shreedepneupane@gmial.com

                </TableCell>
              
            </TableRow>
          <TableRow>
              <TableCell>
                <LocalPhoneIcon sx={{ mr: 1 , color:'goldenrod'}} /> Phone: +977-9840390641

                </TableCell>
              
            </TableRow>
          
             
          
          </TableBody>

        </Table>


      </TableContainer>
    </Box>
    </Layout>
  )
}

export default Contact
