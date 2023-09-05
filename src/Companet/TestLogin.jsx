// import React from 'react'
// import AboutNav from './AboutNav'
// import { Auth } from '@supabase/auth-ui-react'
// import { supabase } from '../supabase'
// import { useNavigate } from 'react-router-dom'
// import { ThemeSupa } from '@supabase/auth-ui-shared'
// // import { ThemeSupa } from '@supabase/auth-ui-shared'
// const TestLogin = () => {
//   const navigate=useNavigate()
// supabase.auth.onAuthStateChange(async(event)=>{
//   if(event !=="SIGNED_OUT"){
//      navigate('/')
//   }else{
//     navigate("/hem")
//   } 
// })
//   return (
//     <div>
//        <video className='nav_main-video' autoPlay loop muted playsInline src="background/149980 (Original).mp4"></video>
       
//         <div className="form">
//           <Auth 
//           supabaseClient={supabase}
//           appearance={{them:ThemeSupa}}
//           />
//         </div>

//     </div>
//   )
// }

// export default TestLogin

import React from 'react'
import { useState,useEffect } from 'react'
import { supabase } from '../supabase'
import { Link } from 'react-router-dom'

const TestLogin = () => {
  const[user,setUser]=useState()
  const [fullName,setFullName]=useState()
  const [password,setPassword]=useState()
  const [email,setEmail]=useState()
  const[nickName,setNickName]=useState()
  const [errorEmail,setErrorEmail]=useState(false)
  const [errorPassword,setErrorPassword]=useState(false)

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
  async function createSignIn(){
    try{
        const {data,error}=await supabase.from("Login").insert({user:user,epost:email,password:password}).single()
        if(error) throw error
        
    }catch (error){
        console.log("error")
    }

}

  async function handleSubmit(e){
    e.preventDefault()
    createSignIn()
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

  return ( <div className='login'>
  <video className='nav_main-video' autoPlay loop muted playsInline src="background/149980 (Original).mp4"></video>
  
  {
       <form onSubmit={handleSubmit} action="">
        <div className="inp_div">
          <label htmlFor="">User Name</label>
          <input onChange={(e)=>setUser(e.target.value)} type="text" name="user" />
        </div>
        <div className="inp_div">
          <label htmlFor="">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" />
        </div>
        <div className="inp_div">
          <label htmlFor="">Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" />
        </div>
        <Link to="/signin">sign in</Link>
        <button>Sign In</button>
       </form>
     
   
  

  }
  

</div>
)
}

export default TestLogin