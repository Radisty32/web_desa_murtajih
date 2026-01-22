import { useState } from "react";
import { siteData } from "../data/content";

const Government = () => {
  const { officials } = siteData.government;
  const [visibleCount, setVisibleCount] = useState(5); // Show Kepala Desa + 4 others initially

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
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

        {/* Officials Grid */}
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

        {/* Other Officials Grid */}
        <div className="row justify-content-center">
          {officials.slice(1, visibleCount).map((official, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
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

        {/* Load More Button */}
        {visibleCount < officials.length && (
          <div className="row mt-4">
            <div className="col-12 text-center">
              <button
                onClick={handleLoadMore}
                className="btn btn-outline-primary rounded-pill px-4 py-2"
              >
                Lihat Lebih Banyak <i className="bi bi-chevron-down ms-2"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Government;
