import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';

const DesktopMenu = () => {
    const activeClass = (state) =>
        state.isActive ? `text-orange-600 border-b-2` : 'text-white border-none';
    return (
        <div className="w-full h-20 my-0 mx-auto p-4 md:flex hidden justify-between items-center relative">
            <div className="w-[25%]">
                <Link to="/home">
                    <h2 className="font-extrabold text-5xl">
                        <span className="text-orange-700">NS</span> Shop
                    </h2>
                </Link>
            </div>
            <nav className="flex w-[75%] justify-around items-center">
                <ul className="flex justify-between items-center list-none gap-2">
                    <li className="my-0 mx-1">
                        <NavLink to="/" className={activeClass}>
                            Home
                        </NavLink>
                    </li>
                    <li className="my-0 mx-1">
                        <NavLink to="/contact" className={activeClass}>
                            <span className="hover:text-orange-600 transition duration-100">
                                Contact
                            </span>
                        </NavLink>
                    </li>
                </ul>
                <div className="flex justify-between items-center gap-4">
                    <span className="flex justify-between items-center gap-2">
                        <NavLink to="/login" className={activeClass}>
                            <span className="hover:text-orange-600 transition duration-100">
                                Login
                            </span>
                        </NavLink>
                        <NavLink to="/register" className={activeClass}>
                            <span className="hover:text-orange-600 transition duration-100">
                                Register
                            </span>
                        </NavLink>
                        <NavLink to="/order-history" className={activeClass}>
                            <span className="hover:text-orange-600 transition duration-100">
                                My Orders
                            </span>
                        </NavLink>
                    </span>

                    <NavLink to="/cart" className={activeClass}>
                        <span className="flex justify-between items-center gap-1 hover:text-orange-600 transition duration-100 relative">
                            Cart <BsCartFill /> <p className="absolute -top-2 -right-2">0</p>
                        </span>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default DesktopMenu;
