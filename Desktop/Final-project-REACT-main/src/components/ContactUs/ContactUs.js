import { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';
import '../ContactUs/contactUs.css'


function ContactUs(){

    const form = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_vmivskl',
         'template_0wdas6u',
          form.current, {
          publicKey: 'AT7LUyK1OrB7dTNXn',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setMessage('Ваше сообщение отправлено');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return(
        <div>
            <h2 className='title-about'> Contact Us</h2>
            <div className='contact_main_box'>
                <div className='form_box'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" required/>
                    <label>Email</label>
                    <input type="email" name="user_email" required/>
                    <label>Message</label>
                    <textarea name="message" required/>
                    <input type="submit" value="Send" className='sbm-send'/>
                 </form>
                 {message && <p>{message}</p>}
                </div>


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
                        className='map'>
                    </iframe>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactUs;