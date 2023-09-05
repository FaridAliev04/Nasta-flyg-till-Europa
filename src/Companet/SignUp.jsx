import React, { useState } from 'react'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'

const SigUp = ({setToken}) => {

  const navigate=useNavigate()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  async function handleSubmit(e){
    e.preventDefault()
    const{data,error}=await supabase.auth.signInWithPassword({
      email:email,
      password:password,
    })
    setToken(data)
    navigate("/hem")
    console.log(data)
  }

    return ( <div className='login'>
  <video className='nav_main-video' autoPlay loop muted playsInline src="background/149980 (Original).mp4"></video>
  
  {
       <form onSubmit={handleSubmit} action="">
        <div className="inp_div">
          <label htmlFor="">Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" />
        </div>
        <div className="inp_div">
          <label htmlFor="">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" />
        </div>
        
        <button>Sign In</button>
       </form>
     
   
  

  }
  

</div>
)
}

export default SigUp