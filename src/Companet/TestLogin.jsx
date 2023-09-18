import React from 'react'
import { useState,useEffect } from 'react'
import { supabase } from '../supabase'
import { Link } from 'react-router-dom'
import ModelNav from "./ModeNav"
import SignUp from "./SignUp"
import langMode from '../LangMode';

const TestLogin = () => {
  const[user,setUser]=useState()
  const [password,setPassword]=useState()
  const [email,setEmail]=useState()
const [passwordType,setPasswordType]=useState("password")
  const [signin,setSignin]=useState(true)
  const [myLangData,setMyLangData]=useState(localStorage.getItem("langMode")=="sv"?langMode.sv:langMode.en)


  const [inpInfo,setInpInfo]=useState([])
  useEffect(() => {
    getData();
  }, []);

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
//   async function createSignIn(){
//     try{
//         const {data,error}=await supabase.from("Login").insert({user:user,epost:email,password:password}).single()
//         if(error) throw error
        
//     }catch (error){
//         console.log("error")
//     }

// }
async function Signin(){
  const {data,error}=await supabase.auth.signUp({
      email:email,
      password:password,
      options:{
        data:{
          name:user
        }
      }
    })
}
  async function handleSubmit(e){
    e.preventDefault()

    
  }
  const passwordEye=()=>{
    if(passwordType==="password"){
      setPasswordType("text")
    }else{
      setPasswordType("password")
    }
  }

  return ( <div className='login'>
  <video className='nav_main-video' autoPlay loop muted playsInline src="background/149980 (Original).mp4"></video>
  <ModelNav/>
  { signin===true?
       <form className='resigter_form' onSubmit={handleSubmit} action="">
        <div className="inp_div">
          <label className='register_form-label' htmlFor="">{myLangData.register.user}</label>
          <input onChange={(e)=>setUser(e.target.value)} className='inp_div-inp' type="text" name="user" />
        </div>
        <div className="inp_div">
          <label className='register_form-label' htmlFor="">{myLangData.register.password}</label>
          <input onChange={(e)=>setPassword(e.target.value)} className='inp_div-inp' type={passwordType} name="password" />
          <img onClick={()=>passwordEye()} className='password_eye' src="svg EYE MODE/eye-key-look-password-security-see-svgrepo-com.svg" alt="" />
        </div>
        <div className="inp_div">
          <label className='register_form-label' htmlFor="">{myLangData.register.email}</label>
          <input onChange={(e)=>setEmail(e.target.value)} className='inp_div-inp' type="email" name="email" />
        </div>
        <button onClick={()=>Signin()} className='form_btn form_btn-register'>{myLangData.register.register}</button>
        <button className='form_btn' onClick={()=>setSignin(false)}>{myLangData.register.logIn}</button>
        
       </form>:<SignUp setSignin={setSignin}/>
     
   
  

  }
  

</div>
)
}

export default TestLogin