import { Children, useState } from "react"
import { MdCopyright } from "react-icons/md"; 

export default function Footer(){

    const [click, setClick ] = useState(false)
    return (
    <>
        <div className="container-footer">
            <nav className="footer">
            <ul>
                <li>
                    <MdCopyright />
                </li>
                <li>
                    S-Portfolio
                </li>
                <li>
                    2023
                </li>
            </ul>
        </nav>

        </div>
    </>

    )
}