import { useEffect,useState} from "react";
import { FiGrid,FiUser,FiX,FiLayers } from "react-icons/fi"; 
import { MdTimeline,MdFace,MdPhp } from "react-icons/md"; 
import {timelineElement} from "../Components/timelineEle";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import { BsPersonWorkspace } from "react-icons/bs";

import Resume from "../assets/Resume.pdf"

import "react-vertical-timeline-component/style.min.css";

export default function Home(){
    


    useEffect(() => {
        const obsever = new IntersectionObserver((entries) =>{
            entries.forEach((entry) =>{
                if (entry.isIntersecting){
                    entry.target.classList.add('show');
                }else {
                    entry.target.classList.remove('show');
                }
            });
        });
        
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => obsever.observe(el));
    },[])

    let sections = document.querySelectorAll('section');
    let banLink = document.querySelectorAll('div banner a');

    window.onscroll = () => {
        sections.forEach(sec =>{
            let top =  window.screenY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                banLink.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('div banner a', 
                    '[href*='+id+']').classList.add('active');
                })
            }
        })
    }

    let workIconStyles = {background: "#df8b0b"};
    let schoolIconStyles = {background: "#df8b0b"};

    window.addEventListener("scroll",function(){
        var banner = document.querySelector(".banner");
        banner.classList.toggle("sticky", window.scrollY > 0 );
    })
    // const goTopBtn = document.querySelector('.go-top-btn');
    
    // window.addEventListener('scroll', checkHeeight)

    // function checkHeeight(){
    //     if(window.screenY > 200){
    //         goTopBtn.getElementsByClassName.display = "flex"
    //     }else {
    //         goTopBtn.getElementsByClassName.display = "none"
    //     }
    // }

    // goTopBtn.addEventListener('click', () =>{
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // })
    const track = document.getElementById("image-track")

    window.onmousedown = e =>{
        track.dataset.mouseDownAt = e.clientX;
    }
    window.onmouseup = () => {
        track.dataset.mouseDownAt ? "0" : ""
        track.dataset.prevPercentage ? track.dataset.percentage : ""
    }
    window.onmousemove = e =>{
        if(track.dataset.mouseDownAt === "0") {
            return;
        }
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX
        const maxDelta = window.innerWidth / 2
            
        const percentage = (mouseDelta / maxDelta ) * -100, nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage

        track.dataset.percentage ? nextPercentage : ""


        track.style.transform = `translate(${nextPercentage}%, -50%)`
    }
    return (
        <>
        {/* <button className="go-top-btn">
        <img src="/public/arrow_up.png" alt="arrow up" />
        </button> */}
        <div className="banner">
            <ul>
                <li className="list">
            <a href="#intro" className="active">
                <span className="icon"><MdFace /></span>
                <span className="text">Introduce</span>
            </a>
            </li>
            <li className="list">
            <a href="#time" >
                <span className="icon"><MdTimeline /></span>
                <span className="text">Timeline</span>
            </a>
            </li>
            <li className="list">
            <a href="#skills">
                <span className="icon"><FiLayers /></span>
                <span className="text">skills</span>
            </a>
            </li>
            <li className="list">
            <a href="#exper">
                <span className="icon"><FiUser /></span>
                <span className="text">Experience</span>
            </a>
            </li>
            <div className="indicator">
            </div>
            </ul>
        </div>
        <section className="hidden" id="intro">
            <div className="logo-banner">
            </div>
            {/* <div id="image-track" data-mouse-down-at="0" date-prev-percentage="0">
                <img className="image" src="https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" draggable="false"/>
                <img className="image" src="https://images.unsplash.com/photo-1683659635782-af84e4b67cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" draggable="false"/>
                <img className="image" src="https://images.unsplash.com/photo-1684516310710-463141e44242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" draggable="false"/>
                <img className="image" src="https://images.unsplash.com/photo-1683009427041-d810728a7cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" draggable="false"/>
                <img className="image" src="https://images.unsplash.com/photo-1682685796014-2f342188a635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" draggable="false"/>
                <img className="image" src="https://images.unsplash.com/photo-1682687220591-cfd91ab5c1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" draggable="false"/>
            
            </div> */}
            <div className="sec-text">
                <p>
                <h2>I'm</h2>
                    <span className="typed-text">
                    Developer..
                    </span>
                </p>
            </div>
            <h2>Introduce</h2>
            <p>My name is Sathaphon Khennamthieng</p>
        </section>

        <section className="hidden" id="time"> 
            <h2>Timeline</h2>
            <VerticalTimeline>
                {
                    timelineElement.map(element => {
                        let IsworkIcon = element.icon === "MdTimeline"
                        return(
                            <>
                            <VerticalTimelineElement 
                            key={element} 
                            date={element.date} 
                            dateClassName="date"
                            className="Timeline"
                            iconStyle={IsworkIcon ? workIconStyles: schoolIconStyles}
                            icon={IsworkIcon ? <MdTimeline/> : <MdFace/>}> 

                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h3 className="vertical-timeline-element-location">
                                {element.location}
                            </h3>
                            <h3 className="vertical-timeline-element-description">
                                {element.description}
                            </h3>
                            <h3 className="vertical-timeline-element-buttonText">
                                <a href={element.dataLink} target="_blank" className="timeline-butt">{element.buttonText}</a>
                            </h3>
                            

                            </VerticalTimelineElement>
                            </>
                        )
                    })
                }
            </VerticalTimeline>
        </section>

        <section className="hidden" id="skills">
            <h2>My skills</h2>
            <div className="skill-con">
                    <div className="box">
                        <img className="logos hidden" src="/src/assets/web.png" alt="" />
                        <h3>PHP</h3>
                        <p>intermediate</p>
                    </div>
                    <div className="box">
                        <img className="logos hidden" src="/src/assets/html-5.png" alt="" />
                        <h3>HTML</h3>
                        <p>Pre-Advanced</p>
                    </div>
                    <div className="box">
                        <img className="logos hidden" src="/src/assets/css-3.png" alt="" />
                        <h3>CSS</h3>
                        <p>Pre-Advanced</p>
                    </div>
                    <div className="box">
                        <img className="logos hidden" src="/src/assets/java.png" alt="" />
                        <h3>JAVASCRIPT</h3>
                        <p>intermediate</p>
                    </div>
                    <div className="box">
                        <img className="logos hidden" src="/src/assets/photoshop-camera.png" alt="" />
                        <h3>PHOTOSHOP</h3>
                        <p>Pre-Advanced</p>
                    </div>
                    <div className="box">
                        <img className="logos hidden" src="/src/assets/premiere.png" alt="" />
                        <h3>PREMIERE PRO</h3>
                        <p>Pre-Advanced</p>
                    </div>
                    <div className="box">
                        <img className="logos hidden" src="/src/assets/science.png" alt="" />
                        <h3>REACT</h3>
                        <p>intermediate</p>
                    </div>
                    <div className="box">
                        <img className="logos hidden" src="/src/assets/laravel.svg" alt="" />
                        <h3>LARAVEL</h3>
                        <p>intermediate</p>
                    </div>
                    <div className="box">
                        <img className="logos hidden" src="/src/assets/github.png" alt="" />
                        <h3>GITHUB</h3>
                        <p>intermediate</p>
                    </div>
            </div>
        </section>

        <section className="hidden" id="exper"> 
            <h2>EXPERIENCE</h2>
            <div className="con-per">
                <div className="box">
                    <div className="box-text">
                        <h1><img src="#" alt="" />-</h1>
                        <h2>System Developer</h2>
                        <p>พัฒนาเว็บใช้ภายในเว็บไซต์ ในรูปแบบเว็บไซต์การส่งฟอร์มอนุมัติและติดตามผล ระบบแจ้งเตือนผ่านอีเมลล์</p>
                    </div>
                </div>
                <div className="bar"></div>
                <div className="box">
                    <div className="box-text">
                        <h1><img src="#" alt="" />-</h1>
                        <h2>Coelum</h2>
                        <p>เว็บไซต์จัดงานศพที่มีวัดร่วมเป็นพาร์ทเนอร์ ด้วยรูปแบบการจองวัดและศาลาแบบออนไลน์</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className="hidden"> 
            <h2>Resume</h2>
            <p>This file Resume for open in pdf</p>
            <a href={Resume} download="Resume"><button className="Res-but">Resume</button></a>
        </section> */}
        </>

    )
}