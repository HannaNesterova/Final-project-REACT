import 'aos/dist/aos.css';
import Header from "../Header/Header";
import '../ContactUs/contactUs.css'


function ContactUs(){


    return(
        <div>
            <Header />
            <div className='contactUs-cont'>
            <div className='contactUs-col'>
                        <h4>Wrocław</h4>
                        <p>ul. Sucha 1, 50-086 </p>
                        <p>+48 888 88 88</p>
                        <p>09:00 do 21:00</p>
                    </div>
            <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160255.06646065976!2d16.826712921913952!3d51.127177086462474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2zV3JvY8WCYXc!5e0!3m2!1sen!2spl!4v1704923829523!5m2!1sen!2spl"
                        width="400"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                        className='map'
                    ></iframe>
                    </div>
                </div>
        </div>
    )
}

export default ContactUs;