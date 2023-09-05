import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {CgProfile} from "react-icons/cg"
import langMode from '../LangMode'

const AboutNav = ({inpInfo}) => {
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)

    const [mode,setMode]=useState(localStorage.getItem("mode"))
    useEffect(() => {
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
   
  return (
    <nav>
    <div className="nav_logo">
        <h1 className='nav_logo-header'>
            <NavLink to="/hem" className="nav_logo-header_link  aboutNav_li-link">
                NFE
            </NavLink>
        </h1>
    </div>
    <div className="nav_list">
        <ul className='nav_ul'>
            <li className='nav_li'>
                <NavLink to="/hem" className="nav_li-link aboutNav_li-link">
                    {myLangData.nav.hem}
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/HandlaOm" className="nav_li-link  aboutNav_li-link">
                {myLangData.nav.handlaOm} 
                </NavLink>
            </li>
            <li className='nav_li'>
                <a href="/Tures" className="nav_li-link  aboutNav_li-link">
                {myLangData.nav.tures}
                </a>
            </li>
            <li className='nav_li'>
                <NavLink to="/SellCart" className="nav_li-link  aboutNav_li-link">
                {myLangData.nav.vagn}
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/favorite" className="nav_li-link  aboutNav_li-link">
                {myLangData.nav.favorite}
                </NavLink>
            </li>
            {/* <li className='nav_li'>
                <NavLink to="/" className="nav_li-link  aboutNav_li-link">
                Registrera
                </NavLink>
            </li> */}
        </ul>
    </div>
  
    <div className="nav_profil">  
    
    <img onClick={modeFunc} className='mode_svg' src={localStorage.getItem("mode")==="light"?"svg EYE MODE/light-light-mode-sun-svgrepo-com.svg":"svg EYE MODE/night-night-mode-moon-svgrepo-com.svg"} alt="" />

    <div className="language_div">
            <img onClick={()=>(localStorage.setItem("langMode","sv"),window.location.reload())} className='language_flag' src="flag/sweden_flag.png" alt="" />
            <img onClick={()=>(localStorage.setItem("langMode","en"),window.location.reload())} className='language_flag' src="flag/Flag_of_the_United_Kingdom_(1-2).svg.png" alt="" />
        </div>

    <div className="profil">
        {
            inpInfo.map((e)=>{
                if(e.qeydiyyat===true){
                    return <>
                    <span><CgProfile/>{e.user}</span>
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
  )
}

export default AboutNav