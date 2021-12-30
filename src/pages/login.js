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
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                    login
                    </h2>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <div className="relative">
                            <label className="text-sm font-bold text-gray-700 tracking-wide">Email</label>
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
                                Password
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
                                Sign in
                            </button>
                        </div>
                        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                            <span>Don't have an account?</span>
                            <Link to={ROUTES.SIGN_UP}className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        





// {/* 

//         <div classNameName="container flex mx-auto max-w-screen-md items-center h-screen">
//                 <header classNameName="items-center">
//                     <h1>Daily Square</h1>
//                 </header>
//                 <div classNameName="flex flex-col w-2/5">
//                     <div classNameName="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4">
//                         {/* <h1 classNameName="flex justify-center w-full">
//                             <img src="/images/logo.png" alt="Instagram" classNameName="mt-2 w-6/12 mb-4" />
//                         </h1> */}
//                         {error && <p classNameName="mb-4 text-xs text-red-primary">{error}</p>}
//                         <form method="POST">
//                             <input
//                                 aria-label="Enter your email address"
//                                 type="text"
//                                 placeholder="Email address"
//                                 classNameName="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
//                                 onChange={({ target }) => setEmailAddress(target.value)}
//                                 value={emailAddress}
//                             />
//                             <input
//                                 aria-label="Enter your password"
//                                 type="password"
//                                 placeholder="Password"
//                                 classNameName="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
//                                 onChange={({ target }) => setPassword(target.value)}
//                                 value={password}
//                             />
//                             <button 
//                                 disabled={isInvalid} 
//                                 type="submit" 
//                                 classNameName={`bg-blue-medium text-white w-full rounded h-8 font-bold
//                                 ${isInvalid && 'opacity-50'}`}
//                             >
//                                 Log In
//                             </button>
//                         </form>
//                     </div>
//                     <div classNameName="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
//                         <p classNameName="text-sm">Don't have an account? {``} 
//                             <Link to={ROUTES.SIGN_UP} classNameName="font-bold text-blue-medium">
//                                 Sign up
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div> */}
    )
}

export default Login;

