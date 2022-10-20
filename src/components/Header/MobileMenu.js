import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config';
import { userLoggedIn } from '../../redux/authSlice/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const MobileMenu = () => {
    const { isLoggedIn, email, userName, userId, userImage } = useSelector((state) => state.auth);
    const [isMenu, setIsMenu] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const handleMenuClick = () => {
        setIsMenu(!isMenu);
    };
    const activeClass = (state) => (state.isActive ? `text-orange-600 border-b-2` : '');

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split('/');
    const dispatch = useDispatch();
    const handleItemClick = () => {
        setIsMenu(false);
    };
    const logoutUser = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                toast.success('Logout successful.');
                navigate('/login');
                setIsMenu(false);
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

                dispatch(
                    userLoggedIn({
                        email: user.email,
                        userName: user.displayName,
                        userId: uid,
                        userImage: user.photoURL,
                    }),
                );
                // ...
            } else {
            }
        });
    }, [dispatch]);
    return (
        <div className="w-full my-0 mx-auto p-4 md:hidden flex flex-col transition duration-200 justify-between relative">
            <div className="flex justify-between items-center gap-2">
                <Link to="/" onClick={handleItemClick}>
                    <h2 className="font-bold text-2xl">
                        <span className="text-orange-700">NS</span> Shop
                    </h2>
                </Link>
                <div className="flex items-center gap-4">
                    <NavLink to="/cart" className={activeClass} onClick={handleItemClick}>
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
                    className={`flex absolute min-h-screen  w-[100%] z-[999] left-0 text-slate-100 bg-slate-900/80 shadow-lg p-5 rounded transition-all duration-500 ease-in justify-start  ${
                        isMenu ? 'top-16 opacity-100 animate-slide-up' : 'top-[-490px] opacity-0'
                    } flex-col items-center`}
                >
                    <ul className="flex justify-between flex-col items-center list-none gap-4 text-lg">
                        <li className="my-0 mx-1">
                            <NavLink
                                to="/"
                                onClick={handleItemClick}
                                className={
                                    splitLocation[1] === '' ? 'text-orange-600 border-b-2' : ''
                                }
                            >
                                <span className="hover:text-orange-600 transition duration-100">
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        <li className="my-0 mx-1">
                            <NavLink
                                to="/contact"
                                className={activeClass}
                                onClick={handleItemClick}
                            >
                                <span className="hover:text-orange-600 transition duration-100">
                                    Contact
                                </span>
                            </NavLink>
                        </li>
                        <li className="my-0 mx-1">
                            {' '}
                            <NavLink to="/login" className={activeClass} onClick={handleItemClick}>
                                <span className="hover:text-orange-600 transition duration-100">
                                    Login
                                </span>
                            </NavLink>
                        </li>
                        <li className="my-0 mx-1">
                            <NavLink
                                to="/register"
                                className={activeClass}
                                onClick={handleItemClick}
                            >
                                <span className="hover:text-orange-600 transition duration-100">
                                    Register
                                </span>
                            </NavLink>
                        </li>
                        <li className="my-0 mx-1">
                            {' '}
                            <NavLink
                                to="/order-history"
                                className={activeClass}
                                onClick={handleItemClick}
                            >
                                <span className="hover:text-orange-600 transition duration-100">
                                    My Orders
                                </span>
                            </NavLink>
                        </li>
                        <li className="my-0 mx-1">
                            {' '}
                            <NavLink to="/" onClick={logoutUser}>
                                <span className="hover:text-orange-600 transition duration-100">
                                    Logout
                                </span>
                            </NavLink>
                        </li>
                        <li className="my-0 mx-1">
                            {isLoggedIn && (
                                <span className="flex justify-center items-center cursor-pointer">
                                    <p>{userName}</p>
                                    <img src={userImage} alt="" />
                                </span>
                            )}
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default MobileMenu;
