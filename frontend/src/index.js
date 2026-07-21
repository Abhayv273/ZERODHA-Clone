import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{BrowserRouter, Routes, Route} from "react-router-dom";

import Homepage from './Landing_Page/home/HomePage';
// import auth from './Landing_Page/auth/AuthPage';
import AboutPage from './Landing_Page/about/AboutPage';
import ProductPage from './Landing_Page/product/ProductPage';
import PricingPage from './Landing_Page/pricing/PricingPage';
import SupportPage from './Landing_Page/support/SupportPage';
import Navbar,{ScrollToTop} from './Landing_Page/Navbar';
import Footer from './Landing_Page/Footer';

import NotFound from './Landing_Page/NotFound';
import AuthPage from './Landing_Page/auth/AuthPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ScrollToTop/>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage/>}></Route>

    <Route path="/auth" element={<AuthPage/>}/>

    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/products" element={<ProductPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}></Route>
    <Route path="/support" element={<SupportPage/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>




  /* // <React.StrictMode>
  //   <Homepage/>
  // </React.StrictMode> */
);

