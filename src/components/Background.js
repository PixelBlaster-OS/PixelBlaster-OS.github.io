import React from 'react';

const Background = ({ children }) => {
    return (
        <div className=" flex h-screen justify-center items-center sm:w-full w-full bg-slate-300 dark:bg-slate-800">
            <div className=" ">
            {children}
            </div>
        </div>
    )
}

export default Background;
