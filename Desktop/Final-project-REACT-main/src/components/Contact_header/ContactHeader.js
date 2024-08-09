import { useState } from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
    Link
  }from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartItems } from "../../redux/cartSlice";

import './styleContactHeader.css';
import AboutUs from "../AboutUs/AboutUs";
import Login from '../Login/Login';
import ContactUs from "../ContactUs/ContactUs";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";
import logo from '../../img/header/logo2.jpeg';
import { useAuth0 } from "@auth0/auth0-react";
import UserLoged from "../UserLoged/UserLoged";
import { Puff } from 'react-loader-spinner';
import ItemDetailsPage from "../Items/ItemDetailsPage";
import ScrollToTop from "../ScrollToTop/ScrollToTop";


function ContactHeader(){
    const [ isMenuOpen, setMenuOpen] = useState(false);
    const cartItems = useSelector(getCartItems);

    const toggleMenu = () =>{
        setMenuOpen((isMenuOpen) => !isMenuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }
    const { isAuthenticated, isLoading } = useAuth0();

    if(isLoading) return <Puff
    height={80}
    width={380}
    radius={9}
    color="#445f84"
    ariaLabel="loading"
    wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    }}
  />
    return(
        <div className="container">
        <Router> 
            <ScrollToTop />
            <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`}>
            <div  id="menuToggle" className="burger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="main-nav-container">
            <div className="logo-container">
            <Link to='/'>
                <img src={logo}  alt="logo"/>
            </Link>
            </div>
            
            <nav className='header_contact'>
                {isAuthenticated && (<UserLoged />)}
                <div className='links-container'>
                    <Link to='/about' onClick={closeMenu}>about us</Link>
                    <Link to='/contact' onClick={closeMenu}>contact us</Link>
                    <Login />
                    <Link to='/cart' onClick={closeMenu}>
                        <button className='box'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                <path d="M 1 3 L 1 15 L 3 15 L 3 48 L 47 48 L 47 15 L 49 15 L 49 3 Z M 3 5 L 47 5 L 47 13 L 3 13 Z M 5 15 L 45 15 L 45 46 L 5 46 Z M 17.5 19 C 15.578125 19 14 20.578125 14 22.5 C 14 24.421875 15.578125 26 17.5 26 L 32.5 26 C 34.421875 26 36 24.421875 36 22.5 C 36 20.578125 34.421875 19 32.5 19 Z M 17.5 21 L 32.5 21 C 33.339844 21 34 21.660156 34 22.5 C 34 23.339844 33.339844 24 32.5 24 L 17.5 24 C 16.660156 24 16 23.339844 16 22.5 C 16 21.660156 16.660156 21 17.5 21 Z"></path>
                            </svg>
                        </button>
                        <p className='box_header'>{cartItems.length}</p>
                    </Link>
    </div>
            </nav>
        </div>

        </div>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/details/:title' element={<ItemDetailsPage />} />
        </Routes>
       </Router>

       </div>
    )
}

export default ContactHeader;
