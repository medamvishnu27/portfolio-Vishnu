import "./Carousel.css";
import React, { useState, useEffect } from "react";
import cer1 from "../assets/cer1.png";
import cer2 from "../assets/cer2.png";
import cer3 from "../assets/cer3.png";
import cer4 from "../assets/cer4.png";
import cer5 from "../assets/cer5.png";
import cer6 from "../assets/cer6.png";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const certificates = [
    { src: cer1, alt: "Certificate1" },
    { src: cer2, alt: "Certificate2" },
    { src: cer3, alt: "Certificate3" },
    { src: cer4, alt: "Certificate4" },
    { src: cer5, alt: "Certificate5" },
    { src: cer6, alt: "Certificate6" },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length
    );
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  return (
    <div className="carousel-container" data-aos="flip-down">
      <div className="container-fluid mt-5" id="Certificates">
        <h1 className="project-title text-center fs-1 fw-bolder">Certificates</h1>
        <div className="lines"></div>
        <div
          className="container-fluid carousel-container image__container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="carousel">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className={`carousel__item ${
                  index === currentIndex
                    ? "carousel__item--main"
                    : index === (currentIndex - 1 + certificates.length) % certificates.length
                    ? "carousel__item--left"
                    : "carousel__item--right"
                }`}
              >
                <img src={certificate.src} alt={certificate.alt} />
              </div>
            ))}
            <div className="carousel__btns">
              <button className="carousel__btn" onClick={handlePrev} id="leftBtn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z" />
                </svg>
              </button>
              <button className="carousel__btn" onClick={handleNext} id="rightBtn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
