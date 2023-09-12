import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { supabase } from '@supabase/auth-ui-shared';
import { useNavigate } from 'react-router-dom';
import {CgProfile} from "react-icons/cg"
import {ReactComponent as Img} from "../modeSvg/night-night-mode-moon-svgrepo-com.svg"
import {ReactComponent as Img2} from "../modeSvg/light-light-mode-sun-svgrepo-com.svg"
import langMode from '../LangMode';


const ModeNav = ({inpInfo}) => {
    const [mode,setMode]=useState(localStorage.getItem("mode"))
    const [profil,setProfil]=useState(false)
    useEffect(() => {
      if(localStorage.getItem("mode")===undefined){
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
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)
    const email= (JSON.parse(localStorage.getItem('sb-cibpixfpkuzthabstkfx-auth-token'))?.user?.email)

    const profilFunc=()=>{
        if(profil===false){
            setProfil(true)
        }else{
            setProfil(false)
        }
    }

    const lognOutFunc=()=>{
        localStorage.removeItem("sb-cibpixfpkuzthabstkfx-auth-token");
        window.location.reload()
    }

  return <nav>
    <div className="nav_logo">
        <h1 className='nav_logo-header'>
            <NavLink to="/" className="nav_logo-header_link nav_li-link-mode">
                NFE
            </NavLink>
        </h1>
    </div>
    <div className="nav_list">
        <ul className='nav_ul'>
            <li className='nav_li'>
                <NavLink to="/" className="nav_li-link nav_li-link-mode">
                    {myLangData.nav.hem}
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/HandlaOm" className="nav_li-link nav_li-link-mode">
                {myLangData.nav.handlaOm} 
                </NavLink>
            </li>
            <li className='nav_li'>
                <a href="/Tures" className="nav_li-link nav_li-link-mode">
                {myLangData.nav.tures}
                </a>
                
            </li>
            <li className='nav_li'>
                <NavLink to="/SellCart" className="nav_li-link nav_li-link-mode">
                {myLangData.nav.vagn}
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/favorite" className="nav_li-link nav_li-link-mode">
                {myLangData.nav.favorite}  
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/login" className="nav_li-link nav_li-link-mode">
                {myLangData.nav.login}
                </NavLink>
            </li>
            {
                myId == "06e4138f-c6de-4147-a058-6334f7bc614d" ? <li className='nav_li'>
                <a href="/adminPanel" className="nav_li-link nav_li-link-mode">
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
            <Img2 onClick={modeFunc} className={localStorage.getItem("mode")==="light"?'mode_svg':"mode_svg-none"}/>
            <Img onClick={modeFunc} className={localStorage.getItem("mode")==="dark"?'mode_svg':"mode_svg-none"}/> 
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
}

export default ModeNav