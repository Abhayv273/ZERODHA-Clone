import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';



function Homepage() {
    return ( 
        <>
      {/* <Navbar/>  */}
      {/* <AuthPage/> */}
      <Hero/>
      <Awards/>
      <Stats />
      <Pricing />
      <Education/>
      <OpenAccount/>
      {/* <Footer/> */}
        </>
     );
}

export default Homepage;