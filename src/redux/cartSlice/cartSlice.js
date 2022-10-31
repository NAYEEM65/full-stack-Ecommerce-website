import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    cartQuantity: 0,
    cartTotalPrice: 0,
    previousURL: '',
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (productIndex >= 0) {
                state.cartItems[productIndex].cartQuantity += 1;
                toast.info(`${action.payload.name} increased by one`, {
                    position: 'top-left',
                });
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} added to cart`, {
                    position: 'top-left',
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
