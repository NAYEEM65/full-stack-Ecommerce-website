import React, { useState } from 'react';
import accessImage from '../../assets/access-account.svg';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    const [isPassShow, setIsPassShow] = useState(false);
    const hnadlePassShow = () => {
        setIsPassShow(!isPassShow);
    };
    return (
        <section className="w-full py-12 px-0 min-h-[80vh] flex justify-center items-center">
            <div className="animate-slide-down hidden md:block">
                <img src={accessImage} className="w-auto h-[55vh]" alt="login" />
            </div>
            <div className="w-[35rem] p-10 animate-slide-up text-center shadow-lg">
                <h2 className="text-orange-600 font-bold text-3xl">Login</h2>
                <form className="flex flex-col mt-5 w-full gap-2 ">
                    <div className="w-full inline-grid">
                        <input
                            type="email"
                            required
                            placeholder="email"
                            className="rounded bg-gray-300 border-none"
                        />
                    </div>
                    <div className="relative w-full inline-grid">
                        <input
                            type={isPassShow ? 'text' : 'password'}
                            required
                            placeholder="password"
                            className="rounded bg-gray-300 border-none relative"
                        />
                        {!isPassShow ? (
                            <AiOutlineEyeInvisible
                                className="absolute top-3 right-4 z-10 text-xl cursor-pointer"
                                onClick={hnadlePassShow}
                            />
                        ) : (
                            <AiOutlineEye
                                className="absolute top-3 right-4 z-10 text-xl cursor-pointer"
                                onClick={hnadlePassShow}
                            />
                        )}
                    </div>
                    <button className="bg-blue-600 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded focus:scale-90">
                        Login
                    </button>
                    <div className="text-left">
                        <Link to="/reset" className="">
                            <span className="text-gray-600">Reset Password</span>
                        </Link>
                    </div>
                    <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t-2 border-gray-400"></div>
                        <span className="flex-shrink mx-2 text-gray-400">OR</span>
                        <div className="flex-grow border-t-2 border-gray-400"></div>
                    </div>
                    <span className="bg-orange-600 cursor-pointer flex justify-center items-center gap-3 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded active:scale-90">
                        <FcGoogle className="h-5 w-5 rounded-full bg-gray-50" /> Login With Google
                    </span>
                    <span className="flex justify-start gap-2 text-gray-600">
                        <p>Don't have an account? </p>
                        <Link to="/register">
                            <span className="text-blue-600"> Register</span>
                        </Link>
                    </span>
                </form>
            </div>
        </section>
    );
};

export default Login;
