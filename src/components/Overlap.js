import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import StarsCanvas from "./StarsCanvas";
import "../app/overlap.css";


export default function Overlap() {
    const [activeDiv, setActiveDiv] = useState(true);

    useEffect(() => {
        if (activeDiv) {
            document.body.style.overflow = 'hidden'; // Disable background scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable background scrolling
        }
    }, [activeDiv]);
    return (
        <section id="overlap" style={{ display: activeDiv ? 'block' : 'none' }} className="text-white absolute w-full h-full z-10" >
            <StarsCanvas count={0} />
            <div className="w-full h-full flex flex-col gap-4 text-center items-center justify-center">
                <h1 className="abril-fatface-regular text-4xl pb-5">Hi! How are you today?</h1>
                <h1 className="abril-fatface-regular text-4xl">Welcome to my portfolio!</h1>


                <button className="outline-4 mt-10 rounded-full px-3 py-2 text-3xl font-bold hover:text-gray-400 hover:italic" onClick={() => setActiveDiv(false)}>
                    Enter
                </button>
            </div>
            <button className="absolute top-5 right-5 text-3xl hover:text-gray-400" onClick={() => setActiveDiv(false)}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
        </section>
    );
}