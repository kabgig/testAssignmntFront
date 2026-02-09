'use client';

import { useState } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8C4 8 8 4 16 4C24 4 28 8 28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 16C4 16 8 12 16 12C24 12 28 16 28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 24C4 24 8 20 16 20C24 20 28 24 28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className={styles.logoText}>DiveSea</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <a href="#" className={`${styles.navLink} ${styles.active}`}>DISCOVER</a>
          <a href="#" className={styles.navLink}>CREATORS</a>
          <a href="#" className={styles.navLink}>SELL</a>
          <a href="#" className={styles.navLink}>STATS</a>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <button 
            className={styles.closeButton}
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
          <nav className={styles.mobileNav}>
            <a href="#" className={styles.mobileNavLink} onClick={toggleMenu}>DISCOVER</a>
            <a href="#" className={styles.mobileNavLink} onClick={toggleMenu}>CREATORS</a>
            <a href="#" className={styles.mobileNavLink} onClick={toggleMenu}>SELL</a>
            <a href="#" className={styles.mobileNavLink} onClick={toggleMenu}>STATS</a>
          </nav>
        </div>
      )}
    </header>
  );
}
