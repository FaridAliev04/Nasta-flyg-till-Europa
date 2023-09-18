import React from 'react'
import Navbar from '../Companet/Navbar'
import  Favorite  from '../Companet/Favorite'
import Footer from '../Companet/Footer'
import { useState,useEffect } from 'react'
import { supabase } from '../supabase'
import ModeNav from '../Companet/ModeNav'
const CoFavorite = () => {

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
        <ModeNav inpInfo={inpInfo}/>
        <Favorite/>
        <Footer/>
    </div>
  )
}

export default CoFavorite