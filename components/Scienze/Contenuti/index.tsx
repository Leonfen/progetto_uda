/* eslint-disable no-param-reassign */
import React from 'react';
import clsx from 'clsx';
import { useSpring, animated } from 'react-spring';
import Carousel from 'components/Carousel';
import styles from './styles/Contenuti.module.scss';

export default function Home() {
  const transfrom = useSpring({
    loop: { reverse: false },
    from: { x: -1000 },
    to: { x: 0 },
  });
  return (<>
    <section className={clsx(styles.module, styles.parallax, styles.parallax_1)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>SALVIAMO IL NOSTRO PIANETA</h1>
      </animated.div>
    </section>
    <Carousel id={['scienze1', 'scienze2', 'scienze3']} title={['primo', 'secondo', 'terzo']} description={['prima descrizione', 'seconda descrizione', 'terza descrizione']} link={'scienze'} buttonDescription={'salve bella ragazza'} argument='ciao'/>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_2)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>RICICLIAMO INSIEME LA PLASTICA</h1>
      </animated.div>
    </section>

    <Carousel id={['scienze1', 'scienze2', 'scienze3']} title={['primo', 'secondo', 'terzo']} description={['prima descrizione', 'seconda descrizione', 'terza descrizione']} link={'scienze'} buttonDescription={'salve bella ragazza'} argument='ciao'/>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_3)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>L&apos;INQUINAMENTO E&apos; UNA COSA BRUTTA</h1>
      </animated.div>
    </section>
    <Carousel id={['scienze1', 'scienze2', 'scienze3']} title={['primo', 'secondo', 'terzo']} description={['prima descrizione', 'seconda descrizione', 'terza descrizione']} link={'scienze'} buttonDescription={'salve bella ragazza'} argument='ciao'/>

  </>
  );
}
