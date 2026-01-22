import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Desa Murtajih. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
