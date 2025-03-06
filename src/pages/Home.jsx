import React, { useState, useEffect } from 'react';
import './Home.css'; // Assuming a separate CSS file for Home styles
import { Link, NavLink } from 'react-router-dom';
import { MdSimCardDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import Footer from '../component/Footer';
import Education from './Education';
import About from './About';
import Certificates from './Certificates';
import Contact from './Contact';
import Projects from './Projects';
import profilepic from "../assets/img-1.png";


const Home = () => {

    function direction(){
        to="/contact"
    }
    const [title, setTitle] = useState('Full Stack ');

    useEffect(() => {
        const titles = ['Full Stack ', 'Frontend ', 'Backend '];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % titles.length;
            setTitle(titles[index]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = 'public/Vishnu_Vardhan_Reddy_CV.pdf'; // Update with the actual path to the resume
        link.download = 'Resume_VishnuVardhanReddy.pdf'; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
        <div className="home mx-5" data-aos="fade-down">
            <div className="home-container">
                <div className="image-column mx-5">
                    <img src={profilepic} alt="User" className="user-image" />
                </div>
                <div className="content-column my-5 mx-5">
                    <h1 className='fs-1 fw-bold'>Hey 👋</h1>
                    <h2 className='profile-name fs-1'>I'm Vishnu Vardhan Reddy Medam</h2>
                    <h3 className='profile-tilte fs-1 fw-bold'><span className='Home-text-title'>{title}</span> Developer</h3>
                    <h6 className='fs-5 fw-light '>A passionate and detail-oriented software developer with a solid academic background in Electronics & Communication Engineering and hands-on experience in creating user-friendly web and software applications. My goal is to contribute to impactful projects while continuously learning and growing as a developer.</h6>
                    <div className='home-button-container mx-5'>
                    <Link to="/contact"><button className="contact-button  my-4 " to="/contact"> <span className=" mx-1 fs-5 "> <RiContactsFill/></span> Contact me</button></Link>
                    <button className="resume-button mx-1" onClick={downloadResume}> <span className="  fs-5"> <MdSimCardDownload/> </span>  Download Resume</button>
                    </div>
            
                </div>
            </div>
        </div>
        <About/>
        <Certificates />
        <Projects/>
       
        

     
        <Education/>
        <Contact />
        <Footer/>
        </>
    );
};

export default Home;
