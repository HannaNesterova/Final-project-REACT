import { useState } from "react";
import ChangeQuantity from './ChangeQuantity';
import './cartStyles.css'
import { items } from "../Items/items";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

function CartItem({product}){
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const item = items.find(item => item.id === product.itemId);

   const handleRemoveItem = () => {
        dispatch(removeItemFromCart({ cartItemId: product.itemId }));
    };
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
                <ChangeQuantity quantity={quantity} setQuantityInCartItem={setQuantity} />
            </div> 
            <div>
                <h6>Total</h6>
                <p>$ {item.price * quantity}</p>
            </div>
            <div>
                <button onClick={handleRemoveItem} className="cart-btn-delete">DELETE</button>
            </div>
        </div>

    )
}

export default CartItem;