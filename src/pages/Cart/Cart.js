import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    console.log(cartItems);
    return (
        <section>
            <h2 className="text-3xl mb-2 text-slate-700 font-bold border-b-2 border-gray-400 w-fit">
                Shopping Cart
            </h2>
            {cartItems.length === 0 ? (
                <div>
                    <p>Your cart is currently empty.</p>
                    <br />
                    <div>
                        <link to="/#products">&larr; Continue shopping</link>
                    </div>
                </div>
            ) : (
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs border-b border-t  border-gray-400 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Serial
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Image
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Quantity
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Total
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((product, index) => (
                                <tr
                                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 rounded even:bg-slate-200 transition duration-100 ease-in-out hover:bg-slate-300 "
                                    key={product.id}
                                >
                                    <td className="py-4 px-6">{index + 1}</td>
                                    <td className="py-4 px-6">
                                        <img
                                            src={product.imageUrl}
                                            alt={product.id}
                                            className="h-[60px]"
                                        />
                                    </td>
                                    <td className="py-4 px-6">{product.name.slice(0, 30)}...</td>
                                    <td className="py-4 px-6">&#36; {product.price}</td>
                                    <td className="py-4 px-6 flex justify-start items-center">
                                        <button className="btn hover:bg-gray-500 bg-gray-400 rounded">
                                            -
                                        </button>
                                        <p className="mx-3">{product.cartQuantity}</p>
                                        <button className="btn hover:bg-gray-500 bg-gray-400 rounded">
                                            +
                                        </button>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 rounded `}>
                                            &#36; {product.price * product.cartQuantity.toFixed(2)}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="flex justify-around items-center">
                                            <Link to={`/admin/add-product/${product.id}`}>
                                                <AiOutlineDelete className="text-red-600 text-2xl cursor-pointer" />
                                            </Link>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between w-full">
                        <div className="w-1/2">
                            <button className="">Clear cart</button>
                        </div>
                        <div className="mr-10">
                            <div className="w-full h-[2px] bg-slate-700" />
                            <h1>Cart Summary </h1>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Cart;
