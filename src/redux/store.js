import { configureStore } from "@reduxjs/toolkit";
import cart from '../redux/cartSlice';

export const store = configureStore({
    reducer:{
        cart
    }
})