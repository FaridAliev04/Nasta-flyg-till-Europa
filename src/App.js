import logo from './logo.svg';
import './css/app.css';
import Navbar from './Companet/Navbar';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMain from './Companet/NavMain';
import Information from './Companet/Information';
import Support from './Companet/Support';
import Footer from './Companet/Footer';
import CoHome from './comps/CoHome';
import CoAbout from './comps/CoAbout';
import CoTures from './comps/CoTures';
import Detail from './Companet/Detail';
import CoSellCart from './comps/CoSellCart';

function App() {
  return <Fragment>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<CoHome/>}/>
        <Route path='/HandlaOm' element={<CoAbout/>}/>
        <Route path='/Tures' element={<CoTures/>}/>
        <Route path='card/detail/:id' element={<Detail/>}/>
        <Route path='/SellCart' element={<CoSellCart/>}/>
      </Routes>
    </BrowserRouter>
  </Fragment>;
}

export default App;
