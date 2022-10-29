import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, grid }) => {
    return grid ? (
        <div className="md:w-[25%] w-full md:my-10 my-2">
            <div className="flex justify-center items-center w-full">
                <div className="bg-white border-b-2 w-full hover:shadow-xl rounded-lg ">
                    <div className="pb-4 border-b">
                        <Link to={`/product-details/${product.id}`}>
                            <div
                                className="bg-white h-64 rounded-t-lg bg-no-repeat bg-center bg-contain"
                                style={{ backgroundImage: `url(${product.imageUrl})` }}
                            ></div>
                        </Link>
                    </div>
                    <div className="flex justify-between items-start px-2 pt-2">
                        <div className="p-2 flex-grow ">
                            <h1 className="font-medium text-xl pb-2 font-poppins">
                                {product.name.slice(0, 40) + '...'}
                            </h1>
                            <p className="text-gray-500 font-nunito">
                                {product.desc.slice(0, 60) + '...'}
                            </p>
                        </div>
                    </div>
                    <div className="p-2 text-center">
                        <div className="text-orange-500 font-semibold text-2xl font-poppins">
                            ${product.price}
                        </div>
                        <div className="text-xs text-gray-500 line-through font-poppins">$80</div>
                    </div>

                    <div className="w-full p-2">
                        <button className="block w-full bg-orange-500 hover:bg-orange-600 text-white border-2 border-gray-800 px-3 py-2 rounded uppercase font-poppins font-medium">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="md:w-[80%] my-10">
            <div className="flex justify-center items-center">
                <div className="w-full p-2">
                    <div className="bg-white border-b-2 hover:shadow-xl rounded-lg flex justify-start flex-col gap-3 ">
                        <div className="flex justify-between items-center gap-3">
                            <div className="p-3 w-1/3">
                                <Link to={`/product-details/${product.id}`}>
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="h-32 w-auto"
                                    />
                                </Link>
                            </div>
                            <div>
                                <div className="flex justify-between items-start px-2 pt-2">
                                    <div className="p-2 flex-grow ">
                                        <h1 className="font-medium text-xl pb-2 font-poppins">
                                            {product.name.length > 70
                                                ? product.name.slice(0, 70) + '...'
                                                : product.name}
                                        </h1>
                                        <p className="text-gray-500 font-nunito">
                                            {product.desc.length > 200
                                                ? product.desc.slice(0, 200) + '...'
                                                : product.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-start items-center gap-4">
                                    <div className="p-2 text-center">
                                        <div className="text-orange-500 font-semibold text-2xl font-poppins">
                                            ${product.price}
                                        </div>
                                        <div className="text-xs text-gray-500 line-through font-poppins">
                                            $80
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-2">
                                        <button className="block w-full bg-orange-500 hover:bg-orange-600 text-white border-2 border-gray-800 px-3 py-2 rounded uppercase font-poppins font-medium">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
