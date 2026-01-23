import React from "react";
import { siteData } from "../data/content";

const About = () => {
  const { about } = siteData;

  return (
    <section id="profil" className="py-5 bg-alt">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">{about.title}</h2>
              <div className="section-underline mx-auto mb-4"></div>
              <p className="lead text-muted">{about.subtitle}</p>
            </div>

            <p className="mb-5 text-secondary text-center" style={{ lineHeight: "1.8" }}>
              {about.history}
            </p>

            <div className="row g-4 justify-content-center">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm bg-card p-4 rounded-4">
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
