
import { useEffect, useState } from 'react';
import './App.css';
import Swal from 'sweetalert2';



function Advice(){

  const [advice, setAdvice] = useState('');
  const [generateAdvice, setGenerateAdvice] = useState('');

  useEffect(() => {
    const getAdvice = async () => {
      const response = await fetch(`https://www.boredapi.com/api/activity/`);
      const data = await response.json();
      setAdvice(data.activity)
    }
    getAdvice();
  },[generateAdvice])

  const get = () => {
    Swal.fire(advice);
    setGenerateAdvice(advice)
  }
    return(
        <div className="btn-cnt">
           <div >
               <button onClick={get} className="btn">CREATE THE MAGIC</button> 
            </div>
        </div>
    )
}

export default Advice;