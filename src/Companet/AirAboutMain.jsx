import React from 'react'
import { Slide } from 'react-awesome-reveal'
import {AiOutlineArrowRight} from "react-icons/ai"
const AirAboutMain = () => {
  return (
    <div className='airaboutmain'>
       <div className="air_main">     
            <Slide className='slide_airAbout-text'>
                <div className="airAbout_text">
                    <h1  className='airAbout_name'>Boeing 737 Next Generation</h1>
                    <p className='airAbout_texts'>Boeing 737 Next Generation, vanligen förkortat som 737NG, eller 737 Next Gen, är ett smalkroppsflygplan som drivs av två jetmotorer och tillverkas av Boeing kommersiella flygplan. Lanserades 1993 som tredje generationens derivat av Boeing 737, den har tillverkats sedan 1997 och är en uppgradering av 737 Classic (−300/-400/-500) serien.
                    </p>
                    <a
              className="about_main-link-wikipedia"
              href="https://en.wikipedia.org/wiki/Boeing_737_Next_Generation#737-800"
              target="_blank"
            >
              lär dig mer <AiOutlineArrowRight className="about_link-icons" />
            </a>
                </div>
            </Slide>
            <Slide direction='right' className='slide_airAbout-img'>
                <div className="airAbout_img-div">
                    <img className="airAbout_img" src="aboutAir/norgeAir.jpg" alt="" />
                </div>
            </Slide>
        </div> 
        <div className="air_main">
            <Slide className='slide_airAbout-text'>
                <div className="airAbout_text">
                <h1  className='airAbout_name'>Boeing 787 Dreamliner</h1>
                    <p className='airAbout_texts'>Boeing 787 Dreamliner är ett amerikanskt jetflygplan med bred kropp utvecklat och tillverkat av Boeing Commercial Airplanes. Efter att ha lagt ner sitt okonventionella Sonic Cruiser-projekt tillkännagav Boeing den konventionella 7E7 den 29 januari 2003, som till stor del fokuserade på effektivitet. Programmet lanserades den 26 april 2004, med en beställning på 50 flygplan från All Nippon Airways (ANA), inriktat på en introduktion 2008.</p>
                    <a
              className="about_main-link-wikipedia"
              href="https://en.wikipedia.org/wiki/Boeing_787_Dreamliner"
              target="_blank"
            >
              lär dig mer <AiOutlineArrowRight className="about_link-icons" />
            </a>
                </div>
            </Slide>
             <Slide direction='right' className='slide_airAbout-img'>
                <div className="airAbout_img-div">
                    <img className="airAbout_img" src="aboutAir/norgeAir2.jpg" alt="" />
                </div>
            </Slide>
        </div> 

        <div className="air_main">
            <Slide className='slide_airAbout-text'>
                <div className="airAbout_text">
                <h1 className='airAbout_name'>Airbus A320-familjen</h1>
                    <p className='airAbout_texts'>Airbus A320-familjen är en serie smalkroppsflygplan utvecklade och producerade av Airbus. A320 lanserades i mars 1984, flög först den 22 februari 1987 och introducerades i april 1988 av Air France. Den första familjemedlemmen följdes av den längre A321 (levererades först i januari 1994), den kortare A319 (april 1996) och den ännu kortare A318 (juli 2003).</p>
                    <a
              className="about_main-link-wikipedia"
              href="https://en.wikipedia.org/wiki/Airbus_A320_family"
              target="_blank"
            >
              lär dig mer <AiOutlineArrowRight className="about_link-icons" />
            </a>
                </div>
            </Slide>
             <Slide direction='right' className='slide_airAbout-img'>
                <div className="airAbout_img-div">
                    <img className="airAbout_img" src="aboutAir/sverigeAir.jpg" alt="" />
                </div>
            </Slide>
        </div> 
    </div>
  )
}

export default AirAboutMain