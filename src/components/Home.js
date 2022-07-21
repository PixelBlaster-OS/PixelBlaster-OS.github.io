import React from 'react'
import { Card } from 'rmwc';
import { useNavigate } from 'react-router-dom';
import Transition from './Transition';


const Home = () => {
    const navigate = useNavigate();
    return (
        <Transition>
            <div>
                <div className="sm:text-5xl font-medium font-mono text-slate-700 dark:text-slate-300">Welcome to PixelBlaster-OS</div>
                <div className="sm:text-5xl font-medium font-mono text-slate-700 dark:text-slate-300 type-anim" style={{ width: "100%" }}>Are You Ready to Explode Your Device?</div>
                <br></br>
                <button className="bg-slate-700 dark:bg-slate-300 hover:bg-slate-900 dark:hover:bg-slate-500 text-slate-300 dark:text-slate-700 font-bold py-2 px-4 border border-slate-700  rounded-xl sm:text-3xl"
                    onClick={() => navigate("/about")}>
                    Get Started
                </button>
                <Card> </Card>
            </div>
        </Transition>


    )
}

export default Home