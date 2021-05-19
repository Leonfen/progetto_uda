/* eslint-disable no-param-reassign */
import React from 'react';
import clsx from 'clsx';
import { useSpring, animated } from 'react-spring';
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
    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>SCIENZE</h2>
          <p>Un modo nuovo per scoprire come il mondo possa evolversi senza danneggiare l&apos;ambiente.</p>
        </div>
      </div>
    </section>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_2)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>RICICLIAMO INSIEME LA PLASTICA</h1>
      </animated.div>
    </section>

    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>STORIA</h2>
          <p>Scoprire come i diritti possano creare un mondo migliore.</p>
        </div>
      </div>
    </section>

    <section className={clsx(styles.module, styles.parallax, styles.parallax_3)}>
      <animated.div className={styles.container} style={transfrom}>
        <h1>L&apos;INQUINAMENTO E&apos; UNA COSA BRUTTA</h1>
      </animated.div>
    </section>
    <section className={clsx(styles.module, styles.content)}>
      <div className={styles.allContainer}>
        <div className={styles.container}>
          <h2>RELIGIONE</h2>
          <p>La pace porterà sempre alla soluzione più difficile, ma anche a quella più bella.</p>
        </div>
        <div className={styles.container}>
          <h2>RELIGIONE</h2>
          <p>La pace porterà sempre alla soluzione più difficile, ma anche a quella più bella.</p>
        </div>
      </div>
    </section>
  </>
  );
}
