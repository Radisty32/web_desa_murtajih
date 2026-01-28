import { useState, useEffect, useRef } from "react";
import { siteData } from "../data/content";

const Government = () => {
  const { officials } = siteData.government;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Calculate slides per view based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 992) {
        setSlidesPerView(3); // Desktop
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2); // Tablet
      } else {
        setSlidesPerView(1); // Mobile
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  // Calculate total slides needed
  const totalSlides = Math.ceil((officials.length - 1) / slidesPerView); // -1 because Kepala Desa is separate

  // Auto-play functionality REMOVED
  /*
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
    } else {
      clearInterval(autoPlayRef.current);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, totalSlides]);
  */

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    // setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    // setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
    // setIsAutoPlaying(false);
    // setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    // setIsAutoPlaying(false);
    // setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    // setIsAutoPlaying(false);
    // setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Get officials for current slide
  const getCurrentSlideOfficials = () => {
    const startIndex = currentSlide * slidesPerView;
    return officials.slice(1).slice(startIndex, startIndex + slidesPerView); // Skip Kepala Desa
  };

  return (
    <section id="perangkat" className="py-5 bg-alt">
      <div className="container">
        {/* Header Section */}
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Pemerintahan Desa</h2>
            <div className="section-underline mx-auto"></div>
            <p className="lead">Government Structure</p>
          </div>
        </div>

        {/* Kepala Desa Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <div className="kepala-desa-wrapper">
              <div className="kepala-desa-frame card-perangkat p-0 border-0 shadow">
                <img
                  src={officials[0].img}
                  alt={officials[0].name}
                  className="foto-perangkat"
                  style={{ maxWidth: "300px" }}
                />
                <div className="info p-3 bg-card">
                  <h5 className="fw-bold mb-1">{officials[0].name}</h5>
                  <p className="text-primary fw-bold mb-0">{officials[0].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Officials Slider */}
        <div className="officials-slider-container">
          <div className="slider-wrapper">
            <div
              className="officials-slider"
              ref={sliderRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="slider-slide">
                  <div className="row justify-content-center">
                    {officials.slice(1).slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView).map((official, index) => (
                      <div key={index} className={`col-${12 / slidesPerView} mb-4`}>
                        <div className="card-perangkat text-center shadow-sm h-100 border-0">
                          <div className="img-container">
                            <img
                              src={official.img}
                              alt={official.name}
                              className="foto-perangkat"
                              loading="lazy"
                            />
                          </div>
                          <div className="info p-3 bg-card">
                            <h6
                              className="fw-bold mb-1 text-uppercase"
                              style={{ fontSize: "0.85rem" }}
                            >
                              {official.name}
                            </h6>
                            <p className="text-primary small mb-0 fw-semibold">
                              {official.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              className="slider-arrow slider-arrow-prev"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="slider-arrow slider-arrow-next"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>

          {/* Dot Navigation */}
          <div className="slider-dots">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Government;
