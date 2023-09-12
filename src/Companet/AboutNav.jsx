import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {CgProfile} from "react-icons/cg"
import langMode from '../LangMode'

const AboutNav = ({inpInfo}) => {
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)
    const [profil,setProfil]=useState(false)
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
    const myId = (JSON.parse(localStorage.getItem('sb-cibpixfpkuzthabstkfx-auth-token'))?.user?.id)
    const profilFunc=()=>{
        if(profil===false){
            setProfil(true)
        }else{
            setProfil(false)
        }
    }
    const email= (JSON.parse(localStorage.getItem('sb-cibpixfpkuzthabstkfx-auth-token'))?.user?.email)
    const lognOutFunc=()=>{
        localStorage.removeItem("sb-cibpixfpkuzthabstkfx-auth-token");
        window.location.reload()
    }
  return (
    <nav>
    <div className="nav_logo">
        <h1 className='nav_logo-header'>
            <NavLink to="/" className="nav_logo-header_link  aboutNav_li-link">
                NFE
            </NavLink>
        </h1>
    </div>
    <div className="nav_list">
        <ul className='nav_ul'>
            <li className='nav_li'>
                <NavLink to="/" className="nav_li-link aboutNav_li-link">
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
            <li className='nav_li'>
                <NavLink to="/login" className="nav_li-link aboutNav_li-link">
                {myLangData.nav.login}
                </NavLink>
            </li>
            {
                myId == "06e4138f-c6de-4147-a058-6334f7bc614d" ? <li className='nav_li'>
                <a href="/adminPanel" className="nav_li-link aboutNav_li-link">
                AdminPanel
                </a>
            </li> : null
            }
        </ul>
    </div>
  
        <div className="nav_profil">  
        <div className="profil">
            <button onClick={()=>profilFunc()} className='profil_email'>
               <CgProfile/>  {myLangData.profile.profil}
            </button>

            <div className={profil===false?"profil_lognOut":"profil_lognOut-block"}>
                <div className="user">
                    <p className='user_email'>
                        {email}
                    </p>
                </div>
                <hr className='user_hr' />
                <div className="profil_img">
                <img onClick={modeFunc} className='mode_svg' src={localStorage.getItem("mode")==="light"?"svg EYE MODE/light-light-mode-sun-svgrepo-com.svg":"svg EYE MODE/night-night-mode-moon-svgrepo-com.svg"} alt={mode==="light"?"light":"night"} />
            </div> 
              <div className="language_div">
              <img onClick={(e)=>(localStorage.setItem("langMode","sv"),window.location.reload(),e.preventDefault())} className='language_flag' src="flag/sweden_flag.png" alt="" />
              <img onClick={(e)=>(localStorage.setItem("langMode","en"),window.location.reload(),e.preventDefault())} className='language_flag' src="flag/Flag_of_the_United_Kingdom_(1-2).svg.png" alt="" />
            </div>
            {localStorage.getItem('sb-cibpixfpkuzthabstkfx-auth-token')?<button onClick={()=>lognOutFunc()} className='lognOut-btn'>{myLangData.profile.logOut}</button>:null}
            </div>
        
    </div>
        
        
    </div>

    
  </nav>
  )
}

export default AboutNav