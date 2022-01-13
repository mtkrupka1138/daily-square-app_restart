import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import * as ROUTES from '../constants/routes';

export default function SignUp() {

    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';


    return (
        <div className="relative min-h-screen flex items-center justify-center bg-bluesgrays-50 py-12 px-4 sm:px-6 lg:px-8 relative items-center">
            <div className="max-w-md w-full space-y-8 p-10 bg-bluesgrays-100 rounded-xl z-10">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                    profile creation
                    </h2>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <div className="relative">
                            <label className="text-sm font-bold text-gray-700 tracking-wide">email</label>
                            <input 
                                className=" w-full text-base py-2 rounded-xl focus:outline-none focus:border-indigo-500" 
                                type="text" 
                                placeholder="  Email address" 
                                onChange={({ target }) => setEmailAddress(target.value)}
                                value={emailAddress}
                            />
                        </div>
                        <div className="mt-8 content-center">
                            <label className="text-sm font-bold text-gray-700 tracking-wide">
                                password
                            </label>
                            <input 
                                className="w-full content-center text-base py-2 rounded-xl focus:outline-none focus:border-indigo-500" 
                                type="password" 
                                placeholder="  Password" 
                                onChange={({ target }) => setPassword(target.value)}
                                value={password} 
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-500 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center bg-bluesgrays-400 text-gray-100 p-4  rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                                create profile
                            </button>
                        </div>
                        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                            <span>already have a profile?</span>
                            <Link to={ROUTES.LOGIN}className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}