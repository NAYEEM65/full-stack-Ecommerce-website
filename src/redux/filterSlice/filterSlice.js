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
                    product.name.toLowerCase().includes(search.toLowerCase()) ||
                    product.category.toLowerCase().includes(search.toLowerCase()),
            );
            state.filteredProducts = tempProduct;
        },
    },
});

export const { filterBySearch } = filterSlice.actions;

export default filterSlice.reducer;
