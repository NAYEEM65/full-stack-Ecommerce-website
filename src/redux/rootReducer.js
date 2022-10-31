import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice/authSlice';
import productReducer from './productSlice/productSlice';
import filterReducer from './filterSlice/filterSlice';
import cartReducer from './cartSlice/cartSlice';

export const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    filter: filterReducer,
    cart: cartReducer,
});
