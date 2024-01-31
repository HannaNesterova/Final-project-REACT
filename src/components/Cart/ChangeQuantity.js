


function ChangeQuantity({ quantity, setQuantityInCartItem }) {
    const addQuantity = () => {
      const newQuantity = quantity + 1;
      setQuantityInCartItem(newQuantity);
    }
  
    const removeQuantity = () => {
      const newQuantity = quantity - 1;
      if (newQuantity <= 0) return;
      setQuantityInCartItem(newQuantity);
    }
  
    return (
      <div>
        <div className='quantity-cont'>
          <button onClick={addQuantity}>+</button>
          <span>{quantity}</span>
          <button onClick={removeQuantity}>-</button>
        </div>
      </div>
    );
  }
  
export default ChangeQuantity;