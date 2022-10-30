import React, { useEffect, useState } from 'react';
import { FaCogs } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import useFetchCollection from '../../hooks/useFetchCollection';
import { fetchProducts, getPrice } from '../../redux/productSlice/productSlice';
import ProductLoader from '../Loader/ProductLoader';
import ProductFilter from './ProductFilter/ProductFilter';
import ProductList from './ProductList/ProductList';

const Products = () => {
    const { data, isLoading } = useFetchCollection('products');
    const { products } = useSelector((state) => state.product);
    const [showFilter, setShowFilter] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts({ products: data }));
        dispatch(getPrice({ products: data }));
    }, [data, dispatch, products]);

    return (
        <section>
            <div className="flex bg-slate-100 flex-row md:gap-0 gap-2 relative md:mx-w-[1000px] mx-auto px-5 md:py-10 py-4">
                <aside className="w-[20%] md:block hidden transition-all duration-150 relative">
                    {!isLoading && <ProductFilter />}
                </aside>

                <div className="md:w-[80%] full pl-1 relative">
                    {isLoading ? (
                        <div className="flex justify-between md:flex-row flex-col flex-wrap items-center gap-1">
                            <ProductLoader />
                            <ProductLoader />
                            <ProductLoader />
                            <ProductLoader />
                            <ProductLoader />
                            <ProductLoader />
                            <ProductLoader />
                            <ProductLoader />
                        </div>
                    ) : (
                        <ProductList products={products} />
                    )}
                </div>
                <div className="md:hidden block">
                    <button
                        className="flex justify-center items-center gap-2"
                        onClick={() => setShowFilter(!showFilter)}
                    >
                        <FaCogs size={20} className="text-orange-500" />
                        <span>{showFilter ? 'Hidden' : 'Show'} Filter</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;
