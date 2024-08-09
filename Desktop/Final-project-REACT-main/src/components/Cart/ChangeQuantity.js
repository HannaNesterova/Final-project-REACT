import { increaseQuantity, decreaseQuantity } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";


function ChangeQuantity({cartItemId }) {
    const dispatch = useDispatch();
    const quantity = useSelector ( state => {
      const cartItem = state.cart.cartItems.find(item => item.itemId === cartItemId);
      return cartItem ? cartItem.quantity : 0;
    })
      const handleAddQuantity = () => {
          dispatch(increaseQuantity({ cartItemId }));
      };

        const handleRemoveQuantity = () => {
          dispatch(decreaseQuantity({ cartItemId }));
      };

  
    return (
      <div>
        <div className='quantity-cont'>
          <button onClick={handleAddQuantity}>+</button>
          <span>{quantity}</span>
          <button onClick={handleRemoveQuantity}>-</button>
        </div>
      </div>
    );
  }
  
export default ChangeQuantity;