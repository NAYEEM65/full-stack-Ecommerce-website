import React, { useEffect, useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

import CheckoutSummary from '../../pages/Checkout/CheckoutSummary';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { clearCart } from '../../redux/cartSlice/cartSlice';
import { db } from '../../firebase/config';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userId, email } = useSelector((state) => state.auth);
    const { cartTotalPrice, cartItems } = useSelector((state) => state.cart);
    const { shippingAddress } = useSelector((state) => state.checkout);
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            'payment_intent_client_secret',
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case 'succeeded':
                    setMessage('Payment succeeded!');
                    break;
                case 'processing':
                    setMessage('Your payment is processing.');
                    break;
                case 'requires_payment_method':
                    setMessage('Your payment was not successful, please try again.');
                    break;
                default:
                    setMessage('Something went wrong.');
                    break;
            }
        });
    }, [stripe]);
    // Save order to Order History
    const saveOrder = () => {
        const today = new Date();
        const date = today.toDateString();
        const time = today.toLocaleTimeString();
        const orderConfig = {
            userId,
            userEmail: email,
            orderDate: date,
            orderTime: time,
            orderAmount: cartTotalPrice,
            orderStatus: 'Order Placed...',
            cartItems,
            shippingAddress,
            createdAt: Timestamp.now().toDate(),
        };
        try {
            addDoc(collection(db, 'orders'), orderConfig);
            dispatch(clearCart());
            toast.success('Order saved');
            navigate('/checkout-success');
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const confirmPayment = await stripe
            .confirmPayment({
                elements,
                confirmParams: {
                    // Make sure to change this to your payment completion page
                    return_url: 'http://localhost:3000/checkout-success',
                },
                redirect: 'if_required',
            })
            .then((result) => {
                // ok - paymentIntent // bad - error
                if (result.error) {
                    toast.error(result.error.message);
                    setMessage(result.error.message);
                    return;
                }
                if (result.paymentIntent) {
                    if (result.paymentIntent.status === 'succeeded') {
                        setIsLoading(false);
                        toast.success('Payment successful');
                        saveOrder();
                    }
                }
            });

        setIsLoading(false);
    };

    return (
        <div>
            <h3 className="text-center border-b-2 mx-auto mt-5 border-slate-800 w-fit text-6xl">
                Checkout
            </h3>
            <form id="payment-form" onSubmit={handleSubmit}>
                <div className="flex justify-center gap-5 items-center py-10">
                    <div className="w-1/2">
                        <CheckoutSummary />
                    </div>
                    <div>
                        <h3>Stripe Checkout</h3>
                        <PaymentElement id="payment-element" />
                        <button
                            disabled={isLoading || !stripe || !elements}
                            className="mt-5 px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white w-full"
                            id="submit"
                        >
                            <span id="button-text">{isLoading ? 'Loading...' : 'Pay now'}</span>
                        </button>
                    </div>
                </div>

                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
        </div>
    );
};

export default CheckoutForm;
