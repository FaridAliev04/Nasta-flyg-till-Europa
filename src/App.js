import logo from './logo.svg';
import './css/app.css';
import { useEffect,useState } from 'react';
import Navbar from './Companet/Navbar';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoHome from './comps/CoHome';
import CoAbout from './comps/CoAbout';
import CoTures from './comps/CoTures';
import Detail from './Companet/Detail';
import CoSellCart from './comps/CoSellCart';
import { Favorite } from '@mui/icons-material';
import CoFavorite from './comps/CoFavorite';
import CoLogin from './comps/CoLogin';
import AdminPanel from './Companet/AdminPanel';
// import SignUp from "./Companet/SignUp"
import  SignUp from "./Companet/SignUp"
import { supabase } from './supabase'
import CoDaxilOl from './comps/CoDaxilOl';

function App() {

  // const [token,setToken]=useState(true)
  // if(token){
  //   sessionStorage.setItem("token",JSON.stringify(token))
  // }
  // useEffect(()=>{
  //   if(sessionStorage.getItem("token")){
  //     let data=JSON.parse(sessionStorage.getItem("token"))
  //     setToken(data)
  //   }
  // },[])

// console.log(token)
  const [user,setUser]=useState({})

  useEffect(()=>{
    async function getUserData(){
      await supabase.auth.getUser().then((value)=>{
        if(value.data?.user){
          console.log(value.data.user)
          setUser(value.data.user)
        }
      })
    }
  },[])

  console.log(user)
  const myId = (JSON.parse(localStorage.getItem('sb-cibpixfpkuzthabstkfx-auth-token'))?.user?.id)


  return <Fragment>
    <BrowserRouter>
      <Routes>      
      <Route path='/' element={<CoHome/>}/>

        <Route path='/login' element={<CoLogin/>}/>
        <Route path='/Tures' element={<CoTures/>}/>
        <Route path='card/detail/:id' element={<Detail/>}/>
        <Route path='/HandlaOm' element={<CoAbout/>}/>
        <Route path='/SellCart' element={<CoSellCart/>}/>
       <Route path='/favorite' element={<CoFavorite/>}/>
       <Route path='/LoggaIn' element={<CoDaxilOl/>}/>
       {
                myId == "06e4138f-c6de-4147-a058-6334f7bc614d" ? <Route path='/adminPanel' element={<AdminPanel/>}/>:null
            }

      </Routes>
    </BrowserRouter>
  </Fragment>;
}

export default App;
