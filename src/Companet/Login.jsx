import React from 'react'
import AboutNav from './AboutNav'
import { supabase } from '../supabase';
import { useState,useEffect } from 'react';
import Faq from './Faq';

const Login = () => {
    const [info,setInfo]=useState([])
    useEffect(() => {
        getData();
      }, []);
    console.log(info)
    
      async function getData() {
        try {
          const { data, error } = await supabase
            .from("Login")
            .select("*")
            .limit(30);
          if (error) throw error;
          if (data != null) {
            setInfo(data);
          }
        } catch (error) {
          console.log("q");
        }
      }
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