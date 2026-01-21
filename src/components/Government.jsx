import React from "react";

const Government = () => {
  const officials = [
    {
        name: "H. MOHAMMAD BAHARUDDIN",
        role: "KEPALA DESA",
        // Langsung tulis jalurnya sebagai teks, tanpa import
        img: "/perangkat_desa/kepala-desa.jpg",
    },
    {
      name: "Ahmad",
      role: "Sekretaris Desa",
      img: "https://ui-avatars.com/api/?name=Sekretaris&background=0D8ABC&color=fff",
    },
    {
      name: "Siti",
      role: "Kaur Keuangan",
      img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
    },
    {
      name: "Budi",
      role: "Kaur Umum",
      img: "https://ui-avatars.com/api/?name=Kaur+Umum&background=0D8ABC&color=fff",
    },
    {
        name: "NURUL KAMARIYAH, S.Pd",
        role: "STAF KASI KESEJATERAAN RAKYAT",
        // Langsung tulis jalurnya sebagai teks, tanpa import
        img: "/perangkat_desa/staf-kasi-kesejahteraan.jpg",
    },
    {
        name: "KHOSNOL HATIMAH",
        role: "KADUS MURTAJIH",
        // Langsung tulis jalurnya sebagai teks, tanpa import
        img: "/perangkat_desa/kadus-murtajih.jpg",
    },
  ];

  return (
    <section id="perangkat" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Pemerintahan Desa</h2>
            <div className="section-underline mx-auto"></div>
            <p className="lead">Government Structure</p>
          </div>
        </div>

        {/* Bagian yang sudah diperbaiki framenya */}
        <div className="row justify-content-center">
          {officials.map((official, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card-perangkat text-center shadow-sm h-100">
                <div className="img-container">
                  <img
                    src={official.img}
                    alt={official.name}
                    className="foto-perangkat"
                  />
                </div>
                <div className="info p-3">
                  <h6 className="fw-bold mb-1">{official.name}</h6>
                  <p className="text-primary small mb-0">{official.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Government;
