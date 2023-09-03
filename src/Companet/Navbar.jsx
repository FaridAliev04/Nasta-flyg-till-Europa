import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { supabase } from '@supabase/auth-ui-shared';
import { useNavigate } from 'react-router-dom';
import {CgProfile} from "react-icons/cg"


const Navbar = ({inpInfo}) => {
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
                    Hem
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/HandlaOm" className="nav_li-link">
                Handla om 
                </NavLink>
            </li>
            <li className='nav_li'>
                <a href="/Tures" className="nav_li-link">
                   Tures
                </a>
                
            </li>
            <li className='nav_li'>
                <NavLink to="/SellCart" className="nav_li-link">
                    Vagn
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/favorite" className="nav_li-link">
                      Favorit  
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
        <select id="language" name="language">
            <option value="sv">SV</option>
            <option value="az">AZ</option>
            <option value="eng">EN</option>
        </select>
        <div className="profil">
            {
                inpInfo.map((e)=>{
                    if(e.qeydiyyat===true){
                        return <>
                        <span><CgProfile/>{e.epost}</span>
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