import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './styles/Home.module.scss';

let Globe = () => null;
// eslint-disable-next-line global-require
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;

export default function Home({ children }) {
  const router = useRouter();
  const globeEl = useRef(null);
  const size = useWindowSize();

  useEffect(() => {
    console.log(router);

    let to;
    (function check() {
      if (globeEl.current) {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 3;
        globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 1.8 });
        globeEl.current.controls().enableZoom = false;
      } else {
        to = setTimeout(check, 1000);
      }
    }());
    return () => {
      if (to) {
        clearTimeout(to);
      }
    };
  }, []);

  return (<>
    <h1 className={styles.title}>IL MONDO UTOPICO</h1>
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      backgroundColor='black'
      width={size.width}
      height={500}
    />
  </>
  );
}
