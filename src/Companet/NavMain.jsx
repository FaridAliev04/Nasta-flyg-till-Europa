import React from 'react'
import Navbar from './Navbar'
import Typewriter from "typewriter-effect";
import { cityData } from '../CityData';

const NavMain = () => {
  return <div className="nav_main">
    <video className='nav_main-video' autoPlay loop muted playsInline  src="background/videoBg2.mp4"></video>
    <Navbar />
    <div className="main">
      <div style={{textAlign:"center"}}className="main_type">
        <Typewriter 
 
          onInit={(typewriter) => {
          typewriter
             .typeString(`<spam style=" font-size:2.3rem;color: #023047;font-weight: 600;"  className="main_typewritter-spam"> Nästa flyg till Sverige</spam>`)
            .pauseFor(300)
            .deleteChars(7)
            .typeString(`<spam style=" font-size:2.3rem;color: #023047;font-weight: 600;" className="main_typewritter-spam">Sweden</spam>` )
            .pauseFor(300)
            .deleteChars(7)
            .typeString( ` <spam style="font-size:2.3rem;color: #023047;font-weight: 600;"  className="main_typewritter-spam"> שוודיה"</spam>` )
            .pauseFor(300)
            .deleteChars(7)
            .typeString(`<spam style=" font-size:2.3rem;color: #023047;font-weight: 600;"  className="main_typewritter-spam">Suède</spam>`)
            .pauseFor(300)
            .deleteChars(6)
            .typeString( `<spam style=" font-size:2.3rem;color: #023047;font-weight: 600;"  className="main_typewritter-spam"> Sverige</spam>`)
            .start()
         
          }}
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