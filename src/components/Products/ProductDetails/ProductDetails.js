import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../../../firebase/config';
import Loader from '../../Loader/Loader';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const getProduct = async () => {
        setIsLoading(true);
        const productRef = doc(db, 'products', id);
        const docSnap = await getDoc(productRef);
        if (docSnap.exists()) {
            const obj = {
                id: id,
                ...docSnap.data(),
            };
            setProduct(obj);
            setIsLoading(false);
        } else {
            setIsLoading(false);
            toast.warning('no product found');
        }
    };
    useEffect(() => {
        getProduct();
    }, []);
    console.log(product);

    return (
        <>
            {isLoading && <Loader />}
            <div className="min-h-screen px-10 my-10">
                <h2 className="text-3xl mb-2 text-slate-700 font-bold border-b-2 border-gray-400 w-fit">
                    Product Details
                </h2>

                <div className="mt-10 w-[90%] mx-auto">
                    <div className="flex justify-around p-5 shadow-lg items-center">
                        <div className="mx-auto ">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="h-[200px] w-auto"
                            />
                        </div>
                        <div className="w-[60%]">
                            <h2 className="text-2xl text-gray-700 font-semibold my-2">
                                {product.name}
                            </h2>
                            <p>{product.desc}</p>
                            <div className="py-2">
                                <p>
                                    <b>SKU: </b>
                                    {product.id}
                                </p>
                                <p>
                                    <b>Brand: </b>
                                    {product.brand}
                                </p>
                            </div>
                            <div className="flex justify-start items-center w-1/3">
                                <button className="btn hover:bg-gray-500 bg-gray-400 rounded">
                                    -
                                </button>
                                <p className="mx-3">0</p>
                                <button className="btn hover:bg-gray-500 bg-gray-400 rounded">
                                    +
                                </button>
                            </div>
                            <div className="flex justify-start items-center gap-2 my-2">
                                <button className="block w-1/3 bg-orange-500 hover:bg-orange-600 text-white border-2 border-gray-800 px-3 py-2 rounded uppercase font-poppins font-medium">
                                    Add to cart
                                </button>
                                <NavLink
                                    to="/#products"
                                    className="block w-1/3 bg-white hover:bg-orange-500 hover:text-white text-gray-700 border-2 border-gray-800 px-3 py-2 rounded uppercase text-center font-poppins font-medium"
                                >
                                    Back to Home
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="mt-32">
                        <h2>Product Reviews</h2>
                        <p>No Reviews found</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
