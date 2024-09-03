// src/components/Navbar.tsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar: React.FC = () => {
  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>MahiJs</div>
      <div style={navLinksStyle}>
        <a
          href="https://github.com/mahimadevi"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          aria-label="GitHub"
        >
          <FaGithub style={iconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/mahima-devi"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          aria-label="LinkedIn"
        >
          <FaLinkedin style={iconStyle} />
        </a>
      </div>
    </nav>
  );
};

const navbarStyle: React.CSSProperties = {
  backgroundColor: "#282c34",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
};

const logoStyle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
};

const navLinksStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
};

const linkStyle: React.CSSProperties = {
  color: "#61dafb",
  textDecoration: "none",
};

const iconStyle: React.CSSProperties = {
  fontSize: "24px",
};

export default Navbar;
