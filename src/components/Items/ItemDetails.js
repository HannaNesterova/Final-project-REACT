import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './items.css';




function ItemDetails({ selectedItem , handleAddToCart}){
    if (!selectedItem) {
        return <div>Loading...</div>
    }

    const { category, title, price, img, img2, img3, description } = selectedItem;
    
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
            <div className='description-box'>
            <div className='description-first-column'>
                <p className='description-category'>Category: {category}</p>
                <p className='description-price'>Price: ${price}</p>
                    <Slider {...settings} className='slider-itemdetails'>
                        <img src={img}  alt={title} />
                        <img src={img2} alt={title} />
                        <img src={img3} alt={title} />
                    </Slider>
            </div>
                    <div className='description-second-column'>
                    <h2 className='description-pretitle'>{title}</h2>
                        <p className='description'>{description}</p>
                        <button onClick={() => handleAddToCart(selectedItem)} className="item-btn">Add to Cart</button>
                    </div>
            </div>
           
        </div>
    )
}

export default ItemDetails;