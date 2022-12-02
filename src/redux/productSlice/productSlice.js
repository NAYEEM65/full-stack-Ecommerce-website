import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    minPrice: null,
    maxPrice: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProducts: (state, action) => {
            state.products = action.payload.products;
        },
        storeProduct: (state, action) => {
            state.products = action.payload.products;
        },
        getPrice: (state, action) => {
            const { products } = action.payload;
            const array = [];
            products.map((product) => {
                const price = product.price;
                return array.push(price);
            });
            const max = Math.max(...array);
            const min = Math.min(...array);

            state.minPrice = min;
            state.maxPrice = max;
        },
    },
});

export const { fetchProducts, getPrice, storeProduct } = productSlice.actions;

export default productSlice.reducer;
