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

function App() {
  return <Fragment>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<CoHome/>}/>
        <Route path='/HandlaOm' element={<CoAbout/>}/>
      </Routes>
    </BrowserRouter>
  </Fragment>;
}

export default App;
