import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    shippingAddress: {},
    billingAddress: {},
};

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        saveShippingAddress: (state, action) => {
            // console.log(action.payload);
            state.shippingAddress = action.payload;
        },
        saveBillingAddress: (state, action) => {
            // console.log(action.payload);
            state.billingAddress = action.payload;
        },
    },
});

export const { saveBillingAddress, saveShippingAddress } = checkoutSlice.actions;

export default checkoutSlice.reducer;
