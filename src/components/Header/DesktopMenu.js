import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';

const DesktopMenu = () => {
    const activeClass = (state) => (state.isActive ? `text-orange-600 border-b-2` : '');
    //assigning location variable
    const location = useLocation();
    const navigate = useNavigate();
    console.log(auth);

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split('/');
    const logoutUser = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                toast.success('Logout successful.');
                navigate('/login');
            })
            .catch((error) => {
                // An error happened.
                toast.error(error.message);
            });
    };

    return (
        <div className="w-full h-20 my-0 mx-auto p-4 md:flex hidden justify-between items-center relative">
            <div className="w-[25%]">
                <Link to="/">
                    <h2 className="font-extrabold text-5xl">
                        <span className="text-orange-700">NS</span> Shop
                    </h2>
                </Link>
            </div>
            <nav className="flex w-[75%] justify-around items-center">
                <ul className="flex justify-between items-center list-none gap-2">
                    <li className="my-0 mx-1">
                        <NavLink
                            to="/"
                            className={splitLocation[1] === '' ? 'text-orange-600 border-b-2' : ''}
                        >
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
                </ul>
                <div className="flex justify-between items-center gap-4">
                    <div className="flex justify-between items-center gap-4">
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
                        <NavLink to="/" onClick={logoutUser}>
                            <span className="hover:text-orange-600 transition duration-100">
                                Logout
                            </span>
                        </NavLink>
                    </div>

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
