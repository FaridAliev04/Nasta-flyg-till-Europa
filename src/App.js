import logo from './logo.svg';
import './css/app.css';
import Navbar from './Companet/Navbar';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMain from './Companet/NavMain';
import Information from './Companet/Information';
import Support from './Companet/Support';
import Footer from './Companet/Footer';

function App() {
  return <Fragment>
    <BrowserRouter>
      <NavMain/>
      <Information/>
      <Support/>
      <Footer/>
      <Routes>
        {/* <Route/> */}
      </Routes>
    </BrowserRouter>
  </Fragment>;
}

export default App;
