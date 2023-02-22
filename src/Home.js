import React from 'react'
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Faq from './components/Faq';

import HireUS from './components/HireUS';
import MainScreen from './components/MainScreen';
import Mission from './components/Mission';
import Message from './components/Message';
import Services from './components/Services';
import Team from './components/Team';
import Work from './components/Work';



const Home = () => {
  return (
    <>
    
        <MainScreen />
        <About />
        <Mission />
        <HireUS />
        <Message />
        <Services />
        <Work />
        <Team />
        {/* <Blog /> */}
        <Faq />
        <Contact />
        
    </>
  )
}

export default Home