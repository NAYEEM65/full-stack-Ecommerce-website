import React from 'react';
import Card from '../../Card/Card';
// className={
//     grid
//         ? 'w-96 bg-white m-1 h-[36rem] relative'
//         : 'w-full h-[28rem] max-h-[32rem] flex bg-white my-4 mx-0'
// }

const ProductItem = ({ product, grid }) => {
    return grid ? (
        <div className="w-[25%] my-10">
            <div class="flex justify-center items-center">
                <div class="w-full p-2">
                    <div class="bg-white border-b-2 hover:shadow-xl rounded-lg ">
                        <div className="pb-4 border-b">
                            <div
                                class="bg-white h-64 rounded-t-lg bg-no-repeat bg-center bg-contain"
                                style={{ backgroundImage: `url(${product.imageUrl})` }}
                            >
                                {/* <div class="text-right">
                                <button class="text-pink-500 hover:text-pink-600 p-2 rounded-full">
                                    <svg class="w-6 h-6" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                                        />
                                    </svg>
                                </button>
                            </div> */}
                            </div>
                        </div>
                        <div class="flex justify-between items-start px-2 pt-2">
                            <div class="p-2 flex-grow ">
                                <h1 class="font-medium text-xl pb-2 font-poppins">
                                    {product.name.slice(0, 40) + '...'}
                                </h1>
                                <p class="text-gray-500 font-nunito">
                                    {product.desc.slice(0, 60) + '...'}
                                </p>
                            </div>
                        </div>
                        <div class="p-2 text-center">
                            <div class="text-orange-500 font-semibold text-2xl font-poppins">
                                $40
                            </div>
                            <div class="text-xs text-gray-500 line-through font-poppins">$80</div>
                        </div>
                        <div class="flex justify-center items-center px-2 pb-2">
                            {/* <div class="w-1/2 p-2">
                                <button class="block w-full bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
                                    <svg viewBox="0 0 24 24" class="inline w-4 h-4">
                                        <path
                                            fill="currentColor"
                                            d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                                        />
                                    </svg>{' '}
                                    Details
                                </button>
                            </div> */}
                            <div class="w-full p-2">
                                <button class="block w-full bg-orange-500 hover:bg-orange-600 text-white border-2 border-gray-800 px-3 py-2 rounded uppercase font-poppins font-medium">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="w-[80%] my-10">
            <div class="flex justify-center items-center">
                <div class="w-full p-2">
                    <div class="bg-white border-b-2 hover:shadow-xl rounded-lg flex justify-start flex-col gap-3 ">
                        <div className="flex justify-between">
                            <div>
                                <img src={product.imageUrl} alt={product.name} className="h-28" />
                            </div>
                            <div>
                                <div class="flex justify-between items-start px-2 pt-2">
                                    <div class="p-2 flex-grow ">
                                        <h1 class="font-medium text-xl pb-2 font-poppins">
                                            {product.name.length > 70
                                                ? product.name.slice(0, 70) + '...'
                                                : product.name}
                                        </h1>
                                        <p class="text-gray-500 font-nunito">
                                            {product.desc.length > 80
                                                ? product.desc.slice(0, 100) + '...'
                                                : product.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-start items-center gap-4">
                                    <div class="p-2 text-center">
                                        <div class="text-orange-500 font-semibold text-2xl font-poppins">
                                            $40
                                        </div>
                                        <div class="text-xs text-gray-500 line-through font-poppins">
                                            $80
                                        </div>
                                    </div>
                                    <div class="w-1/2 p-2">
                                        <button class="block w-full bg-orange-500 hover:bg-orange-600 text-white border-2 border-gray-800 px-3 py-2 rounded uppercase font-poppins font-medium">
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
