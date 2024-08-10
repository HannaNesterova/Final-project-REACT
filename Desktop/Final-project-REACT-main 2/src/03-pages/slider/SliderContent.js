

function SliderContent({activeIndex, imageSlider}){
    return(
        <section>
            {imageSlider.map((slider, index) => 
                <div key={index} className={index === activeIndex ? 'slides active' : 'inactive'}>
                    <img className="slide-image" src={slider.urls} alt="img"/>
                    <h2 className="slide-description">{slider.description}</h2>
                    <p className="slide-prise">{slider.prise}</p>
                </div>
                )}
       
        </section>
    )
}

export default SliderContent;