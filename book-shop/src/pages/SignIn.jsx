import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted with email:' + email + 'and password:' + password);
    };

    return (
        <div className='my-28'>
            <div className='text-center text-4xl font-bold text-larq mb-12'>Sign In</div>
            <div onSubmit={handleSubmit} className='md:flex justify-cemter md:w-3/5 mx-auto'>

                <div className='md:w-3/6 p-3'>
                    <div className='mb-10'>
                        <label className='block mb-2 text-slate-400' htmlFor="email">Email Address</label>
                        <input
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border-2 w-full p-4'
                            type="text"
                        />
                    </div>
                    <div className='mb-8'>
                        <label className='block mb-2 text-slate-400' htmlFor="password">Password</label>
                        <input
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='border-2 w-full p-4'
                            type="password"
                        />
                    </div>
                    <div className='flex justify-around mx-2'>
                        <button onClick={handleSubmit} type="submit" className='font-bold bg-larq px-12 py-2 text-white'>
                            Sign in
                        </button>
                        <a className='text-slate-500 underline decoration-1' href="/">Forgot Your Password</a>
                    </div>
                </div>

                <div className='bg-slate-200 md:w-3/6 p-8'>
                    <div className='font-bold mb-6'>New Customer?</div>
                    <div className='mb-8'>
                        <div>
                            Create an account with us and you'll be able to:
                            <ul className='list-disc ml-8'>
                                <li>Check out faster</li>
                                <li>Save multiple shipping addresses</li>
                                <li>Access your order history</li>
                                <li>Track new orders</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <a href='/register' className='font-bold bg-larq px-12 py-2 text-white'>
                            Create An Account
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SignIn;
