import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import AboutNav from './AboutNav'
import { Zoom,Slide } from 'react-awesome-reveal'
import { supabase } from '../supabase'

const About = ({inpInfo}) => {
    // const [inpInfo,setInpInfo]=useState([])
    // useEffect(()=>{
    //   getDatas()
    // },[])
    //   console.log(inpInfo)
      
    //     async function getDatas() {
    //       try {
    //         const { data, error } = await supabase
    //           .from("Login")
    //           .select("*")
    //           .limit(30);
    //         if (error) throw error;
    //         if (data != null) {
    //           setInpInfo(data);
    //         }
    //       } catch (error) {
    //         console.log("q");
    //       }
    //     } 
  return (
    <div className='about'>
        <AboutNav inpInfo={inpInfo}/>
        <div className="about-main">
            <Slide  >
                <h1 className='about-main_header'>
                Mer än 4 länder
                </h1>
            </Slide>
            <Slide delay={200}>
                <h1 className='about-main_header'>
                Mer än 7 klimatzoner
                </h1>
            </Slide>
            <Slide delay={300}>
                <h1 className='about-main_header'>
                Mer än 10 städer
                </h1>
            </Slide>
            <Slide delay={400}>
                <h1 className='about-main_header'>
                Mer än 15 öar
                </h1>
            </Slide>
        </div>
    </div>
  )
}

export default About