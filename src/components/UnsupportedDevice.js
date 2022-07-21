import React from 'react'
import Transition from './Transition'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const UnsupportedDevice = () => {
    const navigate = useNavigate();
    return (
        <Transition>
            <div className="absolute left-0 top-0 ml-4 mt-8 md:ml-6 sm:mt-8">
                <AiOutlineArrowLeft
                    className="text-gray-500 dark:text-gray-400 sm:text-2xl cursor-pointer float-left"
                    onClick={() => navigate("/")} />
            </div>
            <div className={"justify-center items-center p-6 mx-auto bg-slate-700 text-slate-300 dark:bg-slate-300 dark:text-slate-700 rounded-xl shadow-lg row-span-2 grid overflow-hidden grid-cols-1 grid-rows-2 gap-2 w-60 h-60 sm:w-[48rem] sm:h-[48rem]"}>
                <div className=" sm:text-xl font-medium text-center row-span-2 col-span-2">
                    <h1 className=" sm:text-2xl font-bold">Device not Supported<br></br></h1>
                    <p>It Seems that your device is not officially supported by PixelBlaster-OS. If you are developer for the device, you can apply to officially maintain the device by clicking below.</p>
                </div>
            </div>
            <button className="bg-slate-700 dark:bg-slate-300 hover:bg-slate-900 dark:hover:bg-slate-500 text-slate-300 dark:text-slate-700 font-bold py-2 px-4 mt-2 border border-slate-700  rounded-xl sm:text-3xl float-right"
                onClick={() => navigate("/maintainer_form")}>
                Apply
            </button>
        </Transition>
    )
}

export default UnsupportedDevice