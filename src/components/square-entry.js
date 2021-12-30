import React, { Component } from 'react';
import { useState } from 'react';

function SquareEntryForm() {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

        return (
            <div className="container flex mx-auto max-w-screen-md items-center h-screen">
                <div className="flex flex-col w-2/5">
                    <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4">
                        <form method="POST">
                            <input
                                aria-label="Enter your email address"
                                type="text"
                                placeholder="Email address"
                                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                                //onChange={({ target }) => setEmailAddress(target.value)}
                                value={emailAddress}
                            />
                            <input
                                aria-label="Enter your password"
                                type="password"
                                placeholder="Password"
                                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                                //onChange={({ target }) => setPassword(target.value)}
                                value={password}
                            />
                            <button 
                                disabled={isInvalid} 
                                type="submit" 
                                className={`bg-blue-medium text-white w-full rounded h-8 font-bold
                                ${isInvalid && 'opacity-50'}`}
                            >
                                Square
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
}



export default SquareEntryForm;