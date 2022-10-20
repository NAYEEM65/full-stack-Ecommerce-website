import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import accessImage from '../../assets/access-account.svg';
import Loader from '../../components/Loader/Loader';
import { auth } from '../../firebase/config';

const Reset = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const resetSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                toast.success('reset password link sent successfully');
                setIsLoading(false);
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
                setIsLoading(false);
                // ..
            });
    };
    return (
        <>
            {isLoading && <Loader />}
            <section className="w-full py-12 px-0 min-h-[80vh] flex justify-center items-center">
                <div className="animate-slide-down hidden md:block">
                    <img src={accessImage} className="w-auto h-[55vh]" alt="login" />
                </div>
                <div className="w-[35rem] p-10 animate-slide-up text-center shadow-lg">
                    <h2 className="text-orange-600 font-bold text-3xl">Reset Password</h2>
                    <form onSubmit={resetSubmit} className="flex flex-col mt-5 w-full gap-2 ">
                        <div className="w-full inline-grid">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email"
                                className="rounded bg-gray-300 border-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-3 py-2 w-full transition duration-100 ease-in-out rounded hover:bg-blue-700"
                        >
                            Reset Password
                        </button>

                        <div className="relative flex  items-center">
                            <div className="flex-grow border-t-2 border-gray-400"></div>
                            <span className="flex-shrink mx-2 text-gray-400">OR</span>
                            <div className="flex-grow border-t-2 border-gray-400"></div>
                        </div>
                    </form>
                    <span className="flex justify-between text-gray-600">
                        <Link to="/login">
                            <span className="text-blue-600">Login</span>
                        </Link>
                    </span>
                </div>
            </section>
        </>
    );
};

export default Reset;
