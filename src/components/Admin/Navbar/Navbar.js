import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeLink = ({ isActive }) =>
        isActive
            ? `cursor-pointer text-orange-700 before:content-[''] before:absolute before:right-0 before:top-0 before:w-1 before:h-full before:bg-orange-700`
            : '';
    const { userName, userImage } = useSelector((state) => state.auth);

    return (
        <div className="border-r-2 min-h-[80vh] ">
            <div className="flex justify-center items-center flex-col p-10 bg-blue-500">
                {userImage ? (
                    <img src={userImage} alt={userName} />
                ) : (
                    <FaUserCircle size={40} color="#fff" />
                )}
                <h3 className="text-white p-1 text-lg">{userName}</h3>
            </div>
            <nav>
                <ul>
                    <li className="border-b-2 border-gray-300 pl-2 py-2 relative">
                        <NavLink to="/admin/home" className={activeLink}>
                            <span className="block w-full">Home</span>
                        </NavLink>
                    </li>
                    <li className="border-b-2 border-gray-300 pl-2 py-2 relative">
                        <NavLink to="/admin/all-products" className={activeLink}>
                            <span className="block w-full ">All Products</span>
                        </NavLink>
                    </li>
                    <li className="border-b-2 border-gray-300 pl-2 py-2 relative">
                        <NavLink to="/admin/add-product" className={activeLink}>
                            <span className="block w-full">Add Product</span>
                        </NavLink>
                    </li>
                    <li className="border-b-2 border-gray-300 pl-2 py-2 relative">
                        <NavLink to="/admin/orders" className={activeLink}>
                            <span className="block w-full">Orders</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
