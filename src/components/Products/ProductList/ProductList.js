import React, { useEffect, useState } from 'react';
import { FaFilter, FaThList } from 'react-icons/fa';
import { BsGrid1X2Fill } from 'react-icons/bs';
import Search from '../../Search/Search';
import ProductItem from '../ProductItem/ProductItem';
import { filterBySearch } from '../../../redux/filterSlice/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../Pagination/Pagination ';

const ProductList = ({ products }) => {
    const [grid, setGrid] = useState(true);
    const [search, setSearch] = useState('');
    const { filteredProducts } = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    //pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [proudctPerPage, setProudctPerPage] = useState(3);

    //Get the current products list
    const indexOfLastProduct = currentPage * proudctPerPage;
    const indexOfFirstProduct = indexOfLastProduct - proudctPerPage;
    const currentProduct = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalProductCount = filteredProducts.length;

    useEffect(() => {
        dispatch(
            filterBySearch({
                products,
                search,
            }),
        );
    }, [dispatch, products, search]);

    return (
        <div className="w-full bg-slate-100" id="product">
            <div className="md:w-full border-b-2 border-gray-300 flex justify-between md:flex-row flex-col md:gap-0 gap-2 md:items-center items-start">
                <div className="flex justify-center items-center gap-2">
                    <BsGrid1X2Fill
                        className={`text-2xl cursor-pointer ${
                            grid ? 'text-orange-600' : 'text-gray-500'
                        }`}
                        onClick={() => setGrid(true)}
                    />
                    <FaThList
                        className={`text-2xl cursor-pointer ${
                            !grid ? 'text-orange-600' : 'text-gray-500'
                        }`}
                        onClick={() => setGrid(false)}
                    />
                    <p>
                        <b>{filteredProducts.length}</b> Product found.
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
                        <option defaultValue>Filter</option>
                        <option value="latest">Latest</option>
                        <option value="lowest-price">Lowest-price</option>
                        <option value="highest-price">Highest-Price</option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                    </select>
                </div>
            </div>
            <div
                className={
                    grid
                        ? 'flex justify-around md:flex-wrap gap-1 md:flex-row flex-col w-full bg-slate-100 m-1 relative'
                        : 'w-full flex flex-col bg-slate-100 my-4 mx-0 relative'
                }
            >
                {currentProduct?.length === 0 ? (
                    <h2>No Products Found</h2>
                ) : (
                    <>
                        {currentProduct.map((product) => (
                            <ProductItem product={product} grid={grid} key={product.id} />
                        ))}
                    </>
                )}
            </div>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                proudctPerPage={proudctPerPage}
                setProudctPerPage={setProudctPerPage}
                totalProductCount={totalProductCount}
            />
        </div>
    );
};

export default ProductList;
