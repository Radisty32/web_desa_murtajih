import React, { useState, useMemo } from "react";
import { siteData } from "../data/content";

const Gallery = () => {
  const galleryData = siteData.gallery.images;
  const [selectedYear, setSelectedYear] = useState("Semua");
  const [selectedMonth, setSelectedMonth] = useState("Semua");
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Get unique years and months for filter options
  const years = useMemo(() => {
    const uniqueYears = [...new Set(galleryData.map((item) => item.year))];
    return uniqueYears.sort((a, b) => b - a); // Sort descending
  }, [galleryData]);

  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const openModal = (images, title) => {
    const imgArray = Array.isArray(images) ? images : [images];
    setModalImages(imgArray);
    setModalTitle(title);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  // Filter Logic
  const filteredImages = galleryData.filter((item) => {
    const yearMatch = selectedYear === "Semua" || item.year === selectedYear;
    const monthMatch = selectedMonth === "Semua" || item.month === selectedMonth;
    return yearMatch && monthMatch;
  });

  // Reset visibleCount when filters change
  React.useEffect(() => {
    setVisibleCount(3);
  }, [selectedYear, selectedMonth]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleShowLess = () => {
    setVisibleCount(3);
    const gallerySection = document.getElementById("galeri");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="galeri" className="py-5 bg-alt">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Galeri Desa</h2>
            <div className="section-underline"></div>
            <p className="lead">Gallery</p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <select
                className="form-select w-auto shadow-sm"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="Semua">Semua Tahun</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                className="form-select w-auto shadow-sm"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option value="Semua">Semua Bulan</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="row">
          {filteredImages.length > 0 ? (
            filteredImages.slice(0, visibleCount).map((item) => {
              const imgSrc = Array.isArray(item.img) ? item.img[0] : (typeof item.img === "string" ? item.img : `https://picsum.photos/400/300?random=${item.img}`);
              const hasMultiple = Array.isArray(item.img) && item.img.length > 1;
              return (
                <div key={item.id} className="col-md-4 mb-4">
                  <div className="card-custom hover-zoom h-100" onClick={() => openModal(item.img, item.title)} style={{ cursor: "pointer" }}>
                    <div style={{ overflow: "hidden", borderRadius: "16px 16px 0 0", position: "relative" }}>
                      <img
                        src={imgSrc}
                        alt={item.title}
                        className="card-img-top"
                        style={{ transition: "transform 0.5s ease", height: "250px", objectFit: "cover" }}
                      />
                      {hasMultiple && (
                        <div style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          background: "rgba(0,0,0,0.7)",
                          color: "white",
                          padding: "2px 8px",
                          borderRadius: "12px",
                          fontSize: "0.8rem"
                        }}>
                          <i className="bi bi-images me-1"></i>{item.img.length}
                        </div>
                      )}
                    </div>
                    <div className="card-body text-center p-3">
                      <h5 className="fw-bold mb-1" style={{ fontSize: "1.1rem" }}>{item.title}</h5>
                      <p className="text-secondary small mb-0">
                        <i className="bi bi-calendar-event me-1 text-warning"></i>
                        {item.month} {item.year}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center py-5">
              <div className="alert alert-light border-0 shadow-sm d-inline-block px-5">
                <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
                <p className="mb-0 text-muted">Tidak ada foto ditemukan untuk filter ini.</p>
              </div>
            </div>
          )}
        </div>

        {/* Load More Button / Show Less Button */}
        {filteredImages.length > 3 && (
          <div className="row mt-4">
            <div className="col-12 text-center">
              {visibleCount < filteredImages.length ? (
                <button className="btn btn-outline-primary px-5 rounded-pill hover-scale" onClick={handleLoadMore}>
                  Lihat Lebih Banyak <i className="bi bi-arrow-down ms-2"></i>
                </button>
              ) : (
                <button className="btn btn-outline-danger px-5 rounded-pill hover-scale" onClick={handleShowLess}>
                  Lihat Lebih Sedikit <i className="bi bi-arrow-up ms-2"></i>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Modal for Image Carousel */}
        {showModal && (
          <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.8)" }} onClick={closeModal}>
            <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{modalTitle}</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body p-0">
                  <div className="position-relative">
                    <img
                      src={modalImages[currentImageIndex]}
                      alt={`${modalTitle} ${currentImageIndex + 1}`}
                      className="img-fluid w-100"
                      style={{ maxHeight: "70vh", objectFit: "contain" }}
                    />
                    {modalImages.length > 1 && (
                      <>
                        <button
                          className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
                          onClick={prevImage}
                          style={{ zIndex: 10 }}
                        >
                          <i className="bi bi-chevron-left"></i>
                        </button>
                        <button
                          className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
                          onClick={nextImage}
                          style={{ zIndex: 10 }}
                        >
                          <i className="bi bi-chevron-right"></i>
                        </button>
                        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                          <div className="d-flex gap-2">
                            {modalImages.map((_, index) => (
                              <button
                                key={index}
                                className={`btn btn-sm ${index === currentImageIndex ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => setCurrentImageIndex(index)}
                              >
                                {index + 1}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
