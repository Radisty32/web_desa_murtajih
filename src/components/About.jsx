import React from "react";
import { siteData } from "../data/content";

const About = () => {
  const { about, hero } = siteData;

  return (
    <section id="profil" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="position-relative">
              <div className="ratio ratio-4x3 overflow-hidden rounded-4 shadow-lg">
                <img
                  src={hero.slides[0]} // Using the first slider image as feature image for now
                  alt="Desa Murtajih"
                  className="object-fit-cover w-100 h-100"
                />
              </div>
              <div className="position-absolute bottom-0 end-0 bg-warning p-3 rounded-start-4 text-white shadow">
                <h5 className="mb-0 fw-bold">Sejak 1800-an</h5>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="col-lg-7 ps-lg-5">
            <h2 className="display-5 fw-bold mb-3">{about.title}</h2>
            <div className="section-underline ms-0 mb-4"></div>
            <p className="lead text-muted mb-4">{about.subtitle}</p>
            <p className="mb-5 text-secondary" style={{ lineHeight: "1.8" }}>
              {about.history}
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm bg-white p-4 rounded-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-eye fs-2 text-primary me-2"></i>
                    <h5 className="fw-bold mb-0">Visi</h5>
                  </div>
                  <p className="text-secondary small mb-0">{about.visi}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm bg-primary text-white p-4 rounded-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-bullseye fs-2 text-warning me-2"></i>
                    <h5 className="fw-bold mb-0">Misi</h5>
                  </div>
                  <ul className="list-unstyled small mb-0">
                    {about.misi.map((item, index) => (
                      <li key={index} className="mb-2 d-flex">
                        <i className="bi bi-check-circle-fill text-warning me-2 mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
