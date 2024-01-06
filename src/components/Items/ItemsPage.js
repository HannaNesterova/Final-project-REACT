import Buttons from '../Buttons/Buttons';
import './items.css';
import LoaderPage from '../Loader/LoaderPage';
import { useEffect, useState } from 'react';


function ItemsPage({items,filterItems}){
  const [loader, setLoader] = useState(false);


   useEffect(() => {
    const timer = setTimeout(() => setLoader(true), 1000);
    return () => clearTimeout(timer)
   },[filterItems])



     return (
   
         <div className='back-items'>
   
           <Buttons filterItems={filterItems} />
           {loader && <LoaderPage />}

           <div className="all-items">
             {items ? (
               items.length > 0 ? (
                 items.map((item => {
                   const { id, category, title, price, img, spanSale, spanOut } = item;
                   return (

                     <div className='item-box' key={id}>
                       <img className="item-img" src={img} alt='foot' />
                       <div className='top-sale'>
                         <span className="item-top">TOP</span>
                         <span className={spanSale ? 'item-sale' : ''}>{spanSale}</span>
                         <span className={spanOut ? 'item-out' : ''}>{spanOut}</span>
                       </div>
                       <p className="item-category">{category}</p>
                       <p className="item-title">{title}</p>
                       <p className="item-price"> $ {price}</p>
                       <button className="item-btn">WANT THIS</button>
                     </div>
                   );
                 }))
               ) : (
                 <p>No items to display</p>
               )
             ) : (
               <p>Loading...</p>
             )}
           </div>

       
         </div>
       );
     }


export default ItemsPage;