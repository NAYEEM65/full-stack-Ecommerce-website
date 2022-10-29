import React from 'react';

const ProductFilter = () => {
    return (
        <div className="">
            <h2 className="text-3xl mb-2 text-slate-700 font-bold border-b-2 border-gray-400 w-fit">
                Categories
            </h2>
            <div className="c">
                <button className="block text-left w-[80%] h-12 text-2xl  bg-transparent border-b-[1px] border-gray-400">
                    All
                </button>
                <div>
                    <h4 className="mt-4">Brand</h4>
                    <select
                        name="brand"
                        className="text-xl p-1 font-light w-[80%] border rounded outline-none"
                    >
                        <option value="all">All</option>
                    </select>
                    <h4 className="mt-4">Price</h4>
                    <p>$1500</p>
                    <div className="">
                        <input
                            type="range"
                            name="price"
                            min="100"
                            max="1000"
                            value="40"
                            className=""
                        />
                    </div>
                    <br />
                    <button className="block w-[80%] bg-orange-500 hover:bg-orange-600 text-white border-none px-3 py-2 rounded uppercase font-poppins font-medium">
                        Clear Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;
