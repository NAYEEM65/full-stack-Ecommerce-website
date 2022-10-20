import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Reset from './pages/auth/Reset';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';
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
            </Routes>
            <ToastContainer />
            <Footer />
        </Router>
    );
}

export default App;
