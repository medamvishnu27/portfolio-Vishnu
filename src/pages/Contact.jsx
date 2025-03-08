import React from 'react';
// import './Contact.css';
import { FaMapMarkedAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { CiMobile3 } from "react-icons/ci";
import gradientImage from '/public/gradient3.png';

const Contact = () => {
  function Alert(){
    alert("Hello 👋! your Message is sent 📩 ")
  }
  return (
    <div className="contact-container" >
      <h2 className='fs-1 fw-bold'>Get In Touch</h2>
      <p className='fs-5 mb-5 text-white'>
        Here you can let me know if you have any  suggestion or problem, <br />
        I'm waiting to hear your voice or see your message.
      </p>

      <div className="card-container" data-aos="fade-down">
        <div className="form-card " style={{ backgroundImage: `url(${gradientImage})` }}>
          <h3 className='fw-bold'>What's up?</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name (required)</label>
              <input type="text" id="name" placeholder="Full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email (required)</label>
              <input type="email" id="email" placeholder="Email address" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject (required)</label>
              <input type="text" id="subject" placeholder="Subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="comment">Comment (required)</label>
              <textarea id="comment" placeholder="Type comment" required></textarea>
            </div>

           

            <button type="submit" className="contact-btn btn-lg" onClick={()=>Alert()}>Contact Me</button>
          </form>
        </div>

        <div className="form-right  ">
          <h3 className='fw-bold fs-2 text-black'>What is your plan? <br /> Call me</h3>
          <p className='fs-5 text-black'>
            You can get my contact information here and if you like, you can see the
            URLs of my pages on social networks from the top of the page and find
            me there.
          </p>

          <div className="contact-info ">
            <p className='text-black'> <span className='text-warning fs-3'> <FaMapMarkedAlt/> </span>Hyderabad Telangana ,India.</p>
            <p className='text-black '> <span className='text-warning fs-5'> <TiMessages/>  </span> medamvishnu27@gmail.com</p>
            <p className='text-black'>  <span className='text-warning fs-3'> <CiMobile3/>  </span> +919618442738</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;