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
import { useState } from "react";



function ContactHeader({filteredItems,
    valueOfItem,
    setValueOfItem,
    button,
    setButton,
    setFilteredItems }){

    const [ isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen((isMenuOpen) => !isMenuOpen);
    }

    return(
        <div className="container">
        <Router>
            <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="burger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        <nav className='header_contact'>
                <Link to='/'>
                    <img src={logo} className="logo" alt="logo" width='110px' />
                </Link>
                <Link to='/about'>about us</Link>
                <Link to='/contact'>contact us</Link>
                <Link to='/login'>Login</Link>
        </nav>
        </div>
        <Routes>
            <Route path="/" element={<Main filteredItems={filteredItems}
            valueOfItem={valueOfItem}
            setValueOfItem={setValueOfItem}
            button={button}
            setButton={setButton}
            setFilteredItems={setFilteredItems}
            />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
        </Routes>
       </Router>
       </div>
    )
}

export default ContactHeader;