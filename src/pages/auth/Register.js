import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import accessImage from '../../assets/access-account.svg';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const Register = () => {
    const [isPassShow, setIsPassShow] = useState(false);
    const handlePassShow = () => {
        setIsPassShow(!isPassShow);
    };
    const [isConfirmPassShow, setIsConfirmPassShow] = useState(false);
    const handleConfirmPassShow = () => {
        setIsConfirmPassShow(!isConfirmPassShow);
    };
    return (
        <section className="w-full py-12 px-0 min-h-[80vh] flex justify-center flex-row-reverse items-center">
            <div className="animate-slide-down hidden md:block">
                <img src={accessImage} className="w-auto h-[55vh]" alt="login" />
            </div>
            <div className="w-[35rem] p-10 animate-slide-up text-center shadow-lg">
                <h2 className="text-orange-600 font-bold text-3xl">Register</h2>
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
                                onClick={handlePassShow}
                            />
                        ) : (
                            <AiOutlineEye
                                className="absolute top-3 right-4 z-10 text-xl cursor-pointer"
                                onClick={handlePassShow}
                            />
                        )}
                    </div>
                    <div className="relative w-full inline-grid">
                        <input
                            type={isConfirmPassShow ? 'text' : 'password'}
                            required
                            placeholder="confirm password"
                            className="rounded bg-gray-300 border-none relative"
                        />
                        {!isConfirmPassShow ? (
                            <AiOutlineEyeInvisible
                                className="absolute top-3 right-4 z-10 text-xl cursor-pointer"
                                onClick={handleConfirmPassShow}
                            />
                        ) : (
                            <AiOutlineEye
                                className="absolute top-3 right-4 z-10 text-xl cursor-pointer"
                                onClick={handleConfirmPassShow}
                            />
                        )}
                    </div>
                    <button className="bg-blue-600 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded focus:scale-90">
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
    );
};

export default Register;
