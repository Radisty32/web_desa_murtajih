import React, { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";
import { siteData } from "../data/content";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#beranda");
  const { brand, links } = siteData.navbar;

  useEffect(() => {
    // 1. Mobile Menu Logic
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        const menu = document.getElementById("menu");
        if (menu && menu.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
      });
    });

    // 2. Scroll Spy Logic
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for fixed navbar

      links.forEach((link) => {
        const sectionId = link.href.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveLink(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom fixed-top"
      aria-label="Main Navigation"
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#beranda">
          <span className="judul-desa fw-bold">
            <span className="text-gold">DESA</span>
            <span className="text-white">MURTAJIH</span>
          </span>
        </a>

        <button
          className="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <i className="bi bi-list fs-2"></i>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto align-items-center">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <a
                  className={`nav-link ${activeLink === link.href ? "active" : ""}`}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
