

function Dots({activeIndex, onclick, imageSlider}){
    return(
        <div className="all-dots">
            {imageSlider.map((slider, index) => 
                <span key={index} 
                className={`${activeIndex === index ? "dot active-dot" : "dot"}`} 
                onclick={() => onclick(index)}>
                </span>
            )}
        </div>
    )
}

export default Dots;