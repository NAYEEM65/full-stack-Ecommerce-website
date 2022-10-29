import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice/authSlice';
import productReducer from './productSlice/productSlice';
import filterReducer from './filterSlice/filterSlice';

export const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    filter: filterReducer,
});
