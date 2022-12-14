import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filteredProducts: [],
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterBySearch: (state, action) => {
            const { products, search } = action.payload;
            const tempProduct = products.filter(
                (product) =>
                    product?.name.toLowerCase().includes(search?.toLowerCase()) ||
                    product?.category.toLowerCase().includes(search?.toLowerCase()),
            );
            state.filteredProducts = tempProduct;
        },
        filterByCategory: (state, action) => {
            const { products, category } = action.payload;
            let tempProducts = [];
            if (category === 'All') {
                tempProducts = products;
            } else {
                tempProducts = products.filter((product) => product.category === category);
            }
            state.filteredProducts = tempProducts;
        },
        filterByBrand: (state, action) => {
            const { products, brand } = action.payload;
            let tempProducts = [];
            if (brand === 'All') {
                tempProducts = products;
            } else {
                tempProducts = products.filter((product) => product.brand === brand);
            }
            state.filteredProducts = tempProducts;
        },
        filterByPrice: (state, action) => {
            const { products, price } = action.payload;
            let tempProducts = products.filter((product) => product.price <= price);
            state.filteredProducts = tempProducts;
        },
        filterBySort: (state, action) => {
            console.log(action.payload);
        },
    },
});

export const { filterBySearch, filterByCategory, filterByBrand, filterByPrice, filterBySort } =
    filterSlice.actions;

export default filterSlice.reducer;
