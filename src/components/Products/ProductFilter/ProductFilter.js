import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    filterByBrand,
    filterByCategory,
    filterByPrice,
} from '../../../redux/filterSlice/filterSlice';
import { AiOutlineDoubleRight } from 'react-icons/ai';

const ProductFilter = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);
    const { maxPrice, minPrice } = useSelector((state) => state.product);
    const [category, setCategory] = useState('All');
    const [brand, setBrand] = useState('All');
    const [price, setPrice] = useState(maxPrice + 100);

    const allCategory = ['All', ...new Set(products.map((product) => product.category))];
    const filterProducts = (cat) => {
        setCategory(cat);
    };
    const allBrand = ['All', ...new Set(products.map((product) => product.brand))];
    const clearFilter = () => {
        setCategory('All');
        setBrand('All');
        setPrice(maxPrice + 100);
    };
    useEffect(() => {
        dispatch(filterByCategory({ products, category: category }));
    }, [category, dispatch, products]);
    useEffect(() => {
        dispatch(filterByBrand({ products, brand }));
    }, [brand, dispatch, products]);
    useEffect(() => {
        dispatch(filterByPrice({ products, price }));
    }, [dispatch, price, products]);
    return (
        <div className="mt-5 top-18">
            <h2 className="text-3xl mb-2 text-slate-700 font-bold border-b-2 border-gray-400 w-fit">
                Categories
            </h2>
            <div className="">
                {allCategory.map((cat) => (
                    <button
                        type="button"
                        className={`text-left w-[80%] h-12 flex justify-start items-center text-xl  bg-transparent border-b-[1px] border-gray-400 ${
                            category === cat ? 'text-orange-600 border-r-4 border-orange-600' : ''
                        }`}
                        key={cat}
                        onClick={() => filterProducts(cat)}
                    >
                        <AiOutlineDoubleRight />
                        <span>{cat}</span>
                    </button>
                ))}

                <div>
                    <h4 className="mt-4">Brand</h4>
                    <select
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="text-xl p-1 font-light w-[80%] border rounded outline-none"
                    >
                        {allBrand.map((brand, index) => (
                            <option key={index} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                    <h4 className="mt-4">Price</h4>
                    <p>${price}</p>
                    <div className="">
                        <input
                            type="range"
                            min={minPrice}
                            max={maxPrice}
                            value={price}
                            className="range range-success w-[80%]"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <br />
                    <button
                        onClick={() => clearFilter()}
                        className="block w-[80%] btn btn-warning bg-orange-500 hover:bg-orange-600 text-white border-none rounded uppercase font-poppins font-medium"
                    >
                        Clear Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;
