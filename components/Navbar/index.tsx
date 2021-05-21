/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import { animated, Spring } from 'react-spring';
import styles from './styles/Navbar.module.scss';
// images
import LogoUda from '../../public/images/logo/Logouda';

export default function Navbar({ visitedPages }) {
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
            {(visitedPages.arte && visitedPages.storia && visitedPages.scienze && visitedPages.religione) && <Spring
              loop
              from={{ opacity: 1, color: 'red' }}
              to={[
                { opacity: 1, color: '#ffaaee' },
                { opacity: 1, color: 'yellow' },
                { opacity: 1, color: 'lightblue' },
                { opacity: 1, color: 'purple' },
                { opacity: 1, color: 'green' },
                { opacity: 1, color: 'red' },
              ]}>
              {(transformation) => (
                <div className={styles.title}>
                  <animated.div style={transformation}>
                    <Link href='/credits'><p className={styles.credits}>Crediti</p></Link>
                  </animated.div>
                </div>
              )}
            </Spring>}

          </div>
        </div>
      </div>}
    </>
  );
}
