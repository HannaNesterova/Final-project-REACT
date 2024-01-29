import { useState } from "react";
import ChangeQuantity from './ChangeQuantity';
import './cartStyles.css'
import { items } from "../Items/items";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

function CartItem({product}){
    console.log(product)

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const item = items.find(item => item.id === product.itemId);
    const cartItemFromSlice = useSelector(removeItemFromCart);


    console.log('item.price:', item.price);
    console.log('product.quantity:', product.quantity);
    
    return(
        <div className="first-cart-box">
            <div>
                <h6>Product</h6>
                <img src={item.img} alt='img' width='100px'/>
                <p>{item.title}</p>
            </div>
            <div>
                <h6>Price</h6>
                <p>$ {item.price}</p>

            </div>
            <div>
               <ChangeQuantity quantity={quantity} setQuantity ={setQuantity}/>
            </div> 
            <div>
                <h6>Total</h6>
                <p>$ {item.price * product.quantity}</p>
            </div>
            <div>
                <button onClick={() => dispatch(cartItemFromSlice({ cartItemId: product.id} ))} className="cart-btn-delete">DELETE</button>
            </div>
        </div>

    )
}

export default CartItem;