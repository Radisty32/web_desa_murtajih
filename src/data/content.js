// 2. Deklarasikan siteData setelah import
export const siteData = {
  meta: {
    title: "Desa Murtajih - Smart Village",
    description:
      "Website Resmi Desa Murtajih, Kecamatan Pademawu, Kabupaten Pamekasan. Menuju Desa Mandiri, Sejahtera, dan Berbudaya.",
    keywords: "Desa Murtajih, Pamekasan, Pademawu, Desa Pintar, Smart Village, Website Desa",
    author: "Pemerintah Desa Murtajih"
  },
  navbar: {
    brand: "Desa Murtajih",
    links: [
      { label: "Beranda", href: "#beranda" },
      { label: "Profil", href: "#profil" },
      { label: "Pemerintahan", href: "#perangkat" },
      { label: "Layanan", href: "#services" },
      { label: "Galeri", href: "#galeri" },
      { label: "Kontak", href: "#kontak" },
    ],
  },
  hero: {
    title: "Selamat Datang di<br>Desa Murtajih",
    subtitle: "Menuju Desa Mandiri, Sejahtera, dan Berbudaya.",
    cta: "Jelajahi Desa",
    slides: [
      "/images/slider/foto1.jpg",
      "/images/slider/foto2.jpg",
      "/images/slider/foto3.jpg"
    ]
  },
  about: {
    title: "Tentang Kami",
    subtitle: "The Profile",
    history:
      "Desa Murtajih adalah salah satu desa di Kecamatan Pademawu, Kabupaten Pamekasan. Desa kami memiliki sejarah panjang dalam menjaga tradisi sekaligus beradaptasi dengan kemajuan teknologi.",
    visi: "Terwujudnya Desa Murtajih yang Mandiri, Aman, dan Sejahtera.",
    misi: [
      "Meningkatkan kualitas pelayanan publik.",
      "Mengembangkan potensi ekonomi lokal.",
      "Menjaga kelestarian lingkungan dan budaya.",
    ],
  },
  government: {
    title: "Pemerintahan Desa",
    subtitle: "Government Structure",
    officials: [
      {
        name: "H. MOHAMMAD BAHARUDDIN",
        role: "KEPALA DESA",
        img: "/perangkat_desa/kepala-desa.jpg",
      },
      {
        name: "SUDAHNAN SAFRAJI, ST",
        role: "SEKERTARIS DESA",
        img: "https://ui-avatars.com/api/?name=Sekretaris&background=0D8ABC&color=fff",
      },
      {
        name: "TSUROYYA ALIYAH",
        role: "KAUR TATA USAHA/UMUM",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
      },
      {
        name: "FITRIATUS SHOLIHAH, S.Pd",
        role: "KAUR KEUANGAN",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
      },
      {
        name: "FAHRUR ROSIANTO",
        role: "KAUR PERENCANAAN",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
      },
      {
        name: "SYARIFATUL LAILI, S.Pd",
        role: "KASI PEMERINTAHAN",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
      },
      {
        name: "CHAIRIL FAJAR, SE",
        role: "KASI KESEJAHTERAAN RAKYAT",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
      },
      {
        name: "NURUL KAMARIYAH, S.Pd",
        role: "STAF KASI KESEJATERAAN RAKYAT",
        img: "/perangkat_desa/staf-kasi-kesejahteraan.jpg",
      },
      {
        name: "M. MUDHAR, S.Pd",
        role: "KASI PELAYANAN",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
      },
      {
        name: "IKHWAN MAULANA, S.Pd",
        role: "STAF KASI PELAYANAN",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
      },
      {
        name: "KHOSNOL HATIMAH",
        role: "KADUS MURTAJIH",
        img: "/perangkat_desa/kadus-murtajih.jpg",
      },
      {
        name: "RONI CAHYONO, S.Pd",
        role: "KADUS SOLOH DAJAH",
        img: "/perangkat_desa/kadus-soloh-dajah.jpg",
      },
      {
        name: "NURUL ALIMUDDIN, S.Pd",
        role: "KADUS SOLOH TIMUR",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
      },
      {
        name: "MOHAMMAD NOER FAISAL",
        role: "KADUS NANGGIRIK",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
      },
      {
        name: "ABD. HALIM",
        role: "KADUS SOLOH LAOK",
        img: "https://ui-avatars.com/api/?name=Kaur+Keuangan&background=0D8ABC&color=fff",
      },
      {
        name: "ELLY FITRIASIH",
        role: "KADUS OBERAN",
        img: "/perangkat_desa/kadus-oberan.jpg",
      },
      {
        name: " SRI SUHARTATIK",
        role: "KADUS TELAGA SARI",
        img: "/perangkat_desa/kadus-telaga-sari.jpg",
      },
      {
        name: "MUHLIS ADI PUTRA",
        role: "KADUS PAO GADING",
        img: "/perangkat_desa/kadus-pao-gading.jpg",
      },
    ],
  },
  services: {
    title: "Layanan Warga",
    subtitle: "Public Services",
    items: [
      {
        icon: "bi-file-earmark-text",
        title: "Administrasi Kependudukan",
        desc: "Pengurusan KTP, KK, dan Surat Pindah.",
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
    ],
  },
  gallery: {
    title: "Galeri Desa",
    subtitle: "Gallery",
    images: [
      { id: 1, year: "2025", img: 1011 },
      { id: 2, year: "2025", img: 1012 },
      { id: 3, year: "2025", img: 1013 },
      { id: 4, year: "2026", img: 1014 },
      { id: 5, year: "2026", img: 1015 },
      { id: 6, year: "2026", img: 1016 },
    ],
  },
  news: {
    title: "Berita Desa",
    subtitle: "Latest News",
    items: [
      {
        judul: "Kerja Bakti Desa",
        tanggal: "15/01/2026",
        isi: "Warga desa melakukan kerja bakti membersihkan saluran air.",
      },
      {
        judul: "Penyuluhan Kesehatan",
        tanggal: "10/01/2026",
        isi: "Posyandu mengadakan penyuluhan gizi buruk untuk balita.",
      },
    ],
  },
  contact: {
    title: "Hubungi Kami",
    subtitle: "Contact Us",
    address: "Jl. Raya Murtajih, Desa Murtajih, Kec. Pademawu, Kab. Pamekasan",
    phone: "+62 821-3538-6707",
    email: "murtajih.desa2017@gmail.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.6494434303295!2d113.50587867403944!3d-7.166461670316632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd77dbdf18f8727%3A0x80bdb184246562cd!2sBalai%20Desa%20Murtajih.!5e0!3m2!1sid!2sid!4v1768721835953!5m2!1sid!2sid"
  },
  footer: {
    text: "© 2026 Desa Murtajih. All rights reserved.",
  },
};
