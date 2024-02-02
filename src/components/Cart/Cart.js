import CartItem from "./CartItem";
import './cartStyles.css'
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div>
            <h3 className="title-cart">Shopping Cart</h3>
            <div className="main-cart-container">
                <div className="cart-container">
                {cartItems.length > 0 ? (
                    cartItems.map((product) => <CartItem key={product.itemId} product={product} />)
                ) : (
                    <p className="empty-cart">Your cart is empty....</p>
                )}

                </div>

                <div className="second-cart-box">
                    <p>Cart Total:</p>
                    <h3>Total price: $ {totalPrice}</h3>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    );
};


export default Cart;