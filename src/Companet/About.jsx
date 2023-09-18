import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import AboutNav from './AboutNav'
import { Zoom,Slide } from 'react-awesome-reveal'
import { supabase } from '../supabase'
import langMode from '../LangMode'
const About = ({inpInfo}) => {
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)

  return (
    <div className='about'>
        <AboutNav inpInfo={inpInfo}/>
        
        <div className="about-main">
            <Slide  >
                <h1 className='about-main_header'>
                {myLangData.about.about1}
                </h1>
            </Slide>
            <Slide delay={200}>
                <h1 className='about-main_header'>
                {myLangData.about.about2}
                </h1>
            </Slide>
            <Slide delay={300}>
                <h1 className='about-main_header'>
                {myLangData.about.about3}
                </h1>
            </Slide>
            <Slide delay={400}>
                <h1 className='about-main_header'>
                {myLangData.about.about4}
                </h1>
            </Slide>
        </div>
    </div>
  )
}

export default About