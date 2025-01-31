import "./Carousel.css";
import React, { useState } from "react";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const certificates = [
    {
      src: "./src/assets/cer1.png",
      alt: "Certificate1",
    },
    {
      src: "./src/assets/cer2.png",
      alt: "Certificate2",
    },
    {
      src: "./src/assets/cer3.png",
      alt: "Certificate3",
    },
    {
      src: "./src/assets/cer4.png",
      alt: "Certificate4",
    },
    {
      src: "./src/assets/cer5.png",
      alt: "Certificate5",
    },
    {
      src: "./src/assets/cer6.png",
      alt: "Certificate6",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length
    );
  };

  return (
    <div className="carousel-container" data-aos="flip-down">
      <div className="container-fluid mt-5" id="Certificates">
        <h1 className="project-title text-center fs-1 fw-bolder">Certificates</h1>
        <div className="lines"></div>
        <div className="container-fluid carousel-container image__container">
          <div className="carousel">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className={`carousel__item ${
                  index === currentIndex
                    ? "carousel__item--main"
                    : index ===
                      (currentIndex - 1 + certificates.length) % certificates.length
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
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"
                  />
                </svg>
              </button>
              <button className="carousel__btn" onClick={handleNext} id="rightBtn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
                  />
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
