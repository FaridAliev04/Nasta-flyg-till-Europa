import logo from './logo.svg';
import './css/app.css';
import Navbar from './Companet/Navbar';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMain from './Companet/NavMain';
import Information from './Companet/Information';

function App() {
  return <Fragment>
    <BrowserRouter>
      <NavMain/>
      <Information/>
      <Routes>
        {/* <Route/> */}
      </Routes>
    </BrowserRouter>
  </Fragment>;
}

export default App;
