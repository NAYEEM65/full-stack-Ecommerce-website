import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import {
    addToCart,
    calculateSubTotal,
    calculateTotalQuantity,
    clearCart,
    decreaseCart,
    removeFromCart,
    saveUrl,
} from '../../redux/cartSlice/cartSlice';

const Cart = () => {
    const { cartItems, cartQuantity, cartTotalPrice } = useSelector((state) => state.cart);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const increaseCart = (cart) => {
        setIsLoading(true);
        try {
            dispatch(addToCart(cart));
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
            setIsLoading(false);
        }
    };

    const decreaseItem = (cart) => {
        setIsLoading(true);
        try {
            dispatch(decreaseCart(cart));
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
            setIsLoading(false);
        }
    };
    const removeItem = (cart) => {
        setIsLoading(true);
        try {
            dispatch(removeFromCart(cart));
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
            setIsLoading(false);
        }
    };
    const clearItem = () => {
        setIsLoading(true);
        try {
            dispatch(clearCart());
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        setIsLoading(true);
        try {
            dispatch(calculateSubTotal(cartItems));
            dispatch(calculateTotalQuantity(cartItems));
            dispatch(saveUrl(''));
            setIsLoading(false);
        } catch (error) {
            console.log(error.message);
            setIsLoading(false);
        }
    }, [cartItems, dispatch]);

    const url = window.location.href;
    const navigate = useNavigate();
    const checkout = () => {
        if (isLoggedIn) {
            navigate('/checkout');
        } else {
            dispatch(saveUrl(url));
            navigate('/login');
        }
    };
    return (
        <section className="min-h-[85vh]">
            {isLoading && <Loader />}
            <h2 className="text-3xl mb-2 text-slate-700 font-bold border-b-2 border-gray-400 w-fit">
                Shopping Cart
            </h2>
            {cartItems.length === 0 ? (
                <div>
                    <p>Your cart is currently empty.</p>
                    <br />
                    <div>
                        <NavLink to="/#products">&larr; Continue shopping</NavLink>
                    </div>
                </div>
            ) : (
                <div className="overflow-x-auto relative sm:rounded-lg">
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
                                        <button
                                            className="btn hover:bg-gray-500 bg-gray-400 rounded"
                                            onClick={() => decreaseItem(product)}
                                        >
                                            -
                                        </button>
                                        <p className="mx-3">{product.cartQuantity}</p>
                                        <button
                                            className="btn hover:bg-gray-500 bg-gray-400 rounded"
                                            onClick={() => increaseCart(product)}
                                        >
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
                                            <AiOutlineDelete
                                                className="text-red-600 text-2xl cursor-pointer"
                                                onClick={() => removeItem(product)}
                                            />
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between w-full mt-10 px-10">
                        <div className="w-1/2 flex justify-start items-center gap-5">
                            <button
                                className="px-3 py-2 rounded bg-red-500 text-white font-semibold w-1/4"
                                onClick={clearItem}
                            >
                                Clear cart
                            </button>
                            <button className="px-3 py-2 rounded bg-orange-500 text-white font-semibold w-1/4">
                                <NavLink to="/#products">Continue Shopping</NavLink>
                            </button>
                        </div>
                        <div className="mr-10">
                            <div className="w-full h-[2px] bg-slate-700" />

                            <div>
                                <p>Cart Item(s): {cartQuantity}</p>
                                <h2 className="text-2xl text-slate-700">
                                    Subtotal: {cartTotalPrice.toFixed(2)}
                                </h2>
                                <small>taxes and shipping cost calculated at checkout</small>
                            </div>
                            <button
                                className="px-3 py-2 rounded bg-orange-500 text-white font-semibold w-full cursor-pointer"
                                onClick={checkout}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Cart;
