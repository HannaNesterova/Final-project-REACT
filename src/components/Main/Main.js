import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import {items} from '../Items/items'
import ItemsPage from '../Items/ItemsPage';


import Header from "../Header/Header";
import Slider from "../Header/Slider";
import firstPic from '../../img/main_page_img/01.jpeg';
import secondPic from '../../img/main_page_img/02.jpeg';
import thirdPic from '../../img/main_page_img/03.jpeg';
import foughtPic from '../../img/main_page_img/04.jpeg';
import './styleMain.css'


function Main(){

  const [item, setItem] = useState(items);


  const filterItems = (category) => {
    if (category === 'all') {
      setItem(items);
    } else {
      const itemsAreFiltered = items.filter(element => element.category === category);
      setItem(itemsAreFiltered);
    }
  }
  
  
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    return(
        <div>
            <Header/>
        <div className="main_slider_cont">

            <Slider />
            <div className="container-main " >
                <div className="item-container-first">
                    <div className='pic'>
                        <img  src={firstPic} alt='foot' width={380} height={250}/>
                        <div className="image-details picOne">
                            <h3 className='m-0'>New Arrivals</h3>
                            <h4>Sneakers & <br />Athletic Shoes</h4>
                            <button> DISCOVER NOW </button>
                        </div>
                    </div>
                    <div className='pic'>
                        <img  src={secondPic} alt='foot' width={380} height={250}/>
                        <div className="image-details picTwo">
                            <h3 className='m-0'>Clearance</h3>
                            <h4>Heels  up <br />to 70% off</h4>
                            <button> DISCOVER NOW </button>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='pic'>
                        <img  src={thirdPic} alt='foot' width={800} height={373}/>
                        <div className="image-details picThree">
                            <h3 className='m-0'>On Sale</h3>
                            <h4>Athletic Shoes up <br />to 30% off</h4>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>
           
                <div className="item-container-second">
                    <div className='pic'>
                        <img src={foughtPic} alt='foot' width={380} height={650}/>
                        <div className="image-details picFour">
                            <h3 className='m-0'>On Sale</h3>
                            <h4>Amazing Lace  <br />Up Boots from  <br /> $39</h4>
                            <button> DISCOVER NOW </button>
                        </div>
                    </div>
                </div>
              
            </div>

            <div className='details-shipping'>
                <div className='details'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-rocket-takeoff" viewBox="0 0 16 16">
                    <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532"/>
                    <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z"/>
                    <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z"/>
                    </svg>
                    <div>
                        <h5>Free Shipping</h5>
                        <p>Orders $50 or more</p>
                    </div>
                </div>

                <div className='details'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                    </svg>
                    <div>
                        <h5>Free Returns</h5>
                        <p>Within 30 days</p>
                    </div>
                </div>

                <div className='details'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                </svg>
                    <div>
                        <h5>Get 20% off 1 item</h5>
                        <p>When you sign up</p>
                    </div>
                </div>

                <div className='details'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.559 5.448a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                </svg>
                    <div>
                        <h5>We Support</h5>
                        <p>24/7 amazing services</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='items-wrapper'>
            <ItemsPage items={item} 
            filterItems={filterItems}
            />
        </div>
        </div>
    )
}

export default Main;