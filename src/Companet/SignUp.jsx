import React, { useState } from 'react'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'
import langMode from '../LangMode';
import TestLogin from './TestLogin';

const SigUp = ({setSignin}) => {

  const navigate=useNavigate()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [passwordType,setPasswordType]=useState("password")

  const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)
  supabase.auth.onAuthStateChange(async(event)=>{
  if(event !=="SIGNED_IN"){
     navigate('/login')
  }else{
    navigate("/")
  } 
})
  async function handleSubmit(e){
    e.preventDefault()
    const{data,error}=await supabase.auth.signInWithPassword({
      email:email,
      password:password,
    })
    // setToken(data)
    console.log(data)
  }
  const passwordEye=()=>{
    if(passwordType==="password"){
      setPasswordType("text")
    }else{
      setPasswordType("password")
    }
  }

    return ( <div className='login'>
  
  {
       <form className='resigter_form' onSubmit={handleSubmit} action="">
        <div className="inp_div">
          <label className='register_form-label' htmlFor="">{myLangData.register.email}</label>
          <input onChange={(e)=>setEmail(e.target.value)} className='inp_div-inp' type="email" name="email" />
        </div>
        <div className="inp_div">
          <label className='register_form-label' htmlFor="">{myLangData.register.password}</label>
          <input onChange={(e)=>setPassword(e.target.value)} className='inp_div-inp' type={passwordType} name="password" />
          <img onClick={()=>passwordEye()} className='password_eye' src="svg EYE MODE/eye-key-look-password-security-see-svgrepo-com.svg" alt="" />
        </div>
        
        <button className='form_btn' onClick={()=>setSignin(false)}>{myLangData.register.logIn}</button>
        <button onClick={()=>setSignin(true)} className='form_btn form_btn-register'>{myLangData.register.register}</button>
       </form>
     
   
  

  }
  

</div>
)
}

export default SigUp