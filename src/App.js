import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Reset from './pages/auth/Reset';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import Admin from './pages/admin/Admin';
import AdminOnlyRoute from './components/Admin/AdminOnly/AdminOnlyRoute';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import CheckoutDetails from './pages/Checkout/CheckoutDetails';
import Success from './pages/Checkout/Success';
import OrderHistory from './components/OrderHistory/OrderHistory';
import Contact from './pages/Contact/Contact';
import ReviewProducts from './components/Review/ReviewProducts';
import OrderDetails from './components/OrderDetails/OrderDetails';
import NotFound from './pages/NotFound/NotFound';
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset" element={<Reset />} />
                <Route
                    path="/admin/*"
                    element={
                        <AdminOnlyRoute>
                            <Admin />
                        </AdminOnlyRoute>
                    }
                />
                <Route path="/product-details/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order/checkout" element={<Checkout />} />
                <Route path="/order-history" element={<OrderHistory />} />
                <Route path="/checkout-details" element={<CheckoutDetails />} />
                <Route path="/checkout-success" element={<Success />} />
                <Route path="/order-details/:id" element={<OrderDetails />} />
                <Route path="/review-product/:id" element={<ReviewProducts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer />
            <Footer />
        </Router>
    );
}

export default App;
