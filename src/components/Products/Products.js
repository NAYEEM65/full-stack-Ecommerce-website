import React from 'react';
import ProductFilter from './ProductFilter/ProductFilter';
import ProductList from './ProductList/ProductList';

const Products = () => {
    return (
        <section>
            <div className="flex relative mx-w-[1000px] mx-auto px-5 py-0">
                <aside className="w-[20%] transition-all duration-150">
                    <ProductFilter />
                </aside>
                <div className="w-[80%] pl-1 relative">
                    <ProductList />
                </div>
            </div>
        </section>
    );
};

export default Products;
