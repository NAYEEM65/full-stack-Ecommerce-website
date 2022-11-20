import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderHistory: [],
    totalOrderAmount: null,
};

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        storeOrders: (state, action) => {
            state.orderHistory = action.payload;
        },
        calcTotalOrderAmount: (state, action) => {
            const array = [];
            state.orderHistory.map((item) => {
                const { orderAmount } = item;
                return array.push(orderAmount);
            });
            const totalAmount = array.reduce((a, b) => {
                return a + b;
            }, 0);
            state.totalOrderAmount = totalAmount;
        },
    },
});

export const { storeOrders, calcTotalOrderAmount } = orderSlice.actions;

export default orderSlice.reducer;
