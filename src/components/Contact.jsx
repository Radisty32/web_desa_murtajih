import React from "react";
import { siteData } from "../data/content";

const Contact = () => {
  return (
    <section id="kontak" className="py-5 bg-alt">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Hubungi Kami</h2>
            <div className="section-underline"></div>
            <p className="lead">Contact Us</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-custom p-4">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="fw-bold mb-3">Informasi Kontak</h5>
                  <p>
                    <i className="bi bi-geo-alt-fill text-warning me-2"></i>
                    {siteData.contact.address}
                  </p>
                  <p>
                    <i className="bi bi-telephone-fill text-warning me-2"></i>
                    {siteData.contact.phone}
                  </p>
                  <p>
                    <i className="bi bi-envelope-fill text-warning me-2"></i>
                    <a href={`mailto:${siteData.contact.email}`} className="text-primary text-decoration-none">
                      {siteData.contact.email}
                    </a>
                  </p>
                  <div className="mt-3">
                    <h6 className="fw-bold mb-2">Ikuti Kami</h6>
                    <div className="d-flex gap-3">
                      <a
                        href={siteData.contact.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warning"
                      >
                        <i className="bi bi-instagram fs-4"></i>
                      </a>
                      <a
                        href={siteData.contact.social.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warning"
                      >
                        <i className="bi bi-tiktok fs-4"></i>
                      </a>
                      <a
                        href={siteData.contact.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warning"
                      >
                        <i className="bi bi-youtube fs-4"></i>
                      </a>
                      <a
                        href={siteData.contact.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warning"
                      >
                        <i className="bi bi-facebook fs-4"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nama"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Pesan"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-warning">
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>

              {/* Map Section */}
              <div className="row mt-4">
                <div className="col-12">
                  <div className="ratio ratio-21x9 rounded overflow-hidden shadow-sm">
                    <iframe
                      src={siteData.contact.mapUrl}
                      title="Peta Lokasi Desa Murtajih"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
