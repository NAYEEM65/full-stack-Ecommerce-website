import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PageHeading from '../../components/common/PageHeading';
import { calculateSubTotal, calculateTotalQuantity } from '../../redux/cartSlice/cartSlice';

const CheckoutSummary = () => {
    const { cartItems, cartQuantity, cartTotalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateSubTotal(cartItems));
        dispatch(calculateTotalQuantity(cartItems));
    }, [cartItems, dispatch]);

    return (
        <div>
            <PageHeading>Checkout Summary</PageHeading>
            <div>
                {cartItems.lenght === 0 ? (
                    <>
                        <p>No item in your cart.</p>
                        <button className="--btn">
                            <Link to="/#products">Back To Shop</Link>
                        </button>
                    </>
                ) : (
                    <div>
                        <p className="text-sm ">
                            <b>{`Cart item(s): ${cartQuantity}`}</b>
                        </p>
                        <div className="flex justify-start gap-5 items-center">
                            <h4 className="font-semibold text-2xl text-slate-700">Subtotal:</h4>
                            <h3 className="font-semibold text-2xl text-orange-500">
                                $ {cartTotalPrice.toFixed(2)}
                            </h3>
                        </div>
                        {cartItems.map((item, index) => {
                            const { id, name, price, cartQuantity } = item;
                            return (
                                <div
                                    className="p-4 border-2 border-green-400 rounded shadow-xl my-2"
                                    key={id}
                                >
                                    <h4>Product: {name}</h4>
                                    <p>Quantity: {cartQuantity}</p>
                                    <p>Unit price: {price}</p>
                                    <p>Set price: {price * cartQuantity}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutSummary;
