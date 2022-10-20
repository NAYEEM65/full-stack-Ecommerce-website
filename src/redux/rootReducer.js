import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice/authSlice';

export const rootReducer = combineReducers({
    auth: authReducer,
});
