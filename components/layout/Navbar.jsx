'use client'
import React, { useContext } from 'react';
import ToggleButton from '../partials/ToggleButton';
import { MainContext } from '@/context/MainContext';

const Navbar = () => {

    const { setDarkMode, darkMode } = useContext(MainContext)

    return (
        <nav className={"bg-white dark:bg-gray-500 h-navbar_height fixed top-0 left-0 w-full shadow-lg"}>
            <div className={"w-full p-1 h-full"}>
                <div className={"h-full flex items-center"}>
                    <ToggleButton title={darkMode} onChange={(e) => setDarkMode(e.target.checked ? 'dark' : 'light')} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;