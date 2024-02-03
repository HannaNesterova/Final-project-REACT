import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItemToCart:(state, action) => {
            state.cartItems.push({
                itemId: action.payload.item.id,
                quantity: action.payload.quantity,
                price: action.payload.item.price,
                totalPrice: (action.payload.item.price * action.payload.quantity)
            })
        },
        removeItemFromCart:(state, action) => {
          state.cartItems = state.cartItems.filter(
            cartItem => cartItem.itemId !== action.payload.cartItemId )
        },
        increaseQuantity: (state, action) => {
            const { cartItemId } = action.payload;
            const cartItem = state.cartItems.find(item => item.itemId === cartItemId);
            if (cartItem) {
                cartItem.quantity += 1;
                cartItem.totalPrice = cartItem.quantity * cartItem.price;
            }
        },
        decreaseQuantity :(state, action ) => {
            const {cartItemId} = action.payload;
            const cartItem = state.cartItems.find(item => item.itemId === cartItemId);
            if(cartItem && cartItem.quantity > 1){
                cartItem.quantity -= 1;
                cartItem.totalPrice = cartItem.quantity * cartItem.price;
            }
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
        return cartItem.totalPrice + total;
    }, 0)
}
export const getCartItems = state => [...state.cart.cartItems];
export const {addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;