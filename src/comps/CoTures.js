import React from 'react'
import Navbar from '../Companet/Navbar'
import Tures from '../Companet/Tures'
import Footer from '../Companet/Footer'
import AboutNav from "../Companet/AboutNav"
import { useState ,useEffect } from 'react'
import { supabase } from '../supabase'
const CoTures = () => {
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
    <div className='coTures'>
        <AboutNav inpInfo={inpInfo} />
        <Tures/>
        <Footer/>
    </div>
  )
}

export default CoTures