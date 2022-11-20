require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
// This is your test secret API key.
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET);

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

const array = [];
const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    items.map((item) => {
        const { price, cartQuantity } = item;
        const cartItemAmount = price * cartQuantity;
        return array.push(cartItemAmount);
    });
    const totalAmount = array.reduce((a, b) => {
        return a + b;
    }, 0);
    return totalAmount * 100;
};
app.get('/', (req, res) => {
    res.send('welcome to NS SHOP Server');
});

app.post('/create-payment-intent', async (req, res) => {
    const { items, shipping, description } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true,
        },
        description,
        shipping: {
            address: {
                line1: shipping.line1,
                line2: shipping.line2,
                city: shipping.city,
                country: shipping.country,
                postal_code: shipping.postal_code,
            },
            name: shipping.name,
            phone: shipping.phone,
        },
        //reciept_email: userEmail,
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.listen(PORT, () => console.log(`Node server listening on port ${PORT}`));
