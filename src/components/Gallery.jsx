import React, { useState, useMemo } from "react";
import { siteData } from "../data/content";

const Gallery = () => {
  const galleryData = siteData.gallery.images;
  const [selectedYear, setSelectedYear] = useState("Semua");
  const [selectedMonth, setSelectedMonth] = useState("Semua");

  // Get unique years and months for filter options
  const years = useMemo(() => {
    const uniqueYears = [...new Set(galleryData.map((item) => item.year))];
    return uniqueYears.sort((a, b) => b - a); // Sort descending
  }, [galleryData]);

  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  // Filter Logic
  const filteredImages = galleryData.filter((item) => {
    const yearMatch = selectedYear === "Semua" || item.year === selectedYear;
    const monthMatch = selectedMonth === "Semua" || item.month === selectedMonth;
    return yearMatch && monthMatch;
  });

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
            filteredImages.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card-custom hover-zoom h-100">
                  <div style={{ overflow: "hidden", borderRadius: "16px 16px 0 0" }}>
                    <img
                      src={`https://picsum.photos/400/300?random=${item.img}`}
                      alt={item.title}
                      className="card-img-top"
                      style={{ transition: "transform 0.5s ease", height: "250px", objectFit: "cover" }}
                    />
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
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <div className="alert alert-light border-0 shadow-sm d-inline-block px-5">
                <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
                <p className="mb-0 text-muted">Tidak ada foto ditemukan untuk filter ini.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
