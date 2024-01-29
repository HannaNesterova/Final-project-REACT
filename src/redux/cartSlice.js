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
                quantity: action. payload.quantity,
                totalPrice: action.payload.quantity * action.payload.item.price
            })
        },
        removeItemFromCart:(state, action) => {
          state.cartItems = state.cartItems.filter(
            cartItem => cartItem.itemId !== action.payload.cartItemId )
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
        return cartItem.totalPrice + total;
    }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const {addItemToCart, removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;