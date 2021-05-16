import React from 'react';
import Link from 'next/link';
import styles from './styles/Navbar.module.scss';
// images
import LogoUda from '../../public/images/logo/Logouda';

export default function Navbar() {
  return (
    <>
      {<div className={styles.navbarExternalContainer}>
        <div className={styles.navbarContainer}>
          <div className={styles.left} style={{ cursor: 'pointer' }}>
            <LogoUda />
          </div>
          <div className={styles.center}>
            <Link href='/storia'><p className={styles.textLink}>Storia</p></Link>
            <Link href='/scienze'><p className={styles.textLink}>Scienze</p></Link>
            <Link href='/arte'><p className={styles.textLink}>Arte</p></Link>
            <Link href='/religione'><p className={styles.textLink}>Religione</p></Link>
            <Link href='/home'><p className={styles.textLink}>Home</p></Link>
          </div>
        </div>
      </div>}
    </>
  );
}
