import React from 'react'
import { Slide } from 'react-awesome-reveal'
import {AiOutlineArrowRight} from "react-icons/ai"
import { useState } from 'react'
import langMode from '../LangMode'
const AirAboutMain = () => {
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)
  return (
    <div className='airaboutmain'>
       <div className="air_main">     
            <Slide className='slide_airAbout-text'>
                <div className="airAbout_text">
                    <h1  className='airAbout_name'>{myLangData.aboutMain.air1}</h1>
                    <p className='airAbout_texts'>
                        {myLangData.aboutMain.airText1}
                    </p>
                    <a
              className="about_main-link-wikipedia"
              href="https://en.wikipedia.org/wiki/Boeing_737_Next_Generation#737-800"
              target="_blank"
            >
              {myLangData.aboutMain.aboutBtn} <AiOutlineArrowRight className="about_link-icons" />
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
                <h1  className='airAbout_name'>{myLangData.aboutMain.air2}</h1>
                    <p className='airAbout_texts'>
                    {myLangData.aboutMain.airText2}
                    </p>
                    <a
              className="about_main-link-wikipedia"
              href="https://en.wikipedia.org/wiki/Boeing_787_Dreamliner"
              target="_blank"
            >
              {myLangData.aboutMain.aboutBtn} <AiOutlineArrowRight className="about_link-icons" />
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
                <h1 className='airAbout_name'>{myLangData.aboutMain.air3}</h1>
                    <p className='airAbout_texts'>
                    {myLangData.aboutMain.airText2}
                    </p>
                    <a
              className="about_main-link-wikipedia"
              href="https://en.wikipedia.org/wiki/Airbus_A320_family"
              target="_blank"
            >
              {myLangData.aboutMain.aboutBtn} <AiOutlineArrowRight className="about_link-icons" />
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