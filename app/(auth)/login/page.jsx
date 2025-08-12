import ToggleButton from '@/components/partials/ToggleButton';
import React from 'react';

const Login = () => {
    return (
        <div className='flex justify-center items-center h-full w-full px-2 lg:px-10'>
            <form className='w-full text-gray-600 bg-[#75b5e6] backdrop-blur-lg p-3 rounded-lg shadow mb-20'>
                <h1 className='text-center my-5'>فرم ورود</h1>
                <div>
                    <label>شماره موبایل:</label>
                    <input name="phone" type='number' className='mt-2 px-4 w-full border-gray-300 border-2 rounded-full h-12 bg-[#367db4] focus:outline-blue-300 text-sky-50' />
                </div>
                <div className='mt-5'>
                    <label>رمز عبور:</label>
                    <input name="password" type='password' className='mt-2 px-4 w-full border-gray-300 border-2 rounded-full h-12 bg-[#367db4] focus:outline-blue-300 text-sky-50' />
                </div>
                <div className='mt-5'>
                    <ToggleButton name="remember" title="مرا بخاطر بسپار" />
                </div>

                <div className='my-6 px-4'>
                    <button className='rounded-full w-full bg-[#2971b9] h-12 text-white'>ورود</button>
                </div>
            </form>
        </div>
    );
};

export default Login;