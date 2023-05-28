import Resume from "../assets/Resume.pdf"
import {MdSmartphone,MdEmail,MdFacebook} from "react-icons/md"
export default function About(){

    return (
        <>
        <div className="container-contact">
        <h1>Contact</h1>
        <section id="page-header" className="container-card">
            <div className="contact-card">
                <div className="box-card">
                    <div className="box-card-text">
                        <div className="contact-card-text">
                        <h2>
                        <a href="tel:">Tel: 061-846-8205 <MdSmartphone /></a>
                        </h2>
                        <h2>
                        <a href="mailto:Kennamthieng_S@su.ac.th"> E-mail: Kennamthieng_S@su.ac.th <MdEmail /></a>
                        </h2>
                        <h2>
                        <a href="https://www.facebook.com/nashii.sashioka/" target="_blank">  Facebook: Diss Sataporn <MdFacebook /></a>
                        </h2>
                        <br />
                        <a href={Resume} download="Resume"><button className="Res-but">Resume</button></a>
                        </div>
                        {/* <div className="input-card-text">
                            <input type="text" name="" id="" /><span>Company</span>
                        </div>
                        <div className="input-card-text">
                        <input type="text" name="" id="" /><span>Name</span>
                        </div>
                        <div className="input-card-text">
                        <input type="text" name="" id="" /><span>Contact Number</span>
                        </div> */}
                        <br />
                    </div>
                </div>
            </div>
        </section>
        </div>
        </>
    )
}