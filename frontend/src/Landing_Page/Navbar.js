import { useEffect } from "react";
import React from "react";
import{Link} from "react-router-dom";
 import{useLocation} from 'react-router-dom';

   export function ScrollToTop(){
    const{pathname}=useLocation();
     useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);
    return null;
   }
 
function Navbar() {

  return(
   <nav
      className=" navbar navbar-expand-lg border-bottom "
      style={{ backgroundColor: "#FFF" ,position:"fixed",zIndex:"10000",width:"100%",top:"0",left:"0"}}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/zerodhalogo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"spm
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/auth">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default  Navbar;
