import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    try {
        const cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            return JSON.parse(cartItems);
        }
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
    }
    return [];
};

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems: loadCartFromLocalStorage() 
    },
    reducers:{
        addItemToCart: (state, action) => {
            const { item, quantity } = action.payload;
            const existingItem = state.cartItems.find(cartItem => cartItem.itemId === item.id);
            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.totalPrice = existingItem.quantity * existingItem.price;
            } else {
                state.cartItems.push({
                    itemId: item.id,
                    quantity: quantity,
                    price: item.price,
                    totalPrice: item.price * quantity
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
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