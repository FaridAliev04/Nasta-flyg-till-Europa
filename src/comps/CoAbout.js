import React from 'react'
import About from '../Companet/About'
import Footer from "../Companet/Footer"
import AboutMain from '../Companet/AboutMain'
import AirAboutMain from '../Companet/AirAboutMain'
import Faq from '../Companet/Faq'
import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
const CoAbout = () => {
  useEffect(() => {
    getDatas()
  }, []);

   const [inpInfo,setInpInfo]=useState([])

    console.log(inpInfo)
    
      async function getDatas() {
        try {
          const { data, error } = await supabase
            .from("Login")
            .select("*")
            .limit(30);
          if (error) throw error;
          if (data != null) {
            setInpInfo(data);
          }
        } catch (error) {
          console.log("q");
        }
      } 
  return (
    <div>
        <About inpInfo={inpInfo}/>
        <AboutMain/>
        <AirAboutMain/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default CoAbout