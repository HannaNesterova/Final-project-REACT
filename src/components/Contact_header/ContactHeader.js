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

    return(
        <div className="container">
        <Router>
        <nav className='header_contact'>
                <Link to='/main'>
                    <img src={logo} className="logo" alt="logo" width='110px' /></Link>
                <Link to='/about'>about us</Link>
                <Link to='/contact'>contact us</Link>
                <Link to='/login'>Login</Link>
        </nav>
        <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
        </Routes>
       </Router>
       </div>
    )
}

export default ContactHeader;