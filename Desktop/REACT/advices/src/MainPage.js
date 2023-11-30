import Advice from "./Advice";
import img from '../src/img/03.jpeg'

function MainPage(){
    return(
        <div className="container">
            <div className="mainContainer">
                <div>
                    <h3>To<span>Do</span></h3>
                </div>
                <div className="main_first-block">
                    <div>
                        <h1>
                        <span className="span_catch">Catch</span>your
                        <br />
                        <span className="span_activity">activity</span> 
                        <br />
                        right <span className="span_now">now</span>
                        </h1>
                    </div>
              
                    
                    <img src={img} alt="img" width='350px'/>
                </div>
                <div>
                    <p>It's an innovative app.</p>
                    <p> If you don't know what to do today,just ask us.</p>
                    <p>It's an innovative app.</p>
                    <p>Easy to use, just click the bottom below and get the activity for the day.</p>
                </div>
            </div>
            <Advice />
        </div>
    )
}

export default MainPage;