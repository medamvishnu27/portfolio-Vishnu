import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media-links mx-5">
        <a href="https://www.linkedin.com/in/vishnuvardhan-reddy-medam/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/medamvishnu27" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
          <FaTwitter /> 
        </a>
      </div>
      <div className="copyright mx-5">
        Made with ❤️ and All rights reserved © VishnuVRM 2025 
      </div>
    </div>
  );
};

export default Footer;
