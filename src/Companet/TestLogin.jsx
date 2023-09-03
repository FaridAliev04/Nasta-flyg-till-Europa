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

const TestLogin = () => {

  return (
    <div>
      <div className="inp_div">
        <input type="text" name="" id="" />
      </div>
    </div>
  )
}

export default TestLogin