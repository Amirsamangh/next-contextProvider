import React from 'react';
import "../globals.css";
import WavyBackground from '@/components/layout/WavyBackground';

const AuthLayout = ({ children }) => {
    return (
        <html lang="en" className='h-full'>
            <body dir='rtl' className='h-full'>
                <div className='grid grid-cols-1 lg:grid-cols-3 h-full '>
                    <div className='lg:col-start-2 h-full w-full'>
                        {children}
                    </div>
                </div>
                <WavyBackground />
            </body>
        </html>
    );
};

export default AuthLayout;