import React from 'react';
import Toggle from './ThemeToggle';

const Background = ({ children }) => {
    return (
        <div className=" flex h-screen justify-center items-center sm:w-full w-full bg-slate-300 dark:bg-slate-800">
            <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
                <Toggle />
            </div>
            <div className=" ">
                {children}
            </div>
        </div>
    )
}

export default Background;
