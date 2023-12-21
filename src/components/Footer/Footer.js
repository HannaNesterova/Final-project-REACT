import Header from '../Header/Header';
import './styleFooter.css';

function Footer(){

    return(
        <div>
        <footer>
            <div className='main_containerFooter'>
            <div>
                <h5>1-2-SHOE</h5>
                <p>Praesent dapibus, neque id cursus ucibus,<br />
                     tortor neque egestas augue, 
                    eu vulputate magna eros eu erat.</p>
                <p>Вс права захищені &copy:</p>
                <p>Всі права захищені &copy:</p>
            </div>
            <div>
                <h5>Useful Links</h5>
                <p>About media</p>
                <p>How to shop on 1-2-SHOE</p>
                <p>FAQ</p>
                <p>Contact us</p>
                <p>Log in</p>
            </div>
            <div>
                <h5>Customer Service</h5>
                <p>Payment methods</p>
                <p>Money-back guarantee!</p>
                <p>Returns</p>
                <p>Shipping</p>
                <p>Terms and conditions</p>
            </div>
            </div>
        </footer>
        <p className='store_footer'>Copyright © 2024 "1-2-SHOE" Store. All Rights Reserved</p>
        </div>

    )
}

export default Footer;