import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetchCollection from '../../hooks/useFetchCollection';
import { fetchProducts } from '../../redux/productSlice/productSlice';
import Loader from '../Loader/Loader';
import ProductFilter from './ProductFilter/ProductFilter';
import ProductList from './ProductList/ProductList';

const Products = () => {
    const { data, isLoading } = useFetchCollection('products');
    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts({ products: data }));
    }, [data, dispatch]);

    return (
        <section>
            {isLoading && <Loader />}
            <div className="flex md:flex-row flex-col md:gap-0 gap-2 relative mx-w-[1000px] mx-auto px-5 md:py-10 py-4">
                <aside className="w-[20%] transition-all duration-150">
                    <ProductFilter />
                </aside>
                <div className="w-[80%] pl-1 relative">
                    <ProductList products={products} />
                </div>
            </div>
        </section>
    );
};

export default Products;
