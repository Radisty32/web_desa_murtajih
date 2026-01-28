import React from "react";

const Services = () => {
  const services = [
    {
      icon: "bi-file-earmark-text",
      title: "Administrasi Kependudukan",
      desc: "Pengurusan Akte Kelahiran, KK, dan Surat Pindah.",
    },
    {
      icon: "bi-envelope-paper",
      title: "Surat Pengantar",
      desc: "Surat pengantar SKCK, Nikah, dan Domisili.",
    },
    {
      icon: "bi-chat-dots",
      title: "Aduan Masyarakat",
      desc: "Sampaikan aspirasi dan keluhan Anda secara langsung.",
    },
  ];

  return (
    <section id="services" className="py-5 bg-alt">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Layanan Warga</h2>
            <div className="section-underline"></div>
            <p className="lead">Public Services</p>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="card-custom text-center p-4"
                style={
                  service.title === "Aduan Masyarakat"
                    ? { cursor: "pointer" }
                    : {}
                }
                onClick={
                  service.title === "Aduan Masyarakat"
                    ? () =>
                        document
                          .getElementById("kontak")
                          .scrollIntoView({ behavior: "smooth" })
                    : undefined
                }
              >
                <i className={`bi ${service.icon} fs-1 text-warning mb-3`}></i>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
