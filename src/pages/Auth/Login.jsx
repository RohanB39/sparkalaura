import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/Navlogo.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
            <motion.div 
                className="sm:mx-auto sm:w-full sm:max-w-sm"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <img src={logo} alt="Logo" className="filter invert grayscale contrast-200" />
                <motion.h2 
                    className="mt-10 text-center text-2xl font-medium tracking-tight text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                >
                    Login to your account
                </motion.h2>
            </motion.div>

            <motion.div 
                className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.5 }}
            >
                <motion.form 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.7 }}
                >
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.9 }}
                    >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm" />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 1.1 }}
                    >
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input type="password" name="password" id="password" autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm" />
                        </div>
                    </motion.div>

                    {/* Remember Me Checkbox */}
                    <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: 1.2 }}
                    >
                        <input 
                            type="checkbox" 
                            id="rememberMe" 
                            checked={rememberMe} 
                            onChange={() => setRememberMe(!rememberMe)}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.1, delay: 1.3 }}
                    >
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign in
                        </button>
                    </motion.div>
                </motion.form>

                <motion.p 
                    className="mt-10 text-center text-sm text-gray-500"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 1.5 }}
                >
                    Not a member? <Link to={"/register"} className="font-semibold text-indigo-600 hover:text-indigo-500">Create an account</Link>
                </motion.p>
            </motion.div>
        </div>
    );
}

export default Login;
