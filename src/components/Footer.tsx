// src/components/Footer.tsx
import React from "react";
import styles from "../pages/Home.module.css"; // Adjust path if needed

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}> Copyright
          &copy; 2024 Mahima Devi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
