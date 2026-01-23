import React, { useEffect, useState, useRef } from "react";
import * as bootstrap from "bootstrap";
import { siteData } from "../data/content";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#beranda");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { brand, links } = siteData.navbar;

  const menuRef = useRef(null);
  const bsCollapse = useRef(null);

  useEffect(() => {
    // 1. Theme Logic
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // 2. Initialize Bootstrap Collapse
    if (menuRef.current) {
      bsCollapse.current = new bootstrap.Collapse(menuRef.current, {
        toggle: false,
      });
    }

    // 3. Scroll Spy Logic
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (bsCollapse.current) {
        bsCollapse.current.dispose();
      }
    };
  }, [links, theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleMenuToggle = () => {
    if (bsCollapse.current) {
      bsCollapse.current.toggle();
    }
  };

  const handleLinkClick = (href) => {
    setActiveLink(href);
    if (bsCollapse.current) {
      bsCollapse.current.hide();
    }
  };

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

        <div className="d-flex align-items-center gap-3">
          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler text-white border-0"
            type="button"
            onClick={handleMenuToggle}
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list fs-2"></i>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="menu" ref={menuRef}>
          <ul className="navbar-nav ms-auto align-items-center">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <a
                  className={`nav-link ${activeLink === link.href ? "active" : ""}`}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Theme Toggle Button */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <button
                onClick={toggleTheme}
                className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: "40px", height: "40px", borderColor: "rgba(255,255,255,0.2)" }}
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <i className="bi bi-moon-stars-fill text-warning"></i>
                ) : (
                  <i className="bi bi-sun-fill text-warning"></i>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
