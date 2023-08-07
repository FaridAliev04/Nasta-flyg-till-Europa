import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        <div className="foooter_top">
            <div className="logo">
                <h1 className='nav_logo-header'>
                    <NavLink className="nav_logo-header_link footer_li-link">
                        NFS
                    </NavLink>
                </h1>
            </div>
            <div className="nav_list">
                <ul className='nav_ul footer_ul'>
                    <li className='nav_li'>
                        <NavLink className="nav_li-link footer_li-link">
                            Hem
                        </NavLink>
                    </li>
                    <li className='nav_li'>
                        <NavLink className="nav_li-link footer_li-link">
                            STÄDER 
                        </NavLink>
                    </li>
                    <li className='nav_li'>
                        <NavLink className="nav_li-link footer_li-link">
                            Hjälp
                        </NavLink>
                    </li>
                    <li className='nav_li'>
                        <NavLink className="nav_li-link footer_li-link">
                            Favorit
                        </NavLink>
                    </li>
                    <li className='nav_li'>
                        <NavLink className="nav_li-link footer_li-link">
                            Turer
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <hr className='footer_hr' />
        <div className="footer_bottom">
            <span className='footer_bottom-span'>
                © 2023 Nästa flyg till Sverige
            </span>
        </div>
    </footer>
  )
}

export default Footer