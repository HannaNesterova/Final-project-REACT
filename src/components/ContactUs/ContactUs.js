import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "../Header/Header";
import ContactImg from '../../img/about_us/error404.jpeg';

function ContactUs(){

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div>
            <Header />
            <div data-aos="fade-up" data-aos-duration="3000">
            <img src={ContactImg} alt='img' className='error_img'/>

        </div>
        </div>
    )
}

export default ContactUs;