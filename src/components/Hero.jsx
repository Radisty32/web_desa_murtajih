import React, { useEffect, useState } from "react";
import { siteData } from "../data/content.js";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteData.hero.slides;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="beranda" className="hero-slider">
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
            <h1 className="display-4 fw-bold mb-4" dangerouslySetInnerHTML={{ __html: siteData.hero.title }} />
            <p className="lead mb-4">
              {siteData.hero.subtitle}
            </p>
            <a href="#profil" className="btn btn-warning btn-lg px-4 py-2">
              {siteData.hero.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
