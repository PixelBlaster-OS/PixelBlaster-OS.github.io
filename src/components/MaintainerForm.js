import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Transition from './Transition';

const MaintainerForm = () => {
    const navigate = useNavigate();
    return (
        <Transition>
            <div className="absolute left-0 top-0 ml-4 mt-8 md:ml-6 sm:mt-8">
                <AiOutlineArrowLeft
                    className="text-gray-500 dark:text-gray-400 sm:text-2xl cursor-pointer float-left"
                    onClick={() => navigate("/unsupported_device")} />
            </div>
            <iframe title="Maintainership Form" className="w-screen h-screen pt-12 sm:pt-36" src="https://docs.google.com/forms/d/1aJDw13eONbdGxp7mBGqdQ4Mm_Om1_-PfZqUi1Wd0FkM/viewform?embedded=true"></iframe>
        </Transition>
    )
}

export default MaintainerForm