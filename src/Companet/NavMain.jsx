import React from 'react'
import Navbar from './Navbar'
import { TypeAnimation } from 'react-type-animation';
import Typewriter from "typewriter-effect";
import { cityData } from '../CityData';
import { NavLink } from 'react-router-dom';
import { useState,useEffect,useRef } from 'react';
import { supabase } from '../supabase';
import langMode from '../LangMode';
import { useNavigate } from 'react-router-dom';

const NavMain = () => {
  
  const [mode,setMode]=useState(localStorage.getItem("mode"))
  const navigate=useNavigate()
  useEffect(() => {
    getDatas();
    if(localStorage.getItem("mode")==undefined){
      setMode("light")
      localStorage.setItem("mode","light")
    }
    localStorage.setItem("mode",mode)
    document.body.className=localStorage.getItem("mode")
  }, []);
  const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)
  const modeFunc=()=>{
    if(mode=="light"){
      setMode("dark")
    }else{
      setMode("light")
    }
    localStorage.setItem("mode",mode)
    document.body.className=localStorage.getItem("mode")
  }

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
      supabase.auth.onAuthStateChange(async(event)=>{
        if(event =="SIGNED_IN"){
           navigate("/")
        }
       else if(event=="SIGNED_OUT") {
          navigate('/')
        } 
      })
      async function signOut(){
        const {error}=await supabase.auth.signOut()
    }

  return <div className="nav_main">
    <video className='nav_main-video' autoPlay loop muted playsInline  src="background/videoBg2.mp4"></video>
    <Navbar inpInfo={inpInfo} />
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
        <NavLink to="/HandlaOm">
          <button  className='main_btn'>
            {myLangData.navMain.lagdigmer}
          </button>
          </NavLink>
      </div>
    </div>

  </div>
}

export default NavMain