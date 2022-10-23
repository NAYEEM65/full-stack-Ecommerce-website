import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProduct from '../../components/Admin/AddProduct/AddProduct';
import Home from '../../components/Admin/Home/Home';
import Navbar from '../../components/Admin/Navbar/Navbar';
import OrderDetails from '../../components/Admin/OrderDetails/OrderDetails';
import Orders from '../../components/Admin/Orders/Orders';
import ViewProducts from '../../components/Admin/ViewProducts/ViewProducts';

const Admin = () => {
    return (
        <div className="flex">
            <div className="w-1/4 min-h-[80vh]">
                <Navbar />
            </div>
            <div className="w-9/12 p-4">
                <Routes>
                    <Route path="home" element={Home} />
                    <Route path="all-products" element={ViewProducts} />
                    <Route path="add-product/:id" element={AddProduct} />
                    <Route path="orders" element={Orders} />
                    <Route path="order-details/:id" element={OrderDetails} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;
