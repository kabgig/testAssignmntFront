import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8C4 8 8 4 16 4C24 4 28 8 28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 16C4 16 8 12 16 12C24 12 28 16 28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 24C4 24 8 20 16 20C24 20 28 24 28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className={styles.brandText}>DiveSea</span>
        </div>

        <nav className={styles.links}>
          <a href="#" className={styles.link}>Privacy Policy</a>
          <a href="#" className={styles.link}>Term & Conditions</a>
          <a href="#" className={styles.link}>About Us</a>
          <a href="#" className={styles.link}>Contact</a>
        </nav>

        <div className={styles.copyright}>
          © 2023 DiveSea All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
