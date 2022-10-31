import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Reset from './pages/auth/Reset';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import Admin from './pages/admin/Admin';
import AdminOnlyRoute from './components/Admin/AdminOnly/AdminOnlyRoute';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
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
            </Routes>
            <ToastContainer />
            <Footer />
        </Router>
    );
}

export default App;
