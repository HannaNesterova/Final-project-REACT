import CartItem from "./CartItem";
import './cartStyles.css'
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";


function Cart(){
const cartItems = useSelector(getCartItems);
const totalPrice = useSelector(getTotalPrice);

    return(
        <div> 
        <h3>Shopping Cart</h3>
        <div className="main-cart-container">
            <div className="cart-container ">
            {cartItems.map((product) => <CartItem key={product.id} product={product}/>)}
            </div>

        <div className="second-cart-box ">
           <p>Cart Total:</p>
           <h3>Total price: $ {totalPrice}</h3>
           <button>Proceed to checkout</button>
        </div>
        </div>
        </div>
     
    )
}

export default Cart;