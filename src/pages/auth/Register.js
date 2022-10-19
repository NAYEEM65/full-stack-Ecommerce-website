import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import accessImage from '../../assets/access-account.svg';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Loader from '../../components/Loader/Loader';

const Register = () => {
    const [isPassShow, setIsPassShow] = useState(false);
    const handlePassShow = () => {
        setIsPassShow(!isPassShow);
    };
    const [isConfirmPassShow, setIsConfirmPassShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleConfirmPassShow = () => {
        setIsConfirmPassShow(!isConfirmPassShow);
    };
    const registerUser = (e) => {
        e.preventDefault();
        if (password !== cPassword) {
            toast.error('Passwords do not match');
        }
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setIsLoading(false);
                toast.success('Registration successful');
                navigate('/login');
            })
            .catch((error) => {
                const message = error.message;
                toast.error(message);
                setIsLoading(false);
            });
    };
    return (
        <>
            {isLoading && <Loader />}

            <section className="w-full py-12 px-0 min-h-[80vh] flex justify-center flex-row-reverse items-center">
                <div className="animate-slide-down hidden md:block">
                    <img src={accessImage} className="w-auto h-[55vh]" alt="login" />
                </div>
                <div className="w-[35rem] p-10 animate-slide-up text-center shadow-lg">
                    <h2 className="text-orange-600 font-bold text-3xl">Register</h2>
                    <form className="flex flex-col mt-5 w-full gap-2 " onSubmit={registerUser}>
                        <div className="w-full inline-grid">
                            <input
                                type="email"
                                required
                                placeholder="email"
                                className="rounded bg-gray-300 border-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative w-full inline-grid">
                            <input
                                type={isPassShow ? 'text' : 'password'}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"
                                className="rounded bg-gray-300 border-none relative"
                            />
                            {!isPassShow ? (
                                <AiOutlineEyeInvisible
                                    className="absolute top-3 right-4  text-xl cursor-pointer"
                                    onClick={handlePassShow}
                                />
                            ) : (
                                <AiOutlineEye
                                    className="absolute top-3 right-4  text-xl cursor-pointer"
                                    onClick={handlePassShow}
                                />
                            )}
                        </div>
                        <div className="relative w-full inline-grid">
                            <input
                                type={isConfirmPassShow ? 'text' : 'password'}
                                required
                                value={cPassword}
                                onChange={(e) => setCPassword(e.target.value)}
                                placeholder="confirm password"
                                className="rounded bg-gray-300 border-none relative"
                            />
                            {!isConfirmPassShow ? (
                                <AiOutlineEyeInvisible
                                    className="absolute top-3 right-4  text-xl cursor-pointer"
                                    onClick={handleConfirmPassShow}
                                />
                            ) : (
                                <AiOutlineEye
                                    className="absolute top-3 right-4  text-xl cursor-pointer"
                                    onClick={handleConfirmPassShow}
                                />
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded hover:bg-blue-700"
                        >
                            Register
                        </button>
                    </form>

                    <span className="flex justify-start gap-2 pt-2 text-gray-600">
                        <p>Already an account? </p>
                        <Link to="/login">
                            <span className="text-blue-600"> Login</span>
                        </Link>
                    </span>
                </div>
            </section>
        </>
    );
};

export default Register;
