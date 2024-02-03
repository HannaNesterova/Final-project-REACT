import { useDispatch, useSelector } from "react-redux";
import ChangeQuantity from './ChangeQuantity';
import './cartStyles.css'
import { items } from "../Items/items";
import { removeItemFromCart } from "../../redux/cartSlice";

function CartItem({product}){
    const dispatch = useDispatch();
    const item = items.find(item => item.id === product.itemId);

   const handleRemoveItem = () => {
        dispatch(removeItemFromCart({ cartItemId: product.itemId }));
    };
    const quantity = useSelector(state => {
        const cartItem = state.cart.cartItems.find(item => item.itemId === product.itemId);
        return cartItem ? cartItem.quantity : 1;
    });
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
            <ChangeQuantity cartItemId={product.itemId} />
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