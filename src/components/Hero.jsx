import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/images/slider/foto1.jpg", "/images/slider/foto2.jpg", "/images/slider/foto3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url('${slide}')` }}
        ></div>
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4">
              Selamat Datang di
              <br />
              <span className="text-warning">Desa Murtajih</span>
            </h1>
            <p className="lead mb-4">
              Menuju Desa Mandiri, Sejahtera, dan Berbudaya.
            </p>
            <a href="#profil" className="btn btn-warning btn-lg px-4 py-2">
              Jelajahi Desa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
