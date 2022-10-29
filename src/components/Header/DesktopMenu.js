import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedIn, userLoggedOut } from '../../redux/authSlice/authSlice';
import ShowOnLogIn from '../../pages/HiddenLink/ShowOnLogIn';
import ShowOnLogOut from '../../pages/HiddenLink/ShowonLogOut';
import AdminOnlyLink from '../Admin/AdminOnly/AdminOnlyLink';
import { FaUserCircle } from 'react-icons/fa';

const DesktopMenu = () => {
    const { isLoggedIn, userName, userImage } = useSelector((state) => state.auth);
    const [uName, setUname] = useState('');
    const activeClass = (state) => (state.isActive ? `text-orange-600 border-b-2` : '');
    //assigning location variable
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                dispatch(userLoggedOut());
            })
            .catch((error) => {
                // An error happened.
                toast.error(error.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;

                if (user.displayName == null) {
                    const ul = user.email.substring(0, user.email.indexOf('@'));
                    const uName = ul.charAt(0).toUpperCase() + ul.slice(1);
                    setUname(uName);
                } else {
                    setUname(user.displayName);
                }
                dispatch(
                    userLoggedIn({
                        email: user.email,
                        userName: user.displayName ? user.displayName : uName,
                        userId: uid,
                        userImage: user.photoURL,
                    }),
                );
                // ...
            } else {
                dispatch(userLoggedOut());
            }
        });
    }, [dispatch, uName]);

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
                        <AdminOnlyLink>
                            <Link to="/admin/home">
                                <button className="bg-blue-600 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded hover:bg-7lue-600">
                                    Admin
                                </button>
                            </Link>
                        </AdminOnlyLink>
                    </li>
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
                        <ShowOnLogOut>
                            <NavLink to="/login" className={activeClass}>
                                <span className="hover:text-orange-600 transition duration-100">
                                    Login
                                </span>
                            </NavLink>
                        </ShowOnLogOut>
                        <ShowOnLogOut>
                            <NavLink to="/register" className={activeClass}>
                                <span className="hover:text-orange-600 transition duration-100">
                                    Register
                                </span>
                            </NavLink>
                        </ShowOnLogOut>
                        <NavLink to="/order-history" className={activeClass}>
                            <span className="hover:text-orange-600 transition duration-100">
                                My Orders
                            </span>
                        </NavLink>
                        <ShowOnLogIn>
                            <NavLink to="/" onClick={logoutUser}>
                                <span className="hover:text-orange-600 transition duration-100">
                                    Logout
                                </span>
                            </NavLink>
                        </ShowOnLogIn>
                    </div>

                    <NavLink to="/cart" className={activeClass}>
                        <span className="flex justify-between items-center gap-1 hover:text-orange-600 transition duration-100 relative">
                            Cart <BsCartFill /> <p className="absolute -top-2 -right-2">0</p>
                        </span>
                    </NavLink>
                    {isLoggedIn && (
                        <div className="flex justify-center items-center gap-1 cursor-pointer text-orange-600">
                            {userImage ? (
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src={userImage}
                                    alt={userName}
                                />
                            ) : (
                                <FaUserCircle size={30} color="#fff" />
                            )}

                            <p>{userName}</p>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default DesktopMenu;
