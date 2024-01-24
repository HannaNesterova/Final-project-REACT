import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  }from "react-router-dom";
import './styleContactHeader.css';
import AboutUs from "../AboutUs/AboutUs";
import Login from '../Login/Login';
import ContactUs from "../ContactUs/ContactUs";
import Main from "../Main/Main";
import logo from '../../img/header/logo2.jpeg';




function ContactHeader(){

    const [ isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen((isMenuOpen) => !isMenuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

  
    return(
        <div className="container">
        <Router> 
   
            <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`}>
            <div  id="menuToggle" className="burger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <Link to='/'>
                    <img src={logo} className="logo" alt="logo" width='110px'/>
            </Link>

        <nav className='header_contact'>
                <Link to='/about' onClick={closeMenu}>about us</Link>
                <Link to='/contact' onClick={closeMenu}>contact us</Link>
                <Link to='/login' onClick={closeMenu}>Login</Link>
        </nav>
        </div>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
        </Routes>
       </Router>
       </div>
    )
}

export default ContactHeader;