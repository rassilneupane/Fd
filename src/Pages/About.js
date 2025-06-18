import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography, Link } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 4,
          mx: 'auto',
          maxWidth: 800,
          p: { xs: 2, sm: 4 },
          bgcolor: '#000', // Black background
          borderRadius: 3,
          boxShadow: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: '#DAA520', // Goldenrod
            textAlign: 'center',
            mb: 2,
          }}
        >
          Welcome to Our Restaurant!
        </Typography>

        <Typography variant="body1" sx={{ color: '#fff', textAlign: 'justify' }}>
          We are dedicated to providing you with the best dining experience possible. Our menu features a wide variety of dishes, including both vegetarian and non-vegetarian options, all made with the freshest ingredients. Whether you're here for a casual meal or a special occasion, we strive to make every visit memorable.
        </Typography>

        <Typography variant="body1" sx={{ color: '#fff', textAlign: 'justify' }}>
          We are committed to sustainability and source our ingredients locally whenever possible. Our chefs are passionate about creating delicious meals that cater to all tastes and dietary preferences. From our friendly staff to our cozy atmosphere, we aim to make you feel right at home.
        </Typography>

        <Typography variant="body1" sx={{ color: '#fff', textAlign: 'justify' }}>
          For any inquiries or feedback, please feel free to reach out to us. Your satisfaction is our top priority. Thank you for being a part of our restaurant family!
        </Typography>

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Link
            href="/Contact"
            underline="none"
            sx={{
              px: 3,
              py: 1,
              bgcolor: '#DAA520',
              color: '#000',
              borderRadius: 2,
              fontWeight: 'bold',
              transition: '0.3s',
              '&:hover': {
                bgcolor: '#b8860b',
              },
            }}
          >
            Contact Us
          </Link>
        </Box>
      </Box>
    </Layout>
  )
}

export default About
