import React from "react";
import { useEffect,useState } from "react";
import {FiChevronUp} from "react-icons/fi";
function BackToTop(){
    const [BackToTopButton, setBackToTopButton] = useState(false)

    useEffect (() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return(
        <>
        {BackToTopButton && (
            <button id="ads" onClick={scrollUp}><FiChevronUp/></button>
        )}
        </>
    )
}

export default BackToTop;