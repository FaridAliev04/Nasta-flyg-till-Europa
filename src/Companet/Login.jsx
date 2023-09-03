import React from 'react'
import AboutNav from './AboutNav'
import { supabase } from '../supabase';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [info,setInfo]=useState([])
    const [inpInfo,setInpInfo]=useState([])
    const [user,setUser]=useState()
    const [fullName,setFullName]=useState()
    const [email,setEmail]=useState()
    const [nickName,setNickName]=useState()
    const [password,setPassword] =useState()
    const [errorPassword,setErrorPassword]=useState()
    const [errorEmail,setErrorEmail]=useState()
    const navigate=useNavigate()
    useEffect(() => {
        getData();
      }, []);
    console.log(inpInfo)
    
      async function getData() {
        try {
          const { data, error } = await supabase
            .from("Login")
            .select("*")
            .limit(30);
          if (error) throw error;
          if (data != null) {
            setInpInfo(data);
          }
        } catch (error) {
          console.log("q");
        }
      }

      async function registreraTrueFunc(){
        (inpInfo.map((e)=>{
        
            if(e.user===user&&e.FullName===fullName&&e.password===password&&e.nickName===nickName&&e.epost===email){
              
              
               
            }
            
       })
        
        )
       

      }
      const trueEmail=function(email){
      const re= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      return re.test(String(email).toLowerCase())
      }
      const trueEmailTest=function(){
        if(email===""){
          setErrorEmail(true)
        }else if(!trueEmail(email)){
          setErrorEmail(true)
        }else{
          setErrorEmail(false)
        }
      }
      const inputLabelPassword=function() {
        
        if(password===""){
            setErrorPassword(true)
        } else{
            setErrorPassword(false)
        }
    }
    
      async function createAccount(){
        if(errorPassword===false&& errorEmail===false){
          try{
            const {data,error}=await supabase.from("Login").insert({user:user,FullName:fullName,epost:email,nickName:nickName,password:password}).single()
            if(error) throw error
        }catch (error){
            console.log("error")
        }
        navigate("/hem")
        }
        
    }

    return ( <div className='login'>
        <video className='nav_main-video' autoPlay loop muted playsInline src="background/149980 (Original).mp4"></video>
        
        {
             <div className="login_div">
                <div className="login_box">
                    <label className='login_label' htmlFor="name">Namn:</label>
                    <input onChange={(e)=>setUser(e.target.value)} type="text" name="" className="login_box-inp" />
                    <span className='login_error-none'>s</span>
                </div>
                <div className="login_box">
                    <label className='login_label' htmlFor="name">Fullständiga namn:</label>
                    <input type="text" onChange={(e)=>setFullName(e.target.value)} className="login_box-inp" />
                    <span className='login_error-none'>s</span>
                </div>
                <div className="login_box">
                    <label className='login_label' htmlFor="name">E-post:</label>
                    <input type="email" onChange={(e)=>(setEmail(e.target.value))} className="login_box-inp" />
                    <span className={errorEmail?'mesaj-block':'login_error-none'}>Ange en giltig e-postadress</span>
                </div>
                <div className="login_box">
                    <label className='login_label' htmlFor="name">Användarnamn:</label>
                    <input type="text" onChange={(e)=>setNickName(e.target.value)} className="login_box-inp" />
                    <span className='login_error-none'>Använd ett giltigt användarnamn</span>
                </div>
    
                <div className="login_box">
                    <label className='login_label' htmlFor="name">Lösenord:</label>
                    <input type="password" onChange={(e)=>(setPassword(e.target.value))}  className="login_box-inp" />
                    <span className={errorPassword?'mesaj-block':'login_error-none'}>måste vara minst 6 tecken</span>
                </div>
                <button onClick={()=>(createAccount(),trueEmailTest(),inputLabelPassword())} className='login_btn'> Registrera</button>
                <button onClick={()=>registreraTrueFunc()}>click</button>
            </div>
           
         
        
   
        }
        

    </div>
  )
}

export default Login