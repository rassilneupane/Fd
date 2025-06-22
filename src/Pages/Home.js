import React from 'react'
import Layout from '../components/layout/Layout'

import { Link } from 'react-router-dom';
import banner from '../images/banner.jpg';
import '../styles/HomeStyles.css'; 

const Home = () => {
  return (
   <Layout>
    <div className='home' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', height: '90vh', display: 'flex', alignItems: 'left', justifyContent: 'center' }}>
      <div className='headerContainer'>
        <h1>Welcome to Our Restaurant</h1>
        <p>Best Food in Nepal with both veg and non-veg tasty menu</p>
        
        <Link to= '/menu'>
        <button >
          Order Now 
        </button>
        </Link>

      </div>

    </div>
    <p> Made by Rassil Neupane</p>
    
    
    </Layout>
  )
}

export default Home
