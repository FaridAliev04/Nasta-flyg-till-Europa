import React from 'react'
import Navbar from './Navbar'
import { TypeAnimation } from 'react-type-animation';
import Typewriter from "typewriter-effect";
import { cityData } from '../CityData';

const NavMain = () => {
  return <div className="nav_main">
    <video className='nav_main-video' autoPlay loop muted playsInline  src="background/videoBg2.mp4"></video>
    <Navbar />
    <div className="main">

      <div className="main_type">
      <TypeAnimation
      sequence={[
        'Nästa flyg är Europa',
        1500, 
        'Nästa flyg är Avropa',
        1500,
        'Nästa flyg är Europe',
        1500,
        'Nästa flyg är Euroopa',
        1500,
        'Nästa flyg är Eoraip',
        1500
      ]}
      wrapper="h1"
      speed={20}
      repeat={Infinity}
    />
      </div>
      <div className='main_btn-div'>
          <button className='main_btn'>
            Lär dig mer
          </button>
      </div>
    </div>
  </div>
}

export default NavMain