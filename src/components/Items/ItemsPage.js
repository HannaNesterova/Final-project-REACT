import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice';
import { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import './items.css';


function ItemsPage({items, setFilteredItems }) {

const [ quantity ] = useState(1);
const dispatch = useDispatch();

const handleAddToCart = (item) => {
  dispatch(addItemToCart({ item, quantity }));
};

  return (
    <div className='back-items'>
      <Buttons setFilteredItems={setFilteredItems}/>
      <div className="all-items">
        {items.map(item => {
                  const { id, category, title, price, img, spanSale, spanOut } = item;
                  return (
                    <div className='item-box' key={id}>
                         <Link to={`/details/${item.title}`}>more </Link>  
                      <img className="item-img" src={img} alt='foot' />
                      <div className='top-sale'>
                        <span className="item-top">TOP</span>
                        <span className={spanSale ? 'item-sale' : ''}>{spanSale}</span>
                        <span className={spanOut ? 'item-out' : ''}>{spanOut}</span>
                      </div>
                      <p className="item-category">{category}</p>
                      <p className="item-title">{title}</p>
                      <p className="item-price"> $ {price}</p>
                        <button onClick={() => handleAddToCart(item)}  className="item-btn">WANT THIS</button>
                    </div>
                  )
                })
              }
      </div>
        </div>
    );
}

export default ItemsPage;