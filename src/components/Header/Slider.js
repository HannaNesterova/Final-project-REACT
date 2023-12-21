import SliderContent from "./SliderContent";
import imageSlider from '../../img/header/imageSlider';
import Arrows from "./Arrows";
import { useEffect, useState } from "react";
import Dots from "./Dots";
import './slider.css';

;


function Slider(props){
    const len = imageSlider.length -1
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex +1);
        }, 4000);
        return () => clearInterval(interval)
    },[activeIndex]);

    return(
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
            <Arrows prevSlider={() => 
                setActiveIndex(activeIndex < 1 ? len: activeIndex -1)}
                nextSlider={() => 
                    setActiveIndex(activeIndex === len ? 0 : activeIndex +1)}
                />
            <Dots activeIndex={activeIndex} 
            imageSlider={imageSlider} 
            onclick={activeIndex => setActiveIndex(activeIndex)}/>
        </div>
    )
}

export default Slider;