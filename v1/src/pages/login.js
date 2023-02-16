import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

function Login() {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';


    return (
        <div className="relative min-h-screen flex items-center justify-center bg-bluesgrays-50 py-12 px-4 sm:px-6 lg:px-8 relative items-center">
            <div className="max-w-md w-full space-y-8 p-10 bg-bluesgrays-100 rounded-xl z-10">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl text-bluesgrays-300">
                    login
                    </h2>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <div className="relative">
                            <label className="text-sm text-bluesgrays-300">email</label>
                            <input 
                                className=" w-full text-base py-2 rounded-xl focus:outline-none focus:border-indigo-500" 
                                type="text" 
                                placeholder="  email address" 
                                onChange={({ target }) => setEmailAddress(target.value)}
                                value={emailAddress}
                            />
                        </div>
                        <div className="mt-8 content-center">
                            <label className="text-sm text-bluesgrays-300">
                                password
                            </label>
                            <input 
                                className="w-full content-center text-base py-2 rounded-xl focus:outline-none focus:border-indigo-500" 
                                type="password" 
                                placeholder="  password" 
                                onChange={({ target }) => setPassword(target.value)}
                                value={password} 
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-bluesgrays-50 hover:text-indigo-500 tracking-wide">
                                    forgot your password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full text-lg flex justify-center bg-bluesgrays-400 text-white p-4 rounded-full tracking-wide focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                                sign in
                            </button>
                        </div>
                        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500 tracking-wide">
                            <span>don't have a profile?</span>
                            <Link to={ROUTES.SIGN_UP}className="text-bluesgrays-50 tracking-wide hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;

