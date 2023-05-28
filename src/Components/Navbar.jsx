import { Children, useState } from "react"
import { Link, useMatch, useResolvedPath } from  "react-router-dom"
import { FiMenu,FiX,FiHardDrive } from "react-icons/fi"; 

export default function Navbar(){

    const [click, setClick ] = useState(false)
    const handleClick = () => setClick (!click)
    const closeMobileMenu = () => setClick(false)
    return (
    <header>
        <div className="container">
            <nav className="nav">
            <Link to="/" className="site-title"><FiHardDrive /></Link>
            <ul className={click ? "active" : ""}>
                <Customlink to="/" onClick={closeMobileMenu}>Home</Customlink>
                <Customlink to="/pricing" onClick={closeMobileMenu}>Work</Customlink>
                <Customlink to="/about" onClick={closeMobileMenu}>Contact</Customlink>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <FiX />
                ): (
                    <FiMenu />
                )}
            </div>
        </nav>

        </div>
    </header>

    )
}

function Customlink({ to,children, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    // window.addEventListener("scroll",function(){
    //     var header = document.querySelector("header");
    //     header.classList.toggle("sticky", window.scrollY > 0);
    // })
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}