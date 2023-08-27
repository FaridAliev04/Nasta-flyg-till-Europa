import React from 'react'
import AboutNav from './AboutNav'

const Login = () => {
  return (
    <div className='login'>
        <video className='nav_main-video' autoPlay loop muted playsInline src="background/149980 (Original).mp4"></video>
        <AboutNav/>
        <div className="login_div">
            <div className="login_box">
                <label htmlFor="name">Name</label>
                <input type="text" name="" className="login_box-inp" />
            </div>
            <div className="login_box">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="" className="login_box-inp" />
            </div>
        </div>
    </div>
  )
}

export default Login