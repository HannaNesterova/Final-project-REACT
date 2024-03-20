import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './items.css';
import {items} from './items'
import { addItemToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';



function ItemDetails({ handleAddToCart}){

    // const [ quantity ] = useState(1);
    // const dispatch = useDispatch();

    const navigate = useNavigate();
    const {title} = useParams();

    // const handleAddToCart = (item) => {
    //     dispatch(addItemToCart({ item, quantity }));
    //   };

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };

    return(
        <div className='description-main'>
             <h6 className='description-header'>You are here, because you want to see some details</h6>

            {items.filter((item) => item.title === title).map((elem) =>{
                return(
                    <div key={elem.id}>
                        <div className='description-box'>
                        <div className='description-first-column'>
                            <p className='description-category'>{elem.category}</p> 
                            <p className='description-price'>Price: ${elem.price}</p>
                            <Slider {...settings} className='slider-itemdetails'>
                            <img src={elem.img}  alt={title} />
                            <img src={elem.img2} alt={title} />
                            <img src={elem.img3} alt={title} />
                        </Slider>
                        </div>
                        <div className='description-second-column'>
                        <h2 className='description-pretitle'>{elem.title}</h2>
                            <p className='description'>{elem.description}</p>
                            <button onClick={() => handleAddToCart(elem)} className="item-btn">Add to Cart</button>
                            <button onClick={() => navigate(-1)} className="item-btn">Go Back</button>
                        </div>
                        </div>
                    </div>
                )
            }
            )}

        </div>
    )
}

export default ItemDetails;