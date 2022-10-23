import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice/authSlice';
import productReducer from './productSlice/productSlice';

export const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
});
