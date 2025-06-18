
import React from 'react';

import Layout from './components/layout/Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Pagenotfound from './Pages/Pagenotfound';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element ={<Home />}/>
      <Route path = '/Contact' element ={<Contact />}/>
      <Route path = '/Menu' element ={<Menu />}/>
      <Route path = '/About' element ={<About />}/>
      <Route path = '/Pagenotfound' element ={<Pagenotfound />}/>
      

    </Routes>
    </BrowserRouter>
    </div>
 
  );
}

export default App;
