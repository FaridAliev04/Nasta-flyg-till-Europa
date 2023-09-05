import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { supabase } from '@supabase/auth-ui-shared';
import { useNavigate } from 'react-router-dom';
import {CgProfile} from "react-icons/cg"
import langMode from '../LangMode';
import {PiListFill} from "react-icons/pi"

const Navbar = ({inpInfo}) => {
    const [mode,setMode]=useState(localStorage.getItem("mode"))
    const [profil,setProfil]=useState(false)
    useEffect(() => {
        if(localStorage.getItem("langMode")==undefined){
            localStorage.setItem("langMode","sv")
        }
      if(localStorage.getItem("mode")==undefined){
        setMode("light")
        localStorage.setItem("mode","light")
      }
      localStorage.setItem("mode",mode)
      document.body.className=localStorage.getItem("mode")
    }, []);

    const modeFunc=()=>{
      if(mode=="light"){
        setMode("dark")
      }else{
        setMode("light")
      }
      localStorage.setItem("mode",mode)
      document.body.className=localStorage.getItem("mode")
    }
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)
  return <nav>
    <div className="nav_logo">
        <h1 className='nav_logo-header'>
            <NavLink to="/hem" className="nav_logo-header_link">
                NFE
            </NavLink>
        </h1>
    </div>
    <div className="nav_list">
        <ul className='nav_ul'>
            <li className='nav_li'>
                <NavLink to="/hem" className="nav_li-link ">
                   {myLangData.nav.hem}
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/HandlaOm" className="nav_li-link">
                {myLangData.nav.handlaOm}
                </NavLink>
            </li>
            <li className='nav_li'>
                <a href="/Tures" className="nav_li-link">
                {myLangData.nav.tures}
                </a>
                
            </li>
            <li className='nav_li'>
                <NavLink to="/SellCart" className="nav_li-link">
                {myLangData.nav.vagn}
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/favorite" className="nav_li-link">
                {myLangData.nav.favorite}  
                </NavLink>
            </li>
            {/* <li className='nav_li'>
                <NavLink to="/qeydiyyat" className="nav_li-link ">
                Registrera
                </NavLink>
            </li> */}
            
        </ul>
    </div>

    
    <div className="nav_profil">  
    
        <img onClick={modeFunc} className='mode_svg' src={localStorage.getItem("mode")==="light"?"svg EYE MODE/light-light-mode-sun-svgrepo-com.svg":"svg EYE MODE/night-night-mode-moon-svgrepo-com.svg"} alt={mode==="light"?"light":"night"} />
        <div className="language_div">
            <img onClick={(e)=>(localStorage.setItem("langMode","sv"),window.location.reload(),e.preventDefault())} className='language_flag' src="flag/sweden_flag.png" alt="" />
            <img onClick={(e)=>(localStorage.setItem("langMode","en"),window.location.reload(),e.preventDefault())} className='language_flag' src="flag/Flag_of_the_United_Kingdom_(1-2).svg.png" alt="" />
        </div>
        <div className="profil">
            {
                inpInfo.map((e)=>{
                    if(e.qeydiyyat===true){
                        return <>
                        <p><CgProfile/>{e.user}</p>
                        <div className="profil_none">
                            <button>Exit</button>
                        </div>
                        </>
                        
                    }
                })
            }
            
        </div>
    </div>
  </nav>
}

export default Navbar