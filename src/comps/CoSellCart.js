import React from 'react'
import Navbar from '../Companet/Navbar'
import SellCart from '../Companet/SellCart'
import Footer from '../Companet/Footer'
import ModeNav from '../Companet/ModeNav'
import { useState,useEffect } from 'react'
import { supabase } from '../supabase'
const CoSellCart = () => {
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
        <SellCart/>
        <Footer/>
    </div>
  )
}

export default CoSellCart