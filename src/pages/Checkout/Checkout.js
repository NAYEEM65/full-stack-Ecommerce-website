import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateSubTotal, calculateTotalQuantity } from '../../redux/cartSlice/cartSlice';

import { Report } from 'notiflix';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE);

const Checkout = () => {
    const dispatch = useDispatch();
    const { billingAddress, shippingAddress } = useSelector((state) => state.checkout);
    const { cartItems, cartTotalPrice } = useSelector((state) => state.cart);
    const { email, userName } = useSelector((state) => state.auth);

    const [message, setMessage] = useState('Initializing Checkout');
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        dispatch(calculateSubTotal());
        dispatch(calculateTotalQuantity());
    }, [dispatch, cartItems]);

    const description = `NS Shop payment: Name:${userName}, Email: ${email}, Amount: ${cartTotalPrice}`;
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/create-payment-intent`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: cartItems,
                userEmail: email,
                shipping: shippingAddress,
                billing: billingAddress,
                description,
            }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((json) => Promise.reject(json));
                }
            })
            .then((data) => {
                setClientSecret(data.clientSecret);
            })
            .catch((err) => {
                setMessage('Failed to Initializing checkout');
                Report.failure(
                    'OPPS! Somthing went wrong',
                    'Failed to Initializing checkout!!!',
                    'ok',
                );
            });
    }, [billingAddress, cartItems, description, email, shippingAddress]);
    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    return (
        <>
            <section>
                <div>{!clientSecret && <h3>{message}</h3>}</div>
            </section>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </>
    );
};

export default Checkout;
