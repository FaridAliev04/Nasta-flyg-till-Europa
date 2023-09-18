import React from 'react'
import { NavLink } from 'react-router-dom'
import langMode from '../LangMode'
import { useState } from 'react'
const Footer = () => {
    const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)

  return (
    <footer>
        <div className="foooter_top">
            <div className="logo">
                <h1 className='nav_logo-header '>
                    <NavLink className="nav_logo-header_link footer_li-link footer_logo-header">
                        NFE
                    </NavLink>
                </h1>
            </div>
            <div className="footer-nav_list">
                <ul className='nav_ul footer_ul'>
                    <li className='nav_li'>
                        <NavLink to="/" className="nav_li-link footer_li-link">
                            {myLangData.footer.hem}
                        </NavLink>
                    </li>
                    <li className='nav_li'>
                        <NavLink to="/HandlaOm" className="nav_li-link footer_li-link">
                        {myLangData.footer.handlaOm}
                        </NavLink>
                    </li>
                    <li className='nav_li'>
                        <NavLink to="/Tures" className="nav_li-link footer_li-link">
                        {myLangData.footer.tures}
                        </NavLink>
                    </li>
                    <li className='nav_li'>
                        <NavLink to="/SellCart" className="nav_li-link footer_li-link">
                        {myLangData.footer.vagn}
                        </NavLink>
                    </li>
                    <li className='nav_li'>
                        <NavLink to="/favorite" className="nav_li-link footer_li-link">
                        {myLangData.footer.favorite}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <hr className='footer_hr' />
        <div className="footer_bottom">
            <span className='footer_bottom-span'>
                © 2023 Nästa flyg är Europa
            </span>
        </div>
    </footer>
  )
}

export default Footer