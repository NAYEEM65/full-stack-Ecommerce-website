import React, { useState } from 'react';
import { FaFilter, FaThList } from 'react-icons/fa';
import { BsGrid1X2Fill } from 'react-icons/bs';
import Search from '../../Search/Search';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ products }) => {
    const [grid, setGrid] = useState(true);
    const [search, setSearch] = useState('');
    return (
        <div className="w-full" id="product">
            <div className="md:w-full border-b-2 border-gray-300 flex justify-between md:flex-row flex-col md:gap-0 gap-2 md:items-center items-start">
                <div className="flex justify-center items-center gap-2">
                    <BsGrid1X2Fill
                        className="text-2xl cursor-pointer text-orange-600"
                        onClick={() => setGrid(true)}
                    />
                    <FaThList
                        className="text-2xl cursor-pointer text-gray-500"
                        onClick={() => setGrid(false)}
                    />
                    <p>
                        <b>{products.length}</b> Product found.
                    </p>
                </div>
                <div>
                    <Search value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="flex justify-between items-center">
                    <label>
                        <FaFilter className="text-orange-600" />
                    </label>
                    <select className="border-none focus:outline-none focus:ring-transparent focus:appearance-none ">
                        <option selected>Filter</option>
                        <option value="latest">Latest</option>
                        <option value="lowest-price">Lowest-price</option>
                        <option value="highest-price">Highest-Price</option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">z-a</option>
                    </select>
                </div>
            </div>
            <div
                className={
                    grid
                        ? 'flex justify-around flex-wrap bg-white m-1 relative'
                        : 'w-full flex flex-col bg-white my-4 mx-0 relative'
                }
            >
                {products?.length === 0 ? (
                    <h2>No Products Found</h2>
                ) : (
                    <>
                        {products.map((product) => (
                            <ProductItem product={product} grid={grid} key={product.id} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductList;
