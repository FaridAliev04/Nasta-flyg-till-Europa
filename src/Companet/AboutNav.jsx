import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutNav = () => {
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
                    Hem
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/HandlaOm" className="nav_li-link  aboutNav_li-link">
                Handla om 
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/Tures" className="nav_li-link  aboutNav_li-link">
                   Tures
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/SellCart" className="nav_li-link  aboutNav_li-link">
                    Vagn
                </NavLink>
            </li>
            <li className='nav_li'>
                <NavLink to="/favorite" className="nav_li-link  aboutNav_li-link">
                    Favorit
                </NavLink>
            </li>
        </ul>
    </div>

    <div className="nav_profil">  
        {/* <img src="" alt="" />//bu hissesi qalsin evvelce bunan evvelkileri hell et sonra bunu yaz  !!!!!!!!!!  SILMEEE !!!!!!!!!!!! */}
    </div>
  </nav>
  )
}

export default AboutNav