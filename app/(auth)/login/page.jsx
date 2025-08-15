'use client'

import { loginAction } from '@/actions/authActions';
import SubmitForm from '@/components/partials/SubmitForm';
import ToggleButton from '@/components/partials/ToggleButton';
import React, { useActionState } from 'react';

const Login = () => {
    const [state, formAction, pending] = useActionState(loginAction, { error: '', success: false })
    console.log(state);


    return (
        <div className='flex justify-center items-center h-full w-full px-2 lg:px-10'>
            <form action={formAction} className='w-full text-gray-600 bg-[#a3cbe9] backdrop-blur-lg p-3 rounded-lg shadow mb-20'>
                <h1 className='text-center my-5'>ورود</h1>
                {state.error && (<h1 className='text-red-500 text-center my-5'>{state.error}</h1>)}
                <div>
                    <label>شماره موبایل:</label>
                    <input name="phone" type='number' className='mt-2 px-4 w-full border-gray-300 border-2 rounded-full h-12 bg-[#367db4] focus:outline-blue-300 text-sky-50' />
                    <small className='text-red-600 block'>{state.errors?.phone?.at(0) || ''}</small>
                </div>
                <div className='mt-5'>
                    <label>رمز عبور:</label>
                    <input name="password" type='password' className='mt-2 px-4 w-full border-gray-300 border-2 rounded-full h-12 bg-[#367db4] focus:outline-blue-300 text-sky-50' />
                    <small className='text-red-600 block'>{state.errors?.password?.at(0) || ''}</small>
                </div>
                <div className='mt-5'>
                    <ToggleButton value={1} name="remember" title="مرا بخاطر بسپار" />
                </div>

                <SubmitForm />
            </form>
        </div>
    );
};

export default Login;