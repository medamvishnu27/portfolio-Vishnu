import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaDatabase, FaReact,  FaBootstrap, FaGithub, FaCodeBranch, FaLeaf } from 'react-icons/fa';
import { TbBrandRedux } from "react-icons/tb";
import "./about.css"

const About = () => {

  return (
    <>
    <div className="container-fluid my-2" data-aos="fade-up-right">

      <div className="section mx-5">
        <div className="row">
          <div className="col-md-6 section-text">
            <h1 className='fw-bolder fs-1 mb-3'>I love being a <br /> <span className='about-span'>developer!</span></h1>
            <p className='fs-5 text-black'>I'm a Full-Stack Developer passionate about building and managing both the front-end and back-end of websites and web applications, ensuring seamless functionality and delivering impactful user experiences. Check out some of my work in the Projects section.</p>
            <p className='fs-5 text-black'>I also enjoy sharing content about the knowledge and skills I've gained over the years in web development and programming. My goal is to support the developer community by providing valuable insights and resources. Feel free to connect with me on Linkedin or follow me on Instagram, where I regularly post useful content related to web development, programming, and the tech industry.</p>
            <p className='fs-5 text-black'>I'm actively seeking job opportunities where I can contribute, learn, and grow. If you have an opportunity that aligns with my skills and experience, please don't hesitate to reach out. Let's build something amazing together!</p>
        
            <div className="stats">
              <div className="stat">
                <h3 className='text-warning fw-bold'>13</h3>
                <p className='fs-5 text-black'>Completed projects</p>
              </div>
              <div className="stat">
                <h3 className='text-warning fw-bold'>10</h3>
                <p className='fs-5 text-black'>Positive reviews</p>
              </div>
            </div>
          </div>
         
          <div className="col-12 col-sm-6 col-md-6 col-lg-6  section-image">
            <img src="./src/assets/aboutimg.webp" alt="Developer Image" className='about-img' />
          </div>
        </div>
      </div>


      <div className="skills-container mx-5">
        <div className="row">
          <div className="col-md-6 skills-section">
            <h2 className='text-center fw-bolder fs-1'>Skills</h2>
            <p className='text-black'>Here you can see my skills, one of the fascinations of the computer world is the momentary changes of technologies, but I try to update my knowledge every day and experience new technologies.</p>
            <div className="skill-badges">
              <div className="skill-badges ">
                <span className="badge p-3 fs-5" style={{ color: '#E34F26' ,} }><FaHtml5 /> HTML</span>
                <span className="badge p-3  fs-5" style={{ color: '#1572B6' }}><FaCss3Alt /> CSS</span>
                <span className="badge p-3  fs-5" style={{ color: '#F7DF1E' }}><FaJsSquare /> JavaScript</span>
                <span className="badge p-3  fs-5" style={{ color: '#007396' }}><FaJava /> Java</span>
                <span className="badge p-3  fs-5" style={{ color: '#4479A1' }}><FaDatabase /> MySQL</span>
                <span className="badge p-3  fs-5" style={{ color: '#61DAFB' }}><FaReact /> React.js</span>
                <span className="badge p-3  fs-5" style={{ color: '#764ABC' }}><TbBrandRedux /> Redux</span>
                <span className="badge p-3  fs-5" style={{ color: '#563D7C' }}><FaBootstrap /> Bootstrap</span>
                <span className="badge p-3 fs-5" style={{ color: '#181717' }}><FaGithub /> GitHub</span>
                <span className="badge p-3  fs-5" style={{ color: '#E44D27' }}><FaCodeBranch /> GitLens</span>
                <span className="badge p-3 fs-5" style={{ color: '#6DB33F' }}><FaLeaf /> Spring Boot</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 language-section">
            <h2 className='text-center fw-bolder fs-1'>Language skill</h2>
            <p className='text-black'>One of my hobbies is studying and learning languages. I try to be able to learn and use my favorite languages.</p>
            <div className="language-cards">
              <div className="languagecard">
                <div className="percentage">99%</div>
                <div className="languages">telugu</div>
              </div>
              <div className="languagecard">
                <div className="percentage">70%</div>
                <div className="languages">English</div>
              </div>
              <div className="languagecard">
                <div className="percentage">50%</div>
                <div className="languages">Hindi</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
      
   
    </>
    
  
  
  )
}

export default About