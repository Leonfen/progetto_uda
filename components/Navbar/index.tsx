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
            <Link href='/italiano'><p className={styles.textLink}>Italiano</p></Link>
            <Link href='/religione'><p className={styles.textLink}>Religione</p></Link>
            <Link href='/home'><p className={styles.textLink}>Home</p></Link>
          </div>

        </div>
      </div>}
    </>
  );
}
/*
<div className={styles.right}>
            <Link href='/download'><button className={styles.downloadButton}>Download</button></Link>
            <button className={styles.menuButton} onClick={() => setShowmenu(true)}>
              <svg viewBox="0 0 100 80" width="40" height="40" fill="#FFF">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </button>
            {(showmenu && width < 850) && <>
              <div className={styles.background}/>
              <div className={styles.menu} ref={menuRef}>
                <div className={styles.title}>
                  <div className={styles.m_left}>
                    <Image
                      src='/images/logo.svg'
                      alt='Gunter logo'
                      width={60}
                      height={60}
                    />
                    <h1>GUNTER</h1>
                  </div>
                  <div className={styles.m_right}>
                    <div className={styles.x_container} onClick={() => setShowmenu(false)}>
                    </div>
                  </div>
                </div>
                <hr />
                <ul className={styles.list}>
                  <ActiveLink href={{ pathname: '/beta' }} activeClassName={styles.selected} className={styles.link} ><li className={styles.li} onClick={() => setShowmenu(false)}><div>Join the beta</div></li></ActiveLink>
                  <ActiveLink href={{ pathname: '/support' }} activeClassName={styles.selected} className={styles.link}><li className={styles.li} onClick={() => setShowmenu(false)}><div>Support</div></li></ActiveLink>
                  <ActiveLink href={{ pathname: '/bug-report' }} activeClassName={styles.selected} className={styles.link}><li className={styles.li} onClick={() => setShowmenu(false)}><div>Bug report</div></li></ActiveLink>
                </ul>
              </div>
            </>}
          </div>
*/
