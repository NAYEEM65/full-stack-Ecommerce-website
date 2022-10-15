import { Link, NavLink } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';

const MobileMenu = () => {
    const [isMenu, setIsMenu] = useState(false);
    const handleMenuClick = () => {
        setIsMenu(!isMenu);
    };
    const activeClass = (state) =>
        state.isActive ? `text-orange-600 border-b-2` : 'text-white border-none';
    return (
        <div className="w-full my-0 mx-auto p-4 md:hidden flex flex-col transition duration-200 justify-between relative">
            <div className="flex justify-between items-center gap-2">
                <Link to="/">
                    <h2 className="font-bold text-2xl">
                        <span className="text-orange-700">NS</span> Shop
                    </h2>
                </Link>
                <div className="flex items-center gap-4">
                    <NavLink to="/cart" className={activeClass}>
                        <span className="flex justify-between items-center gap-1 hover:text-orange-600 transition duration-100 relative">
                            Cart <BsCartFill /> <p className="absolute -top-2 -right-2">0</p>
                        </span>
                    </NavLink>
                    {isMenu ? (
                        <AiOutlineClose onClick={handleMenuClick} className="text-4xl" />
                    ) : (
                        <BiMenuAltRight onClick={handleMenuClick} className="text-4xl" />
                    )}
                </div>
            </div>
            {isMenu && (
                <nav
                    className={`flex absolute min-h-screen top-16 w-[100%] left-0 text-slate-700 bg-slate-700/30 shadow-lg p-5 rounded  justify-start  ${
                        isMenu ? '' : '-translate-x-80'
                    } flex-col items-center backdrop-blur-sm`}
                >
                    <ul className="flex justify-between flex-col items-center list-none gap-2">
                        <li className="my-0 mx-1">
                            <NavLink to="/home" className={activeClass}>
                                <span className="hover:text-orange-600 transition duration-100">
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        <li className="my-0 mx-1">
                            <NavLink to="/contact" className={activeClass}>
                                <span className="hover:text-orange-600 transition duration-100">
                                    Contact
                                </span>
                            </NavLink>
                        </li>
                        <li className="my-0 mx-1">
                            {' '}
                            <NavLink to="/login" className={activeClass}>
                                <span className="hover:text-orange-600 transition duration-100">
                                    Login
                                </span>
                            </NavLink>
                        </li>
                        <li className="my-0 mx-1">
                            <NavLink to="/register" className={activeClass}>
                                <span className="hover:text-orange-600 transition duration-100">
                                    Register
                                </span>
                            </NavLink>
                        </li>
                        <li className="my-0 mx-1">
                            {' '}
                            <NavLink to="/order-history" className={activeClass}>
                                <span className="hover:text-orange-600 transition duration-100">
                                    My Orders
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default MobileMenu;
