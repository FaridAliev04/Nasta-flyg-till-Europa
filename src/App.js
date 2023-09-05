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
import Login from './Companet/Login';
import CoLogin from './comps/CoLogin';
// import SignUp from "./Companet/SignUp"
import  SignUp from "./Companet/SignUp"
function App() {

  const [token,setToken]=useState(false)
  if(token){
    sessionStorage.setItem("token",JSON.stringify(token))
  }
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      let data=JSON.parse(sessionStorage.getItem("tokem"))
      setToken(data)
    }
  },[])

console.log(token)
  return <Fragment>
    <BrowserRouter>
      <Routes>      
        <Route path='/' element={<CoLogin/>}/>
        <Route path='/signin' element={<SignUp setToken={setToken}/>}/>
        <Route path='/Tures' element={<CoTures/>}/>
        <Route path='card/detail/:id' element={<Detail/>}/>
        <Route path='/hem' element={<CoHome/>}/>
        <Route path='/HandlaOm' element={<CoAbout/>}/>
        <Route path='/SellCart' element={<CoSellCart/>}/>
       <Route path='/favorite' element={<CoFavorite/>}/>

      </Routes>
    </BrowserRouter>
  </Fragment>;
}

export default App;
