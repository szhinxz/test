import React, { useEffect } from "react";
import { preLoaderAnim } from "../animation/index";
import './preloader.css';

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim()
    })
    return(
        <>
        <div className="preloader">
            <div className="texts-container">
                <span>Loading</span>
                <span>Loading</span>
                <span>Loading</span>
            </div>
        </div>
        </>
    )
}

export default PreLoader;