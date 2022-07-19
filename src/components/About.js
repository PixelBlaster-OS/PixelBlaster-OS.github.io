import React from 'react'
import Card from './Card'
import Transition from './Transition'
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <Transition>
            <header className="sm:text-5xl text-2xl font-medium font-mono text-slate-700 dark:text-slate-300 pt-6 type-anim1">
                Why PixelBlaster?
            </header>
            <br></br>
            <div className="overflow-scroll card h-[34rem] sm:h-auto">
            <div className="grid overflow-hidden md:grid-cols-3 md:grid-rows-2 gap-4 ">
                <Card
                    title="Fast"
                    description="Various optimizations and performance patches result in a smooth and snappy experience."
                    className="animate-in slide-in-from-left duration-500" />
                <Card
                    title="Secure"
                    description="With fingerprint and face based biometric authentication, only you can unlock your device."
                    className="animate-in slide-in-from-left duration-700" />
                <Card
                    title="Up to Date"
                    description="Monthly updates with the latest security patches from upstream."
                    className="animate-in slide-in-from-left duration-1000" />
            </div>
            </div>
            <br></br>
            <button className="bg-slate-700 dark:bg-slate-300 hover:bg-slate-900 dark:hover:bg-slate-500 text-slate-300 dark:text-slate-700 font-bold py-2 px-4 border border-slate-700  rounded-xl sm:text-3xl float-right"
                onClick={() => navigate("/devices")}>
                I want it!
            </button>
            <MdArrowBackIosNew
                className="text-gray-500 dark:text-gray-400 sm:text-2xl cursor-pointer float-left"
                onClick={() => navigate("/")}
            />
        </Transition>
    )
}

export default About